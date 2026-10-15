import React, { useState } from 'react';
import { ALL_13_UNITS, HomestayUnit, HOMESTAY_INFO } from '../data/homestayData';
import { Bed, Utensils, Bath, Heart, Sparkles, Users, Check, MessageCircle, X, ArrowRight } from 'lucide-react';
import { HomestayVisualScene } from './VisualAssets';

export const All13UnitsCatalog: React.FC = () => {
  const [filter, setFilter] = useState<'all' | '2bhk' | '1bhk' | '1rk' | 'single'>('all');
  const [activeModalUnit, setActiveModalUnit] = useState<HomestayUnit | null>(null);

  const filteredUnits = filter === 'all' 
    ? ALL_13_UNITS 
    : ALL_13_UNITS.filter(u => u.type === filter);

  const handleUnitBooking = (unit: HomestayUnit) => {
    const text = `Hello Fairy Nest Homestay! I would like to book ${unit.unitCode} - ${unit.name} (${unit.typeLabel}). Please confirm room availability and current price.`;
    window.open(`https://wa.me/${HOMESTAY_INFO.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const getVisualVariant = (type: string): '2bhk' | '1bhk' | 'penthouse' | 'single' => {
    if (type === '2bhk') return '2bhk';
    if (type === '1bhk') return '1bhk';
    if (type === '1rk') return 'penthouse';
    return 'single';
  };

  return (
    <section id="units" className="py-14 sm:py-20 bg-[#FAF8F5] relative border-b border-[#EBE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#B8860B] font-bold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Room Catalog</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14241E] tracking-tight leading-tight">
              All 13 Homestay Rooms & Flats
            </h2>
            <p className="text-base sm:text-lg text-[#3D4F47] mt-3 leading-relaxed">
              Real photos from our verified homestay collection. Every single flat and room includes its own <strong className="text-[#14241E]">attached kitchen and private bathroom</strong>.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white border border-[#E5DFD4] rounded-2xl self-start md:self-auto overflow-x-auto no-scrollbar max-w-full shadow-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-4.5 py-2.5 text-sm sm:text-base font-bold rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                filter === 'all' 
                  ? 'bg-[#14241E] text-white shadow-xs' 
                  : 'text-[#52635B] hover:text-[#14241E] hover:bg-[#FAF8F5]'
              }`}
            >
              All 13 Rooms
            </button>
            <button
              onClick={() => setFilter('2bhk')}
              className={`px-4.5 py-2.5 text-sm sm:text-base font-bold rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                filter === '2bhk' 
                  ? 'bg-[#14241E] text-white shadow-xs' 
                  : 'text-[#52635B] hover:text-[#14241E] hover:bg-[#FAF8F5]'
              }`}
            >
              2BHK (Units 1, 8, 10)
            </button>
            <button
              onClick={() => setFilter('1bhk')}
              className={`px-4.5 py-2.5 text-sm sm:text-base font-bold rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                filter === '1bhk' 
                  ? 'bg-[#14241E] text-white shadow-xs' 
                  : 'text-[#52635B] hover:text-[#14241E] hover:bg-[#FAF8F5]'
              }`}
            >
              1BHK (Units 2, 9, 12, 13)
            </button>
            <button
              onClick={() => setFilter('1rk')}
              className={`px-4.5 py-2.5 text-sm sm:text-base font-bold rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                filter === '1rk' 
                  ? 'bg-[#14241E] text-white shadow-xs' 
                  : 'text-[#52635B] hover:text-[#14241E] hover:bg-[#FAF8F5]'
              }`}
            >
              Penthouse (Units 3–7)
            </button>
            <button
              onClick={() => setFilter('single')}
              className={`px-4.5 py-2.5 text-sm sm:text-base font-bold rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                filter === 'single' 
                  ? 'bg-[#14241E] text-white shadow-xs' 
                  : 'text-[#52635B] hover:text-[#14241E] hover:bg-[#FAF8F5]'
              }`}
            >
              Single (Unit 11)
            </button>
          </div>
        </div>

        {/* 13-Unit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredUnits.map((unit) => (
            <div
              key={unit.id}
              onClick={() => setActiveModalUnit(unit)}
              className="cursor-pointer group rounded-2xl overflow-hidden bg-white border border-[#E5DFD4] hover:border-[#B8860B] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1"
            >
              {/* Visual Scene Header */}
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F4EFE8]">
                  <HomestayVisualScene
                    src={unit.imageUrl}
                    variant={getVisualVariant(unit.type)}
                    badge={unit.badge || unit.typeLabel}
                    title={unit.name}
                  />

                  {/* Top-Right Unit Code Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-xs sm:text-sm font-bold font-mono text-[#14241E] bg-white/95 px-2.5 py-1 rounded-md shadow-xs border border-[#E5DFD4]">
                      {unit.unitCode}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B8860B] block mb-1.5">
                    {unit.typeLabel} · {unit.capacity}
                  </span>
                  
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#14241E] group-hover:text-[#1C362D] transition-colors leading-snug">
                    {unit.name}
                  </h3>

                  <p className="text-sm text-[#52635B] mt-2 line-clamp-2 leading-relaxed">
                    {unit.tagline}
                  </p>

                  {/* Inclusions pill row */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-3.5 border-t border-[#EDE6DC]">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#14241E] bg-[#F4EFE8] px-2.5 py-1 rounded-md">
                      <Utensils className="w-3.5 h-3.5 text-[#B8860B]" />
                      <span>Attached Kitchen</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#14241E] bg-[#F4EFE8] px-2.5 py-1 rounded-md">
                      <Bath className="w-3.5 h-3.5 text-[#B8860B]" />
                      <span>Private Bath</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Rate & WhatsApp Button */}
              <div className="p-5 pt-0">
                <div className="flex items-center justify-between pt-3.5 border-t border-[#EDE6DC]">
                  <div className="text-sm sm:text-base text-[#14241E] font-serif font-bold">
                    {unit.pricingEstimate.split('[')[0]}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleUnitBooking(unit);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#14241E] hover:bg-[#1D362C] transition-colors cursor-pointer"
                    title="Inquire about this room on WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#E2BC5A]" />
                    <span>Inquire</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Inspector for Selected Unit */}
        {activeModalUnit && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setActiveModalUnit(null)}
          >
            <div 
              className="bg-white rounded-3xl border border-[#E2DAD0] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Visual Scene */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#FAF8F5]">
                <HomestayVisualScene
                  src={activeModalUnit.imageUrl}
                  variant={getVisualVariant(activeModalUnit.type)}
                  badge={activeModalUnit.badge || activeModalUnit.typeLabel}
                  title={activeModalUnit.name}
                />
                
                <button
                  onClick={() => setActiveModalUnit(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 text-[#14241E] hover:bg-white flex items-center justify-center shadow-md cursor-pointer transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-10 space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#B8860B] block mb-1">
                      {activeModalUnit.unitCode} · {activeModalUnit.typeLabel}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#14241E] leading-tight">
                      {activeModalUnit.name}
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs sm:text-sm text-[#64756E] block font-medium">Estimated Price</span>
                    <strong className="text-xl sm:text-2xl font-serif text-[#14241E] font-bold">
                      {activeModalUnit.pricingEstimate}
                    </strong>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-[#3D4F47] leading-relaxed">
                  {activeModalUnit.description}
                </p>

                {/* Specs List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD4] text-sm sm:text-base">
                  <div className="flex items-center gap-2.5">
                    <Users className="w-4.5 h-4.5 text-[#B8860B]" />
                    <span className="font-semibold text-[#14241E]">Guests: {activeModalUnit.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Bed className="w-4.5 h-4.5 text-[#B8860B]" />
                    <span className="font-semibold text-[#14241E]">Beds: {activeModalUnit.bedType}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Utensils className="w-4.5 h-4.5 text-[#B8860B]" />
                    <span className="font-semibold text-[#14241E]">Attached Kitchen Included</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Bath className="w-4.5 h-4.5 text-[#B8860B]" />
                    <span className="font-semibold text-[#14241E]">Private Bathroom with Geyser</span>
                  </div>
                </div>

                {/* Kitchen Features */}
                <div>
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#14241E] mb-2.5">
                    Kitchen Items in Room
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalUnit.kitchenFeatures.map((kf, i) => (
                      <span key={i} className="px-3.5 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E5DFD4] text-xs sm:text-sm font-medium text-[#2E4239]">
                        ✓ {kf}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal CTA */}
                <div className="pt-5 border-t border-[#EDE6DC] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs sm:text-sm text-[#64756E]">
                    Free homemade breakfast included with every booking.
                  </p>
                  
                  <button
                    onClick={() => handleUnitBooking(activeModalUnit)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-base text-white bg-[#14241E] hover:bg-[#1D362C] shadow-sm transition-all cursor-pointer whitespace-nowrap"
                  >
                    <MessageCircle className="w-4.5 h-4.5 text-[#E2BC5A]" />
                    <span>Book {activeModalUnit.unitCode} on WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
