import React, { useState, useMemo } from 'react';
import { Search, MapPin, Phone, ExternalLink, Building2, ChevronRight, Filter } from 'lucide-react';
import { translations, Language } from '@/src/lib/translations';
import { medicalData, divisions, getDistricts, getUpazilas } from '@/src/lib/medicalData';
import { motion, AnimatePresence } from 'motion/react';

interface MedicalListProps {
  lang: Language;
}

export function MedicalList({ lang }: MedicalListProps) {
  const t = translations[lang];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedUpazila, setSelectedUpazila] = useState('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [showFilters, setShowFilters] = useState(false);

  const districts = useMemo(() => selectedDivision ? getDistricts(selectedDivision) : [], [selectedDivision]);
  const upazilas = useMemo(() => selectedDistrict ? getUpazilas(selectedDistrict) : [], [selectedDistrict]);

  const filteredHospitals = useMemo(() => {
    return medicalData.filter(hospital => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = 
        hospital.name.toLowerCase().includes(searchLower) ||
        hospital.bnName.includes(searchTerm) ||
        hospital.district.toLowerCase().includes(searchLower) ||
        hospital.upazila.toLowerCase().includes(searchLower);
      
      const matchesDivision = !selectedDivision || hospital.division === selectedDivision;
      const matchesDistrict = !selectedDistrict || hospital.district === selectedDistrict;
      const matchesUpazila = !selectedUpazila || hospital.upazila === selectedUpazila;
      const matchesType = !selectedType || hospital.type === selectedType;

      return matchesSearch && matchesDivision && matchesDistrict && matchesUpazila && matchesType;
    });
  }, [searchTerm, selectedDivision, selectedDistrict, selectedUpazila, selectedType]);

  const getBadges = (hospital: any) => {
    const isDiagnostic = hospital.name.toLowerCase().includes('diagnostic') || hospital.bnName.includes('ডায়াগনস্টিক');
    const isClinic = hospital.name.toLowerCase().includes('clinic') || hospital.bnName.includes('ক্লিনিক');
    const isBloodBank = hospital.name.toLowerCase().includes('blood') || hospital.bnName.includes('ব্লাড');
    
    return { isDiagnostic, isClinic, isBloodBank };
  };

  return (
    <div className="space-y-8 pb-24">
      <div className="flex flex-col gap-6">
        <div className="relative group">
          <div className="absolute inset-0 bg-red-500/5 blur-2xl group-focus-within:bg-red-500/10 transition-colors rounded-full" />
          <div className="relative flex items-center">
            <Search className="absolute left-6 w-6 h-6 text-slate-400 group-focus-within:text-red-600 transition-colors" />
            <input
              type="text"
              placeholder={t.search_hospital}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-20 py-6 bg-white border-2 border-slate-100 rounded-[2rem] shadow-xl shadow-slate-100/50 focus:ring-4 focus:ring-red-500/5 focus:border-red-500/20 outline-none transition-all font-medium text-lg placeholder:text-slate-300"
            />
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`absolute right-6 p-3 rounded-2xl transition-all duration-300 ${
                showFilters ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 rotate-180' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
              }`}
            >
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -20 }}
              animate={{ height: 'auto', opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -20 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 overflow-hidden pt-2"
            >
              <FilterSelect
                value={selectedDivision}
                onChange={(v) => {
                  setSelectedDivision(v);
                  setSelectedDistrict('');
                  setSelectedUpazila('');
                }}
                options={divisions}
                placeholder={t.all_divisions}
              />

              <FilterSelect
                value={selectedDistrict}
                onChange={(v) => {
                  setSelectedDistrict(v);
                  setSelectedUpazila('');
                }}
                options={districts}
                placeholder={t.all_districts}
                disabled={!selectedDivision}
              />

              <FilterSelect
                value={selectedUpazila}
                onChange={setSelectedUpazila}
                options={upazilas}
                placeholder={t.all_upazilas}
                disabled={!selectedDistrict}
              />

              <FilterSelect
                value={selectedType}
                onChange={setSelectedType}
                options={[
                  { label: lang === 'bn' ? 'সব ধরণের' : 'All Types', value: '' },
                  { label: lang === 'bn' ? 'সরকারি' : 'Government', value: 'Govt' },
                  { label: lang === 'bn' ? 'বেসরকারি' : 'Private', value: 'Private' }
                ]}
                placeholder={lang === 'bn' ? 'সংস্থা' : 'Entity Type'}
                isCustom
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredHospitals.map((hospital, idx) => {
            const { isDiagnostic, isClinic, isBloodBank } = getBadges(hospital);
            return (
              <motion.div
                key={hospital.name + idx}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="group bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-red-500/5 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden"
              >
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[4rem] group-hover:bg-red-50/50 transition-colors duration-500 -z-0" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl sm:rounded-3xl flex items-center justify-center transition-all duration-500 shadow-sm border border-slate-50 ${
                        isBloodBank ? 'bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white' :
                        hospital.type === 'Govt' ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' :
                        'bg-slate-50 text-slate-600 group-hover:bg-slate-900 group-hover:text-white'
                      }`}>
                        <Building2 className="w-7 h-7 sm:w-8 sm:h-8" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-black text-lg sm:text-xl text-slate-900 leading-tight group-hover:text-red-600 transition-colors duration-300 break-words">
                          {lang === 'bn' ? hospital.bnName : hospital.name}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                          <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border shadow-sm ${
                            hospital.type === 'Govt' ? 'bg-blue-50/50 border-blue-100 text-blue-700' : 'bg-purple-50/50 border-purple-100 text-purple-700'
                          }`}>
                            {hospital.type === 'Govt' ? (lang === 'bn' ? 'সরকারি' : 'Govt') : (lang === 'bn' ? 'বেসরকারি' : 'Private')}
                          </span>
                          {isDiagnostic && (
                            <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-amber-50/50 border border-amber-100 text-amber-700 shadow-sm">
                              {lang === 'bn' ? 'ডায়াগনস্টিক' : 'Diagnostic'}
                            </span>
                          )}
                          {isBloodBank && (
                            <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-red-50/50 border border-red-100 text-red-700 shadow-sm animate-pulse">
                              {lang === 'bn' ? 'ব্লাড ট্রান্সফিউশন' : 'Blood Center'}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-slate-500">
                      <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-white transition-colors">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-black text-slate-400 uppercase tracking-widest">
                        {hospital.upazila}, {hospital.district}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <ActionLink
                      href={`tel:${hospital.contact}`}
                      icon={<Phone className="w-5 h-5" />}
                      label={t.contact}
                      variant="slate"
                    />
                    <ActionLink
                      href={hospital.location}
                      icon={<ExternalLink className="w-5 h-5" />}
                      label={t.location}
                      variant="primary"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {filteredHospitals.length === 0 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-24 bg-white rounded-[3rem] border-4 border-dashed border-slate-100"
        >
          <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-200">
            <Search className="w-10 h-10" />
          </div>
          <h4 className="text-xl font-black text-slate-400 uppercase tracking-widest">{t.no_record}</h4>
          <p className="text-slate-300 mt-2 font-medium">Try adjusting your filters or search term</p>
        </motion.div>
      )}
    </div>
  );
}

function FilterSelect({ value, onChange, options, placeholder, disabled, isCustom }: { 
  value: string, 
  onChange: (v: string) => void, 
  options: any[], 
  placeholder: string,
  disabled?: boolean,
  isCustom?: boolean
}) {
  return (
    <div className="relative group">
      <select
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl outline-none focus:border-red-500/20 focus:ring-4 focus:ring-red-500/5 transition-all appearance-none font-bold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm group-hover:border-slate-200"
      >
        {!isCustom && <option value="">{placeholder}</option>}
        {options.map(opt => (
          <option key={typeof opt === 'string' ? opt : opt.value} value={typeof opt === 'string' ? opt : opt.value}>
            {typeof opt === 'string' ? opt : opt.label}
          </option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none group-hover:translate-y-[-40%] transition-transform">
        <ChevronRight className="w-4 h-4 text-slate-400 rotate-90" />
      </div>
    </div>
  );
}

function ActionLink({ href, icon, label, variant }: { href: string, icon: React.ReactNode, label: string, variant: 'primary' | 'slate' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`flex items-center justify-center gap-2.5 py-4 px-4 rounded-[1.25rem] transition-all duration-300 font-black text-xs uppercase tracking-widest shadow-sm hover:shadow-lg ${
        variant === 'primary' 
          ? 'bg-red-600 text-white hover:bg-red-700 shadow-red-200' 
          : 'bg-slate-900 text-white hover:bg-slate-800'
      }`}
    >
      {icon}
      {label}
    </a>
  );
}
