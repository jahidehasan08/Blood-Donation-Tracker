import { getDaysUntilNextDonation, getProgressToNextDonation, formatBnDate, getNextDonationDate } from '@/src/lib/utils';
import { motion } from 'motion/react';
import { Calendar, User, Heart } from 'lucide-react';
import { translations, Language } from '@/src/lib/translations';

interface DonationSummaryProps {
  lastDonationDate: string | null;
  gender: string;
  bloodGroup: string;
  userName: string;
  totalDonations: number;
  lang: Language;
}

export function DonationSummary({ lastDonationDate, gender, bloodGroup, userName, totalDonations, lang }: DonationSummaryProps) {
  const t = translations[lang];

  if (!lastDonationDate) {
    return (
      <div className="bg-white rounded-2xl p-12 border border-slate-200 shadow-sm text-center">
        <Heart className="w-16 h-16 text-red-100 mx-auto mb-4 animate-pulse" />
        <h2 className="text-xl font-bold text-slate-800 mb-2">{t.no_record}</h2>
        <p className="text-slate-500 max-w-xs mx-auto">{t.first_donation_prompt}</p>
      </div>
    );
  }

  const daysLeft = getDaysUntilNextDonation(lastDonationDate, gender);
  const progress = getProgressToNextDonation(lastDonationDate, gender);
  const nextDate = getNextDonationDate(lastDonationDate, gender);
  
  // SVG Circle calculations
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Countdown Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col items-center text-center">
        <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 italic">{t.next_donation}</h2>
        
        <div className="relative w-48 h-48 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle 
              cx="96" cy="96" r={radius} 
              stroke="currentColor" strokeWidth="8" fill="transparent" 
              className="text-slate-100" 
            />
            <motion.circle 
              cx="96" cy="96" r={radius} 
              stroke="currentColor" strokeWidth="8" fill="transparent" 
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-red-600" 
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-5xl font-black text-slate-800"
            >
              {daysLeft}
            </motion.span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{t.days_left}</span>
          </div>
        </div>
        
        <p className="mt-6 text-sm text-slate-600 font-bold">
          {t.possible_date}: <span className="text-slate-900">{formatBnDate(nextDate)}</span>
        </p>
      </div>

      {/* Digital Donor Card */}
      <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden flex flex-col justify-between min-h-[320px]">
        <div className="absolute -right-8 -top-8 opacity-10">
          <Heart className="w-48 h-48 fill-current" />
        </div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-80 font-bold italic">{t.donor_card_digital}</p>
              <h3 className="text-2xl font-black mt-1 tracking-tight">{userName}</h3>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black ring-1 ring-white/30">
              {bloodGroup} Positive
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-1">
              <p className="text-[10px] uppercase opacity-70 font-bold flex items-center gap-1.5">
                <Calendar className="w-3 h-3" /> {t.last_donation}
              </p>
              <p className="text-base font-bold">{formatBnDate(lastDonationDate)}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase opacity-70 font-bold flex items-center gap-1.5">
                <User className="w-3 h-3" /> {t.total_donation}
              </p>
              <p className="text-base font-bold">{totalDonations} {t.contributions}</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 pt-8 border-t border-white/10 mt-auto">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[8px] uppercase tracking-[0.2em] font-black opacity-60">{t.verified_donor}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
