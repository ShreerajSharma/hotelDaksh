import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      // Default to English on first load or version update
      const migrated = localStorage.getItem('hotel_daksh_lang_v2_default_en');
      if (!migrated) {
        localStorage.setItem('hotel_daksh_lang_v2_default_en', 'true');
        localStorage.setItem('hotel_daksh_lang', 'en');
        return 'en';
      }
      const saved = localStorage.getItem('hotel_daksh_lang');
      return saved === 'hi' ? 'hi' : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('hotel_daksh_lang', language);
    } catch (e) {
      console.warn('LocalStorage unavailable', e);
    }
    // Update html lang attribute for SEO/Accessibility
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'hi' ? 'en' : 'hi'));
  };

  /**
   * Helper function:
   * Accepts either:
   * 1. (hiString, enString) -> returns hiString or enString based on active language
   * 2. (objectWith_hi_and_en) -> returns obj[language]
   */
  const t = (hi, en) => {
    if (typeof hi === 'object' && hi !== null) {
      return hi[language] || hi.hi || hi.en;
    }
    return language === 'hi' ? hi : (en || hi);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isHindi: language === 'hi' }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
