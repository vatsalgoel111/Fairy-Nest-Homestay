import React, { useState } from 'react';
import { Sparkles, Bed, Coffee, Heart, ExternalLink, X, Utensils } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';

interface GalleryItem {
  id: string;
  unitTag: string;
  title: string;
  category: '2bhk' | '1bhk' | 'penthouse' | 'lifestyle';
  categoryLabel: string;
  description: string;
  highlight: string;
  bgGrad: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    unitTag: "Unit-1 (2BHK)",
    title: "Spacious 2BHK Master Bedroom Suite",
    category: "2bhk",
    categoryLabel: "2BHK Suite",
    description: "Comfortable double bed with wood paneling, clean linens, attached private kitchen and bath. Perfect for families.",
    highlight: "Attached Kitchen & Bath",
    bgGrad: "from-[#162A24] to-[#0E1C18]"
  },
  {
    id: "g-2",
    unitTag: "Unit-8 (2BHK)",
    title: "2BHK Living Hall & Couch Lounge",
    category: "2bhk",
    categoryLabel: "2BHK Suite",
    description: "Green accent paneled wall with comfortable sofa seating, ambient warm lights, and space to relax with family.",
    highlight: "Couple & Family Friendly",
    bgGrad: "from-[#1A332B] to-[#10221D]"
  },
  {
    id: "g-3",
    unitTag: "Unit-2 (1BHK)",
    title: "1BHK Cozy Bedroom with Fairy Lights",
    category: "1bhk",
    categoryLabel: "1BHK Flat",
    description: "Warm glowing string fairy lights, plush curtains, and relaxing atmosphere for couples visiting Guwahati.",
    highlight: "Warm Fairy Light Decor",
    bgGrad: "from-[#1F3D34] to-[#122620]"
  },
  {
    id: "g-4",
    unitTag: "Unit-9 (1BHK)",
    title: "1BHK Accent Living Corner",
    category: "1bhk",
    categoryLabel: "1BHK Flat",
    description: "Private hall with colorful seating, quiet reading corner, and attached kitchenette for preparing tea and meals.",
    highlight: "Attached Kitchenette",
    bgGrad: "from-[#183129] to-[#0E1E19]"
  },
  {
    id: "g-5",
    unitTag: "Unit-3 (1RK)",
    title: "Penthouse Studio with Rooftop Breeze",
    category: "penthouse",
    categoryLabel: "Penthouse 1RK",
    description: "Top floor 1RK penthouse room with cozy double bed, window framing the green Sarania Hills, and private attached washroom.",
    highlight: "Rooftop Atmosphere",
    bgGrad: "from-[#223F36] to-[#142822]"
  },
  {
    id: "g-6",
    unitTag: "Unit-5 (1RK)",
    title: "Penthouse Room with Star Lights",
    category: "penthouse",
    categoryLabel: "Penthouse 1RK",
    description: "Fairy star lights along headboard, soft accent illumination, and private attached kitchen and washroom.",
    highlight: "Intimate Couple Vibe",
    bgGrad: "from-[#1B362E] to-[#10211C]"
  },
  {
    id: "g-7",
    unitTag: "Breakfast Service",
    title: "Complimentary Morning Homestay Breakfast",
    category: "lifestyle",
    categoryLabel: "Dining",
    description: "Warm, fresh homestay breakfast prepared with care, served daily to our guests with authentic Assam tea.",
    highlight: "Free with All Bookings",
    bgGrad: "from-[#2A3B2A] to-[#182418]"
  },
  {
    id: "g-8",
    unitTag: "Sarania Hills Location",
    title: "Gandhi Basti Neighborhood Views",
    category: "lifestyle",
    categoryLabel: "Location",
    description: "Tranquil green slopes of Sarania Hills near Nabagraha temple area, just minutes from central Paltan Bazar.",
    highlight: "Peaceful Hill Setting",
    bgGrad: "from-[#162D26] to-[#0E1F1A]"
  }
];

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | '2bhk' | '1bhk' | 'penthouse' | 'lifestyle'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F4EFE6] relative border-b border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block mb-2">
              Instagram Highlights & Story Showcase
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#162A24] tracking-tight">
              A Glimpse Inside Fairy Nest
            </h2>
            <p className="text-sm sm:text-base text-[#52665F] mt-3">
              Explore our real unit layouts (Units 1 through 13) recorded in our official Instagram highlights.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-white border border-[#E8E3DA] rounded-xl self-start md:self-auto overflow-x-auto max-w-full shadow-xs">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === 'all' 
                  ? 'bg-[#162A24] text-white' 
                  : 'text-[#7E948D] hover:text-[#162A24]'
              }`}
            >
              All Photos
            </button>
            <button
              onClick={() => setActiveFilter('2bhk')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === '2bhk' 
                  ? 'bg-[#162A24] text-white' 
                  : 'text-[#7E948D] hover:text-[#162A24]'
              }`}
            >
              2BHK Suites
            </button>
            <button
              onClick={() => setActiveFilter('1bhk')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === '1bhk' 
                  ? 'bg-[#162A24] text-white' 
                  : 'text-[#7E948D] hover:text-[#162A24]'
              }`}
            >
              1BHK Flats
            </button>
            <button
              onClick={() => setActiveFilter('penthouse')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === 'penthouse' 
                  ? 'bg-[#162A24] text-white' 
                  : 'text-[#7E948D] hover:text-[#162A24]'
              }`}
            >
              Penthouse (1RK)
            </button>
            <button
              onClick={() => setActiveFilter('lifestyle')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === 'lifestyle' 
                  ? 'bg-[#162A24] text-white' 
                  : 'text-[#7E948D] hover:text-[#162A24]'
              }`}
            >
              Breakfast & Vibe
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="cursor-pointer group rounded-3xl overflow-hidden bg-white border border-[#E8E3DA] hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-xs hover:shadow-lg"
            >
              {/* Photo Card Top Visual */}
              <div className={`relative h-48 bg-gradient-to-br ${item.bgGrad} p-5 flex flex-col justify-between overflow-hidden text-white`}>
                
                {/* Fairy lights glow overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                
                {/* Unit Tag badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-semibold bg-black/40 text-[#E0C788] px-2.5 py-1 rounded-full border border-white/10">
                    {item.unitTag}
                  </span>
                  <span className="text-[11px] text-white/70">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Central Icon Motif */}
                <div className="relative z-10 my-auto flex items-center justify-center">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center text-[#E0C788] group-hover:scale-110 transition-transform">
                    {item.category === '2bhk' && <Bed className="w-6 h-6" />}
                    {item.category === '1bhk' && <Heart className="w-6 h-6 text-rose-400" />}
                    {item.category === 'penthouse' && <Sparkles className="w-6 h-6" />}
                    {item.category === 'lifestyle' && <Coffee className="w-6 h-6" />}
                  </div>
                </div>

                {/* Bottom Highlight */}
                <div className="relative z-10 text-[11px] font-medium text-[#E0C788] bg-black/50 px-2.5 py-1 rounded-lg backdrop-blur-xs flex items-center justify-between">
                  <span>{item.highlight}</span>
                  <ExternalLink className="w-3 h-3 text-white/70 group-hover:text-white" />
                </div>
              </div>

              {/* Card Meta Description */}
              <div className="p-5">
                <h3 className="font-serif font-bold text-base text-[#162A24] group-hover:text-[#C5A059] transition-colors line-clamp-1 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#52665F] line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Profile Footer Link */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 rounded-3xl bg-white border border-[#E8E3DA] shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm">
              IG
            </div>
            <div>
              <span className="font-bold text-sm text-[#162A24] block">
                Follow @fairynesthomestayguwahati on Instagram
              </span>
              <span className="text-xs text-[#7E948D]">
                5,029 followers · 17 posts · Highlights featuring every unit (Unit-1 to 13)
              </span>
            </div>
          </div>

          <a
            href={HOMESTAY_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#162A24] bg-[#FAF8F5] hover:bg-[#EDE6D9] border border-[#E8E3DA] transition-colors"
          >
            <span>Visit Instagram Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
          </a>
        </div>

      </div>

      {/* Modal Dialog for Single Photo Focus */}
      {selectedPhoto && (
        <div 
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
        >
          <div 
            onClick={e => e.stopPropagation()}
            className="bg-white border border-[#E8E3DA] rounded-3xl max-w-md w-full p-7 shadow-2xl relative"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-5 right-5 p-1 rounded-full text-[#7E948D] hover:text-[#162A24] bg-[#F4EFE6] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-[11px] font-mono text-[#C5A059] bg-[#FAF8F5] px-2.5 py-1 rounded-md border border-[#E8E3DA] inline-block mb-2">
              {selectedPhoto.unitTag}
            </span>
            <h3 className="font-serif text-xl font-bold text-[#162A24] mb-2">
              {selectedPhoto.title}
            </h3>
            <p className="text-xs text-[#52665F] leading-relaxed mb-4">
              {selectedPhoto.description}
            </p>

            <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] text-xs text-[#162A24] font-medium mb-5">
              Highlight: {selectedPhoto.highlight}
            </div>

            <a
              href={`https://wa.me/${HOMESTAY_INFO.phoneRaw}?text=${encodeURIComponent(`Hello! I saw ${selectedPhoto.unitTag} on your website. Is it available for booking?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-semibold text-white bg-[#162A24] hover:bg-[#223F36] transition-colors"
            >
              <span>Ask Host About This Specific Unit</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
