import React, { useState, useEffect } from 'react';
import { FairyNestLogo } from './FairyNestLogo';
import { HOMESTAY_INFO } from '../data/homestayData';
import { MessageCircle, Menu, X, PhoneCall } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/${HOMESTAY_INFO.phoneRaw}?text=${encodeURIComponent('Hello Fairy Nest Homestay! I would like to inquire about booking a stay.')}`;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0e1a17]/95 backdrop-blur-md border-b border-[#d4af37]/20 py-3 shadow-lg shadow-black/30' 
          : 'bg-gradient-to-b from-[#0e1a17]/90 via-[#0e1a17]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1 (Brand) - Zone 2 (4-5 Nav Links) - Zone 3 (1 Primary Action) */}
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Brand Zone */}
          <a href="#" className="flex items-center gap-2 group whitespace-nowrap shrink-0">
            <FairyNestLogo size="sm" showText={true} />
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#c4d6cf]">
            <a 
              href="#about" 
              className="hover:text-[#e5c57a] transition-colors whitespace-nowrap shrink-0 tracking-wide"
            >
              About
            </a>
            <a 
              href="#rooms" 
              className="hover:text-[#e5c57a] transition-colors whitespace-nowrap shrink-0 tracking-wide"
            >
              Rooms & Units
            </a>
            <a 
              href="#amenities" 
              className="hover:text-[#e5c57a] transition-colors whitespace-nowrap shrink-0 tracking-wide"
            >
              Amenities
            </a>
            <a 
              href="#reviews" 
              className="hover:text-[#e5c57a] transition-colors whitespace-nowrap shrink-0 tracking-wide"
            >
              Reviews
            </a>
            <a 
              href="#location" 
              className="hover:text-[#e5c57a] transition-colors whitespace-nowrap shrink-0 tracking-wide"
            >
              Location
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action (Single-line) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${HOMESTAY_INFO.phone}`}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#f4efe6] hover:text-[#e5c57a] transition-colors whitespace-nowrap shrink-0"
              title="Call Homestay Host"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="tabular-nums">{HOMESTAY_INFO.displayPhone}</span>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0e1a17] bg-gradient-to-r from-[#d4af37] via-[#e6c86e] to-[#c5a059] rounded-lg hover:brightness-110 shadow-sm hover:shadow-[#d4af37]/20 transition-all whitespace-nowrap shrink-0 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-[#0e1a17]" />
              <span>Book via WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#0e1a17] bg-[#d4af37] rounded-lg hover:brightness-110"
              aria-label="Book on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-[#0e1a17]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#f4efe6] hover:text-[#d4af37] transition-colors rounded-lg border border-[#23453b]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0e1a17]/98 border-b border-[#d4af37]/20 px-6 py-5 animate-in fade-in duration-200">
          <div className="flex flex-col gap-4 text-sm font-medium text-[#c4d6cf]">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#e5c57a] py-1 transition-colors"
            >
              About Fairy Nest
            </a>
            <a 
              href="#rooms" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#e5c57a] py-1 transition-colors"
            >
              Rooms & Accommodations
            </a>
            <a 
              href="#amenities" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#e5c57a] py-1 transition-colors"
            >
              Kitchen & Amenities
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#e5c57a] py-1 transition-colors"
            >
              Guest Reviews (4.1 ⭐)
            </a>
            <a 
              href="#location" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#e5c57a] py-1 transition-colors"
            >
              Map & Location
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#e5c57a] py-1 transition-colors"
            >
              Direct Enquiry
            </a>
            
            <div className="pt-3 border-t border-[#1d3830] flex flex-col gap-2.5">
              <a
                href={`tel:${HOMESTAY_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[#d4af37]/30 text-xs font-semibold text-[#f4efe6]"
              >
                <PhoneCall className="w-4 h-4 text-[#d4af37]" />
                <span>Call Host: {HOMESTAY_INFO.displayPhone}</span>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-xs font-semibold text-[#0e1a17]"
              >
                <MessageCircle className="w-4 h-4 fill-[#0e1a17]" />
                <span>Instant WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
