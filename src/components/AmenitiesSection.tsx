import React from 'react';
import { UtensilsCrossed, Bath, Heart, Coffee, MapPin, BadgeIndianRupee, Sparkles, Check } from 'lucide-react';
import { AMENITIES_LIST } from '../data/homestayData';

export const AmenitiesSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    UtensilsCrossed: <UtensilsCrossed className="w-5 h-5 text-[#C5A059]" />,
    Bath: <Bath className="w-5 h-5 text-[#C5A059]" />,
    Heart: <Heart className="w-5 h-5 text-rose-500" />,
    Coffee: <Coffee className="w-5 h-5 text-[#C5A059]" />,
    MapPin: <MapPin className="w-5 h-5 text-[#C5A059]" />,
    BadgeIndianRupee: <BadgeIndianRupee className="w-5 h-5 text-[#C5A059]" />,
  };

  return (
    <section id="amenities" className="py-20 lg:py-28 bg-[#FAF8F5] relative border-b border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block mb-2">
            Quiet Luxury & Homely Comforts
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#162A24] tracking-tight">
            Designed for Authentic Homestay Freedom
          </h2>
          <p className="text-sm sm:text-base text-[#52665F] mt-3">
            Every feature is verified directly from our official Instagram profile and verified guest stays in Guwahati.
          </p>
        </div>

        {/* 6-Card Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AMENITIES_LIST.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-3xl bg-white border border-[#E8E3DA] hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F4EFE6] flex items-center justify-center mb-6">
                  {iconMap[item.icon] || <Sparkles className="w-5 h-5 text-[#C5A059]" />}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#162A24] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#52665F] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8E3DA] flex items-center gap-1.5 text-xs text-[#7E948D]">
                <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Verified Homestay Inclusions</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Feature Banner: The Attached Kitchen Advantage */}
        <div className="mt-14 rounded-3xl bg-[#162A24] text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          
          {/* Subtle gold glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[11px] font-mono tracking-widest text-[#E0C788] uppercase block">
                The Self-Catering Advantage
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                All Rooms Feature Attached Private Kitchens & Bathrooms
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl">
                Eating hotel food for days can be tiring, especially if traveling with family, dietary preferences, or infants. Having your own private kitchen inside the flat gives you the freedom to brew Assam tea, prepare light meals, boil milk, or warm late-night snacks at your leisure.
              </p>
            </div>
            
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-[#162A24] bg-[#FAF8F5] hover:bg-white transition-colors shadow-sm"
              >
                <span>Check Dates & Inquire</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
