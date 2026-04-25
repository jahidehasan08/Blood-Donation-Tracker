import React, { useState } from 'react';
import { auth } from '@/src/lib/firebase';
import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from 'firebase/auth';
import { Droplets, Heart, Mail, Lock, Languages, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { translations, Language } from '@/src/lib/translations';

interface AuthProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export function Auth({ lang, setLang }: AuthProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const t = translations[lang];

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err: any) {
      console.error(err);
      setError(t.login_failed);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(t.reset_email_sent);
      setTimeout(() => setIsForgotPassword(false), 3000);
    } catch (err: any) {
      console.error(err);
      setError(t.login_failed);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (isSignUp && password !== confirmPassword) {
      setError(t.password_mismatch);
      setLoading(false);
      return;
    }

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err: any) {
      console.error(err);
      setError(isSignUp ? t.signup_failed : t.login_failed);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 bg-[radial-gradient(circle_at_50%_120%,rgba(220,38,38,0.05),transparent)]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 text-center border border-slate-100"
      >
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')}
            className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-red-600 transition-colors bg-slate-50 px-3 py-1.5 rounded-full"
          >
            <Languages className="w-3.5 h-3.5" />
            {t.switch_lang}
          </button>
          <div className="inline-flex p-3 bg-red-50 rounded-xl text-red-600">
            <Droplets className="w-6 h-6 fill-current" />
          </div>
          <div className="w-20"></div> {/* Spacer for alignment */}
        </div>
        
        <h1 className="text-2xl font-black text-slate-800 mb-1">{t.app_name}</h1>
        <p className="text-sm text-slate-500 mb-8 font-medium">
          {t.slogan}
        </p>

        {error && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-red-50 text-red-600 text-[11px] font-bold p-3 rounded-xl mb-6 border border-red-100 italic"
          >
            {error}
          </motion.div>
        )}

        {success && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 text-green-600 text-[11px] font-bold p-3 rounded-xl mb-6 border border-green-100 italic"
          >
            {success}
          </motion.div>
        )}

        <form onSubmit={isForgotPassword ? handleForgotPassword : handleEmailAuth} className="space-y-4 mb-6">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="email"
              placeholder={t.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-transparent focus:bg-white focus:border-red-100 rounded-xl outline-none transition-all text-sm placeholder:text-slate-300"
            />
          </div>
          
          {!isForgotPassword && (
            <>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder={t.password}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-11 pr-12 py-3 bg-slate-50 border border-transparent focus:bg-white focus:border-red-100 rounded-xl outline-none transition-all text-sm placeholder:text-slate-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-500"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {isSignUp && (
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type={showPassword ? "text" : "password"}
                    placeholder={t.confirm_password}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full pl-11 pr-12 py-3 bg-slate-50 border border-transparent focus:bg-white focus:border-red-100 rounded-xl outline-none transition-all text-sm placeholder:text-slate-300"
                  />
                </div>
              )}
            </>
          )}

          <button 
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-black transition-all active:scale-95 disabled:opacity-50 shadow-lg shadow-slate-200"
          >
            {loading ? '...' : (isForgotPassword ? t.reset_password : (isSignUp ? t.signup_with_email : t.login_with_email))}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {!isForgotPassword && !isSignUp && (
          <button 
            onClick={() => setIsForgotPassword(true)}
            className="mb-4 text-xs font-bold text-red-600/70 hover:text-red-600 transition-colors"
          >
            {t.forgot_password}
          </button>
        )}

        {isForgotPassword && (
          <button 
            onClick={() => setIsForgotPassword(false)}
            className="mb-4 text-xs font-bold text-slate-400 hover:text-red-600 transition-colors"
          >
            {t.has_account}
          </button>
        )}

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-100"></div>
          </div>
          <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest">
            <span className="bg-white px-3 text-slate-400">OR</span>
          </div>
        </div>

        <button 
          onClick={handleGoogleSignIn}
          disabled={loading}
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 font-bold py-3 rounded-xl hover:bg-slate-50 transition-all shadow-sm active:scale-95 disabled:opacity-50 text-sm"
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
          {t.login_with_google}
        </button>

        <button 
          onClick={() => {
            setIsSignUp(!isSignUp);
            setIsForgotPassword(false);
          }}
          className="mt-6 text-xs font-bold text-slate-400 hover:text-red-600 transition-colors"
        >
          {isSignUp ? t.has_account : t.no_account}
        </button>

        <div className="mt-8 flex items-center justify-center gap-2 text-red-500 opacity-20">
          <Heart className="w-4 h-4 fill-current" />
          <span className="text-[10px] uppercase tracking-widest font-black italic">Save Lives</span>
        </div>
      </motion.div>
    </div>
  );
}
