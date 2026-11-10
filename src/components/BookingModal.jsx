import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, Sparkles, MessageCircle, Phone, CheckCircle2, ShieldCheck, ChevronRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const BookingModal = ({ isOpen, onClose, initialData = {} }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [roomType, setRoomType] = useState('Deluxe Double Room (2 Adults + 1 Child)');
  const [notes, setNotes] = useState('');
  const { t, isHindi } = useLanguage();

  const makeMyTripUrl = "https://www.makemytrip.com/hotels/hotel_daksh-details-khatu.html";

  useEffect(() => {
    if (initialData.checkIn) setCheckIn(initialData.checkIn);
    if (initialData.checkOut) setCheckOut(initialData.checkOut);
    if (initialData.guests) setGuests(initialData.guests);
    if (initialData.roomType) setRoomType(initialData.roomType);
  }, [initialData]);

  if (!isOpen) return null;

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    
    const message = isHindi
      ? `*॥ जय श्री श्याम ॥ होटल दक्ष (खाटूश्यामजी) - कमरा आरक्षण पूछताछ*%0A%0A` +
        `👤 *यात्री का नाम:* ${name || 'श्याम भक्त'}%0A` +
        `📞 *मोबाइल नंबर:* ${phone || 'उपलब्ध नहीं'}%0A` +
        `🏨 *कक्ष श्रेणी:* ${roomType}%0A` +
        `📅 *आगमन तिथि (Check-In):* ${checkIn || 'तय होनी बाकी'}%0A` +
        `📅 *प्रस्थान तिथि (Check-Out):* ${checkOut || 'तय होनी बाकी'}%0A` +
        `👥 *कुल यात्री संख्या:* ${guests}%0A` +
        `💬 *विशेष आवश्यकता:* ${notes || 'खाटू श्याम जी दर्शन यात्रा'}%0A%0A` +
        `कृपया कमरा उपलब्धता एवं सर्वोत्तम दरें प्रेषित करने की कृपा करें। जय श्री श्याम!`
      : `*॥ Jai Shree Shyam ॥ Hotel Daksh (Khatu Dham) - Room Reservation Inquiry*%0A%0A` +
        `👤 *Guest Name:* ${name || 'Shyam Devotee'}%0A` +
        `📞 *Mobile No:* ${phone || 'Not provided'}%0A` +
        `🏨 *Room Category:* ${roomType}%0A` +
        `📅 *Check-In Date:* ${checkIn || 'To be decided'}%0A` +
        `📅 *Check-Out Date:* ${checkOut || 'To be decided'}%0A` +
        `👥 *Total Guests:* ${guests}%0A` +
        `💬 *Special Request / Notes:* ${notes || 'Khatu Shyam Pilgrimage'}%0A%0A` +
        `Please share room availability and best direct pilgrim rates. Jai Shree Shyam!`;

    const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-[28px] sm:rounded-[32px] p-5 sm:p-8 border border-amber-500/40 shadow-2xl shadow-amber-950/20 my-auto max-h-[92vh] overflow-y-auto text-[#2c221e]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-900 transition-colors border border-amber-500/30"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full spiritual-pill text-[11px] font-bold tracking-wider mb-2">
            <span>🦚 ॥ ॐ श्री श्याम देवाय नमः ॥ 🪔</span>
          </div>
          <h3 className="font-temple text-2xl sm:text-3xl font-extrabold text-[#1c1512]">
            {t('होटल दक्ष में कमरा बुक करें', 'Reserve Your Stay at Hotel Daksh')}
          </h3>
          <p className="text-xs text-[#5c4a3e] font-medium mt-1">
            {t(
              'बिना किसी मध्यस्थ कमीशन के, न्यूनतम दरों पर तुरंत व्हाट्सएप पुष्टिकरण।',
              'Zero broker commission, best direct pilgrim rates & instant WhatsApp confirmation.'
            )}
          </p>
        </div>

        {/* Reservation Form */}
        <form onSubmit={handleWhatsAppBooking} className="space-y-4">
          
          {/* Guest Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-amber-900 font-bold mb-1">
                {t('यात्री का नाम (Name) *', 'Guest Name *')}
              </label>
              <input 
                type="text"
                required
                placeholder={t('जैसे: राजेश शर्मा', 'e.g. Rajesh Sharma')}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#faf8f5] border border-amber-500/30 rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1c1512] placeholder-[#8c7b6f] focus:outline-none focus:border-amber-600 transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-amber-900 font-bold mb-1">
                {t('मोबाइल नंबर (Phone No.) *', 'Mobile Number *')}
              </label>
              <input 
                type="tel"
                required
                placeholder="+91 98765 XXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#faf8f5] border border-amber-500/30 rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1c1512] placeholder-[#8c7b6f] focus:outline-none focus:border-amber-600 transition-colors"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-amber-900 font-bold mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-700" /> {t('आगमन तिथि (Check-In)', 'Check-In Date')}
              </label>
              <input 
                type="date"
                required
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-[#faf8f5] border border-amber-500/30 rounded-2xl px-3.5 py-2.5 text-xs text-[#1c1512] focus:outline-none focus:border-amber-600 transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-amber-900 font-bold mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-700" /> {t('प्रस्थान तिथि (Check-Out)', 'Check-Out Date')}
              </label>
              <input 
                type="date"
                required
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-[#faf8f5] border border-amber-500/30 rounded-2xl px-3.5 py-2.5 text-xs text-[#1c1512] focus:outline-none focus:border-amber-600 transition-colors"
              />
            </div>
          </div>

          {/* Room Category & Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-amber-900 font-bold mb-1">
                {t('कक्ष श्रेणी (Room Type)', 'Room Category')}
              </label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full bg-[#faf8f5] border border-amber-500/30 rounded-2xl px-3.5 py-2.5 text-xs text-[#1c1512] font-semibold focus:outline-none focus:border-amber-600 transition-colors cursor-pointer"
              >
                <option value="Deluxe Double Room (2 Adults + 1 Child)">1. Deluxe Double Room (2 Adults + 1 Child)</option>
                <option value="Triple Room (1 Double + 1 Single Bed)">2. Triple Room (1 Double + 1 Single Bed)</option>
                <option value="Deluxe Family Room (2 Large Double Beds)">3. Deluxe Family Room (2 Large Double Beds)</option>
                <option value="बस एवं ग्रुप बुकिंग (Group Booking)">
                  {t('बस एवं ग्रुप बुकिंग (विशेष रियायती दर)', 'Tour Bus & Group Booking (Special Pilgrim Rates)')}
                </option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-amber-900 font-bold mb-1">
                {t('कुल यात्री संख्या (Guests)', 'Total Guests')}
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-[#faf8f5] border border-amber-500/30 rounded-2xl px-3.5 py-2.5 text-xs text-[#1c1512] font-semibold focus:outline-none focus:border-amber-600 transition-colors cursor-pointer"
              >
                <option value="1">{t('1 यात्री', '1 Guest')}</option>
                <option value="2">{t('2 यात्री', '2 Guests')}</option>
                <option value="3">{t('3 यात्री', '3 Guests')}</option>
                <option value="4">{t('4 यात्री', '4 Guests')}</option>
                <option value="5+">{t('5+ यात्री (सपरिवार / ग्रुप)', '5+ Guests (Family / Group)')}</option>
              </select>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-[10px] uppercase tracking-wider text-amber-900 font-bold mb-1">
              {t('विशेष आवश्यकता (वैकल्पिक)', 'Special Request (Optional)')}
            </label>
            <input 
              type="text"
              placeholder={t('जैसे: बुजुर्गों हेतु ग्राउंड फ्लोर, रात्रि देर से आगमन, कार पार्किंग', 'e.g. Ground floor for elderly, late night arrival, car parking')}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-[#faf8f5] border border-amber-500/30 rounded-2xl px-3.5 py-2.5 text-xs text-[#1c1512] placeholder-[#8c7b6f] focus:outline-none focus:border-amber-600 transition-colors"
            />
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full btn-kesar-gold py-3.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <MessageCircle className="w-4 h-4 text-[#1c1512]" />
              <span>{t('व्हाट्सएप पर तुरंत पुष्टि प्राप्त करें', 'Get Instant WhatsApp Confirmation')}</span>
            </button>
          </div>

          {/* Alternative Booking Options */}
          <div className="pt-3 border-t border-amber-600/15 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px]">
            <a 
              href="tel:+919876543210"
              className="text-[#5c4a3e] hover:text-amber-800 font-bold flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-amber-700" /> {t('फोन:', 'Phone:')} +91 98765 43210
            </a>

            <a 
              href={makeMyTripUrl}
              target="_blank"
              rel="noreferrer"
              className="text-red-700 hover:text-red-900 font-bold flex items-center gap-1"
            >
              <span>{t('MakeMyTrip पर बुक करें', 'Book on MakeMyTrip')}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </form>

      </div>
    </div>
  );
};

export default BookingModal;
