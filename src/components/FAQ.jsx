import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle, Navigation, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FAQ = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const { t, isHindi } = useLanguage();

  const faqs = [
    {
      qHi: 'श्री खाटू श्याम जी मुख्य मंदिर से होटल दक्ष की दूरी कितनी है?',
      qEn: 'How far is Hotel Daksh from Shree Khatu Shyam Ji Temple?',
      aHi: 'होटल दक्ष मुख्य मंदिर से मात्र 500 मीटर (लगभग 5 से 7 मिनट की सुखद व सुगम पैदल दूरी) पर आलोदा चौराहा, बीएसएनएल टावर के पास स्थित है। होटल के ठीक सामने से मंदिर हेतु 24 घंटे ई-रिक्शा (E-Rickshaw) भी सुलभ उपलब्ध रहते हैं, जिससे बुजुर्गों व बच्चों को कोई असुविधा नहीं होती।',
      aEn: 'Hotel Daksh is located just 500 meters (a comfortable 5-7 minute walk) from the Main Temple at Aloda Choraha, near BSNL Tower. Round-the-clock E-rickshaws are readily available right at our doorstep for elderly guests and families.',
      tag: { hi: 'मंदिर दूरी', en: 'Proximity' }
    },
    {
      qHi: 'क्या होटल में निजी कार एवं टूरिस्ट बसों हेतु सुरक्षित पार्किंग है?',
      qEn: 'Does Hotel Daksh have free gated parking for cars and tourist buses?',
      aHi: 'हाँ, होटल दक्ष में 50 से अधिक कारों एवं बड़ी टूरिस्ट बसों हेतु विशाल, सुरक्षित एवं गेटेड ऑन-साइट पार्किंग परिसर उपलब्ध है। यह पूरी तरह से सीसीटीवी (CCTV) निगरानी में रहता है और हमारे अतिथियों हेतु पूर्णतः निःशुल्क है।',
      aEn: 'Yes! Hotel Daksh provides a spacious, gated on-site compound accommodating 50+ private vehicles and large tourist buses. Protected with 24/7 CCTV surveillance, completely complimentary for all staying guests.',
      tag: { hi: 'फ्री पार्किंग', en: 'Free Parking' }
    },
    {
      qHi: 'क्या प्रातःकालीन मंगला आरती स्नान हेतु 24 घंटे गर्म पानी मिलता है?',
      qEn: 'Is 24/7 hot water available for early morning Mangala Aarti?',
      aHi: 'बिल्कुल! सभी कमरों के अटैच्ड वेस्टर्न बाथरूम में 24/7 ऑटोमैटिक गीजर की सुविधा है, जिससे भक्त प्रातः 4:30 या 5:30 बजे की मंगला आरती हेतु कभी भी गर्म पानी से पवित्र स्नान कर सकते हैं।',
      aEn: 'Absolutely! Every attached western bathroom is fitted with automatic instant geysers delivering hot water 24/7, enabling a peaceful holy bath even at 4:00 AM before early morning Mangla Aarti.',
      tag: { hi: '24/7 गीजर', en: '24/7 Geyser' }
    },
    {
      qHi: 'होटल दक्ष में कौन-कौन सी कमरा श्रेणियां (Room Types) उपलब्ध हैं?',
      qEn: 'What room categories are available at Hotel Daksh?',
      aHi: 'होटल दक्ष में मुख्य रूप से 3 सुसज्जित श्रेणियां हैं: (1) Deluxe Double Room (2 Adults + 1 Child) - 1 लार्ज डबल बेड, (2) Triple Room - 1 डबल बेड + 1 अलग सिंगल बेड, (3) Deluxe Family Room - 2 बड़े डबल बेड (4 से 6 अतिथियों हेतु)। सभी कमरे वातानुकूलित (Split AC) हैं।',
      aEn: 'We offer 3 distinct air-conditioned room categories: (1) Deluxe Double Room (2 Adults + 1 Child) with 1 king-size bed, (2) Triple Room with 1 double + 1 single bed, and (3) Deluxe Family Room with 2 large double beds for 4 to 6 guests.',
      tag: { hi: 'रूम श्रेणियां', en: 'Room Types' }
    },
    {
      qHi: 'बिना कमीशन सीधे होटल से कमरा कैसे बुक कर सकते हैं?',
      qEn: 'How can I book a room directly without any commission?',
      aHi: 'आप हमारी वेबसाइट के माध्यम से सीधे WhatsApp (+91 98765 43210) पर संपर्क कर सकते हैं। सीधे बुकिंग पर कोई मध्यस्थ कमीशन नहीं लगता और आपको सर्वोत्तम रियायती दरें प्राप्त होती हैं। इसके अतिरिक्त आप MakeMyTrip के अधिकृत पेज से भी बुकिंग कर सकते हैं।',
      aEn: 'You can directly connect with our front desk via WhatsApp (+91 98765 43210) or call us. Direct reservations eliminate middleman charges and ensure best direct pilgrim rates. You can also book via our verified MakeMyTrip listing.',
      tag: { hi: 'सीधी बुकिंग', en: 'Direct Booking' }
    },
    {
      qHi: 'रींगस जंक्शन (Ringas Junction) से होटल दक्ष कैसे पहुंचें?',
      qEn: 'How to reach Hotel Daksh from Ringas Junction railway station?',
      aHi: 'रींगस रेलवे स्टेशन (RGS) से होटल दक्ष की दूरी लगभग 17 किमी है। रींगस स्टेशन के बाहर से 24 घंटे खाटूश्यामजी हेतु शेयरिंग टैक्सी, ऑटो व राजस्थान रोडवेज बसें उपलब्ध रहती हैं, जो आपको आलोदा चौराहे के निकट छोड़ती हैं।',
      aEn: 'Ringas Junction (RGS) is approximately 17 km from Hotel Daksh. Round-the-clock sharing cabs, private autos, and state buses run between Ringas and Khatu, dropping you conveniently right near Aloda Choraha.',
      tag: { hi: 'मार्ग दर्शन', en: 'Route Guide' }
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#faf8f5] text-[#2c221e] relative overflow-hidden border-t border-amber-600/15">
      {/* Decorative Aura */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-amber-400/10 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full spiritual-pill text-xs font-bold mb-4 shadow-sm">
            <span>{t('🪔 अक्सर पूछे जाने वाले प्रश्न', '🪔 Frequently Asked Questions')}</span>
            <span className="text-amber-500">•</span>
            <span>{t('यात्री मार्गदर्शिका', 'Pilgrim FAQ Guide')}</span>
          </div>
          <h2 className="font-temple text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c1512] mb-3">
            {t('खाटू यात्रा व आवास से जुड़े प्रश्न', 'Everything About Your Khatu Stay & Darshan')}
          </h2>
          <p className="text-xs sm:text-sm text-[#5c4a3e] max-w-lg mx-auto">
            {t(
              'आपके सुखद व तनावमुक्त खाटू दर्शन हेतु सभी महत्वपूर्ण जानकारियाँ एक स्थान पर।',
              'Key guidance and clear answers for a serene, stress-free holy pilgrimage to Khatu Dham.'
            )}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const question = isHindi ? faq.qHi : faq.qEn;
            const altQuestion = isHindi ? faq.qEn : faq.qHi;
            const answer = isHindi ? faq.aHi : faq.aEn;

            return (
              <div 
                key={idx}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen 
                    ? 'bg-white border-amber-500/50 shadow-md shadow-amber-950/5' 
                    : 'bg-white/80 hover:bg-white border-amber-600/15'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-900 border border-amber-500/25">
                        {t(faq.tag)}
                      </span>
                      <span className="text-xs text-[#8c7b6f] font-medium hidden sm:inline">
                        {altQuestion}
                      </span>
                    </div>
                    <h3 className="font-temple text-sm sm:text-base font-bold text-[#1c1512] leading-snug">
                      {question}
                    </h3>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 border ${
                    isOpen ? 'bg-amber-500 text-white border-amber-500 rotate-180' : 'bg-amber-50 text-amber-800 border-amber-500/20'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 animate-in fade-in duration-200">
                    <div className="pt-3 border-t border-amber-600/10 text-xs sm:text-sm text-[#5c4a3e] leading-relaxed">
                      {answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Assistance Banner */}
        <div className="mt-12 bg-white rounded-2xl p-5 sm:p-6 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-500/30">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#1c1512]">
                {t('क्या आपका कोई अन्य प्रश्न है?', 'Have another question?')}
              </div>
              <div className="text-[11px] text-[#5c4a3e]">
                {t('हमारी टीम 24 घंटे WhatsApp पर सहायता के लिए उपलब्ध है।', 'Our front desk team is ready 24/7 on WhatsApp.')}
              </div>
            </div>
          </div>
          <a
            href="https://wa.me/919876543210?text=Jai%20Shree%20Shyam!%20I%20have%20a%20question%20about%20Hotel%20Daksh%20Khatu."
            target="_blank"
            rel="noreferrer"
            className="btn-kesar-gold px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 cursor-pointer shadow-sm shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{t('WhatsApp पर पूछें', 'Ask on WhatsApp')}</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
