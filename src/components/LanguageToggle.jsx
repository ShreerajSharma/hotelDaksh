import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle = ({ className = '', compact = false }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`inline-flex items-center p-0.5 sm:p-1 rounded-full bg-[#f4efe6] border border-amber-600/25 shadow-inner ${className}`}>
      <div className="flex items-center pl-1.5 pr-0.5 text-amber-800 shrink-0">
        <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
      </div>
      
      <button
        type="button"
        onClick={() => setLanguage('hi')}
        className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold transition-all cursor-pointer ${
          language === 'hi'
            ? 'btn-kesar-gold text-[#1c1512] shadow-sm'
            : 'text-[#6b584c] hover:text-[#1c1512]'
        }`}
        aria-label="Switch to Hindi"
      >
        {compact ? 'HI' : 'हिन्दी'}
      </button>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold transition-all cursor-pointer ${
          language === 'en'
            ? 'btn-kesar-gold text-[#1c1512] shadow-sm'
            : 'text-[#6b584c] hover:text-[#1c1512]'
        }`}
        aria-label="Switch to English"
      >
        {compact ? 'EN' : 'English'}
      </button>
    </div>
  );
};

export default LanguageToggle;
