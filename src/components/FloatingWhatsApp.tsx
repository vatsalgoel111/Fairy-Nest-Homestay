import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show gentle prompt after 4 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${HOMESTAY_INFO.phoneRaw}?text=${encodeURIComponent(
    'Hello Fairy Nest Homestay! I would like to inquire about booking a stay in Guwahati.'
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      
      {/* Gentle Tooltip Bubble (Dismissible) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#142823] border border-[#d4af37]/40 shadow-xl text-xs text-[#f4efe6] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span>Chat with Host on WhatsApp</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-[#9fb3ab] hover:text-[#f4efe6] ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Buttons Cluster */}
      <div className="flex items-center gap-2">
        
        {/* Quick Phone Call Button */}
        <a
          href={`tel:${HOMESTAY_INFO.phone}`}
          className="w-11 h-11 rounded-full bg-[#183129] border border-[#2d564a] hover:border-[#d4af37] text-[#d4af37] shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
          title={`Call Host at ${HOMESTAY_INFO.displayPhone}`}
          aria-label="Call Host directly"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Primary Floating Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold text-xs shadow-xl shadow-black/50 hover:brightness-110 active:scale-95 transition-all"
          aria-label="Chat with Fairy Nest Homestay on WhatsApp"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping -z-10 opacity-75 duration-1000" />
          
          <MessageCircle className="w-5 h-5 fill-white shrink-0" />
          <span className="hidden sm:inline tracking-wide font-sans">
            WhatsApp Booking
          </span>
        </a>

      </div>
    </div>
  );
};
