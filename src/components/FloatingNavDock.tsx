import React, { useState, useEffect } from 'react';
import { FairyNestLogo } from './FairyNestLogo';
import { HOMESTAY_INFO } from '../data/homestayData';
import { MessageCircle, Phone, Menu, X, ChevronRight, Bed, Coffee, MapPin, Star, Sparkles } from 'lucide-react';

export const FloatingNavDock: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'suites', 'units', 'hospitality', 'location', 'reviews', 'reserve'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/${HOMESTAY_INFO.phoneRaw}?text=${encodeURIComponent('Hello Fairy Nest Homestay! I would like to check room availability and book a stay in Guwahati.')}`;

  const navItems = [
    { id: 'suites', label: 'Room Types', icon: Bed },
    { id: 'units', label: 'All 13 Rooms', icon: Sparkles },
    { id: 'hospitality', label: 'Breakfast & Tea', icon: Coffee },
    { id: 'location', label: 'Location & Hills', icon: MapPin },
    { id: 'reviews', label: 'Reviews (4.1★)', icon: Star },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-[#FAF8F5]/96 backdrop-blur-md border-b border-[#E5DFD4] shadow-xs py-2.5 sm:py-3' 
          : 'bg-[#0B1511]/90 lg:bg-[#0B1511]/85 backdrop-blur-md border-b border-[#D4AF37]/25 py-3 sm:py-3.5'
      }`}
    >
      <nav 
        className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4 w-full"
        aria-label="Main Navigation"
      >
        {/* Brand Lockup */}
        <a 
          href="#hero" 
          className="flex items-center gap-2 group shrink-0 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] rounded-md transition-opacity hover:opacity-90 min-w-0" 
          aria-label="Fairy Nest Homestay Home"
          onClick={() => setMobileMenuOpen(false)}
        >
          <FairyNestLogo 
            size="sm" 
            showText={true} 
            variant={scrolled ? 'dark' : 'light'} 
          />
        </a>

        {/* Center Desktop Navigation - Clean Architectural Links (No Pill Bubbles) */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-9 text-sm font-medium tracking-wide">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative py-1 transition-all duration-200 group flex items-center gap-1.5 ${
                  isActive
                    ? scrolled
                      ? 'text-[#14241E] font-semibold'
                      : 'text-[#E2BC5A] font-semibold'
                    : scrolled
                      ? 'text-[#3D4F47] hover:text-[#14241E]'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {/* Refined underline indicator matching boutique design */}
                <span 
                  className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300 ${
                    isActive 
                      ? scrolled 
                        ? 'bg-[#B8860B] w-full' 
                        : 'bg-[#E2BC5A] w-full' 
                      : 'w-0 group-hover:w-full ' + (scrolled ? 'bg-[#B8860B]/40' : 'bg-[#E2BC5A]/40')
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Right CTA Cluster */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Direct Phone Call Button */}
          <a
            href={`tel:+${HOMESTAY_INFO.phoneRaw}`}
            className={`hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all border ${
              scrolled
                ? 'text-[#14241E] bg-[#F2EDE4] hover:bg-[#EAE2D3] border-[#E0D7C8]'
                : 'text-white/95 bg-white/10 hover:bg-white/15 border-white/20'
            }`}
            title="Call host directly"
          >
            <Phone className={`w-3.5 h-3.5 ${scrolled ? 'text-[#B8860B]' : 'text-[#E2BC5A]'}`} />
            <span>+91 70021 76711</span>
          </a>

          {/* WhatsApp Direct Reservation Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4.5 sm:py-2.5 rounded-lg text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer shrink-0 ${
              scrolled
                ? 'text-white bg-[#14241E] hover:bg-[#1F372C] hover:shadow-md'
                : 'text-[#0D1814] bg-gradient-to-r from-[#F0D58C] via-[#E2BC5A] to-[#D4AF37] hover:brightness-105 shadow-[#D4AF37]/25 hover:shadow-md'
            }`}
          >
            <MessageCircle className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${scrolled ? 'text-[#E2BC5A]' : 'text-[#0D1814]'}`} />
            <span className="hidden sm:inline">Book on WhatsApp</span>
            <span className="sm:hidden">Book Now</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors border shrink-0 ${
              scrolled
                ? 'text-[#14241E] bg-[#F2EDE4] hover:bg-[#EAE2D3] border-[#E0D7C8]'
                : 'text-white bg-white/10 hover:bg-white/15 border-white/20'
            }`}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-Down Menu Drawer */}
      {mobileMenuOpen && (
        <div 
          className={`lg:hidden border-t px-4 py-5 space-y-3 transition-all duration-300 animate-fadeIn max-h-[calc(100dvh-64px)] overflow-y-auto ${
            scrolled 
              ? 'bg-[#FAF8F5] border-[#E5DFD4] shadow-xl' 
              : 'bg-[#0B1511] border-[#D4AF37]/25 shadow-2xl text-white'
          }`}
        >
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? scrolled
                        ? 'bg-[#EAE3D6] text-[#14241E] font-semibold'
                        : 'bg-white/15 text-[#E2BC5A] font-semibold'
                      : scrolled
                        ? 'text-[#2E3D36] hover:bg-[#F2EDE4]'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? (scrolled ? 'text-[#B8860B]' : 'text-[#E2BC5A]') : 'opacity-70'}`} />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#E5DFD4]/30 space-y-2">
            <a
              href={`tel:+${HOMESTAY_INFO.phoneRaw}`}
              className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-semibold border ${
                scrolled
                  ? 'text-[#14241E] bg-[#F2EDE4] border-[#E0D7C8]'
                  : 'text-white bg-white/10 border-white/20'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#E2BC5A]" />
              <span>Call Host Directly: +91 70021 76711</span>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-bold text-[#0D1814] bg-gradient-to-r from-[#F0D58C] via-[#E2BC5A] to-[#D4AF37] shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#0D1814]" />
              <span>Book on WhatsApp (Instant Reply)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
