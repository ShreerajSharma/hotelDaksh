import React, { useState } from 'react';
import { Sun, Moon, Clock, MapPin, Sparkles, Compass, CheckCircle2, ChevronRight, Bell } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TempleGuide = () => {
  const [season, setSeason] = useState('winter');
  const { t } = useLanguage();

  const schedules = {
    winter: [
      {
        name: { hi: 'मंगला आरती (Mangla Aarti)', en: 'Mangla Aarti (Awakening)' },
        time: '05:30 AM',
        desc: {
          hi: 'बाबा श्याम का प्रातःकालीन जागरण दर्शन एवं शंखनाद',
          en: 'Morning awakening darshan of Baba Shyam with holy conch resonance'
        },
        icon: Sun
      },
      {
        name: { hi: 'शृंगार आरती (Shringaar Aarti)', en: 'Shringaar Aarti (Adornment)' },
        time: '08:00 AM',
        desc: {
          hi: 'ताजे गुलाब पुष्पों, मोर पंख व पावन इत्र से दिव्य शृंगार दर्शन',
          en: 'Divine adornment darshan with fresh roses, peacock feather & sacred itra'
        },
        icon: Sparkles
      },
      {
        name: { hi: 'भोग आरती (Bhog Aarti)', time: '12:30 PM', en: 'Bhog Aarti (Sacred Offering)' },
        time: '12:30 PM',
        desc: {
          hi: 'माखन-मिश्री, चूरमा व विशेष भोग अर्पण का पावन समय',
          en: 'Holy mid-day offering of makhan-mishri, churma & traditional bhog'
        },
        icon: Sun
      },
      {
        name: { hi: 'संध्या आरती (Sandhya Aarti)', en: 'Sandhya Aarti (Evening Lights)' },
        time: '06:30 PM',
        desc: {
          hi: 'दीप प्रज्ज्वलन, ढोल-नगाड़ों की गूंज व भव्य महाआरती',
          en: 'Magnificent evening lamp lighting and devotional drum resonance'
        },
        icon: Moon
      },
      {
        name: { hi: 'शयन आरती (Shayan Aarti)', en: 'Shayan Aarti (Night Rest)' },
        time: '09:00 PM',
        desc: {
          hi: 'पट बंद होने से पूर्व प्रभु श्याम के शयन दर्शन',
          en: 'Night resting prayers before the sanctum doors close'
        },
        icon: Moon
      },
    ],
    summer: [
      {
        name: { hi: 'मंगla आरती (Mangla Aarti)', en: 'Mangla Aarti (Awakening)' },
        time: '04:30 AM',
        desc: {
          hi: 'शीतल भोर में प्रभु का पावन जागरण दर्शन',
          en: 'Breezy dawn awakening darshan of Shyam Baba'
        },
        icon: Sun
      },
      {
        name: { hi: 'शृंगार आरती (Shringaar Aarti)', en: 'Shringaar Aarti (Adornment)' },
        time: '07:30 AM',
        desc: {
          hi: 'चंदन, मोगरा पुष्पों एवं भव्य अलंकारों से अलौकिक शृंगार',
          en: 'Morning darshan with sandalwood, mogra garlands & royal ornaments'
        },
        icon: Sparkles
      },
      {
        name: { hi: 'भोग आरती (Bhog Aarti)', en: 'Bhog Aarti (Sacred Offering)' },
        time: '12:30 PM',
        desc: {
          hi: 'दोपहर का पावन राजभोग अर्पण',
          en: 'Afternoon grand Rajbhog offering to Baba Shyam'
        },
        icon: Sun
      },
      {
        name: { hi: 'संध्या आरती (Sandhya Aarti)', en: 'Sandhya Aarti (Sunset Devotion)' },
        time: '07:30 PM',
        desc: {
          hi: 'सूर्यास्त के उपरांत भव्य दीपमाला आरती',
          en: 'Post-sunset grand lamp aarti and prayer hymns'
        },
        icon: Moon
      },
      {
        name: { hi: 'शयन आरती (Shayan Aarti)', en: 'Shayan Aarti (Night Rest)' },
        time: '10:00 PM',
        desc: {
          hi: 'रात्रि शयन आरती एवं पुष्प वर्षा',
          en: 'Night resting prayer and floral offering'
        },
        icon: Moon
      },
    ],
    mela: [
      {
        name: { hi: 'अखंड दर्शन (24 Hours Open)', en: 'Akhand Darshan (Open 24 Hours)' },
        time: '24 Hours Non-Stop',
        desc: {
          hi: 'शुक्ल एकादशी, द्वादशी व फाल्गुन मेले में बिना रुके दर्शन लाइन चालू',
          en: 'Unbroken round-the-clock darshan queues during Shukla Ekadashi, Dwadashi & Falgun Lakhi Mela'
        },
        icon: Sparkles
      },
      {
        name: { hi: 'छप्पन भोग व विशेष कीर्तन', en: 'Chhappan Bhog & Grand Kirtan' },
        time: 'Special Sessions',
        desc: {
          hi: 'देशभर से आए श्याम भक्तों द्वारा अखंड संकीर्तन व निशान यात्रा',
          en: 'Continuous devotional kirtans and Nishan Yatra from across India'
        },
        icon: Sun
      },
      {
        name: { hi: 'वरिष्ठ नागरिक दर्शन मार्गदर्शन', en: 'Senior Citizen Darshan Guidance' },
        time: 'All Day Assistance',
        desc: {
          hi: 'हमारे होटल डेस्क द्वारा सुगम दर्शन लाइन की पूरी जानकारी',
          en: 'Real-time queue guidance and wheelchair/rickshaw assistance by our desk'
        },
        icon: CheckCircle2
      },
    ]
  };

  const sacredSpots = [
    {
      title: { hi: 'श्री खाटू श्याम जी मुख्य मंदिर', en: 'Shri Khatu Shyam Ji Main Temple' },
      distance: { hi: '10 मिनट पैदल (800 मीटर)', en: '10 Min Walk (800m)' },
      desc: {
        hi: 'शीश के दानी लखदातार भगवान श्री श्याम का अलौकिक निज मंदिर।',
        en: 'The divine sanctum sanctorum of Lord Khatu Shyam Ji (Barbareek).'
      },
    },
    {
      title: { hi: 'पवित्र श्याम कुंड (Shyam Kund)', en: 'Holy Shyam Kund (Kund Snan)' },
      distance: { hi: '12 मिनट पैदल (1.0 किमी)', en: '12 Min Walk (1.0 km)' },
      desc: {
        hi: 'वह पावन सरोवर जहाँ से बाबा श्याम का दिव्य शीश प्रकट हुआ था। यहाँ स्नान से समस्त कष्ट दूर होते हैं।',
        en: 'The sacred stepwell where the divine head of Baba Shyam manifested. Holy dip washes away worldly distress.'
      },
    },
    {
      title: { hi: 'तोरण द्वार (भव्य प्रवेश द्वार)', en: 'Toran Dwar (Grand Archway)' },
      distance: { hi: '5 मिनट ऑटो (2 किमी)', en: '5 Min Auto (2 km)' },
      desc: {
        hi: 'खाटू धाम में प्रवेश का भव्य द्वार जहाँ से लाखों भक्त बाबा के निशान लेकर पदयात्रा करते हैं।',
        en: 'The celebrated welcoming gateway to Khatu Dham where pilgrims embark on holy Nishan Yatra.'
      },
    },
    {
      title: { hi: 'सालासर बालाजी धाम (Salasar)', en: 'Salasar Balaji Dham' },
      distance: { hi: '1.5 घंटे टैक्सी (100 किमी)', en: '1.5 Hr Cab (100 km)' },
      desc: {
        hi: 'दाढ़ी-मूँछ वाले श्री हनुमान जी का प्रसिद्ध सिद्ध धाम। हमारे होटल से सीधी टैक्सी उपलब्ध है।',
        en: 'Celebrated miracle shrine of Lord Hanuman with moustache. Direct taxis arranged from Hotel Daksh.'
      },
    }
  ];

  return (
    <section id="khatu-guide" className="py-24 bg-[#faf8f5] text-[#2c221e] relative overflow-hidden border-t border-amber-600/15">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-400/10 blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full spiritual-pill text-xs font-bold mb-4 shadow-sm">
            <span>{t('🦚 दर्शन मार्गदर्शिका', '🦚 Pilgrimage Guide')}</span>
            <span className="text-amber-500">•</span>
            <span>{t('आरती समय सारणी', 'Aarti Timetable')}</span>
          </div>
          <h2 className="font-temple text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1c1512] mb-4">
            {t('आरती समय एवं', 'Daily Aarti Timings &')} <span className="sacred-gold-text">{t('खाटू धाम दर्शन', 'Khatu Dham Guide')}</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5c4a3e] max-w-xl mx-auto">
            {t(
              'बाबा श्याम के दर्शन, श्याम कुंड स्नान एवं आरती के समय का ध्यान रखकर अपनी यात्रा को मंगलमय बनाएं।',
              'Plan your holy pilgrimage around Baba Shyam’s sacred Aarti timings and holy Shyam Kund rituals.'
            )}
          </p>

          {/* Season Segmented Control */}
          <div className="inline-flex p-1 rounded-2xl sm:rounded-full bg-[#f4efe6] border border-amber-500/25 mt-8 shadow-inner flex-wrap justify-center gap-1 max-w-full">
            <button
              onClick={() => setSeason('winter')}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                season === 'winter' ? 'btn-kesar-gold text-[#1c1512] shadow-md' : 'text-[#5c4a3e] hover:text-[#1c1512]'
              }`}
            >
              {t('शीतकालीन (अक्टूबर – मार्च)', 'Winter (Oct – Mar)')}
            </button>
            <button
              onClick={() => setSeason('summer')}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                season === 'summer' ? 'btn-kesar-gold text-[#1c1512] shadow-md' : 'text-[#5c4a3e] hover:text-[#1c1512]'
              }`}
            >
              {t('ग्रीष्मकालीन (अप्रैल – सितंबर)', 'Summer (Apr – Sep)')}
            </button>
            <button
              onClick={() => setSeason('mela')}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                season === 'mela' ? 'btn-kesar-gold text-[#1c1512] shadow-md' : 'text-[#5c4a3e] hover:text-[#1c1512]'
              }`}
            >
              {t('एकादशी व मेला (24h अखंड)', 'Ekadashi & Fair (24h Open)')}
            </button>
          </div>
        </div>

        {/* Schedule & Spots Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Aarti Timeline (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-[32px] p-6 sm:p-8 border border-amber-600/20 shadow-lg shadow-amber-950/5">
            <div className="flex items-center justify-between pb-6 border-b border-amber-600/15 mb-6">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-amber-700" />
                <h3 className="font-temple text-xl font-bold text-[#1c1512]">
                  {t('दैनिक पावन आरती समय', 'Daily Sacred Aarti Schedule')}
                </h3>
              </div>
              <span className="text-[11px] text-amber-900 font-bold px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/25">
                {t('श्री श्याम मंदिर कमेटी आधिकारिक समय', 'Official Temple Schedule')}
              </span>
            </div>

            <div className="space-y-3">
              {schedules[season].map((aarti, idx) => {
                const Icon = aarti.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-[#faf8f5] hover:bg-amber-50/70 transition-colors border border-amber-500/15 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-800 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-devotional text-sm sm:text-base font-bold text-[#1c1512] tracking-wide">
                          {t(aarti.name)}
                        </div>
                        <div className="text-xs text-[#5c4a3e] mt-0.5">
                          {t(aarti.desc)}
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs sm:text-sm font-bold text-amber-900 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 shadow-sm">
                        {aarti.time}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-5 border-t border-amber-600/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5c4a3e] gap-2">
              <span>{t('* विशेष पर्व एवं एकादशी पर समय में आंशिक परिवर्तन संभव है।', '* Timings may slightly vary on Ekadashi and festival days.')}</span>
              <span className="text-amber-800 font-bold">{t('होटल रिसेप्शन से प्रतिदिन की ताजा सूचना प्राप्त करें', 'Check live updates with our front desk')}</span>
            </div>
          </div>

          {/* Sacred Landmarks (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-amber-600/20 shadow-lg shadow-amber-950/5">
              <div className="flex items-center gap-2.5 mb-6">
                <MapPin className="w-5 h-5 text-amber-700" />
                <h3 className="font-temple text-xl font-bold text-[#1c1512]">
                  {t('आस-पास के पवित्र तीर्थ स्थल', 'Nearby Sacred Landmarks')}
                </h3>
              </div>

              <div className="space-y-4">
                {sacredSpots.map((spot, i) => (
                  <div key={i} className="pb-4 border-b border-amber-600/15 last:border-0 last:pb-0">
                    <div className="flex items-baseline justify-between mb-1">
                      <h4 className="font-temple text-sm font-bold text-[#1c1512]">{t(spot.title)}</h4>
                      <span className="text-[11px] font-bold text-amber-800">{t(spot.distance)}</span>
                    </div>
                    <p className="text-xs text-[#5c4a3e] leading-relaxed">{t(spot.desc)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Devotee Tip Capsule */}
            <div className="bg-white rounded-[28px] p-5 border border-amber-500/30 flex items-start gap-3.5 shadow-md shadow-amber-950/5">
              <span className="text-xl">🪔</span>
              <div className="text-xs text-[#5c4a3e] leading-relaxed">
                <strong className="text-amber-900 font-bold">{t('श्रद्धालुओं हेतु विशेष परामर्श:', 'Pilgrim Tip:')}</strong>{' '}
                {t(
                  'प्रातः मंगला आरती दर्शन हेतु कम से कम 45 मिनट पूर्व उठें। हमारे यहाँ 24 घंटे गर्म पानी की व्यवस्था है जिससे आप बिना देरी पवित्र स्नान कर दर्शन हेतु प्रस्थान कर सकें।',
                  'Wake up 45 minutes before Mangla Aarti. Hotel Daksh provides instant 24/7 hot water geysers so you can take a holy bath comfortably and join the morning prayers on time.'
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TempleGuide;
