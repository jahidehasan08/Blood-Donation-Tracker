import React, { useState, useEffect } from 'react';
import { db, auth, handleFirestoreError, OperationType } from '@/src/lib/firebase';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { updatePassword, EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import { User, Scale, Droplet, UserCircle, Lock, Eye, EyeOff, ShieldCheck, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { translations, Language } from '@/src/lib/translations';

interface ProfileFormProps {
  onComplete: () => void;
  lang: Language;
}

export function ProfileForm({ onComplete, lang }: ProfileFormProps) {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [isNewUser, setIsNewUser] = useState(false);
  const [name, setName] = useState(auth.currentUser?.displayName || '');
  const [bloodGroup, setBloodGroup] = useState('');
  const [weight, setWeight] = useState(60);
  const [gender, setGender] = useState('male');
  
  // Password change state
  const [showPasswordSection, setShowPasswordSection] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [pwdLoading, setPwdLoading] = useState(false);
  const [pwdError, setPwdError] = useState<string | null>(null);
  const [pwdSuccess, setPwdSuccess] = useState<string | null>(null);

  const t = translations[lang];

  useEffect(() => {
    async function fetchProfile() {
      if (!auth.currentUser) return;
      try {
        const docRef = doc(db, 'users', auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setName(data.name || '');
          setBloodGroup(data.bloodGroup || '');
          setWeight(data.weight || 60);
          setGender(data.gender || 'male');
          setIsNewUser(false);
        } else {
          setIsNewUser(true);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setFetching(false);
      }
    }
    fetchProfile();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser) return;

    setLoading(true);
    const path = `users/${auth.currentUser.uid}`;
    try {
      const data: any = {
        name,
        bloodGroup,
        weight: Number(weight),
        gender,
        updatedAt: serverTimestamp(),
      };

      if (isNewUser) {
        data.createdAt = serverTimestamp();
      }

      await setDoc(doc(db, 'users', auth.currentUser.uid), data, { merge: true });
      onComplete();
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, path);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser || !auth.currentUser.email) return;
    
    if (newPassword !== confirmNewPassword) {
      setPwdError(t.password_mismatch);
      return;
    }

    setPwdLoading(true);
    setPwdError(null);
    setPwdSuccess(null);

    try {
      // Re-authenticate user
      const credential = EmailAuthProvider.credential(auth.currentUser.email, currentPassword);
      await reauthenticateWithCredential(auth.currentUser, credential);
      
      // Update password
      await updatePassword(auth.currentUser, newPassword);
      setPwdSuccess(t.reset_email_sent);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
      setTimeout(() => setShowPasswordSection(false), 3000);
    } catch (err: any) {
      console.error(err);
      setPwdError(t.login_failed);
    } finally {
      setPwdLoading(false);
    }
  };

  if (fetching && !auth.currentUser?.uid) return null;

  return (
    <div className="max-w-md mx-auto py-8 space-y-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 mb-4 border-4 border-white shadow-sm overflow-hidden ring-1 ring-slate-100">
            {auth.currentUser?.photoURL ? (
              <img src={auth.currentUser.photoURL} alt={name} className="w-full h-full object-cover" />
            ) : (
              <UserCircle className="w-12 h-12" />
            )}
          </div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">{t.profile_info}</h2>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1 italic">{t.profile_prompt}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 italic">
              <User className="w-3 h-3" /> {t.name}
            </label>
            <input 
              required
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-transparent focus:bg-white focus:border-red-100 rounded-xl outline-none transition-all placeholder:text-slate-300"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 italic">
                <Droplet className="w-3 h-3" /> {t.blood_group}
              </label>
              <select 
                required
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-transparent focus:bg-white focus:border-red-100 rounded-xl outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="">{lang === 'bn' ? 'নির্বাচন করুন' : 'Select'}</option>
                {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(group => (
                  <option key={group} value={group}>{group}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 italic">
                <Scale className="w-3 h-3" /> {t.weight}
              </label>
              <input 
                required
                type="number" 
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full px-4 py-3 bg-slate-50 border border-transparent focus:bg-white focus:border-red-100 rounded-xl outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">{t.gender}</label>
            <div className="grid grid-cols-3 gap-3">
              {['male', 'female', 'other'].map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGender(g)}
                  className={`py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    gender === g 
                    ? 'bg-red-600 text-white shadow-lg shadow-red-900/10' 
                    : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600'
                  }`}
                >
                  {g === 'male' ? t.male : g === 'female' ? t.female : t.other}
                </button>
              ))}
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 text-white font-black py-4 rounded-2xl hover:bg-black transition-all active:scale-95 disabled:opacity-50 mt-4 shadow-lg shadow-slate-200"
          >
            {loading ? t.saving : t.save}
          </button>
        </form>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50"
      >
        <button 
          onClick={() => setShowPasswordSection(!showPasswordSection)}
          className="w-full flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-50 rounded-lg text-slate-400 group-hover:text-red-500 transition-colors">
              <Lock className="w-4 h-4" />
            </div>
            <span className="font-bold text-slate-800">{t.change_password}</span>
          </div>
          <motion.div 
            animate={{ rotate: showPasswordSection ? 180 : 0 }}
            className="text-slate-300"
          >
            <Droplet className="w-3 h-3 fill-current rotate-180" />
          </motion.div>
        </button>

        <AnimatePresence>
          {showPasswordSection && (
            <motion.form 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              onSubmit={handleChangePassword}
              className="mt-6 space-y-4 overflow-hidden"
            >
              {pwdError && (
                <div className="bg-red-50 text-red-600 text-[10px] font-bold p-3 rounded-xl border border-red-100">
                  {pwdError}
                </div>
              )}
              {pwdSuccess && (
                <div className="bg-green-50 text-green-600 text-[10px] font-bold p-3 rounded-xl border border-green-100">
                  {pwdSuccess}
                </div>
              )}

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">{t.password}</label>
                <div className="relative">
                  <input 
                    type={showPwd ? "text" : "password"}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-transparent focus:bg-white focus:border-red-100 rounded-xl outline-none transition-all text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd(!showPwd)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  >
                    {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">{t.new_password}</label>
                <input 
                  type={showPwd ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-transparent focus:bg-white focus:border-red-100 rounded-xl outline-none transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">{t.confirm_password}</label>
                <input 
                  type={showPwd ? "text" : "password"}
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-transparent focus:bg-white focus:border-red-100 rounded-xl outline-none transition-all text-sm"
                />
              </div>

              <button 
                type="submit"
                disabled={pwdLoading}
                className="w-full bg-red-600 text-white font-black py-3 rounded-xl hover:bg-red-700 transition-all active:scale-95 disabled:opacity-50 shadow-lg shadow-red-900/10 flex items-center justify-center gap-2"
              >
                {pwdLoading ? '...' : t.change_password}
                <ShieldCheck className="w-4 h-4" />
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.button 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => auth.signOut()}
        className="w-full bg-white text-red-600 font-black py-4 rounded-3xl border border-red-50 hover:bg-red-50 transition-all active:scale-95 shadow-xl shadow-red-900/5 flex items-center justify-center gap-3"
      >
        <LogOut className="w-5 h-5" />
        {t.logout}
      </motion.button>
    </div>
  );
}
