import React from 'react';
import { Check, X, Shield, Car, Clock, Zap, Coffee, Users, Phone, MapPin, Navigation, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WhyChooseUs = ({ onOpenBooking }) => {
  const { t, isHindi } = useLanguage();

  const comparisonData = [
    {
      feature: { hi: 'निजी कार व टूरिस्ट बस पार्किंग', en: 'Car & Bus Parking Facility' },
      hotelDaksh: {
        hi: '50+ कारों व बड़ी टूरिस्ट बसों हेतु विशाल गेटेड ऑन-साइट पार्किंग (फ्री व 24/7 CCTV संरक्षित)',
        en: 'Spacious gated on-site parking for 50+ cars & tourist buses (Complimentary & 24/7 CCTV guarded)'
      },
      others: {
        hi: 'अधिकांश होटलों में पार्किंग नहीं है या गाड़ियों को 2 किमी दूर धूल भरे मैदान में खड़ा करना पड़ता है',
        en: 'Most hotels have zero parking; vehicles must be parked in dusty lots 2 km away'
      },
      icon: Car,
      highlight: true
    },
    {
      feature: { hi: 'मंदिर पहुंच व जाम से मुक्ति', en: 'Temple Access & Traffic Clearance' },
      hotelDaksh: {
        hi: 'आलोदा चौराहा से सीधा सुगम मार्ग, मात्र 500 मीटर की सुखद पैदल दूरी, ई-रिक्शा होटल के द्वार पर',
        en: 'Direct access via Aloda Chauraha, just 500m easy walk, E-rickshaw at gate'
      },
      others: {
        hi: 'मंदिर की संकरी गलियों में भारी पुलिस बैरिकेड्स; एकादशी व मेले में गाड़ी अंदर नहीं जा सकती',
        en: 'Narrow temple alleys blocked by police barricades; cars cannot reach during festivals'
      },
      icon: Navigation,
      highlight: true
    },
    {
      feature: { hi: 'मंगला आरती हेतु गर्म पानी (Geyser)', en: '24/7 Hot Water for Mangala Aarti' },
      hotelDaksh: {
        hi: 'सभी कमरों में 24 घंटे समर्पित ऑटोमैटिक गीजर; प्रातः 4:30 बजे स्नान हेतु तुरंत गर्म पानी',
        en: 'Dedicated 24/7 in-room automatic geysers; instant hot water for early 4:30 AM Mangala Aarti'
      },
      others: {
        hi: 'होटलों में केवल सुबह 1-2 घंटे बॉयलर चलता है, भोर में जल्दी स्नान संभव नहीं होता',
        en: 'Hot water limited to 1-2 hours in the morning; early dawn bath often impossible'
      },
      icon: Clock,
      highlight: true
    },
    {
      feature: { hi: 'पावर बैकअप गारंटी (AC & Lights)', en: '100% Generator Power Backup' },
      hotelDaksh: {
        hi: '100% साइलेंट डीजल जनरेटर; बिजली कटने पर भी एसी, पंखे, लाइट व पानी निरंतर चालू',
        en: '100% silent diesel generator; ACs, fans, lights and water run without interruption'
      },
      others: {
        hi: 'केवल बेसिक इन्वर्टर (सिर्फ लाइट चलती है, एसी और गीजर बंद हो जाते हैं)',
        en: 'Basic inverter only (lights work, but ACs and geysers shut down during load-shedding)'
      },
      icon: Zap,
      highlight: false
    },
    {
      feature: { hi: 'पारिवारिक व ग्रुप कमरे (Family Suites)', en: 'Large Family Suites & Multi-Bed' },
      hotelDaksh: {
        hi: '4 से 6 अतिथियों हेतु विशाल Deluxe Family Room (2 बड़े डबल बेड) व Triple Room (1 Double + 1 Single)',
        en: 'Deluxe Family Rooms (2 large double beds for 4-6 guests) & Triple Rooms for families'
      },
      others: {
        hi: 'केवल छोटे 2-बेड वाले कमरे, पूरे परिवार को अलग-अलग कमरों में बिखरना पड़ता है',
        en: 'Only small 2-bed rooms, forcing large families to split across multiple rooms'
      },
      icon: Users,
      highlight: false
    },
    {
      feature: { hi: 'सीधी बुकिंग व शून्य कमीशन', en: 'Direct WhatsApp Booking (0% Commission)' },
      hotelDaksh: {
        hi: 'होटल मालिक से सीधा WhatsApp संपर्क, बिना किसी मध्यस्थ कमीशन के न्यूनतम व रियायती दरें',
        en: 'Direct WhatsApp connection with hotel, best guaranteed direct rates with 0% commission'
      },
      others: {
        hi: 'बिचौलियों और एजेंटों के जरिए 25-30% अतिरिक्त कमीशन वसूला जाता है',
        en: 'Middlemen and online aggregators add 20-30% commission surcharges'
      },
      icon: Phone,
      highlight: false
    }
  ];

  const cityRoutes = [
    {
      city: { hi: 'नई दिल्ली / NCR', en: 'New Delhi / NCR' },
      distance: { hi: '275 किमी', en: '275 km' },
      time: { hi: '4.5 - 5 घंटे', en: '4.5 - 5 hrs' },
      route: {
        hi: 'दिल्ली-मुंबई एक्सप्रेसवे / NH-48 → कोटपूतली → नीम का थाना → रींगस → खाटूश्यामजी',
        en: 'Delhi-Mumbai Expressway / NH-48 → Kotputli → Neem Ka Thana → Ringas → Khatu Shyamji'
      }
    },
    {
      city: { hi: 'जयपुर (गुलाबी नगरी)', en: 'Jaipur (Pink City)' },
      distance: { hi: '80 किमी', en: '80 km' },
      time: { hi: '1.5 घंटे', en: '1.5 hrs' },
      route: {
        hi: 'सीकर रोड (NH-52) → चौमूं बाईपास → रींगस → खाटूश्यामजी (प्रत्येक 15 मिनट पर बस सेवा)',
        en: 'Sikar Road (NH-52) → Chomu Bypass → Ringas → Khatu Shyamji (Bus every 15 mins)'
      }
    },
    {
      city: { hi: 'हरियाणा (हिसार/रोहतक/रेवाड़ी)', en: 'Haryana (Hisar/Rohtak/Rewari)' },
      distance: { hi: '180 - 230 किमी', en: '180 - 230 km' },
      time: { hi: '3.5 - 4 घंटे', en: '3.5 - 4 hrs' },
      route: {
        hi: 'रेवाड़ी / नारनौल → नीम का थाना → श्रीमाधोपुर → रींगस → खाटूश्यामजी',
        en: 'Rewari / Narnaul → Neem Ka Thana → Shrimadhopur → Ringas → Khatu Shyamji'
      }
    },
    {
      city: { hi: 'गुजरात (अहमदाबाद/सूरत)', en: 'Gujarat (Ahmedabad/Surat)' },
      distance: { hi: 'सीधी ट्रेनें (RGS)', en: 'Direct Trains (RGS)' },
      time: { hi: 'रात भर की यात्रा', en: 'Overnight journey' },
      route: {
        hi: 'रींगस जंक्शन (RGS) तक सीधी ट्रेनें → रींगस से होटल दक्ष मात्र 17 किमी (25 मिनट)',
        en: 'Direct overnight trains to Ringas Junction (RGS) → Hotel Daksh is 17 km (25 min) from station'
      }
    }
  ];

  return (
    <section id="why-choose" className="py-24 bg-white text-[#2c221e] relative overflow-hidden border-t border-amber-600/15">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-400/10 blur-[170px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full spiritual-pill text-xs font-bold mb-4 shadow-sm">
            <span>⚖️ {t('निष्पक्ष तुलना', 'Objective Comparison')}</span>
            <span className="text-amber-500">•</span>
            <span>Why Pilgrims Recommend Hotel Daksh</span>
          </div>
          <h2 className="font-temple text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1c1512] mb-4">
            {t('खाटू में होटल दक्ष ही क्यों चुनें?', 'Why Choose Hotel Daksh in Khatu?')}
          </h2>
          <p className="text-sm sm:text-base text-[#5c4a3e] max-w-2xl mx-auto">
            {t(
              'खाटू यात्रा में सही होटल का चयन आपकी यात्रा को सफल या कठिन बना सकता है। जानिए क्यों हज़ारों भक्त हर बार होटल दक्ष को ही अपनी पहली पसंद बनाते हैं:',
              'Selecting the right hotel can make your pilgrimage seamless and peaceful. Here is why thousands of devotees choose Hotel Daksh every time:'
            )}
          </p>
        </div>

        {/* Mobile View: Comparison Cards (Phone optimized) */}
        <div className="block md:hidden space-y-4 mb-12">
          <div className="text-center text-xs text-amber-900 font-bold mb-3 bg-amber-500/10 py-2 px-3 rounded-full border border-amber-500/20">
            {t('⚖️ होटल दक्ष और अन्य होटलों की सीधी तुलना', '⚖️ Hotel Daksh vs Other Khatu Hotels Comparison')}
          </div>
          {comparisonData.map((row, idx) => {
            const IconComponent = row.icon;
            return (
              <div 
                key={idx}
                className="bg-[#faf8f5] rounded-2xl p-4 border border-amber-500/25 shadow-sm space-y-3"
              >
                <div className="flex items-center gap-2 pb-2 border-b border-amber-600/15">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-800 shrink-0">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#1c1512]">{t(row.feature)}</h4>
                  </div>
                </div>

                {/* Hotel Daksh Advantage */}
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-500/30">
                  <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-emerald-900 mb-1">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>होटल दक्ष (Hotel Daksh)</span>
                  </div>
                  <p className="text-xs text-emerald-950 font-medium pl-5 leading-relaxed">
                    {t(row.hotelDaksh)}
                  </p>
                </div>

                {/* Other Hotels Limitation */}
                <div className="p-2.5 rounded-xl bg-white border border-red-500/20">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-red-800 mb-0.5">
                    <X className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span>{t('अन्य सामान्य होटल', 'Other Standard Hotels')}</span>
                  </div>
                  <p className="text-xs text-[#6c5a4d] pl-5 leading-relaxed">
                    {t(row.others)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop View: Comparison Table */}
        <div className="hidden md:block bg-[#faf8f5] rounded-[32px] p-6 sm:p-8 border border-amber-500/30 shadow-xl shadow-amber-950/5 mb-16 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left border-collapse">
            <thead>
              <tr className="border-b border-amber-600/20 text-xs sm:text-sm">
                <th className="py-4 px-4 font-bold text-amber-900 w-1/3 uppercase tracking-wider">
                  {t('सुविधा एवं आवश्यकता', 'Feature & Requirement')}
                </th>
                <th className="py-4 px-4 font-bold text-emerald-800 bg-emerald-50/80 rounded-t-2xl w-1/3 border-t-2 border-emerald-500">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span>होटल दक्ष (Hotel Daksh)</span>
                  </div>
                </th>
                <th className="py-4 px-4 font-bold text-[#7c6a5d] w-1/3">
                  {t('अन्य सामान्य होटल / लॉज', 'Other Typical Hotels / Lodges')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-600/15 text-xs sm:text-sm">
              {comparisonData.map((row, idx) => {
                const IconComponent = row.icon;
                return (
                  <tr key={idx} className="hover:bg-amber-500/5 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2 font-bold text-[#1c1512]">
                        <IconComponent className="w-4 h-4 text-amber-700 shrink-0" />
                        <span>{t(row.feature)}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 bg-emerald-50/60 font-semibold text-emerald-950">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{t(row.hotelDaksh)}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-[#6c5a4d]">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{t(row.others)}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* City-by-City Travel Matrix */}
        <div className="bg-white rounded-[32px] p-6 sm:p-10 border border-amber-600/20 shadow-lg shadow-amber-950/5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-amber-600/15">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
                {t('सुगम यात्रा मार्गदर्शिका', 'Yatra & Transit Guide')}
              </div>
              <h3 className="font-temple text-2xl sm:text-3xl font-extrabold text-[#1c1512]">
                {t('विभिन्न शहरों से खाटू श्यामजी कैसे पहुंचें?', 'How to Reach Khatu Shyamji from Major Cities?')}
              </h3>
            </div>
            <div className="text-xs text-[#5c4a3e] max-w-xs">
              {t(
                'रींगस जंक्शन (RGS) रेलवे स्टेशन से होटल दक्ष मात्र 17 किमी (25 मिनट) की दूरी पर है।',
                'Hotel Daksh is just 17 km (25 mins drive) from Ringas Junction (RGS) Railway Station.'
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cityRoutes.map((route, i) => (
              <div 
                key={i} 
                className="bg-[#faf8f5] p-5 rounded-2xl border border-amber-500/20 flex flex-col justify-between hover:border-amber-500/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-temple text-base font-bold text-[#1c1512]">{t(route.city)}</span>
                    <span className="text-[11px] font-bold text-amber-800 bg-amber-500/15 px-2 py-0.5 rounded-full border border-amber-500/25">
                      {t(route.distance)}
                    </span>
                  </div>
                  <div className="text-[11px] text-emerald-800 font-semibold mb-3">
                    {t('समय:', 'Time:')} {t(route.time)}
                  </div>
                  <p className="text-xs text-[#5c4a3e] leading-relaxed">
                    {t(route.route)}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-amber-600/10 text-[10px] text-amber-900 font-bold flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-700" />
                  <span>{t('सीधे आलोदा चौराहा पर पहुंचें', 'Reach directly at Aloda Chauraha')}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick WhatsApp Assistance */}
          <div className="mt-8 pt-6 border-t border-amber-600/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="text-xs text-[#5c4a3e]">
              {t(
                'रास्ते में कोई समस्या हो या रींगस से पिकअप टैक्सी चाहिए? होटल दक्ष टीम 24 घंटे मार्गदर्शन हेतु तैयार है।',
                'Need navigation help or taxi pickup from Ringas Station? Hotel Daksh team is available 24/7 on WhatsApp.'
              )}
            </div>
            <button
              onClick={() => onOpenBooking()}
              className="btn-kesar-gold px-6 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 cursor-pointer shadow-md shrink-0"
            >
              <span>{t('सीधा कमरा बुक करें (Zero Commission)', 'Direct Room Reservation (Zero Commission)')}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
