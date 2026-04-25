import React, { useState, useMemo } from 'react';
import { db, auth, handleFirestoreError, OperationType } from '@/src/lib/firebase';
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import { Plus, X, Hospital, Calendar as CalendarIcon, Beaker, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { translations, Language } from '@/src/lib/translations';
import { medicalData, divisions, getDistricts, getUpazilas } from '@/src/lib/medicalData';

interface DonationFormProps {
  onSuccess?: () => void;
  lang: Language;
}

export function DonationForm({ onSuccess, lang }: DonationFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [division, setDivision] = useState('');
  const [district, setDistrict] = useState('');
  const [upazila, setUpazila] = useState('');
  const [hospital, setHospital] = useState('');
  const [customHospital, setCustomHospital] = useState('');
  const [isOther, setIsOther] = useState(false);

  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');

  const t = translations[lang];

  const districts = useMemo(() => division ? getDistricts(division) : [], [division]);
  const upazilas = useMemo(() => district ? getUpazilas(district) : [], [district]);
  const hospitalsAtLocation = useMemo(() => {
    return medicalData.filter(h => 
      h.division === division && 
      h.district === district && 
      (upazila === '' || h.upazila === upazila)
    );
  }, [division, district, upazila]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser) return;

    const finalHospital = isOther ? customHospital : hospital;
    if (!finalHospital) return;

    setLoading(true);
    const path = 'donations';
    try {
      // Add donation record
      await addDoc(collection(db, path), {
        userId: auth.currentUser.uid,
        date: new Date(date).toISOString(),
        hospital: finalHospital,
        locationInfo: {
          division,
          district,
          upazila
        },
        quantity: Number(quantity),
        notes,
        createdAt: serverTimestamp(),
      });

      // Update user's last donation date
      const userRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(userRef, {
        lastDonationDate: new Date(date).toISOString(),
        updatedAt: serverTimestamp()
      });

      setIsOpen(false);
      resetForm();
      if (onSuccess) onSuccess();
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, path);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setDivision('');
    setDistrict('');
    setUpazila('');
    setHospital('');
    setCustomHospital('');
    setIsOther(false);
    setDate(new Date().toISOString().split('T')[0]);
    setQuantity(1);
    setNotes('');
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed right-6 bottom-24 md:bottom-8 z-40 bg-red-600 text-white p-4 rounded-2xl shadow-xl shadow-red-900/20 hover:bg-red-700 hover:scale-110 transition-all active:scale-95 group flex items-center gap-2"
        title={t.add_record}
      >
        <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform" />
        <span className="hidden group-hover:block font-bold text-sm pr-2 animate-in fade-in slide-in-from-left-2">{t.add_record}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-900/40 backdrop-blur-sm overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative my-auto"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <h2 className="text-xl font-bold text-slate-800">{t.new_donation}</h2>
                <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600 p-2">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
                {/* Location Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.division}</label>
                    <select
                      required
                      value={division}
                      onChange={(e) => {
                        setDivision(e.target.value);
                        setDistrict('');
                        setUpazila('');
                        setHospital('');
                      }}
                      className="w-full px-4 py-3 bg-slate-50 border border-transparent focus:bg-white focus:border-red-100 rounded-xl outline-none transition-all text-sm"
                    >
                      <option value="">{lang === 'bn' ? 'বিভাগ নির্বাচন করুন' : 'Select Division'}</option>
                      {divisions.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.district}</label>
                    <select
                      required
                      disabled={!division}
                      value={district}
                      onChange={(e) => {
                        setDistrict(e.target.value);
                        setUpazila('');
                        setHospital('');
                      }}
                      className="w-full px-4 py-3 bg-slate-50 border border-transparent focus:bg-white focus:border-red-100 rounded-xl outline-none transition-all text-sm disabled:opacity-50"
                    >
                      <option value="">{lang === 'bn' ? 'জেলা নির্বাচন করুন' : 'Select District'}</option>
                      {districts.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.upazila}</label>
                    <select
                      value={upazila}
                      disabled={!district}
                      onChange={(e) => {
                        setUpazila(e.target.value);
                        setHospital('');
                      }}
                      className="w-full px-4 py-3 bg-slate-50 border border-transparent focus:bg-white focus:border-red-100 rounded-xl outline-none transition-all text-sm disabled:opacity-50"
                    >
                      <option value="">{lang === 'bn' ? 'উপজেলা (ঐচ্ছিক)' : 'Upazila (Optional)'}</option>
                      {upazilas.map(u => <option key={u} value={u}>{u}</option>)}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.hospital_name}</label>
                    {isOther ? (
                      <div className="relative">
                        <Hospital className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-red-500" />
                        <input
                          required
                          type="text"
                          value={customHospital}
                          onChange={(e) => setCustomHospital(e.target.value)}
                          placeholder={lang === 'bn' ? 'হাসপাতালের নাম লিখুন' : 'Enter hospital name'}
                          className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-red-200 focus:bg-white rounded-xl outline-none transition-all text-sm"
                        />
                        <button 
                          type="button"
                          onClick={() => setIsOther(false)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-500"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <select
                        required
                        disabled={!district}
                        value={hospital}
                        onChange={(e) => {
                          if (e.target.value === 'other') {
                            setIsOther(true);
                            setHospital('');
                          } else {
                            setHospital(e.target.value);
                          }
                        }}
                        className="w-full px-4 py-3 bg-slate-50 border border-transparent focus:bg-white focus:border-red-100 rounded-xl outline-none transition-all text-sm disabled:opacity-50"
                      >
                        <option value="">{lang === 'bn' ? 'হাসপাতাল নির্বাচন করুন' : 'Select Hospital'}</option>
                        {hospitalsAtLocation.map(h => (
                          <option key={h.name} value={lang === 'bn' ? h.bnName : h.name}>
                            {lang === 'bn' ? h.bnName : h.name}
                          </option>
                        ))}
                        <option value="other" className="text-red-600 font-bold">+ {lang === 'bn' ? 'অন্যান্য (নাম লিখুন)' : 'Other (Type Name)'}</option>
                      </select>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.date}</label>
                    <div className="relative">
                      <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        required
                        type="date" 
                        value={date}
                        max={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-transparent focus:bg-white focus:border-red-100 rounded-xl outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.quantity}</label>
                    <div className="relative">
                      <Beaker className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        required
                        type="number" 
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-transparent focus:bg-white focus:border-red-100 rounded-xl outline-none transition-all text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.notes}</label>
                  <textarea 
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={lang === 'bn' ? 'কোনো বিশেষ তথ্য থাকলে লিখুন...' : 'Any special notes...'}
                    className="w-full p-4 bg-slate-50 border border-transparent focus:bg-white focus:border-red-100 rounded-xl outline-none transition-all h-20 resize-none text-sm placeholder:text-slate-300"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 text-white font-black py-4 rounded-2xl hover:bg-red-700 transition-all shadow-lg shadow-red-900/10 active:scale-95 disabled:opacity-50 uppercase tracking-widest text-xs"
                >
                  {loading ? t.saving : t.save}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
