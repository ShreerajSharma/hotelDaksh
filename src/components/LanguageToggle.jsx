import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`inline-flex items-center p-1 rounded-full bg-[#f4efe6] border border-amber-500/30 shadow-inner ${className}`}>
      <div className="flex items-center gap-1 pl-2 pr-1 text-amber-800 shrink-0">
        <Globe className="w-3.5 h-3.5" />
      </div>
      
      <button
        type="button"
        onClick={() => setLanguage('hi')}
        className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
          language === 'hi'
            ? 'btn-kesar-gold text-[#1c1512] shadow-sm'
            : 'text-[#6b584c] hover:text-[#1c1512]'
        }`}
        aria-label="Switch to Hindi"
      >
        हिन्दी
      </button>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
          language === 'en'
            ? 'btn-kesar-gold text-[#1c1512] shadow-sm'
            : 'text-[#6b584c] hover:text-[#1c1512]'
        }`}
        aria-label="Switch to English"
      >
        English
      </button>
    </div>
  );
};

export default LanguageToggle;
