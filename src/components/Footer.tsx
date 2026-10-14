import React from 'react';
import { FairyNestLogo } from './FairyNestLogo';
import { HOMESTAY_INFO } from '../data/homestayData';
import { Phone, MessageCircle, MapPin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#E8E3DA] text-[#7E948D] pt-16 pb-24 lg:pb-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E8E3DA]">
          
          {/* Brand & Narrative */}
          <div className="md:col-span-5 space-y-4">
            <FairyNestLogo size="md" showText={true} variant="dark" />
            <p className="text-[#52665F] leading-relaxed max-w-sm mt-3 text-xs sm:text-sm">
              Couple-friendly and budget-friendly boutique homestay in Gandhi Basti, Sarania Hills, Guwahati. Providing self-catering independence with attached private kitchens in all apartments.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={HOMESTAY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white hover:bg-[#EDE6D9] text-[#162A24] border border-[#E8E3DA] transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${HOMESTAY_INFO.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white hover:bg-[#EDE6D9] text-[#25D366] border border-[#E8E3DA] transition-colors"
                aria-label="WhatsApp Contact"
              >
                <MessageCircle className="w-4 h-4 fill-[#25D366]" />
              </a>
              <a
                href={`tel:${HOMESTAY_INFO.phone}`}
                className="p-2.5 rounded-xl bg-white hover:bg-[#EDE6D9] text-[#162A24] border border-[#E8E3DA] transition-colors"
                aria-label="Call Host"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-xs text-[#162A24] uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="hover:text-[#162A24] transition-colors">About Fairy Nest</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-[#162A24] transition-colors">1BHK & 2BHK Units</a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#162A24] transition-colors">Kitchen & Amenities</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#162A24] transition-colors">Instagram Highlights</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#162A24] transition-colors">Guest Reviews (4.1 ⭐)</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#162A24] transition-colors">Sarania Hills Location</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-xs text-[#162A24] uppercase tracking-wider">
              Direct Contact & Address
            </h4>
            <div className="space-y-2.5 text-[#52665F]">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{HOMESTAY_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`tel:${HOMESTAY_INFO.phone}`} className="hover:text-[#162A24] font-mono font-medium">
                  {HOMESTAY_INFO.displayPhone} / {HOMESTAY_INFO.phone}
                </a>
              </p>
              <p className="text-[11px] text-[#7E948D] pt-1">
                Plus Code: <span className="text-[#162A24] font-mono font-semibold">{HOMESTAY_INFO.plusCode}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Factual Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7E948D]">
          <p>
            © {currentYear} {HOMESTAY_INFO.name}. Sourced directly from official Instagram and Google public records.
          </p>
          <div className="text-center sm:text-right">
            <span>[Tariff & seasonal availability — confirm with host via WhatsApp]</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
