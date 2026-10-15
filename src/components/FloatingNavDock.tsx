import React, { useState, useEffect } from 'react';
import { FairyNestLogo } from './FairyNestLogo';
import { HOMESTAY_INFO } from '../data/homestayData';
import { MessageCircle, Phone } from 'lucide-react';

export const FloatingNavDock: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'suites', 'units', 'hospitality', 'location', 'reserve'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 180) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/${HOMESTAY_INFO.phoneRaw}?text=${encodeURIComponent('Hello Fairy Nest Homestay! I would like to check room availability and book a stay in Guwahati.')}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-4 pointer-events-none transition-all duration-300">
      <nav 
        className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 max-w-5xl w-full ${
          scrolled 
            ? 'bg-[#FAF8F5]/95 backdrop-blur-lg border border-[#E5DFD4] shadow-lg shadow-[#14241E]/5' 
            : 'bg-white/90 backdrop-blur-md border border-[#EDE7DC] shadow-sm'
        }`}
      >
        {/* Brand Lockup */}
        <a href="#hero" className="flex items-center gap-2 group shrink-0" aria-label="Fairy Nest Homestay">
          <FairyNestLogo size="sm" showText={true} variant="dark" />
        </a>

        {/* Center Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 bg-[#F4EFE8] p-1.5 rounded-full border border-[#E6E0D5] text-sm font-semibold text-[#3D4F47]">
          <a
            href="#suites"
            className={`px-4 py-2 rounded-full transition-all ${
              activeSection === 'suites' 
                ? 'bg-[#14241E] text-white shadow-xs' 
                : 'hover:text-[#14241E] hover:bg-white/60'
            }`}
          >
            Room Types
          </a>
          <a
            href="#units"
            className={`px-4 py-2 rounded-full transition-all ${
              activeSection === 'units' 
                ? 'bg-[#14241E] text-white shadow-xs' 
                : 'hover:text-[#14241E] hover:bg-white/60'
            }`}
          >
            All 13 Rooms
          </a>
          <a
            href="#hospitality"
            className={`px-4 py-2 rounded-full transition-all ${
              activeSection === 'hospitality' 
                ? 'bg-[#14241E] text-white shadow-xs' 
                : 'hover:text-[#14241E] hover:bg-white/60'
            }`}
          >
            Breakfast & Tea
          </a>
          <a
            href="#location"
            className={`px-4 py-2 rounded-full transition-all ${
              activeSection === 'location' 
                ? 'bg-[#14241E] text-white shadow-xs' 
                : 'hover:text-[#14241E] hover:bg-white/60'
            }`}
          >
            Location
          </a>
          <a
            href="#reviews"
            className={`px-4 py-2 rounded-full transition-all ${
              activeSection === 'reviews' 
                ? 'bg-[#14241E] text-white shadow-xs' 
                : 'hover:text-[#14241E] hover:bg-white/60'
            }`}
          >
            Reviews (4.1★)
          </a>
        </div>

        {/* Right CTA Cluster */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href={`tel:+${HOMESTAY_INFO.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-[#14241E] bg-[#F4EFE8] hover:bg-[#EAE4D9] border border-[#E5DFD4] transition-colors"
            title="Call host directly"
          >
            <Phone className="w-4 h-4 text-[#B8860B]" />
            <span>+91 70021 76711</span>
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-[#14241E] hover:bg-[#1C362D] shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#E2BC5A]" />
            <span>Book on WhatsApp</span>
          </a>
        </div>
      </nav>
    </header>
  );
};
