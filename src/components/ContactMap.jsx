import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, ChevronRight, ExternalLink, Car, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ContactMap = () => {
  const { t, language } = useLanguage();
  const googleMapsUrl = "https://www.google.co.in/maps/place/Hotel+Daksh/@27.371647,75.4005263,17z/data=!4m10!3m9!1s0x396ced7c87c50351:0xafdae41224dd7544!5m3!1s2026-11-10!4m1!1i2!8m2!3d27.371647!4d75.4031066!16s%2Fg%2F11v3nxm7xw";
  const makeMyTripUrl = "https://www.makemytrip.com/hotels/hotel_daksh-details-khatu.html";

  return (
    <section id="contact" className="py-24 bg-white text-[#2c221e] relative overflow-hidden border-t border-amber-600/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-amber-800/90 mb-2 font-sans">
            {t('स्थान एवं सुगम संपर्क', 'Location & Navigation')}
          </p>
          <h2 className="font-temple text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1c1512] mb-3">
            {t('होटल दक्ष तक', 'Seamless Directions to')} <span className="sacred-gold-text">{t('सुगम मार्ग', 'Hotel Daksh')}</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#5c4a3e] max-w-xl mx-auto leading-relaxed">
            {t(
              'आलोदा चौराहा, कृष्णा कॉलोनी, बीएसएनएल टावर के पास, खाटूश्यामजी। रींगस जंक्शन (17 किमी) अथवा हाईवे से सीधा, जाम-मुक्त सुगम प्रवेश।',
              'Aloda Choraha, Krishna Colony, Near BSNL Tower, Khatu Shyam Ji. Direct, jam-free access from Ringas Junction (17 km) or highway.'
            )}
          </p>

          {/* External Verification Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#faf8f5] border border-blue-500/25 text-xs font-bold text-[#1c1512] hover:border-blue-500 shadow-sm transition-all"
            >
              <Navigation className="w-3.5 h-3.5 text-blue-600" />
              <span>{t('Google Maps पर सत्यापित लोकेशन (4.6★)', 'Google Maps Verified (4.6★)')}</span>
              <ExternalLink className="w-3 h-3 text-amber-700" />
            </a>

            <a 
              href={makeMyTripUrl} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#faf8f5] border border-red-500/25 text-xs font-bold text-[#1c1512] hover:border-red-500 shadow-sm transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              <span>{t('MakeMyTrip पर सत्यापित होटल', 'MakeMyTrip Verified Listing')}</span>
              <ExternalLink className="w-3 h-3 text-red-600" />
            </a>
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details & Touchpoints Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            
            <div className="bg-[#faf8f5] rounded-[32px] p-7 sm:p-8 border border-amber-600/20 shadow-md shadow-amber-950/5 flex flex-col justify-between h-full space-y-6">
              
              <div>
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-800 shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-temple text-xl font-bold text-[#1c1512] mb-1">
                      {t('होटल दक्ष (Hotel Daksh)', 'Hotel Daksh (Khatu Dham)')}
                    </h3>
                    <p className="text-xs text-[#5c4a3e] leading-relaxed font-medium">
                      {t('वार्ड नं. 15, आलोदा चौराहा, कृष्णा कॉलोनी,', 'Ward No. 15, Aloda Choraha, Krishna Colony,')} <br />
                      {t('बीएसएनएल टावर के पास, मंदिर रोड,', 'Near BSNL Tower, Mandir Road,')} <br />
                      {t('खाटूश्यामजी, जिला सीकर (राजस्थान) - 332602', 'Khatoo, District Sikar (Rajasthan) - 332602')}
                    </p>
                  </div>
                </div>

                {/* Google Maps Actions */}
                <div className="flex flex-col gap-2 pt-2">
                  <a 
                    href={googleMapsUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-700 font-bold hover:text-blue-900 transition-colors bg-white p-2.5 rounded-xl border border-blue-500/20 shadow-sm"
                  >
                    <Navigation className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{t('Google Maps पर नेविगेशन शुरू करें (Directions)', 'Start Navigation on Google Maps')}</span>
                    <ExternalLink className="w-3 h-3 ml-auto text-blue-500" />
                  </a>

                  <a 
                    href={makeMyTripUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-red-700 font-bold hover:text-red-900 transition-colors bg-white p-2.5 rounded-xl border border-red-500/20 shadow-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-red-600 shrink-0"></span>
                    <span>{t('MakeMyTrip पर रिव्यूज़ एवं रेटिंग्स देखें', 'View Reviews & Photos on MakeMyTrip')}</span>
                    <ExternalLink className="w-3 h-3 ml-auto text-red-500" />
                  </a>
                </div>
              </div>

              {/* Transit Distances */}
              <div className="pt-5 border-t border-amber-600/15 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white rounded-2xl border border-amber-500/15 shadow-sm">
                  <div className="text-[10px] text-[#7c6a5d] font-bold">{t('खाटू श्याम मुख्य मंदिर', 'Main Shyam Mandir')}</div>
                  <div className="text-xs font-bold text-amber-900">{t('500 मीटर पैदल (5-7 मिनट)', '500m Walk (5-7 mins)')}</div>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-amber-500/15 shadow-sm">
                  <div className="text-[10px] text-[#7c6a5d] font-bold">{t('रींगस जंक्शन स्टेशन', 'Ringas Junction (RGS)')}</div>
                  <div className="text-xs font-bold text-amber-900">{t('20 मिनट ड्राइव (17 km)', '20 Min Drive (17 km)')}</div>
                </div>
              </div>

              {/* Key Features Pill */}
              <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/25 flex items-center gap-3">
                <Car className="w-5 h-5 text-amber-800 shrink-0" />
                <div className="text-[11px] text-[#4a3b32] font-semibold leading-snug">
                  <strong>{t('50+ गाड़ियों व बसों हेतु फ्री गेटेड ऑन-साइट पार्किंग', 'Free Gated Parking for 50+ Cars & Buses')}</strong> • {t('24 घंटे ई-रिक्शा सुविधा', '24/7 E-Rickshaw Available')}
                </div>
              </div>

              {/* Direct Touchpoints (WhatsApp & Call) */}
              <div className="pt-5 border-t border-amber-600/15 space-y-3">
                <a 
                  href="https://wa.me/919876543210?text=Jai%20Shree%20Shyam!%20I%20want%20to%20connect%20with%20Hotel%20Daksh%20Khatu." 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-md cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-white" />
                    <div>
                      <div className="text-[10px] text-emerald-100 uppercase font-bold tracking-wider">
                        {t('व्हाट्सएप त्वरित सेवा', 'WhatsApp Quick Desk')}
                      </div>
                      <div className="text-xs sm:text-sm font-bold">
                        {t('सीधा चैट एवं तुरंत कमरा पूछताछ', 'Instant Chat & Room Inquiry')}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white" />
                </a>

                <a 
                  href="tel:+919876543210" 
                  className="flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-amber-50/70 border border-amber-500/30 transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-amber-700" />
                    <div>
                      <div className="text-[10px] text-[#7c6a5d] uppercase font-bold">
                        {t('24 घंटे फ्रंट डेस्क हेल्पलाइन', '24/7 Front Desk Helpline')}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-[#1c1512]">+91 98765 43210</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-amber-700" />
                </a>
              </div>

            </div>

          </div>

          {/* Interactive Google Map Embed directly centered on Hotel Daksh */}
          <div className="lg:col-span-7 bg-[#faf8f5] rounded-[32px] overflow-hidden border border-amber-600/25 relative min-h-[480px] flex flex-col shadow-md shadow-amber-950/5">
            <div className="p-4 border-b border-amber-600/15 flex items-center justify-between bg-white">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-amber-900">
                  {t('होटल दक्ष — गूगल लाइव मैप्स लोकेशन', 'Hotel Daksh — Live Google Maps Location')}
                </span>
              </div>
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noreferrer"
                className="text-[11px] text-blue-700 hover:text-blue-900 font-bold flex items-center gap-1"
              >
                <span>{t('Google Maps ऐप में खोलें', 'Open in Google Maps App')}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            
            <iframe 
              title="Hotel Daksh Location Map"
              src={`https://maps.google.com/maps?q=27.371647,75.4031066&hl=${language === 'en' ? 'en' : 'hi'}&z=17&output=embed`} 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '440px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full flex-1"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactMap;
