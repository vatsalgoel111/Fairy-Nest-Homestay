import React from 'react';
import { UtensilsCrossed, Bath, Heart, Coffee, MapPin, BadgeIndianRupee, Sparkles, ShieldCheck } from 'lucide-react';
import { AMENITIES_LIST } from '../data/homestayData';

export const AmenitiesSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    UtensilsCrossed: <UtensilsCrossed className="w-6 h-6 text-[#d4af37]" />,
    Bath: <Bath className="w-6 h-6 text-[#d4af37]" />,
    Heart: <Heart className="w-6 h-6 text-rose-400" />,
    Coffee: <Coffee className="w-6 h-6 text-[#d4af37]" />,
    MapPin: <MapPin className="w-6 h-6 text-[#d4af37]" />,
    BadgeIndianRupee: <BadgeIndianRupee className="w-6 h-6 text-[#d4af37]" />,
  };

  return (
    <section id="amenities" className="py-20 lg:py-28 bg-[#101e1a] relative border-t border-[#1d3830]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hospitality Features</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f4efe6] tracking-tight">
            Designed for Authentic Homestay Freedom
          </h2>
          <p className="text-sm sm:text-base text-[#9fb3ab] mt-3">
            Every feature is verified from our Instagram profile and actual guest experiences in Guwahati.
          </p>
        </div>

        {/* 6-Card Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITIES_LIST.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-2xl bg-[#142823] border border-[#23453b] hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#1b352e] border border-[#d4af37]/20 flex items-center justify-center mb-5">
                  {iconMap[item.icon] || <ShieldCheck className="w-6 h-6 text-[#d4af37]" />}
                </div>
                <h3 className="text-lg font-bold text-[#f4efe6] mb-2 font-serif">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9fb3ab] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#1d3830] flex items-center gap-1 text-[11px] text-[#e5c57a]">
                <span>Verified Homestay Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Feature Banner: The Attached Kitchen Advantage */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#17332a] via-[#1b3b30] to-[#142822] border border-[#d4af37]/30 p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <span className="text-[11px] font-mono text-[#d4af37] uppercase tracking-wider block mb-1">
                Why Guests Choose Us in Guwahati
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#f4efe6] mb-2">
                All Rooms Have Attached Kitchens & Private Baths
              </h3>
              <p className="text-xs sm:text-sm text-[#c4d6cf] leading-relaxed">
                Traveling with infants, parents, or specific dietary needs? Eating restaurant food for days can be tiring. Having your own private kitchen inside the unit means you can prepare home-cooked favorites, boil fresh milk, make late-night snacks, or brew local Assam tea whenever you wish.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-[#0e1a17] bg-[#d4af37] hover:bg-[#e6c86e] transition-colors shadow-md"
              >
                <span>Inquire About Availability</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
