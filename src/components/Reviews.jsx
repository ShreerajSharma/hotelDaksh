import React from 'react';
import { Star, CheckCircle2, Sparkles, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Reviews = () => {
  const { t } = useLanguage();

  const reviewsList = [
    {
      name: { hi: 'राजेश शर्मा व परिवार', en: 'Rajesh Sharma & Family' },
      location: { hi: 'नई दिल्ली', en: 'New Delhi' },
      tag: { hi: 'एकादशी मेला दर्शन', en: 'Ekadashi Mela Darshan' },
      rating: 5,
      review: {
        hi: 'होटल दक्ष में रुकना हमारी खाटू यात्रा का सबसे अच्छा निर्णय था। मुख्य मंदिर मात्र 500 मीटर की सुखद पैदल दूरी पर है। प्रातः मंगला आरती के समय 4:30 बजे खौलता गर्म पानी उपलब्ध था। पार्किंग अत्यंत सुरक्षित है। जय श्री श्याम!',
        en: 'Staying at Hotel Daksh was the best decision for our Khatu pilgrimage. The main Mandir is barely a 500-meter pleasant walk. Piping hot water was ready at 4:30 AM before Mangla Aarti. Parking is exceptionally secure. Jai Shree Shyam!'
      },
    },
    {
      name: { hi: 'सुनीता अग्रवाल एवं स्वजन', en: 'Sunita Agarwal & Relatives' },
      location: { hi: 'जयपुर (राजस्थान)', en: 'Jaipur (Rajasthan)' },
      tag: { hi: 'पारिवारिक तीर्थ यात्रा', en: 'Family Pilgrimage' },
      rating: 5,
      review: {
        hi: 'हमने सुपर डिलक्स परिवार कक्ष लिया था जिसमें 5 लोग बहुत आराम से रुके। बुजुर्ग माता-पिता के लिए ग्राउंड फ्लोर और ई-रिक्शा की व्यवस्था स्टाफ ने तुरंत कराई। सात्विक बिना लहसुन-प्याज का भोजन घर जैसा स्वादिष्ट था।',
        en: 'We booked the Deluxe Family room where 5 of us stayed comfortably. For elderly parents, ground floor access and immediate E-rickshaws were organized by staff. Pure Sattvik food without onion/garlic tasted like home.'
      },
    },
    {
      name: { hi: 'विक्रम सिंह राठौड़', en: 'Vikram Singh Rathore' },
      location: { hi: 'अहमदाबाद (गुजरात)', en: 'Ahmedabad (Gujarat)' },
      tag: { hi: 'सप्ताहांत श्याम दर्शन', en: 'Weekend Shyam Darshan' },
      rating: 5,
      review: {
        hi: 'आलोदा चौराहे पर सबसे बढ़िया होटल। जनरेटर बैकअप निरंतर चालू था जिससे एसी और पंखे बिना रुके चले। स्टाफ का व्यवहार बहुत आत्मीय और मददगार था। हर श्याम भक्त को यहाँ जरूर रुकना चाहिए।',
        en: 'Undoubtedly the best hotel at Aloda Choraha. Continuous generator backup kept ACs running without flicker. The staff hospitality was deeply warm and devoted. Highly recommended for every Shyam devotee.'
      },
    }
  ];

  return (
    <section className="py-24 bg-[#faf8f5] text-[#2c221e] relative overflow-hidden border-t border-amber-600/15">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-400/10 blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-amber-800/90 mb-2 font-sans">
            {t('श्याम भक्त अनुभव', 'Guest Reflections')}
          </p>
          <h2 className="font-temple text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1c1512] mb-3">
            {t('भक्तों का विश्वास व', 'Pilgrim Trust &')} <span className="sacred-gold-text">{t('आशीर्वाद', 'Blessings')}</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#5c4a3e] max-w-xl mx-auto mb-6 leading-relaxed">
            {t(
              'हज़ारों श्याम भक्तों ने खाटू धाम की अपनी पवित्र यात्रा में होटल दक्ष को अपना विश्राम स्थल बनाया है।',
              'Thousands of Shyam pilgrims make Hotel Daksh their peaceful haven on their holy visit to Khatu Dham.'
            )}
          </p>

          {/* Rating Pill */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-amber-500/35 shadow-md shadow-amber-950/5">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
              ))}
            </div>
            <div className="h-4 w-px bg-amber-600/20" />
            <span className="text-xs font-bold text-[#4a3b32]">
              <strong className="text-amber-800 font-extrabold">4.8 / 5.0</strong>{' '}
              {t('गूगल रिव्यूज़ पर श्याम भक्तों द्वारा प्रमाणित', 'Rating on Google Reviews from Verified Guests')}
            </span>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] p-7 sm:p-8 flex flex-col justify-between border border-amber-600/20 shadow-md shadow-amber-950/5 hover:shadow-xl hover:border-amber-500/40 transition-all duration-300"
            >
              <div>
                {/* Rating & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-amber-800 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/25">
                    {t(item.tag)}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#5c4a3e] leading-relaxed mb-6 font-normal">
                  "{t(item.review)}"
                </p>
              </div>

              <div className="pt-5 border-t border-amber-600/15 flex items-center justify-between">
                <div>
                  <div className="font-temple text-sm font-bold text-[#1c1512] tracking-wide">{t(item.name)}</div>
                  <div className="text-[11px] text-amber-700 font-semibold">{t(item.location)}</div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t('सत्यापित यात्री', 'Verified Pilgrim')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
