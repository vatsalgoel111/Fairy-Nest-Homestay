import React, { useState } from 'react';
import { Calendar, Users, Home, Search, MessageCircle } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';

export const FloatingBookingBar: React.FC = () => {
  const [roomType, setRoomType] = useState('1BHK Apartment (Attached Kitchen)');
  const [guests, setGuests] = useState('2 Guests (Couple Friendly)');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const generateWhatsAppInquiry = () => {
    let msg = `Hello Fairy Nest Homestay! I would like to book a stay:\n`;
    msg += `• Room Preference: ${roomType}\n`;
    msg += `• Guests: ${guests}\n`;
    if (checkIn) msg += `• Check-in: ${checkIn}\n`;
    if (checkOut) msg += `• Check-out: ${checkOut}\n`;
    msg += `Please confirm availability and current tariff.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${HOMESTAY_INFO.phoneRaw}?text=${encoded}`, '_blank');
  };

  return (
    <div className="w-full max-w-5xl mx-auto -mt-10 sm:-mt-12 relative z-30 px-4">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full p-2.5 sm:p-3 shadow-xl shadow-[#162A24]/10 border border-[#E8E3DA] grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
        
        {/* Field 1: Apartment Type */}
        <div className="sm:col-span-4 px-4 py-2 sm:border-r border-[#E8E3DA] flex items-center gap-3">
          <Home className="w-4 h-4 text-[#C5A059] shrink-0" />
          <div className="flex-1">
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#7E948D]">
              Accommodations
            </span>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full text-xs sm:text-sm font-semibold text-[#162A24] bg-transparent outline-none cursor-pointer"
            >
              <option value="1BHK Apartment (Attached Kitchen)">1BHK Apartment (Kitchen Attached)</option>
              <option value="2BHK Suite (Attached Kitchen)">2BHK Suite (Sleeps 4-6)</option>
              <option value="Penthouse 1RK Studio">Penthouse 1RK (Rooftop View)</option>
              <option value="Unit-11 Single Room">Unit-11 Single Room</option>
              <option value="Any Available Unit">Any Available Unit</option>
            </select>
          </div>
        </div>

        {/* Field 2: Dates (Check-In & Out) */}
        <div className="sm:col-span-3 px-4 py-2 sm:border-r border-[#E8E3DA] flex items-center gap-3">
          <Calendar className="w-4 h-4 text-[#C5A059] shrink-0" />
          <div className="flex-1">
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#7E948D]">
              Stay Dates
            </span>
            <input
              type="text"
              placeholder="e.g. Next weekend"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full text-xs sm:text-sm font-semibold text-[#162A24] placeholder-[#A0B0AA] bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Field 3: Guests */}
        <div className="sm:col-span-2 px-4 py-2 flex items-center gap-3">
          <Users className="w-4 h-4 text-[#C5A059] shrink-0" />
          <div className="flex-1">
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#7E948D]">
              Guests
            </span>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full text-xs sm:text-sm font-semibold text-[#162A24] bg-transparent outline-none cursor-pointer"
            >
              <option value="2 Guests (Couple Friendly)">2 Guests (Couple)</option>
              <option value="1 Solo Guest">1 Guest (Solo)</option>
              <option value="3-4 Guests (Family/Group)">3–4 Guests (Family)</option>
              <option value="5-6 Guests (Group)">5–6 Guests (Group)</option>
            </select>
          </div>
        </div>

        {/* Action Button: WhatsApp Direct Booking */}
        <div className="sm:col-span-3">
          <button
            onClick={generateWhatsAppInquiry}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl sm:rounded-full text-xs sm:text-sm font-semibold text-white bg-[#162A24] hover:bg-[#223F36] transition-all shadow-md active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Check Availability</span>
          </button>
        </div>

      </div>
    </div>
  );
};
