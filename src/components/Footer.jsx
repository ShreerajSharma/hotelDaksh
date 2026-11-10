import React from 'react';
import { Crown, Heart, MapPin, Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f5f0e8] text-[#5c4a3e] text-xs pt-16 pb-28 sm:pb-14 border-t border-amber-600/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Footnote / Disclaimer */}
        <div className="pb-8 mb-10 border-b border-amber-600/15 text-[11px] text-[#7c6a5d] space-y-2 leading-relaxed">
          <p>
            {t(
              '१. होटल दक्ष आलोदा चौराहा, खाटूश्यामजी पर स्थित है। यहाँ से श्री खाटू श्याम जी मुख्य मंदिर का पावन मार्ग मात्र 800 मीटर (लगभग 10 मिनट की सुखद पदयात्रा) है।',
              '1. Hotel Daksh is situated at Aloda Choraha, Khatu Shyam Ji — just 800 meters (approx. 10-minute pleasant walk) from the Holy Mandir.'
            )}
          </p>
          <p>
            {t(
              '२. शुक्ल एकादशी, द्वादशी व फाल्गुन लक्खी मेले के दौरान मंदिर दर्शन 24 घंटे निरंतर जारी रहता है। होटल में 24 घंटे गीजर गर्म जल, शुद्ध सात्विक आहार व जनरेटर बैकअप निरंतर उपलब्ध रहता है।',
              '2. During Shukla Ekadashi, Dwadashi and Falgun Lakhi Mela, Darshan is open round-the-clock. Hotel Daksh provides 24/7 hot water, pure Sattvik meals, and silent generator backup.'
            )}
          </p>
        </div>

        {/* Directory Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1 */}
          <div>
            <h4 className="font-temple text-[#1c1512] text-xs font-bold tracking-wider uppercase mb-3">
              {t('कक्ष व सुइट्स', 'Rooms & Suites')}
            </h4>
            <ul className="space-y-2 text-[#5c4a3e] font-medium">
              <li>
                <button onClick={() => onOpenBooking({ roomType: 'Deluxe Double Room (2 Adults + 1 Child)' })} className="hover:text-amber-800 transition-colors cursor-pointer text-left">
                  1. Deluxe Double Room (2+1)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBooking({ roomType: 'Triple Room (1 Double + 1 Single Bed)' })} className="hover:text-amber-800 transition-colors cursor-pointer text-left">
                  2. Triple Room (1 Double + 1 Single)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBooking({ roomType: 'Deluxe Family Room (2 Large Double Beds)' })} className="hover:text-amber-800 transition-colors cursor-pointer text-left">
                  3. Deluxe Family Room (4-6 Beds)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBooking({ roomType: 'बस एवं ग्रुप बुकिंग (Group Booking)' })} className="hover:text-amber-800 transition-colors cursor-pointer text-left">
                  {t('टूरिस्ट बस व ग्रुप बुकिंग', 'Tour Bus & Group Reservations')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-temple text-[#1c1512] text-xs font-bold tracking-wider uppercase mb-3">
              {t('यात्री सुविधाएं', 'Pilgrim Amenities')}
            </h4>
            <ul className="space-y-2 text-[#5c4a3e] font-medium">
              <li><a href="#amenities" className="hover:text-amber-800 transition-colors">{t('गेटेड सुरक्षित निजी पार्किंग', 'Gated Secure Free Parking')}</a></li>
              <li><a href="#amenities" className="hover:text-amber-800 transition-colors">{t('100% शुद्ध सात्विक भोजनालय', '100% Pure Sattvik Kitchen')}</a></li>
              <li><a href="#amenities" className="hover:text-amber-800 transition-colors">{t('24 घंटे त्वरित गीजर गर्म जल', '24/7 Hot Water Geysers')}</a></li>
              <li><a href="#amenities" className="hover:text-amber-800 transition-colors">{t('मंदिर हेतु ई-रिक्शा सेवा', 'Temple E-Rickshaw Assistance')}</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-temple text-[#1c1512] text-xs font-bold tracking-wider uppercase mb-3">
              {t('पावन आरती व गाइड', 'Aarti & Guide')}
            </h4>
            <ul className="space-y-2 text-[#5c4a3e] font-medium">
              <li><a href="#khatu-guide" className="hover:text-amber-800 transition-colors">{t('मंगला व शृंगार आरती समय', 'Mangla & Shringaar Timings')}</a></li>
              <li><a href="#khatu-guide" className="hover:text-amber-800 transition-colors">{t('भोग व संध्या आरती समय', 'Bhog & Sandhya Aarti Timings')}</a></li>
              <li><a href="#khatu-guide" className="hover:text-amber-800 transition-colors">{t('पवित्र श्याम कुंड स्नान', 'Holy Shyam Kund Snan')}</a></li>
              <li><a href="#faq" className="hover:text-amber-800 transition-colors font-bold text-amber-900">{t('अक्सर पूछे जाने वाले प्रश्न (FAQ)', 'Frequently Asked Questions (FAQ)')}</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-temple text-[#1c1512] text-xs font-bold tracking-wider uppercase mb-3">
              {t('होटल दक्ष', 'Hotel Daksh')}
            </h4>
            <ul className="space-y-2 text-[#5c4a3e] font-medium">
              <li><a href="#about" className="hover:text-amber-800 transition-colors">{t('होटल परिचय व आस्था', 'About Hotel Daksh')}</a></li>
              <li><a href="#why-choose" className="hover:text-amber-800 transition-colors font-bold text-amber-900">{t('होटल दक्ष ही क्यों? (तुलना)', 'Why Choose Us? (Comparison)')}</a></li>
              <li><a href="#gallery" className="hover:text-amber-800 transition-colors">{t('चित्र वीथिका (Gallery)', 'Photo Gallery')}</a></li>
              <li><a href="#contact" className="hover:text-amber-800 transition-colors">{t('स्थान, पता व मार्ग नक्शा', 'Location & Route Map')}</a></li>
              <li><a href="tel:+919876543210" className="hover:text-amber-800 transition-colors">+91 98765 43210</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-amber-600/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7c6a5d]">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-temple text-amber-900 font-bold">Hotel Daksh (होटल दक्ष)</span>
            <span>•</span>
            <span>{t('खाटूश्यामजी, सीकर (राजस्थान)', 'Khatoo, Sikar (Rajasthan)')}</span>
            <span>•</span>
            <span className="text-amber-800 font-bold">{t('॥ हारे का सहारा, बाबा श्याम हमारा ॥ 🙏', '॥ Hare Ka Sahara, Baba Shyam Hamara ॥ 🙏')}</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-amber-900 font-medium">{t('श्याम भक्तों की सेवा में समर्पित', 'Dedicated in Devotee Seva')}</span>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-1 text-amber-800 hover:text-amber-950 font-bold transition-colors cursor-pointer"
            >
              <span>{t('ऊपर जाएं', 'Back to Top')}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
