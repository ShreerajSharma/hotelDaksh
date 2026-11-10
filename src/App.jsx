import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import WhyChooseUs from './components/WhyChooseUs';
import Amenities from './components/Amenities';
import TempleGuide from './components/TempleGuide';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import ContactMap from './components/ContactMap';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingData, setBookingData] = useState({});
  const { t } = useLanguage();

  const handleOpenBooking = (data = {}) => {
    setBookingData(data);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2c221e] relative selection:bg-amber-400/40 selection:text-amber-950 overflow-x-hidden">
      
      {/* White Spiritual Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Sections */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <Rooms onOpenBooking={handleOpenBooking} />
        <WhyChooseUs onOpenBooking={handleOpenBooking} />
        <About />
        <Amenities />
        <TempleGuide />
        <Gallery />
        <Reviews />
        <FAQ onOpenBooking={handleOpenBooking} />
        <ContactMap />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Booking Sheet / Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        initialData={bookingData}
      />

      {/* Spiritual Mobile Floating Quick Action Capsule (White Theme) */}
      <div className="fixed bottom-4 inset-x-3 z-40 sm:hidden flex items-center gap-2 p-1.5 rounded-full bg-white/95 backdrop-blur-xl border border-amber-500/40 shadow-2xl shadow-amber-950/20 max-w-sm mx-auto">
        <a 
          href="tel:+919876543210"
          className="flex-1 py-2.5 px-3 rounded-full bg-[#faf8f5] text-[#1c1512] font-bold flex items-center justify-center gap-1.5 text-xs tracking-tight border border-amber-600/25 shadow-sm"
        >
          <Phone className="w-3.5 h-3.5 text-amber-700" />
          <span>{t('फोन करें', 'Call Now')}</span>
        </a>
        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 py-2.5 px-3 rounded-full btn-kesar-gold text-[#1c1512] font-bold flex items-center justify-center gap-1.5 text-xs tracking-tight shadow-md"
        >
          <Calendar className="w-3.5 h-3.5 text-[#1c1512]" />
          <span>{t('कमरा बुक करें', 'Book Room')}</span>
        </button>
        <a 
          href="https://wa.me/919876543210?text=Jai%20Shree%20Shyam!%20I%20want%20to%20reserve%20a%20room%20at%20Hotel%20Daksh%20Khatu."
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-500/40 text-emerald-700 flex items-center justify-center shrink-0 shadow-sm"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
        </a>
      </div>

    </div>
  );
}

export default App;
