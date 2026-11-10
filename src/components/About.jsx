import React from 'react';
import { Crown, HeartHandshake, ShieldCheck, MapPin, Sparkles, Check, ArrowRight, Train, Car } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-[#faf8f5] text-[#2c221e] relative overflow-hidden border-t border-amber-600/15">
      {/* Ambient Soft Gold Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-400/10 blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full spiritual-pill text-xs font-bold mb-4 shadow-sm">
            <span>{t('🦚 पावन धाम', '🦚 Sacred Sanctuary')}</span>
            <span className="text-amber-500">•</span>
            <span>{t('होटल दक्ष परिचय', 'About Hotel Daksh')}</span>
          </div>
          <h2 className="font-temple text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1c1512] leading-tight mb-5">
            {t('भक्ति, सेवा और समर्पण।', 'Devotion, Service & Pure Serenity.')} <br />
            <span className="font-script italic text-2xl sm:text-4xl text-amber-800 font-normal">
              A Sacred Abode for Every Shyam Devotee
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#5c4a3e] leading-relaxed">
            {t(
              'होटल दक्ष का उद्देश्य खाटू श्याम जी आने वाले प्रत्येक श्याम भक्त की यात्रा को सुगम, आनंददायक व तनावमुक्त बनाना है। आलोदा चौराहा पर स्थित होने के कारण यहाँ से मुख्य मंदिर व श्याम कुंड पहुँचना अत्यंत सरल है।',
              'Hotel Daksh is dedicated to making every Shyam devotee’s pilgrimage seamless, comfortable, and spiritually fulfilling. Situated right at Aalpda Choraha, accessing the Main Temple and sacred Shyam Kund is effortless and quick.'
            )}
          </p>
        </div>

        {/* Bento Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Visual Feature Card (7 cols) */}
          <div className="md:col-span-7 bg-white rounded-[32px] overflow-hidden p-8 sm:p-10 flex flex-col justify-between relative group border border-amber-600/20 shadow-lg shadow-amber-950/5">
            <div className="relative z-10 max-w-lg">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800 block mb-2">
                {t('अद्वितीय पावन स्थिति (Sacred Location)', 'Prime Sacred Location')}
              </span>
              <h3 className="font-temple text-2xl sm:text-3xl font-bold text-[#1c1512] mb-3">
                {t('मंदिर से मात्र 10 मिनट की पैदल दूरी।', 'Just 10 Minutes Walk from Temple.')}
              </h3>
              <p className="text-xs sm:text-sm text-[#5c4a3e] leading-relaxed mb-6 font-normal">
                {t(
                  'भीड़भाड़ और जाम से दूर, आलोदा चौराहे पर स्थित होटल दक्ष से आप प्रातः मंगला आरती, शृंगार आरती अथवा सायंकालीन भोग आरती में बिना किसी असुविधा के पैदल अथवा ई-रिक्शा द्वारा पहुँच सकते हैं।',
                  'Located peacefully at Aloda Choraha away from temple rush and gridlocks. Reach early morning Mangla Aarti, Shringar Aarti, or evening Bhog Aarti effortlessly by walking or quick E-rickshaws.'
                )}
              </p>
              
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-amber-600/15 text-center">
                <div className="p-2 bg-[#faf8f5] rounded-xl border border-amber-500/15">
                  <div className="font-temple text-lg sm:text-xl font-bold text-amber-800">{t('10 मिनट', '10 Mins')}</div>
                  <div className="text-[10px] text-[#7c6a5d] uppercase tracking-wider font-bold">{t('मंदिर (1.5 km)', 'Temple (1.5 km)')}</div>
                </div>
                <div className="p-2 bg-[#faf8f5] rounded-xl border border-amber-500/15">
                  <div className="font-temple text-lg sm:text-xl font-bold text-amber-800">{t('12 मिनट', '12 Mins')}</div>
                  <div className="text-[10px] text-[#7c6a5d] uppercase tracking-wider font-bold">{t('श्याम कुंड (Snan)', 'Shyam Kund (Holy Bath)')}</div>
                </div>
                <div className="p-2 bg-[#faf8f5] rounded-xl border border-amber-500/15">
                  <div className="font-temple text-lg sm:text-xl font-bold text-amber-800">{t('17 किमी', '17 KM')}</div>
                  <div className="text-[10px] text-[#7c6a5d] uppercase tracking-wider font-bold">{t('रींगस जंक्शन', 'Ringas Junction')}</div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl overflow-hidden aspect-[16/9] border border-amber-500/20 relative shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1000" 
                alt="Hotel Daksh Interior" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column Bento Cards (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            
            {/* Card 1: Rajasthani Devotee Care */}
            <div className="bg-white rounded-[32px] p-8 flex-1 flex flex-col justify-between border border-amber-600/20 shadow-lg shadow-amber-950/5">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-800 mb-5">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="font-temple text-xl font-bold text-[#1c1512] mb-2">
                  {t('अतिथि देवो भव • आत्मीय सत्कार', 'Atithi Devo Bhava • Devoted Hospitality')}
                </h4>
                <p className="text-xs sm:text-sm text-[#5c4a3e] leading-relaxed font-normal">
                  {t(
                    'हमारा प्रत्येक स्टाफ सदस्य आपकी सेवा को श्याम बाबा की सेवा मानकर कार्य करता है। मंदिर समय, वीआईपी दर्शन प्रक्रिया, और बुजुर्गों हेतु ई-रिक्शा की व्यवस्था हमारा फ्रंट डेस्क स्वयं संभालता है।',
                    'Our staff treats service to pilgrims as devotion to Shyam Baba. Darshan timings, entry updates, and elderly E-rickshaw arrangements are cheerfully handled by our 24/7 front desk.'
                  )}
                </p>
              </div>

              <div className="pt-5 border-t border-amber-600/15 mt-6 flex items-center gap-2 text-xs text-amber-800 font-bold">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>{t('24/7 समर्पित यात्री सहायता एवं मार्गदर्शन', '24/7 Dedicated Devotee Concierge & Guidance')}</span>
              </div>
            </div>

            {/* Card 2: Purity and Sattvik Environment */}
            <div className="bg-white rounded-[32px] p-8 flex-1 flex flex-col justify-between border border-amber-600/20 shadow-lg shadow-amber-950/5">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-800 mb-5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-temple text-xl font-bold text-[#1c1512] mb-2">
                  {t('पवित्रता, शांति एवं स्वच्छता', 'Purity, Peace & Supreme Hygiene')}
                </h4>
                <p className="text-xs sm:text-sm text-[#5c4a3e] leading-relaxed font-normal">
                  {t(
                    'धार्मिक मर्यादा का पूर्ण पालन, 100% शुद्ध शाकाहारी परिसर, कीटाणुरहित स्वच्छ बिस्तर, स्वच्छ शौचालय एवं शांत वातावरण ताकि आप प्रभु स्मरण में लीन रह सकें।',
                    'Absolute spiritual decorum, 100% pure vegetarian premises, sanitized fresh linens, spotless bathrooms, and quiet rooms ensuring undisturbed peace and devotion.'
                  )}
                </p>
              </div>

              <div className="pt-5 border-t border-amber-600/15 mt-6 flex items-center gap-2 text-xs text-emerald-700 font-bold">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>{t('100% शुद्ध सात्विक भोजनालय (लहसुन-प्याज रहित विकल्प)', '100% Pure Sattvik Kitchen (Jain / No Onion-Garlic available)')}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
