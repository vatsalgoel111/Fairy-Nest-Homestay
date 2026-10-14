import React from 'react';
import { FairyNestLogo } from './FairyNestLogo';
import { HOMESTAY_INFO } from '../data/homestayData';
import { Phone, MessageCircle, MapPin, Instagram, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1411] border-t border-[#1d3830] text-[#8ea49c] pt-16 pb-24 lg:pb-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#162e26]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <FairyNestLogo size="md" showText={true} />
            <p className="text-[#a7bbb3] leading-relaxed max-w-sm mt-3">
              Couple-friendly & budget-friendly boutique homestay in Gandhi Basti, Sarania Hills, Guwahati. Providing self-catering independence with attached kitchens in all apartments.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={HOMESTAY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#142823] hover:bg-[#1a382f] text-[#d4af37] border border-[#23453b] transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${HOMESTAY_INFO.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#142823] hover:bg-[#1a382f] text-[#d4af37] border border-[#23453b] transition-colors"
                aria-label="WhatsApp Contact"
              >
                <MessageCircle className="w-4 h-4 fill-[#d4af37]" />
              </a>
              <a
                href={`tel:${HOMESTAY_INFO.phone}`}
                className="p-2 rounded-lg bg-[#142823] hover:bg-[#1a382f] text-[#d4af37] border border-[#23453b] transition-colors"
                aria-label="Call Host"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Mirror */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-semibold text-xs text-[#f4efe6] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-[#e5c57a] transition-colors">About Our Homestay</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-[#e5c57a] transition-colors">1BHK & 2BHK Units</a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#e5c57a] transition-colors">Kitchen & Amenities</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#e5c57a] transition-colors">Photo Highlights</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#e5c57a] transition-colors">Google Reviews (4.1 ⭐)</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#e5c57a] transition-colors">Sarania Hills Map</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-semibold text-xs text-[#f4efe6] uppercase tracking-wider">
              Contact & Location
            </h4>
            <div className="space-y-2 text-[#a7bbb3]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{HOMESTAY_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`tel:${HOMESTAY_INFO.phone}`} className="hover:text-[#f4efe6] font-mono">
                  {HOMESTAY_INFO.displayPhone} / {HOMESTAY_INFO.phone}
                </a>
              </p>
              <p className="text-[11px] text-[#7a938a] pt-1">
                Plus Code: <span className="text-[#c5a059] font-mono">{HOMESTAY_INFO.plusCode}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Factual Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7a938a]">
          <p>
            © {currentYear} {HOMESTAY_INFO.name}. All verified details extracted directly from official Instagram & Google public records.
          </p>
          <div className="text-center sm:text-right">
            <span>[Tariff & seasonal availability — confirm with host via WhatsApp]</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
