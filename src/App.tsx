/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { auth, db, handleFirestoreError, OperationType } from './lib/firebase';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { collection, query, where, orderBy, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { Auth } from './components/auth/Auth';
import { Navbar } from './components/layout/Navbar';
import { DonationSummary } from './components/dashboard/DonationSummary';
import { DonationForm } from './components/donations/DonationForm';
import { DonationList } from './components/donations/DonationList';
import { ProfileForm } from './components/profile/ProfileForm';
import { MedicalList } from './components/medical/MedicalList';
import { Droplets, Loader2, Info, Languages, Stethoscope, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { translations, Language } from './lib/translations';

export default function App() {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<any>(null);
  const [donations, setDonations] = useState<any[]>([]);
  const [view, setView] = useState<'dashboard' | 'profile' | 'medical'>('dashboard');
  const [isNewUser, setIsNewUser] = useState(false);
  const [lang, setLang] = useState<Language>('bn');

  const t = translations[lang];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        if (!userDoc.exists()) {
          setIsNewUser(true);
          setView('profile');
        } else {
          setUserData(userDoc.data());
          setIsNewUser(false);
        }
      } else {
        setUserData(null);
        setDonations([]);
        setView('dashboard');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    const unsubUser = onSnapshot(doc(db, 'users', user.uid), (snapshot) => {
      if (snapshot.exists()) {
        setUserData(snapshot.data());
      }
    }, (err) => handleFirestoreError(err, OperationType.GET, `users/${user.uid}`));

    const donationsQuery = query(
      collection(db, 'donations'),
      where('userId', '==', user.uid),
      orderBy('date', 'desc')
    );

    const unsubDonations = onSnapshot(donationsQuery, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDonations(data);
    }, (err) => handleFirestoreError(err, OperationType.LIST, 'donations'));

    return () => {
      unsubUser();
      unsubDonations();
    };
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-8 h-8 text-red-600 animate-spin" />
        <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] italic">Loading...</span>
      </div>
    );
  }

  if (!user) {
    return <Auth lang={lang} setLang={setLang} />;
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-red-100 selection:text-red-900 overflow-x-hidden relative">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-red-500/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 px-6 py-4 flex justify-between items-center md:hidden shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-600/20">
            <Droplets className="h-6 w-6 text-white fill-current" />
          </div>
          <div className="hidden sm:block text-left">
            <h1 className="text-lg md:text-xl font-bold text-slate-800 leading-none">{t.app_name}</h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-0.5">{t.slogan}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <button 
            onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-900"
            title="Switch Language"
          >
            <Languages className="w-5 h-5" />
          </button>
          <div className="text-right">
            <p className="text-sm font-bold text-slate-800 truncate max-w-[120px]">{userData?.name || t.guest}</p>
            <p className="text-[10px] text-red-600 font-bold uppercase tracking-tighter">
              {donations.length > 0 ? `${donations.length} ${t.contributions}` : t.donor_type_new}
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-200 border border-slate-200 overflow-hidden shadow-inner">
            {user?.photoURL ? <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold">{user.email?.charAt(0).toUpperCase()}</div>}
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full px-6 pt-24 pb-32 md:pt-12 md:pb-16 relative z-10">
        <AnimatePresence mode="wait">
          {view === 'dashboard' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-12">
                <DonationSummary 
                  lastDonationDate={userData?.lastDonationDate || null} 
                  gender={userData?.gender || 'male'} 
                  bloodGroup={userData?.bloodGroup || '?'}
                  userName={userData?.name || t.guest}
                  totalDonations={donations.length}
                  lang={lang}
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Droplets className="w-5 h-5 text-red-600" />
                {t.history_title}
              </h2>
              <DonationList donations={donations} lang={lang} />
            </div>
          </div>
        )}

        {view === 'profile' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">{t.profile_title}</h2>
            <ProfileForm onComplete={() => {
              setIsNewUser(false);
              setView('dashboard');
            }} lang={lang} />
          </div>
        )}

        {view === 'medical' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <Stethoscope className="w-8 h-8 text-red-600" />
              {t.medical_list}
            </h2>
            <MedicalList lang={lang} />
          </div>
        )}
        </AnimatePresence>
      </main>

      <Navbar 
        activeView={view} 
        onNavigate={(v) => setView(v as any)} 
        lang={lang} 
        setLang={setLang}
        userData={userData}
      />

      <DonationForm onSuccess={() => {}} lang={lang} />
    </div>
  );
}
