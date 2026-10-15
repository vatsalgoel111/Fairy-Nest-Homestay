import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';

export const FloatingWhatsAppPill: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${HOMESTAY_INFO.phoneRaw}?text=${encodeURIComponent(
    'Hello Fairy Nest Homestay! I would like to check room availability and book a stay in Guwahati.'
  )}`;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Tooltip Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white shadow-xl text-sm text-[#14241E] font-semibold animate-in fade-in slide-in-from-bottom-2 duration-300 border border-[#E5DFD4]">
          <span>Need help? Chat with Host on WhatsApp</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-[#8E9F98] hover:text-[#14241E] ml-1 p-0.5 cursor-pointer"
            aria-label="Dismiss message"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Floating Action Cluster */}
      <div className="flex items-center gap-2.5">
        {/* Quick Phone Call Button */}
        <a
          href={`tel:+${HOMESTAY_INFO.phoneRaw}`}
          className="w-12 h-12 rounded-full bg-white border border-[#E5DFD4] hover:border-[#B8860B] text-[#14241E] shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
          title={`Call Host at +91 70021 76711`}
          aria-label="Call Host directly"
        >
          <Phone className="w-4.5 h-4.5 text-[#B8860B]" />
        </a>

        {/* WhatsApp Primary Floating Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm shadow-xl hover:bg-[#20BD5A] active:scale-95 transition-all cursor-pointer"
          aria-label="Chat with Fairy Nest Homestay on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white shrink-0" />
          <span className="hidden sm:inline tracking-wide font-sans">
            Book on WhatsApp
          </span>
        </a>
      </div>
    </aside>
  );
};
