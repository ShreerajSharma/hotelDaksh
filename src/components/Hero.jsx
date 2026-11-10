import React, { useState } from 'react';
import { Calendar, Users, ChevronRight, Phone, MessageCircle, Clock, Car, ShieldCheck, Star, Navigation, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = ({ onOpenBooking }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomType, setRoomType] = useState('Deluxe Double Room (2 Adults + 1 Child)');
  const { t } = useLanguage();

  const handleQuickSearch = (e) => {
    e.preventDefault();
    onOpenBooking({ checkIn, checkOut, roomType });
  };

  const googleMapsUrl = "https://www.google.co.in/maps/place/Hotel+Daksh/@27.371647,75.4005263,17z/data=!4m10!3m9!1s0x396ced7c87c50351:0xafdae41224dd7544!5m3!1s2026-11-10!4m1!1i2!8m2!3d27.371647!4d75.4031066!16s%2Fg%2F11v3nxm7xw";
  const makeMyTripUrl = "https://www.makemytrip.com/hotels/hotel_daksh-details-khatu.html";

  return (
    <section id="home" className="relative pt-6 sm:pt-12 pb-14 sm:pb-20 overflow-hidden bg-[#faf8f5]">
      
      {/* Editorial Background Image with Luxury Warm Vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="/shyam-baba.jpg" 
          alt="Shree Khatu Shyam Ji Shringaar" 
          className="w-full h-full object-cover object-top opacity-35 scale-105"
        />
        {/* Soft Radial Vignette for Editorial Contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.8)_45%,rgba(250,248,245,0.65)_75%,rgba(250,248,245,0.98)_100%)]" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#faf8f5] via-[#faf8f5]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        
        {/* Refined Top Pilgrim Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-amber-600/30 mb-3 text-[10px] sm:text-xs font-bold text-amber-950 shadow-sm">
          <span>🦚</span>
          <span className="font-devotional">{t('॥ जय श्री श्याम • पावन धाम ॥', '॥ Jai Shree Shyam • Khatu Dham ॥')}</span>
          <span className="text-amber-500">•</span>
          <span className="text-amber-800">{t('होटल दक्ष', 'Hotel Daksh')}</span>
        </div>

        {/* Verification Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4 text-[10px] sm:text-xs font-bold">
          <a 
            href={googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/90 text-blue-900 border border-blue-500/25 shadow-xs hover:border-blue-500 transition-colors"
          >
            <Navigation className="w-3 h-3 text-blue-600" />
            <span>Google Maps (4.6★)</span>
          </a>
          <a 
            href={makeMyTripUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/90 text-red-700 border border-red-500/25 shadow-xs hover:border-red-500 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
            <span>MakeMyTrip Verified</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>

        {/* Editorial Headline */}
        <h1 className="font-temple text-2xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1c140e] leading-tight mb-3">
          {t('दिव्य धाम, ', 'Divine Sanctuary, ')}
          <span className="text-amber-800 font-script italic font-normal block sm:inline">
            {t('परम विश्राम।', 'Sacred Serenity.')}
          </span>
        </h1>

        {/* Key Advantage Pill */}
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-600/25 text-amber-950 font-bold text-[11px] sm:text-xs mb-3">
          <span>{t('मंदिर से मात्र 500 मीटर', 'Just 500m Walk to Mandir')}</span>
          <span className="text-amber-600">•</span>
          <span>{t('फ्री गेटेड पार्किंग', 'Free Gated Parking')}</span>
        </div>

        {/* Subtitle Description */}
        <p className="max-w-xl text-xs sm:text-sm text-[#4a3b32] font-medium leading-relaxed mb-6 px-1">
          {t(
            'श्री खाटू श्याम जी मंदिर से मात्र 500 मीटर की सुखद पैदल दूरी (आलोदा चौराहा, बीएसएनएल टावर के पास)। आपकी मंगलमय यात्रा हेतु वातानुकूलित कमरे, 24 घंटे गर्म पानी, सुरक्षित गेटेड पार्किंग व शुद्ध सात्विक भोजन।',
            'Located peacefully at Aloda Chauraha, just 500m walk from Shree Khatu Shyam Ji Mandir. AC luxury suites, 24/7 hot water geysers, secure gated bus/car parking & pure sattvik meals.'
          )}
        </p>

        {/* Touch-Friendly Action Buttons */}
        <div className="w-full max-w-md flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 sm:gap-3 mb-6">
          <button
            onClick={() => onOpenBooking()}
            className="btn-kesar-gold py-3 px-6 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
          >
            <span>{t('कमरा बुक करें (Direct Booking)', 'Reserve Room (Direct Booking)')}</span>
            <ChevronRight className="w-4 h-4 text-[#1c1512]" />
          </button>
          
          <div className="grid grid-cols-2 gap-2">
            <a
              href="https://wa.me/918104053931?text=Jai%20Shree%20Shyam!%20I%20want%20to%20book%20a%20room%20at%20Hotel%20Daksh%20Khatu."
              target="_blank"
              rel="noreferrer"
              className="bg-white hover:bg-emerald-50 border border-emerald-500/40 text-emerald-800 py-2.5 px-3 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <a
              href={makeMyTripUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-white hover:bg-red-50 border border-red-500/35 text-red-700 py-2.5 px-3 rounded-full text-xs font-bold flex items-center justify-center gap-1 shadow-xs transition-colors"
            >
              <span>MakeMyTrip</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Mobile-Optimized Quick Reservation Capsule */}
        <div className="w-full max-w-3xl bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-amber-600/20 shadow-lg shadow-amber-950/5 text-left">
          <form onSubmit={handleQuickSearch} className="flex flex-col lg:flex-row gap-2.5 items-stretch lg:items-center">
            
            {/* Dates: Stacked on small screens to prevent native date picker overflow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1 min-w-0">
              <div className="bg-[#faf8f5] rounded-xl p-2.5 border border-amber-500/20 min-w-0">
                <label className="block text-[10px] uppercase tracking-wider text-amber-900 font-bold mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-700 shrink-0" /> 
                  <span className="truncate">{t('आगमन तिथि (Check-In)', 'Check-In Date')}</span>
                </label>
                <input 
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full min-w-0 bg-transparent text-[#1c1512] text-xs font-semibold focus:outline-none cursor-pointer"
                />
              </div>

              <div className="bg-[#faf8f5] rounded-xl p-2.5 border border-amber-500/20 min-w-0">
                <label className="block text-[10px] uppercase tracking-wider text-amber-900 font-bold mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-700 shrink-0" /> 
                  <span className="truncate">{t('प्रस्थान तिथि (Check-Out)', 'Check-Out Date')}</span>
                </label>
                <input 
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full min-w-0 bg-transparent text-[#1c1512] text-xs font-semibold focus:outline-none cursor-pointer"
                />
              </div>
            </div>

            {/* Room Type */}
            <div className="bg-[#faf8f5] rounded-xl p-2.5 border border-amber-500/20 flex-1 min-w-0">
              <label className="block text-[10px] uppercase tracking-wider text-amber-900 font-bold mb-1 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-amber-700 shrink-0" /> 
                <span className="truncate">{t('कक्ष श्रेणी', 'Room Category')}</span>
              </label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full min-w-0 bg-transparent text-[#1c1512] text-xs font-semibold focus:outline-none cursor-pointer truncate"
              >
                <option value="Deluxe Double Room (2 Adults + 1 Child)">1. Deluxe Double (2+1)</option>
                <option value="Triple Room (1 Double + 1 Single Bed)">2. Triple Room (3 Beds)</option>
                <option value="Deluxe Family Room (2 Large Double Beds)">3. Deluxe Family (2 Double Beds)</option>
              </select>
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              className="btn-kesar-gold py-2.5 sm:py-3.5 px-5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-sm shrink-0"
            >
              <span>{t('उपलब्धता देखें', 'Check Availability')}</span>
              <ChevronRight className="w-4 h-4 text-[#1c1512]" />
            </button>

          </form>
        </div>

        {/* 4 Sacred Devotee Highlights Bar: 2x2 Grid on Mobile, 4 Columns on Desktop */}
        <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 w-full max-w-3xl">
          <div className="bg-white/95 rounded-xl p-2.5 sm:p-3 border border-amber-600/15 shadow-xs flex items-center gap-2.5 text-left">
            <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-800 shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="font-temple text-xs sm:text-sm font-bold text-[#1c1512] leading-tight">
                {t('500 मीटर', '500 Meters')}
              </div>
              <div className="text-[10px] text-[#6b584c]">
                {t('पैदल मंदिर दूरी', 'Walk to Mandir')}
              </div>
            </div>
          </div>

          <div className="bg-white/95 rounded-xl p-2.5 sm:p-3 border border-amber-600/15 shadow-xs flex items-center gap-2.5 text-left">
            <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-800 shrink-0">
              <Car className="w-4 h-4" />
            </div>
            <div>
              <div className="font-temple text-xs sm:text-sm font-bold text-[#1c1512] leading-tight">
                {t('फ्री पार्किंग', 'Free Gated')}
              </div>
              <div className="text-[10px] text-[#6b584c]">
                {t('50+ कार व बस क्षमता', '50+ Cars & Buses')}
              </div>
            </div>
          </div>

          <div className="bg-white/95 rounded-xl p-2.5 sm:p-3 border border-amber-600/15 shadow-xs flex items-center gap-2.5 text-left">
            <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-800 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="font-temple text-xs sm:text-sm font-bold text-[#1c1512] leading-tight">
                24/7 Geyser
              </div>
              <div className="text-[10px] text-[#6b584c]">
                {t('गर्म जल व पॉवर बैकअप', 'Hot Water & Generator')}
              </div>
            </div>
          </div>

          <div className="bg-white/95 rounded-xl p-2.5 sm:p-3 border border-amber-600/15 shadow-xs flex items-center gap-2.5 text-left">
            <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-800 shrink-0">
              <Star className="w-4 h-4 text-amber-600 fill-amber-500" />
            </div>
            <div>
              <div className="font-temple text-xs sm:text-sm font-bold text-[#1c1512] leading-tight">
                4.6 ★ Rating
              </div>
              <div className="text-[10px] text-[#6b584c]">
                {t('Google व MMT प्रमाणित', 'Google & MMT Verified')}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
