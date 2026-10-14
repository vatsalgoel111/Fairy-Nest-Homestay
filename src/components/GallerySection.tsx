import React, { useState } from 'react';
import { Sparkles, Bed, Utensils, Coffee, Mountain, Heart, ExternalLink } from 'lucide-react';
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
    title: "Spacious 2BHK Master Bedroom & Hall",
    category: "2bhk",
    categoryLabel: "2BHK Suite",
    description: "Comfortable double bed with wood paneling, clean linens, attached private kitchen and bath. Perfect for family stays.",
    highlight: "Attached Kitchen & Bath",
    bgGrad: "from-[#1b342e] via-[#142822] to-[#0c1613]"
  },
  {
    id: "g-2",
    unitTag: "Unit-8 (2BHK)",
    title: "2BHK Living Lounge & Couch Seating",
    category: "2bhk",
    categoryLabel: "2BHK Suite",
    description: "Green accent paneled wall with comfortable sofa, ambient warm lights, and space to lounge with company.",
    highlight: "Couple & Family Friendly",
    bgGrad: "from-[#16382e] via-[#10241e] to-[#0b1713]"
  },
  {
    id: "g-3",
    unitTag: "Unit-2 (1BHK)",
    title: "1BHK Cozy Bedroom with Fairy Lights",
    category: "1bhk",
    categoryLabel: "1BHK Apartment",
    description: "Warm glowing string fairy lights, plush curtains, and relaxing atmosphere for couples visiting Guwahati.",
    highlight: "Warm Fairy Light Decor",
    bgGrad: "from-[#213a32] via-[#162722] to-[#0d1714]"
  },
  {
    id: "g-4",
    unitTag: "Unit-9 (1BHK)",
    title: "1BHK Accent Living Corner",
    category: "1bhk",
    categoryLabel: "1BHK Apartment",
    description: "Private hall with colorful seating, quiet reading corner, and attached kitchenette for making tea & meals.",
    highlight: "Attached Kitchenette",
    bgGrad: "from-[#1e342b] via-[#13221c] to-[#0b1512]"
  },
  {
    id: "g-5",
    unitTag: "Unit-3 (1RK)",
    title: "Penthouse Studio with Rooftop Breeze",
    category: "penthouse",
    categoryLabel: "Penthouse 1RK",
    description: "Top floor 1RK penthouse room with cozy double bed, window framing the green Sarania Hills, and quiet privacy.",
    highlight: "Rooftop Atmosphere",
    bgGrad: "from-[#293d35] via-[#172721] to-[#0c1411]"
  },
  {
    id: "g-6",
    unitTag: "Unit-5 (1RK)",
    title: "Penthouse Room with Star Lights",
    category: "penthouse",
    categoryLabel: "Penthouse 1RK",
    description: "Fairy star lights along headboard, soft accent illumination, and private attached washroom.",
    highlight: "Intimate Couple Vibe",
    bgGrad: "from-[#203a31] via-[#142620] to-[#0b1411]"
  },
  {
    id: "g-7",
    unitTag: "Breakfast Service",
    title: "Complimentary Morning Homestay Breakfast",
    category: "lifestyle",
    categoryLabel: "Dining",
    description: "Warm, fresh homestay breakfast prepared with care, served daily to our guests with authentic Assam tea.",
    highlight: "Free with All Bookings",
    bgGrad: "from-[#2b3a24] via-[#1c2617] to-[#0f140c]"
  },
  {
    id: "g-8",
    unitTag: "Sarania Hills Location",
    title: "Gandhi Basti Neighborhood Views",
    category: "lifestyle",
    categoryLabel: "Location",
    description: "Tranquil green slopes of Sarania Hills near Nabagraha temple area, just minutes from central Paltan Bazar.",
    highlight: "Peaceful Hill Setting",
    bgGrad: "from-[#143229] via-[#0f211b] to-[#091511]"
  }
];

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | '2bhk' | '1bhk' | 'penthouse' | 'lifestyle'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#0e1a17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] block mb-2">
              Instagram Highlights & Unit Gallery
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f4efe6] tracking-tight">
              A Glimpse Inside Fairy Nest
            </h2>
            <p className="text-sm sm:text-base text-[#9fb3ab] mt-3">
              Explore our real unit layouts (Units 1 through 13) recorded in our official Instagram highlights.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#142823] border border-[#23453b] rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'all' 
                  ? 'bg-[#d4af37] text-[#0e1a17]' 
                  : 'text-[#9fb3ab] hover:text-[#f4efe6]'
              }`}
            >
              All Photos
            </button>
            <button
              onClick={() => setActiveFilter('2bhk')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === '2bhk' 
                  ? 'bg-[#d4af37] text-[#0e1a17]' 
                  : 'text-[#9fb3ab] hover:text-[#f4efe6]'
              }`}
            >
              2BHK Suites
            </button>
            <button
              onClick={() => setActiveFilter('1bhk')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === '1bhk' 
                  ? 'bg-[#d4af37] text-[#0e1a17]' 
                  : 'text-[#9fb3ab] hover:text-[#f4efe6]'
              }`}
            >
              1BHK Flats
            </button>
            <button
              onClick={() => setActiveFilter('penthouse')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'penthouse' 
                  ? 'bg-[#d4af37] text-[#0e1a17]' 
                  : 'text-[#9fb3ab] hover:text-[#f4efe6]'
              }`}
            >
              Penthouse (1RK)
            </button>
            <button
              onClick={() => setActiveFilter('lifestyle')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'lifestyle' 
                  ? 'bg-[#d4af37] text-[#0e1a17]' 
                  : 'text-[#9fb3ab] hover:text-[#f4efe6]'
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
              className="cursor-pointer group rounded-2xl overflow-hidden bg-[#132520] border border-[#23453b] hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
            >
              {/* Photo Representation Container */}
              <div className={`relative h-48 bg-gradient-to-br ${item.bgGrad} p-4 flex flex-col justify-between overflow-hidden`}>
                
                {/* Fairy lights glow overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/15 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                
                {/* Unit badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-semibold bg-[#0e1a17]/90 text-[#e5c57a] px-2 py-0.5 rounded border border-[#d4af37]/25">
                    {item.unitTag}
                  </span>
                  <span className="text-[10px] text-[#9fb3ab]">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Central Motif Icon */}
                <div className="relative z-10 my-auto flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#0e1a17]/80 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform">
                    {item.category === '2bhk' && <Bed className="w-6 h-6" />}
                    {item.category === '1bhk' && <Heart className="w-6 h-6 text-rose-400" />}
                    {item.category === 'penthouse' && <Sparkles className="w-6 h-6" />}
                    {item.category === 'lifestyle' && <Coffee className="w-6 h-6" />}
                  </div>
                </div>

                {/* Bottom Highlight */}
                <div className="relative z-10 text-[11px] font-medium text-[#e5c57a] bg-[#0c1815]/75 px-2 py-1 rounded backdrop-blur-xs flex items-center justify-between">
                  <span>{item.highlight}</span>
                  <ExternalLink className="w-3 h-3 text-[#9fb3ab] group-hover:text-[#f4efe6]" />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 bg-[#11211b]">
                <h3 className="font-serif font-bold text-sm text-[#f4efe6] group-hover:text-[#e5c57a] transition-colors line-clamp-1 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#9fb3ab] line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Profile Footer Link */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-[#142923] border border-[#23453b]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs shrink-0">
              IG
            </div>
            <div>
              <span className="font-semibold text-xs sm:text-sm text-[#f4efe6] block">
                Follow @fairynesthomestayguwahati on Instagram
              </span>
              <span className="text-xs text-[#9fb3ab]">
                5,000+ followers · 17 posts · Stories highlighting all 13 homestay units
              </span>
            </div>
          </div>

          <a
            href={HOMESTAY_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#f4efe6] bg-[#1a382f] hover:bg-[#23493e] border border-[#325e51] transition-colors"
          >
            <span>View Instagram Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Modal Dialog for Single Photo Focus */}
      {selectedPhoto && (
        <div 
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
        >
          <div 
            onClick={e => e.stopPropagation()}
            className="bg-[#12231e] border border-[#d4af37]/40 rounded-2xl max-w-md w-full p-6 shadow-2xl relative"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-1 rounded-lg text-[#9fb3ab] hover:text-[#f4efe6] bg-[#1b342e]"
            >
              ✕
            </button>

            <span className="text-xs font-mono text-[#d4af37] bg-[#1a352d] px-2 py-0.5 rounded">
              {selectedPhoto.unitTag}
            </span>
            <h3 className="font-serif text-xl font-bold text-[#f4efe6] mt-2 mb-2">
              {selectedPhoto.title}
            </h3>
            <p className="text-xs text-[#b8ccc4] leading-relaxed mb-4">
              {selectedPhoto.description}
            </p>

            <div className="p-3 rounded-lg bg-[#162e27] border border-[#23453b] text-xs text-[#e5c57a] mb-5">
              Highlight: {selectedPhoto.highlight}
            </div>

            <a
              href={`https://wa.me/${HOMESTAY_INFO.phoneRaw}?text=${encodeURIComponent(`Hello! I am inquiring about ${selectedPhoto.unitTag} - ${selectedPhoto.title}. Is it available?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-[#0e1a17] bg-[#d4af37] hover:bg-[#e6c86e]"
            >
              <span>Ask Host About This Specific Unit</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
