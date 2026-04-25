import { formatBnDate } from '@/src/lib/utils';
import { Hospital, Beaker, MapPin, Trash2, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { translations, Language } from '@/src/lib/translations';
import { db, handleFirestoreError, OperationType } from '@/src/lib/firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import { useState } from 'react';

interface Donation {
  id: string;
  hospital: string;
  date: string;
  quantity: number;
  notes?: string;
}

interface DonationListProps {
  donations: Donation[];
  lang: Language;
}

export function DonationList({ donations, lang }: DonationListProps) {
  const [deleting, setDeleting] = useState<string | null>(null);
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const t = translations[lang];

  const handleDelete = async (id: string) => {
    setDeleting(id);
    setConfirmId(null);
    try {
      await deleteDoc(doc(db, 'donations', id));
    } catch (err) {
      console.error("Delete Error:", err);
      handleFirestoreError(err, OperationType.DELETE, `donations/${id}`);
    } finally {
      setDeleting(null);
    }
  };

  if (donations.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center text-slate-400">
        <Hospital className="w-12 h-12 mb-4 opacity-20" />
        <p>{t.no_record}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-24 pr-4">
      {donations.map((donation, index) => (
        <motion.div 
          key={donation.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
          className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 relative group"
        >
          <div className="p-3 bg-red-50 text-red-600 rounded-2xl">
            <Beaker className="w-6 h-6" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1">
              <h3 className="font-bold text-slate-900 truncate">{donation.hospital}</h3>
              <div className="flex items-center gap-2">
                {confirmId === donation.id ? (
                  <div className="flex items-center gap-2 animate-in fade-in slide-in-from-right-2 duration-200">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setConfirmId(null);
                      }}
                      className="px-2 py-1 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-700 bg-slate-50 rounded-lg transition-colors"
                    >
                      {lang === 'bn' ? 'না' : 'No'}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(donation.id);
                      }}
                      disabled={deleting === donation.id}
                      className="px-2 py-1 text-[10px] font-black uppercase tracking-widest bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-1"
                    >
                      {deleting === donation.id && <Loader2 className="w-3 h-3 animate-spin" />}
                      {lang === 'bn' ? 'হ্যাঁ' : 'Yes'}
                    </button>
                  </div>
                ) : (
                  <>
                    <span className="text-[10px] font-black text-red-600 uppercase tracking-widest bg-red-50 px-2 py-1 rounded-lg shrink-0">
                      {donation.quantity} {t.bags}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setConfirmId(donation.id);
                      }}
                      disabled={deleting === donation.id}
                      className="relative z-10 p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all active:scale-95 flex items-center justify-center disabled:opacity-50"
                      title={t.delete}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3" />
                <span>{formatBnDate(donation.date, 'PPPP')}</span>
              </div>
            </div>

            {donation.notes && (
              <p className="mt-3 text-xs text-slate-500 italic bg-slate-50 p-3 rounded-xl border border-slate-100/50">
                "{donation.notes}"
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
