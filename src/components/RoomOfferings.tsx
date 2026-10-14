import React, { useState } from 'react';
import { HOMESTAY_UNITS, HomestayUnit, HOMESTAY_INFO } from '../data/homestayData';
import { Bed, Utensils, Bath, Heart, Users, Check, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

export const RoomOfferings: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'all' | '2bhk' | '1bhk' | '1rk' | 'single'>('all');
  const [activeModalUnit, setActiveModalUnit] = useState<HomestayUnit | null>(null);

  const filteredUnits = selectedType === 'all' 
    ? HOMESTAY_UNITS 
    : HOMESTAY_UNITS.filter(u => u.type === selectedType);

  const getWhatsAppBookingLink = (unitName: string, unitCode: string) => {
    const text = `Hello Fairy Nest Homestay! I would like to check availability and book: ${unitName} (${unitCode}). Please let me know current rates.`;
    return `https://wa.me/${HOMESTAY_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="rooms" className="py-20 lg:py-28 bg-[#0e1a17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] block mb-2">
              Verified Accommodation Categories
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f4efe6] tracking-tight">
              Flats & Studios with Attached Kitchens
            </h2>
            <p className="text-sm sm:text-base text-[#9fb3ab] mt-3">
              Every unit at Fairy Nest Homestay includes its own <strong className="text-[#f4efe6]">private kitchen and private bathroom</strong>. Clean, couple-friendly, and budget-friendly.
            </p>
          </div>

          {/* Interactive Filter Tabs (Button-based segmented control) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#142823] border border-[#23453b] rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedType === 'all' 
                  ? 'bg-[#d4af37] text-[#0e1a17] shadow-sm' 
                  : 'text-[#9fb3ab] hover:text-[#f4efe6]'
              }`}
            >
              All Accommodations
            </button>
            <button
              onClick={() => setSelectedType('2bhk')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedType === '2bhk' 
                  ? 'bg-[#d4af37] text-[#0e1a17] shadow-sm' 
                  : 'text-[#9fb3ab] hover:text-[#f4efe6]'
              }`}
            >
              2BHK Suites
            </button>
            <button
              onClick={() => setSelectedType('1bhk')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedType === '1bhk' 
                  ? 'bg-[#d4af37] text-[#0e1a17] shadow-sm' 
                  : 'text-[#9fb3ab] hover:text-[#f4efe6]'
              }`}
            >
              1BHK Apartments
            </button>
            <button
              onClick={() => setSelectedType('1rk')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedType === '1rk' 
                  ? 'bg-[#d4af37] text-[#0e1a17] shadow-sm' 
                  : 'text-[#9fb3ab] hover:text-[#f4efe6]'
              }`}
            >
              Penthouse (1RK)
            </button>
            <button
              onClick={() => setSelectedType('single')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedType === 'single' 
                  ? 'bg-[#d4af37] text-[#0e1a17] shadow-sm' 
                  : 'text-[#9fb3ab] hover:text-[#f4efe6]'
              }`}
            >
              Single
            </button>
          </div>
        </div>

        {/* Accommodation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredUnits.map((unit) => (
            <div
              key={unit.id}
              className="group rounded-2xl bg-[#12231e] border border-[#23453b] hover:border-[#d4af37]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:shadow-[#0c1915]"
            >
              <div>
                {/* Visual Header / Room Representation Container */}
                <div className={`relative h-56 sm:h-64 bg-gradient-to-br ${unit.bgGradient} p-6 flex flex-col justify-between overflow-hidden`}>
                  
                  {/* Atmospheric Light Glow */}
                  <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#d4af37]/15 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
                  
                  {/* Decorative Fairy String Lights at top */}
                  <div className="flex justify-between items-center px-2 relative z-10">
                    <span className="text-[11px] font-mono tracking-wider text-[#e5c57a]/90 bg-[#0e1a17]/80 px-2.5 py-1 rounded-md border border-[#d4af37]/20">
                      {unit.unitCode}
                    </span>
                    {unit.badge && (
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#d4af37] bg-[#1d382f]/90 px-2.5 py-1 rounded-md border border-[#d4af37]/30">
                        {unit.badge}
                      </span>
                    )}
                  </div>

                  {/* Room Visual Graphic / Silhouette */}
                  <div className="relative z-10 my-auto flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#0e1a17]/80 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shadow-inner shrink-0">
                      {unit.type === '2bhk' && <Bed className="w-7 h-7" />}
                      {unit.type === '1bhk' && <Heart className="w-7 h-7 text-rose-400" />}
                      {unit.type === '1rk' && <Sparkles className="w-7 h-7" />}
                      {unit.type === 'single' && <Users className="w-7 h-7" />}
                    </div>
                    <div>
                      <span className="text-xs text-[#9fb3ab] block">{unit.typeLabel}</span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#f4efe6] group-hover:text-[#e5c57a] transition-colors">
                        {unit.name}
                      </h3>
                    </div>
                  </div>

                  {/* Clean unboxed footer in card visual */}
                  <div className="relative z-10 flex items-center justify-between text-xs text-[#c4d6cf] border-t border-white/10 pt-2.5">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{unit.capacity}</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-[#e5c57a]">
                      <Utensils className="w-3.5 h-3.5" />
                      <span>Kitchen Attached</span>
                    </span>
                  </div>

                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7">
                  <p className="text-sm text-[#b5c7c0] leading-relaxed mb-6">
                    {unit.description}
                  </p>

                  {/* Amenities checklist */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-semibold text-[#d4af37] uppercase tracking-wider block">
                      Included In Unit
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#d6e3de]">
                      {unit.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Real Instagram Highlight Cross-Reference */}
                  <div className="text-[11px] text-[#8ea49c] border-l-2 border-[#d4af37]/50 pl-3 py-1 mb-6 bg-[#162923]/40 rounded-r">
                    <span className="font-medium text-[#f4efe6]">Instagram Verified: </span>
                    {unit.realHighlightNote}
                  </div>

                  {/* Tariff Note */}
                  <div className="text-xs text-[#d4af37] bg-[#152a23] p-3 rounded-lg border border-[#d4af37]/20 mb-6">
                    <span className="font-semibold block text-[#f4efe6]">Pricing Reference</span>
                    {unit.pricingNote}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-0 flex flex-col sm:flex-row items-center gap-3 border-t border-[#1d3830] pt-4">
                <a
                  href={getWhatsAppBookingLink(unit.name, unit.unitCode)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#0e1a17] bg-gradient-to-r from-[#d4af37] via-[#e6c86e] to-[#c5a059] hover:brightness-110 transition-all shadow-sm active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-[#0e1a17]" />
                  <span>Reserve via WhatsApp</span>
                </a>

                <button
                  onClick={() => setActiveModalUnit(unit)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-medium text-[#f4efe6] bg-[#162e27] hover:bg-[#1f3e35] border border-[#23453b] transition-colors"
                >
                  <span>Quick Details</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Note on Real Highlights & Custom Unit Requests */}
        <div className="mt-12 p-6 rounded-2xl bg-[#142823] border border-[#23453b] text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-[#c4d6cf]">
            Have a specific unit preference (such as <strong className="text-[#e5c57a]">Unit-1 2BHK</strong> or top-floor <strong className="text-[#e5c57a]">Unit-3 Penthouse</strong>)? Message us directly on WhatsApp with your travel dates to secure your preferred room.
          </p>
        </div>

      </div>

      {/* Modal View for Quick Details */}
      {activeModalUnit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-[#12231e] border border-[#d4af37]/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setActiveModalUnit(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-[#9fb3ab] hover:text-[#f4efe6] bg-[#1a332b]"
            >
              ✕
            </button>

            <span className="text-xs font-mono text-[#d4af37] uppercase">{activeModalUnit.unitCode}</span>
            <h3 className="font-serif text-2xl font-bold text-[#f4efe6] mt-1 mb-2">
              {activeModalUnit.name}
            </h3>
            <p className="text-xs text-[#9fb3ab] mb-4">
              Capacity: {activeModalUnit.capacity} · Couple-friendly homestay apartment
            </p>

            <div className="space-y-4 text-xs text-[#c4d6cf] my-4">
              <p>{activeModalUnit.description}</p>
              
              <div className="p-3 rounded-lg bg-[#162e27] border border-[#23453b]">
                <strong className="text-[#e5c57a] block mb-1">Kitchen & Bathroom Features:</strong>
                <span>All units are fully attached with private kitchen setup and private bath. You have the freedom to cook tea, breakfast, or full meals during your Guwahati trip.</span>
              </div>

              <div className="p-3 rounded-lg bg-[#162e27] border border-[#23453b]">
                <strong className="text-[#e5c57a] block mb-1">Estimated Pricing:</strong>
                <span>{activeModalUnit.pricingNote}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1d3830] flex gap-3">
              <a
                href={getWhatsAppBookingLink(activeModalUnit.name, activeModalUnit.unitCode)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-[#0e1a17] bg-[#d4af37] hover:bg-[#e6c86e]"
              >
                <MessageCircle className="w-4 h-4 fill-[#0e1a17]" />
                <span>Confirm Booking via WhatsApp</span>
              </a>
              <button
                onClick={() => setActiveModalUnit(null)}
                className="px-4 py-3 rounded-xl text-xs font-medium text-[#f4efe6] bg-[#1a362e] hover:bg-[#23473c]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
