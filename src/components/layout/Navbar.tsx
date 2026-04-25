import React from 'react';
import { auth } from '@/src/lib/firebase';
import { Droplets, User, Home, Stethoscope, Languages, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { translations, Language } from '@/src/lib/translations';

interface NavbarProps {
  onNavigate: (view: 'dashboard' | 'profile' | 'medical') => void;
  onAddClick?: () => void;
  activeView: string;
  lang: Language;
  setLang: (lang: Language) => void;
  userData: any;
}

export function Navbar({ onNavigate, onAddClick, activeView, lang, setLang, userData }: NavbarProps) {
  const t = translations[lang];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-2xl border-t border-slate-200/50 px-6 py-3 md:top-0 md:bottom-auto md:border-t-0 md:border-b md:px-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Desktop Branding */}
        <div className="hidden md:flex items-center gap-4 cursor-pointer group" onClick={() => onNavigate('dashboard')}>
          <div className="w-11 h-11 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:scale-105 transition-transform duration-300">
            <Droplets className="w-6 h-6 text-white fill-current" />
          </div>
          <div>
            <h1 className="text-xl font-black text-slate-900 leading-none tracking-tight">{t.app_name}</h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black mt-1.5 opacity-80">{t.slogan}</p>
          </div>
        </div>

        {/* Nav Items */}
        <div className="flex flex-1 justify-around md:flex-initial md:gap-10">
          <NavItem 
            icon={<Home className="w-5 h-5" />} 
            label={t.home} 
            isActive={activeView === 'dashboard'} 
            onClick={() => onNavigate('dashboard')} 
          />
          <NavItem 
            icon={<Stethoscope className="w-5 h-5" />} 
            label={t.medical_list} 
            isActive={activeView === 'medical'} 
            onClick={() => onNavigate('medical')} 
          />
          <NavItem 
            icon={<User className="w-5 h-5" />} 
            label={t.profile} 
            isActive={activeView === 'profile'} 
            onClick={() => onNavigate('profile')} 
          />
        </div>

        {/* Actions (Desktop Only) */}
        <div className="hidden md:flex items-center gap-8 border-l border-slate-200/50 pl-8 ml-8">
          <button 
            onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')}
            className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-100/50 rounded-2xl transition-all text-slate-700 font-black text-xs uppercase tracking-widest"
          >
            <Languages className="w-4 h-4 text-red-600" />
            {lang === 'bn' ? 'English' : 'বাংলা'}
          </button>
          
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => onNavigate('profile')}>
            <div className="text-right">
              <p className="text-sm font-black text-slate-900 group-hover:text-red-600 transition-colors">{userData?.name || t.guest}</p>
              <div className="inline-flex items-center px-2 py-0.5 bg-red-50 rounded-md mt-0.5">
                <span className="text-[10px] text-red-600 font-black uppercase tracking-tighter">{userData?.bloodGroup || '??'}</span>
              </div>
            </div>
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-white border-2 border-slate-100 overflow-hidden group-hover:border-red-500 transition-all shadow-md group-active:scale-95 duration-300">
                {auth.currentUser?.photoURL ? (
                  <img src={auth.currentUser.photoURL} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-50 text-slate-400 font-black text-lg">
                    {auth.currentUser?.email?.charAt(0).toUpperCase() || <User className="w-5 h-5" />}
                  </div>
                )}
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full shadow-sm" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ icon, label, isActive, onClick }: { icon: React.ReactNode, label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1.5 transition-all relative md:flex-row md:gap-3 px-3 py-2 rounded-2xl group ${
        isActive ? 'text-red-600' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50/50'
      }`}
    >
      <div className={`${isActive ? 'scale-110' : 'group-hover:scale-110'} transition-transform duration-300`}>
        {icon}
      </div>
      <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.1em]">{label}</span>
      {isActive && (
        <motion.div 
          layoutId="nav-pill"
          className="absolute -bottom-1 md:bottom-2 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-right-1 w-1.5 h-1.5 bg-red-600 rounded-full shadow-[0_0_8px_rgba(220,38,38,0.5)]"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </button>
  );
}
