import React, { useState } from 'react';
import { Calendar, Users, ChevronRight, MessageCircle, Sparkles, MapPin, ShieldCheck, ArrowRight, ExternalLink, Star, Navigation, Clock, Car } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = ({ onOpenBooking }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [roomType, setRoomType] = useState('Deluxe Double Room (2 Adults + 1 Child)');
  const { t, isHindi } = useLanguage();

  const googleMapsUrl = "https://www.google.co.in/maps/place/Hotel+Daksh/@27.371647,75.4005263,17z/data=!4m10!3m9!1s0x396ced7c87c50351:0xafdae41224dd7544!5m3!1s2026-11-10!4m1!1i2!8m2!3d27.371647!4d75.4031066!16s%2Fg%2F11v3nxm7xw";
  const makeMyTripUrl = "https://www.makemytrip.com/hotels/hotel_daksh-details-khatu.html";

  const handleQuickSearch = (e) => {
    e.preventDefault();
    onOpenBooking({ checkIn, checkOut, guests, roomType });
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden bg-[#faf8f5] text-center">
      
      {/* 1. Divine Shri Khatu Shyam Ji Background - High Definition & Clear */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src="/shyam-baba.jpg" 
          alt="श्री खाटू श्याम जी महाराज पावन दर्शन" 
          className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.05] opacity-95 transition-all duration-700"
        />
        
        {/* 2. Soft Divine Halo (आभामंडल) directly behind the center text for perfect contrast & readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.65)_45%,rgba(250,248,245,0.3)_75%,rgba(250,248,245,0.85)_100%)]" />
        
        {/* 3. Bottom Feather Blend so it merges seamlessly into white marble content below */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#faf8f5] via-[#faf8f5]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Top Sacred Salutation Pill */}
        <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-amber-500/40 mb-3 text-[10px] sm:text-xs font-bold tracking-wide shadow-md shadow-amber-950/10 text-center max-w-full">
          <span className="text-xs sm:text-sm">🦚</span>
          <span className="font-devotional text-amber-950 font-extrabold">
            {t('॥ जय श्री श्याम • पावन धाम ॥', '॥ Jai Shree Shyam • Khatu Dham ॥')}
          </span>
          <span className="text-amber-500">•</span>
          <span className="text-amber-900 font-extrabold">{t('होटल दक्ष', 'Hotel Daksh')}</span>
          <span className="text-xs sm:text-sm">🪔</span>
        </div>

        {/* Verification Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4 text-[10px] sm:text-[11px] font-extrabold">
          <a 
            href={googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-blue-900 hover:text-blue-950 border border-blue-600/30 transition-colors shadow-sm"
          >
            <Navigation className="w-3.5 h-3.5 text-blue-600" />
            <span>Google Maps Verified (4.6 ★)</span>
          </a>
          <a 
            href={makeMyTripUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-red-700 hover:text-red-900 border border-red-600/30 transition-colors shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            <span>MakeMyTrip Listed &amp; Verified</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Grand Spiritual Headline */}
        <h1 className="font-temple text-3xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#140b05] [text-shadow:_0_2px_16px_rgba(255,255,255,1),_0_0_8px_rgba(255,255,255,0.9)] leading-[1.15] mb-3 text-center">
          {t('दिव्य धाम, ', 'Divine Sanctuary, ')}
          <span className="text-amber-700 [text-shadow:_0_2px_16px_rgba(255,255,255,1),_0_0_8px_rgba(255,255,255,0.9)]">
            {t('परम विश्राम।', 'Sacred Serenity.')}
          </span>
        </h1>

        {/* Clean Sub-title Chip */}
        <div className="inline-flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-2xl sm:rounded-full bg-amber-500/15 backdrop-blur-sm border border-amber-600/30 text-amber-950 font-bold text-[11px] sm:text-sm tracking-wide mb-4 max-w-full text-center">
          <span className="font-temple tracking-wider uppercase">Hotel Daksh</span>
          <span>•</span>
          <span>{t('मंदिर से मात्र 500 मीटर पैदल दूरी', 'Just 500m Walk to Khatu Mandir')}</span>
          <span>•</span>
          <span>{t('फ्री गेटेड पार्किंग', 'Free Gated Parking')}</span>
        </div>

        {/* Devotional Tagline with Clean Backing */}
        <p className="max-w-2xl text-xs sm:text-sm text-[#26160c] font-bold leading-relaxed mb-6 tracking-wide [text-shadow:_0_1px_8px_rgba(255,255,255,1)]">
          {t(
            'श्री खाटू श्याम जी मंदिर से मात्र 500 मीटर की सुखद पैदल दूरी (आलोदा चौराहा, बीएसएनएल टावर के पास)। आपकी मंगलमय यात्रा हेतु वातानुकूलित कमरे, 24 घंटे गर्म पानी, सुरक्षित गेटेड पार्किंग व शुद्ध सात्विक भोजन।',
            'Just a 500-meter peaceful walk to Shree Khatu Shyam Ji Temple (Near BSNL Tower, Aloda Chauraha). Tailored for your sacred pilgrimage with AC suites, 24/7 hot water geyser, free gated parking & pure sattvik meals.'
          )}
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-7">
          <button
            onClick={() => onOpenBooking()}
            className="btn-kesar-gold px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-black tracking-wide flex items-center gap-2 cursor-pointer shadow-lg border border-amber-300"
          >
            <span>{t('कमरा बुक करें (Direct Reservation)', 'Reserve Room (Direct Booking)')}</span>
            <ChevronRight className="w-4 h-4 text-[#1c1512]" />
          </button>
          
          <a
            href="https://wa.me/919876543210?text=Jai%20Shree%20Shyam!%20I%20want%20to%20book%20a%20room%20at%20Hotel%20Daksh%20Khatu."
            target="_blank"
            rel="noreferrer"
            className="bg-white/95 hover:bg-white border border-amber-600/35 text-amber-950 px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>{t('व्हाट्सएप पूछताछ', 'WhatsApp Inquiry')}</span>
          </a>

          <a
            href={makeMyTripUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-white/95 hover:bg-red-50 border border-red-500/35 text-red-700 px-4 sm:px-5 py-3 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-md transition-all"
          >
            <span>MakeMyTrip Booking</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Dynamic Booking Capsule with Frosted Clean Glass */}
        <div className="w-full max-w-4xl bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-amber-500/35 shadow-xl shadow-amber-950/10">
          <form onSubmit={handleQuickSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 items-center text-left">
            
            {/* Check-In */}
            <div className="bg-[#faf8f5] rounded-xl p-2.5 border border-amber-500/25 hover:border-amber-500/50 transition-colors">
              <label className="block text-[10px] uppercase tracking-wider text-amber-900 font-bold mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-700" /> {t('आगमन तिथि (Check-In)', 'Check-In Date')}
              </label>
              <input 
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-transparent text-[#1c1512] text-xs font-semibold focus:outline-none cursor-pointer"
              />
            </div>

            {/* Check-Out */}
            <div className="bg-[#faf8f5] rounded-xl p-2.5 border border-amber-500/25 hover:border-amber-500/50 transition-colors">
              <label className="block text-[10px] uppercase tracking-wider text-amber-900 font-bold mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-700" /> {t('प्रस्थान तिथि (Check-Out)', 'Check-Out Date')}
              </label>
              <input 
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent text-[#1c1512] text-xs font-semibold focus:outline-none cursor-pointer"
              />
            </div>

            {/* Room Type */}
            <div className="bg-[#faf8f5] rounded-xl p-2.5 border border-amber-500/25 hover:border-amber-500/50 transition-colors">
              <label className="block text-[10px] uppercase tracking-wider text-amber-900 font-bold mb-1 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-amber-700" /> {t('कक्ष श्रेणी', 'Room Category')}
              </label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full bg-transparent text-[#1c1512] text-xs font-semibold focus:outline-none cursor-pointer"
              >
                <option value="Deluxe Double Room (2 Adults + 1 Child)">Deluxe Double Room (2 Adults + 1 Child)</option>
                <option value="Triple Room">Triple Room (1 Double + 1 Single Bed)</option>
                <option value="Deluxe Family Room">Deluxe Family Room (2 Large Double Beds)</option>
              </select>
            </div>

            {/* Submit Action */}
            <div className="p-0.5">
              <button
                type="submit"
                className="w-full h-full min-h-[46px] btn-kesar-gold rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>{t('उपलब्धता देखें', 'Check Availability')}</span>
                <ChevronRight className="w-4 h-4 text-[#1c1512]" />
              </button>
            </div>

          </form>
        </div>

        {/* Sacred Devotee Highlights Bar */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 text-center w-full bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-md border border-amber-500/25">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-amber-700 shrink-0" />
            <div className="text-left">
              <div className="font-temple text-sm sm:text-base font-bold text-amber-950">{t('500 मीटर', '500 Meters')}</div>
              <div className="text-[10px] text-[#5c4a3e] font-semibold">{t('पैदल मंदिर (500 meter)', 'Walk to Mandir (500m)')}</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Car className="w-4 h-4 text-amber-700 shrink-0" />
            <div className="text-left">
              <div className="font-temple text-sm sm:text-base font-bold text-amber-950">Free Gated</div>
              <div className="text-[10px] text-[#5c4a3e] font-semibold">{t('निजी कार व बस पार्किंग', 'Private Car & Bus Parking')}</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
            <div className="text-left">
              <div className="font-temple text-sm sm:text-base font-bold text-amber-950">24/7 Geyser</div>
              <div className="text-[10px] text-[#5c4a3e] font-semibold">{t('गर्म पानी व बिजली बैकअप', 'Hot Water & Silent Generator')}</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Star className="w-4 h-4 text-amber-500 fill-amber-400 shrink-0" />
            <div className="text-left">
              <div className="font-temple text-sm sm:text-base font-bold text-amber-950">4.6 ★</div>
              <div className="text-[10px] text-[#5c4a3e] font-semibold">{t('Google व MMT रेटिंग', 'Google & MMT Rating')}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
