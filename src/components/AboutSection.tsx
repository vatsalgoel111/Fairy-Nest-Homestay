import React from 'react';
import { Heart, Coffee, ShieldCheck, MapPin, Sparkles, Home } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#101e1a] relative overflow-hidden border-t border-[#1d3830]">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#162e27]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-3">
            <Home className="w-4 h-4" />
            <span>Our Homestay Story & Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f4efe6] tracking-tight leading-tight">
            A quiet sanctuary crafted for comfort, warmth, and self-reliant living.
          </h2>
        </div>

        {/* 2-Column Asymmetric Narrative & Facts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Narrative Block */}
          <div className="lg:col-span-7 space-y-6 text-[#c4d6cf] text-base sm:text-lg leading-relaxed">
            <p>
              Tucked away on <strong className="text-[#f4efe6]">Gandhi Basti Road in the scenic Sarania Hills</strong> of Guwahati, <span className="text-[#e5c57a] font-medium">Fairy Nest Homestay</span> was established with a singular vision: to offer travelers a peaceful, secure, and genuine home-away-from-home in the Gateway to Northeast India.
            </p>

            <p>
              Unlike crowded commercial hotels, our homestay provides self-contained living spaces where every guest enjoys complete autonomy. Every <strong className="text-[#f4efe6]">1BHK, 2BHK, and Penthouse studio includes its own attached private kitchen and private bathroom</strong>. Whether you are brewing morning tea, cooking comforting dietary meals, or unwinding after exploring Kamakhya or the Brahmaputra riverfront, you are in a space that feels like your own.
            </p>

            <p>
              We take genuine pride in what our guests cherish most: <strong className="text-[#f4efe6]">warm, attentive management</strong>, a welcoming environment for couples, clean well-kept rooms, and a <strong className="text-[#f4efe6]">complimentary breakfast</strong> to start your day with comfort.
            </p>

            {/* Authentic Pillars Strip */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#142823] border border-[#23453b]">
                <div className="flex items-center gap-2 text-[#e5c57a] font-semibold text-sm mb-1.5">
                  <Heart className="w-4 h-4 text-rose-400" />
                  <span>Kind & Loving Management</span>
                </div>
                <p className="text-xs text-[#9fb3ab] leading-normal">
                  Consistently recognized in 132 Google reviews for thoughtful host hospitality and prompt assistance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#142823] border border-[#23453b]">
                <div className="flex items-center gap-2 text-[#e5c57a] font-semibold text-sm mb-1.5">
                  <Coffee className="w-4 h-4 text-[#d4af37]" />
                  <span>Complimentary Breakfast</span>
                </div>
                <p className="text-xs text-[#9fb3ab] leading-normal">
                  Fresh morning breakfast served to all guests, celebrated as a standout feature of your stay.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Facts & Guidelines Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-[#152c25] to-[#0d1815] border border-[#d4af37]/30 shadow-xl relative">
              <div className="flex items-center justify-between border-b border-[#23453b] pb-4 mb-6">
                <div>
                  <span className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider block">Verified Details</span>
                  <h3 className="font-serif text-lg font-bold text-[#f4efe6]">Fairy Nest Homestay Profile</h3>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-[#e5c57a] block leading-none">4.1 ⭐</span>
                  <span className="text-[10px] text-[#9fb3ab]">132 Reviews</span>
                </div>
              </div>

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#f4efe6] block text-xs">Exact Location</strong>
                    <span className="text-xs text-[#9fb3ab]">
                      Gandhi Basti, Sarania Hills, Guwahati-3 (Opposite Nabagraha Than area)
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#f4efe6] block text-xs">Stay Policy</strong>
                    <span className="text-xs text-[#9fb3ab]">
                      Couple Friendly & Family Welcoming with valid government ID check
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#f4efe6] block text-xs">Available Units</strong>
                    <span className="text-xs text-[#9fb3ab]">
                      1BHK Flats, 2BHK Apartments, Penthouse (1RK) & Single Room (Units 1 to 13)
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Home className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#f4efe6] block text-xs">Self-Catering Standard</strong>
                    <span className="text-xs text-[#9fb3ab]">
                      100% of rooms equipped with private attached kitchen and attached bathroom
                    </span>
                  </div>
                </li>
              </ul>

              {/* Approachable host quote note */}
              <div className="mt-6 pt-5 border-t border-[#23453b] text-xs text-[#c4d6cf] italic bg-[#0f201b]/60 p-3 rounded-lg border border-dashed border-[#d4af37]/20">
                "We want every guest to experience genuine comfort at fair budget rates. Whether you need an early check-in or guidance on Guwahati, we are always reachable."
              </div>

              {/* Direct Booking CTA */}
              <div className="mt-5">
                <a
                  href={`https://wa.me/${HOMESTAY_INFO.phoneRaw}?text=${encodeURIComponent('Hello! I would like to inquire about staying at Fairy Nest Homestay.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs text-[#0e1a17] bg-[#d4af37] hover:bg-[#e6c86e] transition-colors"
                >
                  <span>Chat Directly with Host</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
