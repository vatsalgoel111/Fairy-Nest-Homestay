import React from 'react';
import { FairyNestLogo } from './FairyNestLogo';
import { HOMESTAY_INFO } from '../data/homestayData';
import { Phone, MessageCircle, MapPin, Instagram } from 'lucide-react';

export const SanctuaryFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#14241E] border-t border-[#1C362D] text-[#CCD9D2] pt-14 pb-20 lg:pb-14 text-sm sm:text-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <FairyNestLogo size="md" showText={true} variant="light" />
            <p className="text-[#AABCB4] leading-relaxed max-w-sm mt-3 text-sm sm:text-base">
              A cozy and peaceful homestay in Gandhi Basti, Sarania Hills, Guwahati. Providing comfortable couple-friendly rooms, free daily breakfast, and attached private kitchens in all 13 rooms.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={HOMESTAY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href={`https://wa.me/${HOMESTAY_INFO.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#25D366] border border-white/10 transition-colors"
                aria-label="WhatsApp Contact"
              >
                <MessageCircle className="w-4.5 h-4.5 fill-[#25D366]" />
              </a>
              <a
                href={`tel:+${HOMESTAY_INFO.phoneRaw}`}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#E2BC5A] border border-white/10 transition-colors"
                aria-label="Call Host Directly"
              >
                <Phone className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base text-[#AABCB4]">
              <li>
                <a href="#suites" className="hover:text-white transition-colors">Room Types</a>
              </li>
              <li>
                <a href="#units" className="hover:text-white transition-colors">All 13 Rooms</a>
              </li>
              <li>
                <a href="#hospitality" className="hover:text-white transition-colors">Breakfast & Tea</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Location & Nearby</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Google Reviews (4.1 ⭐)</a>
              </li>
              <li>
                <a href="#reserve" className="hover:text-white transition-colors">Direct Booking</a>
              </li>
            </ul>
          </div>

          {/* Address & Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
              Address & Contact
            </h4>
            <div className="space-y-2.5 text-sm sm:text-base text-[#AABCB4]">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-[#E2BC5A] shrink-0 mt-0.5" />
                <span>{HOMESTAY_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4.5 h-4.5 text-[#E2BC5A] shrink-0" />
                <a href={`tel:+${HOMESTAY_INFO.phoneRaw}`} className="hover:text-white font-mono font-medium">
                  {HOMESTAY_INFO.phone}
                </a>
              </p>
              <p className="text-sm pt-0.5">
                Plus Code: <span className="text-[#E2BC5A] font-mono font-semibold">{HOMESTAY_INFO.plusCode}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#8A9E95]">
          <div>
            © {currentYear} Fairy Nest Homestay, Guwahati. All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            Couple Friendly · Attached Kitchen in all rooms · Free Daily Breakfast
          </div>
        </div>

      </div>
    </footer>
  );
};
