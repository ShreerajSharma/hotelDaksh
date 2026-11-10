import React from 'react';
import { Car, Navigation, Wifi, Flame, UtensilsCrossed, Clock, ShieldCheck, HeartHandshake, Zap, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Amenities = () => {
  const { t } = useLanguage();

  const bentoAmenities = [
    {
      icon: Car,
      tag: { hi: 'सुरक्षा (Security)', en: 'Security & Parking' },
      title: { hi: 'विशाल सुरक्षित निजी पार्किंग', en: 'Spacious Secure Gated Parking' },
      description: {
        hi: '50+ गाड़ियों व टूरिस्ट बसों हेतु बाउंड्री युक्त गेटेड पार्किंग। 24 घंटे सीसीटीवी कैमरे व सुरक्षा गार्ड तैनात।',
        en: 'Dedicated gated compound parking for 50+ cars and tourist buses. 24/7 CCTV surveillance and security guard on duty.'
      },
      stat: { hi: '50+ वाहन क्षमता', en: '50+ Vehicles Capacity' },
      span: 'md:col-span-8'
    },
    {
      icon: Navigation,
      tag: { hi: 'सान्निध्य (Proximity)', en: 'Prime Proximity' },
      title: { hi: 'मंदिर से निकटतम सुगम मार्ग', en: 'Direct Walk to Temple' },
      description: {
        hi: 'आलोदा चौराहा पर स्थित होने से मुख्य मंदिर तक 10 मिनट की पैदल दूरी व 3 मिनट में ई-रिक्शा से पहुँच।',
        en: 'Situated right at Aloda Choraha — 10 min walk or 3 min E-rickshaw directly to the main Mandir.'
      },
      stat: { hi: 'मात्र 10 मिनट दूरी', en: 'Just 10 Min Walk' },
      span: 'md:col-span-4'
    },
    {
      icon: Flame,
      tag: { hi: 'पवित्र स्नान (Snan)', en: 'Holy Snan' },
      title: { hi: '24/7 तुरंत गीजर गर्म पानी', en: '24/7 Hot Water Geysers' },
      description: {
        hi: 'मंगला आरती से पूर्व प्रातःकाल 4 बजे पवित्र स्नान हेतु हर कमरे में आधुनिक गीजर से निरंतर गर्म जल उपलब्ध।',
        en: 'Reliable instant hot water in every room for 4:00 AM holy snan before early morning Mangla Aarti.'
      },
      stat: { hi: 'निरंतर गर्म जल', en: 'Instant Geyser' },
      span: 'md:col-span-4'
    },
    {
      icon: UtensilsCrossed,
      tag: { hi: 'सात्विक आहार (Prasad)', en: 'Sattvik Dining' },
      title: { hi: '100% शुद्ध सात्विक भोजन', en: '100% Pure Sattvik Food' },
      description: {
        hi: 'घर जैसा शुद्ध, स्वच्छ व पौष्टिक भोजन। श्रद्धालुओं की मांग पर बिना लहसुन-प्याज का भोजन कक्ष में उपलब्ध।',
        en: 'Wholesome, homely, and hygienic vegetarian meals. Jain & no-onion-garlic food freshly prepared on request.'
      },
      stat: { hi: 'शुद्ध सात्विक', en: 'Pure Vegetarian' },
      span: 'md:col-span-4'
    },
    {
      icon: Zap,
      tag: { hi: 'सुविधा (Uptime)', en: 'Power Backup' },
      title: { hi: '100% निर्बाध पॉवर बैकअप', en: '100% Power Generator Backup' },
      description: {
        hi: 'साइलेंट हेवी जनरेटर बैकअप, जिससे तेज गर्मी अथवा आंधी में भी एसी, रोशनी व पंखे बिना रुके चलते रहें।',
        en: 'Heavy-duty silent generator ensures ACs, lighting, and fans continue seamlessly during any power cut.'
      },
      stat: { hi: '24 घंटे निर्बाध', en: '24/7 Uninterrupted' },
      span: 'md:col-span-4'
    },
    {
      icon: HeartHandshake,
      tag: { hi: 'दर्शन सेवा (Seva)', en: 'Devotee Seva' },
      title: { hi: 'ई-रिक्शा व मंदिर सारथी सेवा', en: 'E-Rickshaw & Travel Assistance' },
      description: {
        hi: 'वरिष्ठ नागरिकों, बच्चों एवं दिव्यांगों हेतु होटल के ठीक बाहर से मुख्य मंदिर तक ई-रिक्शा की तुरंत व्यवस्था।',
        en: 'Instant doorstep E-rickshaws for senior citizens, families with kids, and seamless temple transfers.'
      },
      stat: { hi: 'द्वार पर वाहन', en: 'Doorstep Transit' },
      span: 'md:col-span-6'
    },
    {
      icon: Clock,
      tag: { hi: 'यात्री सत्कार (Help Desk)', en: 'Help Desk' },
      title: { hi: '24 घंटे फ्रंट डेस्क व यात्री सहयोग', en: '24/7 Devotee Help Desk' },
      description: {
        hi: 'देर रात आगमन, तड़के प्रस्थान, दर्शन लाइन की स्थिति एवं सालासर बालाजी टैक्सी बुकिंग में पूर्ण सहयोग।',
        en: 'Late-night check-in, early departure assistance, darshan updates, and Salasar Balaji taxi arrangements.'
      },
      stat: { hi: 'सदा सेवारत', en: 'Always Available' },
      span: 'md:col-span-6'
    }
  ];

  return (
    <section id="amenities" className="py-24 bg-white text-[#2c221e] relative overflow-hidden border-t border-amber-600/15">
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-400/10 blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full spiritual-pill text-xs font-bold mb-4 shadow-sm">
            <span>{t('🦚 यात्री सुविधाएं', '🦚 Pilgrim Amenities')}</span>
            <span className="text-amber-500">•</span>
            <span>{t('निःस्वार्थ सत्कार', 'Selfless Hospitality')}</span>
          </div>
          <h2 className="font-temple text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1c1512] mb-4">
            {t('आपकी यात्रा को सुखद बनाने वाली सुविधाएं', 'Thoughtfully Curated for Your Holy Pilgrimage')} <br />
            <span className="font-script italic text-2xl sm:text-4xl text-amber-800 font-normal">
              Every Comfort for Your Sacred Visit
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#5c4a3e] max-w-xl mx-auto">
            {t(
              'होटल दक्ष में प्रत्येक सुविधा इस प्रकार तैयार की गई है कि आपको घर जैसा अपनत्व और देवतुल्य आदर प्राप्त हो।',
              'Every amenity at Hotel Daksh is designed so you experience the warmth of home and highest spiritual comfort.'
            )}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {bentoAmenities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`${item.span} bg-[#faf8f5] rounded-[28px] p-7 sm:p-8 flex flex-col justify-between relative group border border-amber-600/20 shadow-md shadow-amber-950/5 hover:shadow-xl hover:border-amber-500/40 transition-all duration-300`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-800 group-hover:scale-110 transition-transform shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-white/80 px-2.5 py-1 rounded-full border border-amber-500/15">
                      {t(item.tag)}
                    </span>
                  </div>

                  <h3 className="font-temple text-xl font-bold text-[#1c1512] mb-2 group-hover:text-amber-900 transition-colors">
                    {t(item.title)}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5c4a3e] leading-relaxed font-normal">
                    {t(item.description)}
                  </p>
                </div>

                <div className="pt-5 border-t border-amber-600/15 mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-amber-800 font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>{t(item.stat)}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Amenities;
