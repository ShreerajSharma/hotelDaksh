import React, { useState } from 'react';
import { Wifi, Tv, Wind, Check, Users, Shield, ArrowRight, Sparkles, Calendar, Coffee, Droplets, ExternalLink, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Rooms = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState('all');
  const { t, isHindi } = useLanguage();
  const makeMyTripUrl = "https://www.makemytrip.com/hotels/hotel_daksh-details-khatu.html";

  const roomsData = [
    {
      id: 'deluxe-double',
      title: 'Deluxe Double Room (2 Adults + 1 Child)',
      subtitleHindi: 'डिलक्स डबल रूम (2 वयस्क + 1 बालक)',
      tagline: {
        hi: 'युगल एवं 2 यात्रियों हेतु आरामदायक डबल बेड, डिजाइनर वॉलपेपर, वातानुकूलन एवं स्वच्छ वातावरण।',
        en: 'Ideal for couples & small families with king-size bed, designer wallpaper, split AC & serene environment.'
      },
      category: 'couple',
      badge: {
        hi: '1. Deluxe Double Room (2+1)',
        en: '1. Deluxe Double (2+1 Guests)'
      },
      image: '/rooms/deluxe-double.jpg',
      specs: [
        { label: { hi: 'यात्री क्षमता', en: 'Capacity' }, value: { hi: '2 वयस्क + 1 बालक', en: '2 Adults + 1 Child' } },
        { label: { hi: 'शय्या (Bed)', en: 'Bed Setup' }, value: { hi: '1 लार्ज डबल बेड', en: '1 Large King Bed' } },
        { label: { hi: 'वातानुकूलन', en: 'Climate' }, value: { hi: 'स्प्लिट एयर कंडीशनर (AC)', en: 'Split Air Conditioner' } },
        { label: { hi: 'पार्किंग', en: 'Parking' }, value: { hi: 'फ्री गेटेड ऑन-साइट', en: 'Free Gated On-Site' } },
      ],
      highlights: [
        { hi: 'शानदार इंटीरियर वॉलपेपर, वॉर्डरोब व ड्रेसिंग मिरर', en: 'Teal designer wallpaper, full wardrobe & dressing mirror' },
        { hi: 'प्रातः मंगला आरती स्नान हेतु 24 घंटे गर्म पानी (Geyser)', en: '24/7 dedicated hot water geyser for Mangala Aarti holy bath' },
        { hi: 'फ्लैट स्क्रीन स्मार्ट एलईडी टीवी व हाई-स्पीड वाई-फाई', en: 'Wall-mounted Smart LED TV & high-speed Wi-Fi' },
        { hi: 'अटैच्ड स्वच्छ पाश्चात्य बाथरूम व प्रसाधन सामग्री', en: 'Attached spotless western bathroom with complimentary toiletries' },
        { hi: 'दैनिक हाउसकीपिंग एवं 100% साइलेंट जनरेटर पॉवर बैकअप', en: 'Daily housekeeping & 100% silent generator power backup' }
      ]
    },
    {
      id: 'triple-room',
      title: 'Triple Room (1 Double + 1 Single Bed)',
      subtitleHindi: 'ट्रिपल रूम (3 वयस्क या 3 + 1 बालक)',
      tagline: {
        hi: '3 यात्रियों हेतु 1 डबल बेड और 1 अलग सिंगल बेड का सुव्यवस्थित व आरामदायक लेआउट।',
        en: 'Convenient layout with 1 double bed plus 1 separate single bed, tailored for 3 pilgrims or families.'
      },
      category: 'family',
      badge: {
        hi: '2. Triple Room',
        en: '2. Triple Room (3 Beds)'
      },
      image: '/rooms/triple-room.jpg',
      specs: [
        { label: { hi: 'यात्री क्षमता', en: 'Capacity' }, value: { hi: '3 वयस्क (या 3+1 बालक)', en: '3 Adults (or 3+1 Child)' } },
        { label: { hi: 'शय्या (Bed)', en: 'Bed Setup' }, value: { hi: '1 डबल + 1 सिंगल बेड', en: '1 Double + 1 Single Bed' } },
        { label: { hi: 'वातानुकूलन', en: 'Climate' }, value: { hi: 'स्प्लिट एयर कंडीशनर (AC)', en: 'Split Air Conditioner' } },
        { label: { hi: 'पार्किंग', en: 'Parking' }, value: { hi: 'फ्री गेटेड ऑन-साइट', en: 'Free Gated On-Site' } },
      ],
      highlights: [
        { hi: '1 डबल बेड एवं 1 अलग सिंगल बेड की सुविधाजनक व्यवस्था', en: 'Distinct 1 double bed + 1 single bed layout for privacy' },
        { hi: 'गोल्डन रॉयल वॉलपेपर, मॉडर्न फॉल-सीलिंग व वॉर्डरोब', en: 'Golden royal wallpaper, modern fall-ceiling with warm lighting' },
        { hi: 'अटैच्ड स्वच्छ पाश्चात्य बाथरूम व 24 घंटे गीजर गर्म पानी', en: 'Attached western bathroom with 24/7 instant hot water' },
        { hi: '100% निर्बाध जनरेटर पॉवर बैकअप गारंटी', en: '100% uninterrupted generator power backup guarantee' },
        { hi: 'मंदिर जाने हेतु होटल के द्वार पर ई-रिक्शा सहायता', en: 'E-rickshaws available right at the hotel gate for easy transit' }
      ]
    },
    {
      id: 'deluxe-family-room',
      title: 'Deluxe Family Room (2 Large Double Beds)',
      subtitleHindi: 'डिलक्स फैमिली रूम (4 से 6 अतिथि)',
      tagline: {
        hi: 'विशाल 4-बेड फैमिली सुइट, प्रीमियम वुडन सीलिंग, दो पंखे, डिजाइनर गोल्ड वॉलपेपर व पूर्ण पारिवारिक विश्राम।',
        en: 'Spacious 4-bed family suite with wooden ceiling, two ceiling fans, gold motifs & complete family comfort.'
      },
      category: 'luxury',
      badge: {
        hi: '3. Deluxe Family Room',
        en: '3. Deluxe Family (4-6 Guests)'
      },
      image: '/rooms/deluxe-family.jpg',
      specs: [
        { label: { hi: 'यात्री क्षमता', en: 'Capacity' }, value: { hi: '4 से 6 अतिथि', en: '4 to 6 Guests' } },
        { label: { hi: 'शय्या (Bed)', en: 'Bed Setup' }, value: { hi: '2 बड़े लार्ज डबल बेड', en: '2 Large Double Beds' } },
        { label: { hi: 'वातानुकूलन', en: 'Climate' }, value: { hi: 'हाई-कैपेसिटी स्प्लिट एसी + 2 पंखे', en: 'Heavy-Duty Split AC + 2 Fans' } },
        { label: { hi: 'स्पेस व दृश्य', en: 'Space & View' }, value: { hi: 'विशाल बैठक, अलमीरा व टेरेस', en: 'Spacious Seating & Wardrobe' } },
      ],
      highlights: [
        { hi: '2 बड़े डबल बेड - पूरे परिवार के लिए एक साथ आरामदायक विश्राम', en: '2 large double beds for the entire family to rest together' },
        { hi: 'प्रीमियम वुडन सीलिंग, दो पंखे, डिजाइनर गोल्ड वॉलपेपर व टीवी', en: 'Decorative wooden ceiling, two fans, gold wallpaper & TV' },
        { hi: 'बड़ा अटैच्ड बाथरूम, 24 घंटे गीजर गर्म पानी', en: 'Spacious attached bathroom with 24/7 hot water geyser' },
        { hi: 'सुरक्षित लगेज स्टोरेज एवं क्लॉक रूम (Cloakroom) सुविधा', en: 'Safe luggage storage & cloakroom facility before boarding' },
        { hi: 'निःशुल्क सुरक्षित गेटेड पार्किंग (गाड़ी व बस हेतु)', en: 'Complimentary gated parking for private cars and tourist buses' }
      ]
    }
  ];

  const filteredRooms = activeTab === 'all' 
    ? roomsData 
    : roomsData.filter(r => r.category === activeTab);

  return (
    <section id="rooms" className="py-24 bg-white text-[#2c221e] relative overflow-hidden border-t border-amber-600/15">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber-400/10 blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-amber-800/90 mb-2 font-sans">
            {t('पवित्र विश्राम कक्ष', 'Suites & Living Spaces')}
          </p>
          <h2 className="font-temple text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1c1512] mb-3">
            {t('दर्शनोपरांत परम शांति।', 'Serene Comfort After Darshan.')} <br />
            <span className="font-script italic text-2xl sm:text-4xl text-amber-800 font-normal">
              Comfort Tailored for Shyam Devotees
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#5c4a3e] max-w-xl mx-auto leading-relaxed">
            {t(
              'बाबा श्याम के दर्शन के बाद आपके सुखद विश्राम के लिए आधुनिक सुख-सुविधाओं से सुसज्जित कक्ष। सभी कमरों में 24/7 गर्म पानी, फ्री गेटेड पार्किंग व वाई-फाई शामिल है।',
              'Well-appointed air-conditioned rooms tailored for a tranquil stay after holy darshan. Includes 24/7 hot water geyser, free gated parking, and high-speed Wi-Fi.'
            )}
          </p>

          {/* Luxury Horizontal Filter Bar (Scrollable on mobile without wrapping) */}
          <div className="w-full max-w-full overflow-x-auto no-scrollbar py-2 mt-4 flex justify-start sm:justify-center">
            <div className="inline-flex items-center gap-1 p-1 rounded-full bg-[#f3ede2] border border-amber-600/15 shadow-inner">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === 'all'
                    ? 'btn-kesar-gold text-[#1c1512] shadow-sm'
                    : 'text-[#6c5a4d] hover:text-[#1c1512]'
                }`}
              >
                {t('सभी कक्ष', 'All Suites')}
              </button>
              <button
                onClick={() => setActiveTab('couple')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === 'couple'
                    ? 'btn-kesar-gold text-[#1c1512] shadow-sm'
                    : 'text-[#6c5a4d] hover:text-[#1c1512]'
                }`}
              >
                Deluxe Double (2+1)
              </button>
              <button
                onClick={() => setActiveTab('family')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === 'family'
                    ? 'btn-kesar-gold text-[#1c1512] shadow-sm'
                    : 'text-[#6c5a4d] hover:text-[#1c1512]'
                }`}
              >
                Triple Room (3 Beds)
              </button>
              <button
                onClick={() => setActiveTab('luxury')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === 'luxury'
                    ? 'btn-kesar-gold text-[#1c1512] shadow-sm'
                    : 'text-[#6c5a4d] hover:text-[#1c1512]'
                }`}
              >
                Family Suite (4-6)
              </button>
            </div>
          </div>
        </div>

        {/* Suites Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {filteredRooms.map((room) => (
            <div 
              key={room.id}
              className="bg-white rounded-[28px] overflow-hidden flex flex-col justify-between group border border-amber-600/20 shadow-lg shadow-amber-950/5 hover:shadow-xl hover:border-amber-500/40 transition-all duration-300"
            >
              {/* Image Frame */}
              <div>
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                  <img 
                    src={room.image} 
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Chip */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide bg-white/95 backdrop-blur-md text-amber-900 border border-amber-600/25 shadow-sm">
                      {t(room.badge)}
                    </span>
                  </div>

                  {/* Direct WhatsApp Rate Inquiry Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="bg-black/65 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-white">
                      <div className="text-[11px] font-bold text-amber-300 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>{t('सर्वोत्तम दर गारंटी (Best Tariff)', 'Best Rate Guaranteed')}</span>
                      </div>
                      <div className="text-[10px] text-white/80">
                        {t('सीधे संपर्क पर विशेष रियायत', 'Special Direct Booking Discount')}
                      </div>
                    </div>
                    <div className="bg-emerald-600/90 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-emerald-400/30 text-white text-[11px] font-bold flex items-center gap-1 shadow-sm">
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-temple text-lg font-bold text-[#1c1512] mb-1 leading-snug">
                    {room.title}
                  </h3>
                  {isHindi && room.subtitleHindi && (
                    <div className="text-xs font-semibold text-amber-800 mb-2">
                      {room.subtitleHindi}
                    </div>
                  )}
                  <p className="text-xs text-[#5c4a3e] leading-relaxed mb-6 font-normal">
                    {t(room.tagline)}
                  </p>

                  {/* Spec Sheet Grid */}
                  <div className="grid grid-cols-2 gap-2.5 pb-6 mb-6 border-b border-amber-600/15">
                    {room.specs.map((spec, i) => (
                      <div key={i} className="bg-[#faf8f5] p-2.5 rounded-xl border border-amber-500/15">
                        <div className="text-[10px] text-amber-800 font-bold">{t(spec.label)}</div>
                        <div className="text-xs text-[#1c1512] font-bold">{t(spec.value)}</div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-6">
                    {room.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#4a3b32]">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{t(highlight)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Reserve Button & MMT option */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => onOpenBooking({ roomType: room.title })}
                  className="w-full btn-kesar-gold py-3 rounded-full text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md hover:scale-[1.01] transition-transform"
                >
                  <MessageCircle className="w-4 h-4 text-[#1c1512]" />
                  <span>{t('व्हाट्सएप पर दरें जानें व बुक करें', 'Check Tariff & Reserve on WhatsApp')}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#1c1512]" />
                </button>

                <a
                  href={makeMyTripUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 px-3 rounded-full bg-[#faf8f5] hover:bg-amber-50 border border-amber-600/20 text-center text-[11px] font-bold text-[#78350f] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>{t('या MakeMyTrip पर देखें', 'Or View on MakeMyTrip')}</span>
                  <ExternalLink className="w-3 h-3 text-red-600" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Group / Bus Yatris Callout */}
        <div className="mt-12 bg-[#faf8f5] rounded-[24px] sm:rounded-[28px] p-5 sm:p-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 border border-amber-600/20 shadow-md">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-800 shrink-0 shadow-sm mt-0.5 sm:mt-0">
              <Users className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-temple text-base sm:text-lg font-bold text-[#1c1512]">
                {t('बस यात्रा अथवा श्याम भक्त मंडली के साथ आ रहे हैं?', 'Traveling with a Tourist Bus or Devotee Group?')}
              </h4>
              <p className="text-xs text-[#5c4a3e] font-medium mt-1 leading-relaxed">
                {t(
                  'हमारे पास बड़ी टूरिस्ट बसों हेतु विशाल निजी गेटेड पार्किंग, ड्राइवर विश्राम कक्ष एवं थोक बुकिंग पर विशेष छूट उपलब्ध है।',
                  'Dedicated large gated parking for 52-seater tourist buses, driver rest facilities, and customized group discounts available.'
                )}
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenBooking({ roomType: 'Group / Bus Booking' })}
            className="w-full md:w-auto btn-sacred-outline px-5 py-3 rounded-full text-xs font-bold shrink-0 cursor-pointer shadow-sm text-center"
          >
            {t('ग्रुप बुकिंग पूछताछ करें', 'Group Booking Inquiry')}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Rooms;
