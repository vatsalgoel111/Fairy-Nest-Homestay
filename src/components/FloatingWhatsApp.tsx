import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${HOMESTAY_INFO.phoneRaw}?text=${encodeURIComponent(
    'Hello Fairy Nest Homestay! I would like to inquire about booking a room in Guwahati.'
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      
      {/* Subtle Tooltip Bubble (Dismissible) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-[#E8E3DA] shadow-xl text-xs text-[#162A24] font-medium animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span>Inquire with Host on WhatsApp</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-[#7E948D] hover:text-[#162A24] ml-1 p-0.5 cursor-pointer"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Action Buttons Cluster */}
      <div className="flex items-center gap-2.5">
        
        {/* Quick Phone Call Button */}
        <a
          href={`tel:${HOMESTAY_INFO.phone}`}
          className="w-11 h-11 rounded-full bg-white border border-[#E8E3DA] hover:border-[#162A24] text-[#162A24] shadow-md flex items-center justify-center hover:scale-105 transition-transform"
          title={`Call Host at ${HOMESTAY_INFO.displayPhone}`}
          aria-label="Call Host directly"
        >
          <Phone className="w-4 h-4 text-[#C5A059]" />
        </a>

        {/* WhatsApp Primary Floating Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2 px-4.5 py-3 rounded-full bg-[#162A24] hover:bg-[#223F36] text-white font-semibold text-xs shadow-xl shadow-black/20 hover:brightness-105 active:scale-95 transition-all"
          aria-label="Chat with Fairy Nest Homestay on WhatsApp"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping -z-10 opacity-75 duration-1000" />
          
          <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366] shrink-0" />
          <span className="hidden sm:inline tracking-wide font-sans">
            WhatsApp Booking
          </span>
        </a>

      </div>
    </div>
  );
};
