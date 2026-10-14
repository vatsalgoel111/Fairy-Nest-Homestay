import React, { useState, useEffect } from 'react';
import { FairyNestLogo } from './FairyNestLogo';
import { HOMESTAY_INFO } from '../data/homestayData';
import { MessageCircle, Menu, X, PhoneCall } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/${HOMESTAY_INFO.phoneRaw}?text=${encodeURIComponent('Hello Fairy Nest Homestay! I would like to inquire about booking a room in Guwahati.')}`;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E3DA] py-3.5 shadow-xs' 
          : 'bg-[#FAF8F5]/80 backdrop-blur-xs py-4.5 border-b border-[#E8E3DA]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1 (Brand) - Zone 2 (4-5 Nav Links) - Zone 3 (1 Primary Action) */}
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Brand Zone (Single text element wordmark + clean icon) */}
          <a href="#" className="flex items-center gap-2 group whitespace-nowrap shrink-0">
            <FairyNestLogo size="sm" showText={true} variant="dark" />
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#52665F]">
            <a 
              href="#about" 
              className="hover:text-[#162A24] transition-colors whitespace-nowrap shrink-0"
            >
              About
            </a>
            <a 
              href="#rooms" 
              className="hover:text-[#162A24] transition-colors whitespace-nowrap shrink-0"
            >
              Suites & Studios
            </a>
            <a 
              href="#amenities" 
              className="hover:text-[#162A24] transition-colors whitespace-nowrap shrink-0"
            >
              Amenities
            </a>
            <a 
              href="#reviews" 
              className="hover:text-[#162A24] transition-colors whitespace-nowrap shrink-0"
            >
              Guest Reviews
            </a>
            <a 
              href="#location" 
              className="hover:text-[#162A24] transition-colors whitespace-nowrap shrink-0"
            >
              Location
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${HOMESTAY_INFO.phone}`}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#162A24] hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0"
              title="Call Homestay Host"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="tabular-nums">{HOMESTAY_INFO.displayPhone}</span>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#162A24] rounded-lg hover:bg-[#223F36] shadow-xs transition-all whitespace-nowrap shrink-0 active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Book via WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-[#162A24] rounded-lg"
              aria-label="Book on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#162A24] hover:text-[#C5A059] transition-colors rounded-lg border border-[#E8E3DA]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF8F5] border-b border-[#E8E3DA] px-6 py-5 animate-in fade-in duration-200">
          <div className="flex flex-col gap-4 text-sm font-medium text-[#52665F]">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#162A24] py-1 transition-colors"
            >
              About Fairy Nest
            </a>
            <a 
              href="#rooms" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#162A24] py-1 transition-colors"
            >
              Suites & Studios
            </a>
            <a 
              href="#amenities" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#162A24] py-1 transition-colors"
            >
              Kitchen & Amenities
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#162A24] py-1 transition-colors"
            >
              Guest Reviews (4.1 ⭐)
            </a>
            <a 
              href="#location" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#162A24] py-1 transition-colors"
            >
              Map & Location
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#162A24] py-1 transition-colors"
            >
              Direct Inquiry
            </a>
            
            <div className="pt-3 border-t border-[#E8E3DA] flex flex-col gap-2.5">
              <a
                href={`tel:${HOMESTAY_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[#162A24]/30 text-xs font-semibold text-[#162A24]"
              >
                <PhoneCall className="w-4 h-4 text-[#C5A059]" />
                <span>Call Host: {HOMESTAY_INFO.displayPhone}</span>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#162A24] text-xs font-semibold text-white"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Direct WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
