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
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'दर्शन व आवास', href: '#home', english: 'Home' },
    { name: 'कक्ष व सुइट्स', href: '#rooms', english: 'Suites' },
    { name: 'होटल दक्ष ही क्यों?', href: '#why-choose', english: 'Why Hotel Daksh' },
    { name: 'पवित्र धाम', href: '#about', english: 'Sanctuary' },
    { name: 'यात्री सुविधाएं', href: '#amenities', english: 'Amenities' },
    { name: 'आरती समय', href: '#khatu-guide', english: 'Aarti Timings' },
    { name: 'चित्र वीथिका', href: '#gallery', english: 'Gallery' },
    { name: 'प्रश्न (FAQ)', href: '#faq', english: 'FAQ' },
    { name: 'स्थान व संपर्क', href: '#contact', english: 'Location' },
  ];

  return (
    <>
      {/* Divine Spiritual White Top Header */}
      <div className="bg-[#f5f0e8] text-[#5c4a3e] text-[11px] py-1.5 px-4 border-b border-amber-600/20 hidden md:block">
        <div className="max-w-6xl mx-auto flex justify-between items-center tracking-wide">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-amber-800 font-bold font-devotional text-xs">
              <span className="text-amber-600">॥</span> {t('ॐ श्री श्याम देवाय नमः', 'Om Shri Shyam Devaya Namaha')} <span className="text-amber-600">॥</span>
            </span>
            <span className="text-amber-400">•</span>
            <span className="flex items-center gap-1 text-[#5c4a3e] font-medium">
              <MapPin className="w-3 h-3 text-amber-600" />
              {t('आलोदा चौराहा, बीएसएनएल टावर के पास, खाटूश्यामजी (सीकर)', 'Aloda Chauraha, Near BSNL Tower, Khatu Shyamji')}
            </span>
            <span className="text-amber-400">•</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {t('मंदिर से मात्र 10 मिनट की पैदल दूरी', 'Just 10 Min Walk to Khatu Shyam Mandir')}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <a 
              href="tel:+919876543210" 
              className="text-[#5c4a3e] hover:text-amber-800 transition-colors flex items-center gap-1.5 font-medium"
            >
              <Phone className="w-3 h-3 text-amber-600" />
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

      {/* Main Frosted White Navbar */}
      <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-2xl border-b border-amber-600/20 py-3 shadow-lg shadow-amber-950/5' 
          : 'bg-white/85 backdrop-blur-xl border-b border-amber-600/15 py-3.5'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          
          {/* Spiritual Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-200 p-0.5 shadow-md shadow-amber-600/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#faf8f5] rounded-full flex items-center justify-center text-amber-700 text-sm font-bold">
                🦚
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-temple text-lg sm:text-xl font-bold tracking-wide text-[#1c1512]">
                  HOTEL DAKSH
                </span>
                <span className="text-[10px] text-amber-800 font-devotional font-semibold tracking-wider hidden sm:inline">
                  (होटल दक्ष)
                </span>
              </div>
              <span className="text-[10px] tracking-[0.16em] text-amber-800 font-bold uppercase">
                {t('खाटूश्यामजी • दिव्य विश्राम', 'Khatu Shyamji • Divine Stay')}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-[#4a3b32] hover:text-amber-700 transition-colors tracking-wide relative py-1"
              >
                {isHindi ? link.name : link.english}
              </a>
            ))}
          </nav>

          {/* Right Action: Spiritual Pill Buttons & Language Toggle */}
          <div className="hidden sm:flex items-center gap-2.5">
            <div className="md:hidden">
              <LanguageToggle />
            </div>
            <a
              href="https://wa.me/919876543210?text=Jai%20Shree%20Shyam!%20I%20am%20interested%20in%20room%20booking%20at%20Hotel%20Daksh."
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-[#78350f] hover:text-amber-900 px-3.5 py-2 rounded-full border border-amber-600/30 hover:bg-amber-50 transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t('पूछताछ', 'Inquiry')}</span>
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="btn-kesar-gold text-xs px-4 py-2 rounded-full flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-[#1c1512]" />
              <span>{t('कमरा बुक करें', 'Book Room')}</span>
            </button>
          </div>

          {/* Mobile Right Controls: Language & Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle />
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#4a3b32] hover:text-amber-800 hover:bg-amber-50 transition-colors border border-amber-600/20"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-amber-600/20 px-6 py-6 space-y-4 animate-in fade-in duration-200 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-amber-600/15">
              <span className="text-xs font-bold text-amber-900">{t('भाषा चुनें / Select Language', 'Select Language')}</span>
              <LanguageToggle />
            </div>

            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-[#3b2d24] hover:text-amber-700 transition-colors py-1 flex items-center justify-between"
                >
                  <span>
                    {isHindi ? link.name : link.english}
                    <span className="text-xs text-amber-700 font-normal ml-2">
                      ({isHindi ? link.english : link.name})
                    </span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-amber-600/50" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-amber-600/15 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full btn-kesar-gold py-3 rounded-full text-xs font-bold flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#1c1512]" /> {t('कमरा आरक्षित करें (Book Room)', 'Reserve a Room')}
              </button>
              <a
                href="tel:+919876543210"
                className="w-full py-2.5 rounded-full border border-amber-600/30 text-center text-xs text-[#4a3b32] font-semibold"
              >
                {t('सीधा संपर्क करें: +91 98765 43210', 'Call Helpline: +91 98765 43210')}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
