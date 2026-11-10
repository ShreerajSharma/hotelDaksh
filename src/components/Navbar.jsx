import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles, MapPin, ChevronRight, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Navbar = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, isHindi } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'दर्शन व आवास', href: '#home', english: 'Home' },
    { name: 'कक्ष व सुइट्स', href: '#rooms', english: 'Suites' },
    { name: 'होटल दक्ष ही क्यों?', href: '#why-choose', english: 'Why Us' },
    { name: 'पवित्र धाम', href: '#about', english: 'Sanctuary' },
    { name: 'यात्री सुविधाएं', href: '#amenities', english: 'Amenities' },
    { name: 'आरती समय', href: '#khatu-guide', english: 'Aarti Times' },
    { name: 'चित्र वीथिका', href: '#gallery', english: 'Gallery' },
    { name: 'प्रश्न (FAQ)', href: '#faq', english: 'FAQ' },
    { name: 'स्थान व संपर्क', href: '#contact', english: 'Location' },
  ];

  return (
    <>
      {/* Editorial Luxury Top Bar (Desktop only) */}
      <div className="bg-[#f5f0e8] text-[#5c4a3e] text-[11px] py-1.5 px-4 border-b border-amber-600/15 hidden md:block">
        <div className="max-w-6xl mx-auto flex justify-between items-center tracking-wide">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-900 font-bold font-devotional text-xs">
              <span className="text-amber-600">॥</span> {t('ॐ श्री श्याम देवाय नमः', 'Om Shri Shyam Devaya Namaha')} <span className="text-amber-600">॥</span>
            </span>
            <span className="text-amber-300">•</span>
            <span className="flex items-center gap-1 text-[#5c4a3e]">
              <MapPin className="w-3 h-3 text-amber-700" />
              {t('आलोदा चौराहा, खाटूश्यामजी (सीकर)', 'Aloda Chauraha, Khatu Shyamji')}
            </span>
            <span className="text-amber-300">•</span>
            <span className="text-emerald-800 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
              {t('मंदिर से मात्र 500 मीटर', '500m to Khatu Shyam Mandir')}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <a 
              href="tel:+919876543210" 
              className="text-[#4a3b32] hover:text-amber-800 transition-colors flex items-center gap-1.5 font-medium"
            >
              <Phone className="w-3 h-3 text-amber-700" />
              +91 98765 43210
            </a>
            <span className="text-amber-300">•</span>
            <a 
              href="https://wa.me/919876543210?text=Jai%20Shree%20Shyam!%20I%20want%20to%20inquire%20about%20Hotel%20Daksh%20Khatu."
              target="_blank" 
              rel="noreferrer"
              className="text-emerald-700 hover:text-emerald-800 transition-colors flex items-center gap-1 font-semibold"
            >
              <MessageCircle className="w-3 h-3 text-emerald-600" /> {t('WhatsApp सेवा', 'WhatsApp Help')}
            </a>
          </div>
        </div>
      </div>

      {/* Main Responsive Header */}
      <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-amber-600/20 py-2.5 sm:py-3 shadow-md shadow-amber-950/5' 
          : 'bg-white/90 backdrop-blur-md border-b border-amber-600/15 py-3'
      }`}>
        <div className="max-w-6xl mx-auto px-3.5 sm:px-6 flex justify-between items-center gap-2">
          
          {/* Brand Logo - Compact on mobile */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-200 p-0.5 shadow-sm group-hover:scale-105 transition-transform shrink-0">
              <div className="w-full h-full bg-[#faf8f5] rounded-full flex items-center justify-center text-amber-800 text-xs sm:text-sm font-bold">
                🦚
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-temple text-base sm:text-xl font-bold tracking-tight text-[#1c1512] leading-tight truncate">
                HOTEL DAKSH
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.12em] text-amber-800 font-bold uppercase truncate">
                {t('खाटूश्यामजी • 500m मंदिर', 'Khatu Shyamji • 500m Mandir')}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-[#4a3b32] hover:text-amber-800 transition-colors tracking-wide py-1"
              >
                {isHindi ? link.name : link.english}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <div className="md:hidden">
              <LanguageToggle compact={true} />
            </div>
            <a
              href="https://wa.me/919876543210?text=Jai%20Shree%20Shyam!%20I%20am%20interested%20in%20room%20booking%20at%20Hotel%20Daksh."
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-[#78350f] hover:text-amber-900 px-3 py-1.5 rounded-full border border-amber-600/30 hover:bg-amber-50 transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t('पूछताछ', 'Inquiry')}</span>
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="btn-kesar-gold text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-[#1c1512]" />
              <span>{t('कमरा बुक करें', 'Book Room')}</span>
            </button>
          </div>

          {/* Mobile Right Controls - Compact and Never Overflowing */}
          <div className="flex items-center gap-2 sm:hidden shrink-0">
            <LanguageToggle compact={true} />

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-full bg-[#faf8f5] text-[#2c221e] hover:bg-amber-50 transition-colors border border-amber-600/25 flex items-center justify-center cursor-pointer shadow-xs"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* Full Mobile Slide Menu Drawer with Backdrop Blur */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[53px] bottom-0 bg-[#faf8f5]/98 backdrop-blur-2xl z-50 overflow-y-auto px-5 py-6 flex flex-col justify-between border-t border-amber-600/15 animate-in fade-in slide-in-from-top-2 duration-200">
            
            <div className="space-y-4">
              {/* Language Selector inside Menu */}
              <div className="flex items-center justify-between pb-3 border-b border-amber-600/15">
                <span className="text-xs font-bold text-amber-950 uppercase tracking-wider">
                  {t('भाषा चुनें', 'Select Language')}
                </span>
                <LanguageToggle />
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-bold text-[#2c221e] hover:text-amber-800 transition-colors py-2.5 px-3 rounded-xl hover:bg-amber-500/10 flex items-center justify-between border-b border-amber-500/10 last:border-0"
                  >
                    <span>{isHindi ? link.name : link.english}</span>
                    <ChevronRight className="w-4 h-4 text-amber-700/60" />
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Actions inside Drawer */}
            <div className="pt-6 border-t border-amber-600/20 space-y-2.5 pb-16">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full btn-kesar-gold py-3.5 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4 text-[#1c1512]" /> 
                <span>{t('कमरा आरक्षित करें (Book Direct)', 'Book Room (Zero Commission)')}</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+919876543210"
                  className="py-2.5 rounded-xl border border-amber-600/30 text-center text-xs text-[#2c221e] font-bold bg-white flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-800" />
                  <span>{t('कॉल करें', 'Call Us')}</span>
                </a>
                <a
                  href="https://wa.me/919876543210?text=Jai%20Shree%20Shyam!%20I%20want%20to%20inquire%20about%20Hotel%20Daksh%20Khatu."
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 rounded-xl border border-emerald-500/40 text-center text-xs text-emerald-800 font-bold bg-emerald-50 flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
