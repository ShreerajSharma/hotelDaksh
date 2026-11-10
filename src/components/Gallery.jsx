import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const { t } = useLanguage();

  const images = [
    {
      id: 1,
      category: 'suites',
      title: { hi: 'Deluxe Double Room (2 Adults + 1 Child)', en: 'Deluxe Double Room (2 Adults + 1 Child)' },
      subtitle: {
        hi: 'आकर्षक इंटीरियर वॉलपेपर, किंग साइज डबल बेड, वॉर्डरोब व स्प्लिट एसी',
        en: 'Designer wallpaper, king-size double bed, wardrobe & split AC'
      },
      url: '/rooms/deluxe-double.jpg'
    },
    {
      id: 2,
      category: 'suites',
      title: { hi: 'Triple Room (1 Double + 1 Single Bed)', en: 'Triple Room (1 Double + 1 Single Bed)' },
      subtitle: {
        hi: '3 यात्रियों हेतु 1 डबल व 1 सिंगल बेड, गोल्डन वॉलपेपर व अटैच्ड बाथरूम',
        en: '1 Double + 1 Single Bed for 3 guests, royal golden wallpaper & attached bath'
      },
      url: '/rooms/triple-room.jpg'
    },
    {
      id: 3,
      category: 'suites',
      title: { hi: 'Deluxe Family Room (2 Large Double Beds)', en: 'Deluxe Family Room (2 Large Double Beds)' },
      subtitle: {
        hi: '2 बड़े लार्ज डबल बेड, वुडन सीलिंग, दो पंखे व विशाल पारिवारिक स्पेस',
        en: '2 large double beds, decorative wooden ceiling, dual ceiling fans & family space'
      },
      url: '/rooms/deluxe-family.jpg'
    },
    {
      id: 4,
      category: 'ambiance',
      title: { hi: 'होटल दक्ष स्वागत व परिसर', en: 'Hotel Daksh Welcoming Reception' },
      subtitle: {
        hi: 'आलोदा चौराहा, बीएसएनएल टावर के पास - 24 घंटे सेवा व आत्मीय सत्कार',
        en: 'Aloda Choraha, near BSNL Tower - 24/7 dedicated guest hospitality'
      },
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 5,
      category: 'devotion',
      title: { hi: 'श्री खाटू श्याम जी अलौकिक शृंगार दर्शन', en: 'Lord Shri Khatu Shyam Ji Holy Darshan' },
      subtitle: {
        hi: 'होटल दक्ष से मात्र 500 मीटर की सुखद पैदल दूरी पर पावन दरबार',
        en: 'Just 500m pleasant walk from Hotel Daksh'
      },
      url: '/shyam-baba.jpg'
    },
    {
      id: 6,
      category: 'ambiance',
      title: { hi: 'गेटेड सुरक्षित निजी पार्किंग', en: 'Private Gated Parking Compound' },
      subtitle: {
        hi: '50+ कारों व टूरिस्ट बसों हेतु सीसीटीवी संरक्षित सुरक्षित पार्किंग',
        en: 'Secure compound with CCTV coverage for 50+ cars and tour buses'
      },
      url: 'https://images.unsplash.com/photo-1506521782020-18925f46c0be?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  const categories = [
    { id: 'all', label: { hi: 'सभी चित्र', en: 'All Photos' } },
    { id: 'suites', label: { hi: 'कक्ष व सुइट्स', en: 'Rooms & Suites' } },
    { id: 'ambiance', label: { hi: 'परिसर व पार्किंग', en: 'Property & Parking' } },
    { id: 'devotion', label: { hi: 'खाटू धाम', en: 'Khatu Dham' } }
  ];

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-white text-[#2c221e] relative overflow-hidden border-t border-amber-600/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-amber-800/90 mb-2 font-sans">
            {t('चित्र वीथिका', 'Visual Showcase')}
          </p>
          <h2 className="font-temple text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1c1512] mb-3">
            {t('होटल की', 'Visuals of')} <span className="sacred-gold-text">{t('सुंदर झलकियाँ', 'Hotel Daksh')}</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#5c4a3e] max-w-xl mx-auto leading-relaxed">
            {t(
              'हमारे स्वच्छ कक्ष, सुंदर रिसेप्शन लाउंज, सुरक्षित पार्किंग और पवित्र खाटू नगरी की छटा का अवलोकन करें।',
              'Explore our immaculate suites, warm reception lounge, guarded parking, and the serene essence of Khatu Dham.'
            )}
          </p>

          {/* Filter Pills (Horizontal scrollable on mobile) */}
          <div className="w-full max-w-full overflow-x-auto no-scrollbar py-2 mt-4 flex justify-start sm:justify-center">
            <div className="inline-flex items-center gap-1 p-1 rounded-full bg-[#f3ede2] border border-amber-600/15 shadow-inner">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    activeFilter === cat.id
                      ? 'btn-kesar-gold text-[#1c1512] shadow-sm'
                      : 'text-[#6c5a4d] hover:text-[#1c1512]'
                  }`}
                >
                  {t(cat.label)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="bg-white rounded-[28px] overflow-hidden group cursor-pointer relative aspect-[4/3] border border-amber-600/20 shadow-md shadow-amber-950/5 hover:shadow-xl hover:border-amber-500/40 transition-all duration-300"
            >
              <img 
                src={image.url} 
                alt={t(image.title)} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
              
              {/* Caption Overlay */}
              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end text-white">
                <div>
                  <h3 className="font-temple text-base font-bold tracking-wide">{t(image.title)}</h3>
                  <p className="text-xs text-amber-100/90 mt-0.5">{t(image.subtitle)}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-white rounded-[32px] overflow-hidden border border-amber-500/40 p-2 sm:p-3 shadow-2xl"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-[16/10] overflow-hidden rounded-[24px]">
              <img 
                src={selectedImage.url} 
                alt={t(selectedImage.title)} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6 text-left">
              <h3 className="font-temple text-xl font-bold text-[#1c1512]">{t(selectedImage.title)}</h3>
              <p className="text-xs text-[#5c4a3e] mt-1">{t(selectedImage.subtitle)}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
