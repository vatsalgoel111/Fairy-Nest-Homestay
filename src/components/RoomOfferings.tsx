import React, { useState } from 'react';
import { HOMESTAY_UNITS, HomestayUnit, HOMESTAY_INFO } from '../data/homestayData';
import { Bed, Utensils, Bath, Heart, Users, Check, MessageCircle, ArrowRight, Sparkles, X } from 'lucide-react';

export const RoomOfferings: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'all' | '2bhk' | '1bhk' | '1rk' | 'single'>('all');
  const [activeModalUnit, setActiveModalUnit] = useState<HomestayUnit | null>(null);

  const filteredUnits = selectedType === 'all' 
    ? HOMESTAY_UNITS 
    : HOMESTAY_UNITS.filter(u => u.type === selectedType);

  const getWhatsAppBookingLink = (unitName: string, unitCode: string) => {
    const text = `Hello Fairy Nest Homestay! I would like to check availability and book: ${unitName} (${unitCode}). Please let me know current tariff for my dates.`;
    return `https://wa.me/${HOMESTAY_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="rooms" className="py-20 lg:py-28 bg-[#F4EFE6] relative border-b border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block mb-2">
              Boutique Accommodations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#162A24] tracking-tight">
              Suites & Studios with Attached Kitchens
            </h2>
            <p className="text-sm sm:text-base text-[#52665F] mt-3">
              Every unit at Fairy Nest Homestay includes its own <strong className="text-[#162A24]">attached private kitchen and private bathroom</strong>. Clean, couple-friendly, and budget-conscious.
            </p>
          </div>

          {/* Interactive Filter Tabs (Button-based segmented control) */}
          <div className="flex items-center gap-1 p-1 bg-white border border-[#E8E3DA] rounded-xl self-start md:self-auto overflow-x-auto max-w-full shadow-xs">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedType === 'all' 
                  ? 'bg-[#162A24] text-white shadow-xs' 
                  : 'text-[#7E948D] hover:text-[#162A24]'
              }`}
            >
              All Accommodations
            </button>
            <button
              onClick={() => setSelectedType('2bhk')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedType === '2bhk' 
                  ? 'bg-[#162A24] text-white shadow-xs' 
                  : 'text-[#7E948D] hover:text-[#162A24]'
              }`}
            >
              2BHK Suites
            </button>
            <button
              onClick={() => setSelectedType('1bhk')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedType === '1bhk' 
                  ? 'bg-[#162A24] text-white shadow-xs' 
                  : 'text-[#7E948D] hover:text-[#162A24]'
              }`}
            >
              1BHK Flats
            </button>
            <button
              onClick={() => setSelectedType('1rk')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedType === '1rk' 
                  ? 'bg-[#162A24] text-white shadow-xs' 
                  : 'text-[#7E948D] hover:text-[#162A24]'
              }`}
            >
              Penthouse (1RK)
            </button>
            <button
              onClick={() => setSelectedType('single')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedType === 'single' 
                  ? 'bg-[#162A24] text-white shadow-xs' 
                  : 'text-[#7E948D] hover:text-[#162A24]'
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
              className="group rounded-3xl bg-white border border-[#E8E3DA] hover:border-[#C5A059] transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-xl hover:shadow-[#162A24]/10"
            >
              <div>
                {/* Visual Header / Room Representation Container */}
                <div className="relative h-60 sm:h-68 bg-gradient-to-br from-[#162A24] via-[#11211C] to-[#0A1411] p-6 flex flex-col justify-between overflow-hidden">
                  
                  {/* Atmospheric Light Glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/15 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
                  
                  {/* Top Bar inside Card */}
                  <div className="flex justify-between items-center relative z-10">
                    <span className="text-[11px] font-mono tracking-wide text-white/90 bg-black/40 backdrop-blur-xs px-3 py-1 rounded-full border border-white/10">
                      {unit.unitCode}
                    </span>
                    {unit.badge && (
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#162A24] bg-[#E0C788] px-3 py-1 rounded-full">
                        {unit.badge}
                      </span>
                    )}
                  </div>

                  {/* Room Visual Graphic Motif */}
                  <div className="relative z-10 my-auto flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[#E0C788] shadow-inner shrink-0 group-hover:scale-105 transition-transform">
                      {unit.type === '2bhk' && <Bed className="w-7 h-7" />}
                      {unit.type === '1bhk' && <Heart className="w-7 h-7 text-rose-400" />}
                      {unit.type === '1rk' && <Sparkles className="w-7 h-7 text-[#E0C788]" />}
                      {unit.type === 'single' && <Users className="w-7 h-7" />}
                    </div>
                    <div>
                      <span className="text-xs text-white/70 block">{unit.typeLabel}</span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#E0C788] transition-colors">
                        {unit.name}
                      </h3>
                    </div>
                  </div>

                  {/* Bottom Strip inside Visual */}
                  <div className="relative z-10 flex items-center justify-between text-xs text-white/90 border-t border-white/15 pt-3">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#E0C788]" />
                      <span>{unit.capacity}</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-[#E0C788]">
                      <Utensils className="w-3.5 h-3.5" />
                      <span>Attached Kitchen & Bath</span>
                    </span>
                  </div>

                </div>

                {/* Card Body */}
                <div className="p-7">
                  <p className="text-sm text-[#52665F] leading-relaxed mb-6">
                    {unit.description}
                  </p>

                  {/* Inclusions checklist */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold text-[#162A24] uppercase tracking-wider block">
                      Inclusions
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#52665F]">
                      {unit.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Real Instagram Highlight Note */}
                  <div className="text-[11px] text-[#7E948D] bg-[#FAF8F5] border border-[#E8E3DA] p-3 rounded-xl mb-6">
                    <strong className="text-[#162A24]">Verified Room Code: </strong>
                    {unit.realHighlightNote}
                  </div>

                  {/* Pricing Reference */}
                  <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] text-xs">
                    <span className="font-semibold text-[#162A24] block">Tariff Reference:</span>
                    <span className="text-[#52665F]">{unit.pricingNote}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-7 pb-7 pt-0 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={getWhatsAppBookingLink(unit.name, unit.unitCode)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-[#162A24] hover:bg-[#223F36] transition-all shadow-xs active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Reserve via WhatsApp</span>
                </a>

                <button
                  onClick={() => setActiveModalUnit(unit)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-xs font-semibold text-[#162A24] bg-[#FAF8F5] hover:bg-[#EDE6D9] border border-[#E8E3DA] transition-colors cursor-pointer"
                >
                  <span>Room Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Request Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E3DA] text-center max-w-3xl mx-auto shadow-xs">
          <h3 className="font-serif text-xl font-bold text-[#162A24] mb-2">
            Looking for a Specific Room or Floor?
          </h3>
          <p className="text-xs sm:text-sm text-[#52665F] leading-relaxed mb-4">
            Whether you prefer our top-floor <strong className="text-[#162A24]">Penthouse 1RK Studio</strong> or a family-sized <strong className="text-[#162A24]">2BHK Suite (Unit-1 or Unit-8)</strong>, message the host directly with your check-in dates for instant confirmation.
          </p>
          <a
            href={`https://wa.me/${HOMESTAY_INFO.phoneRaw}?text=${encodeURIComponent('Hello Fairy Nest Homestay! I would like to ask about room availability and specific units.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#162A24] hover:text-[#C5A059] underline underline-offset-4"
          >
            <MessageCircle className="w-4 h-4 text-[#C5A059]" />
            <span>Chat with Host on WhatsApp (+91 70021 76711)</span>
          </a>
        </div>

      </div>

      {/* Modal Dialog for Room Details */}
      {activeModalUnit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white border border-[#E8E3DA] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setActiveModalUnit(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full text-[#7E948D] hover:text-[#162A24] bg-[#F4EFE6] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-[11px] font-mono text-[#C5A059] uppercase font-semibold block">
              {activeModalUnit.unitCode}
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#162A24] mt-1 mb-1">
              {activeModalUnit.name}
            </h3>
            <span className="text-xs text-[#7E948D] block mb-4">
              Capacity: {activeModalUnit.capacity} · Couple Friendly
            </span>

            <div className="space-y-4 text-xs sm:text-sm text-[#52665F] my-4 leading-relaxed">
              <p>{activeModalUnit.description}</p>
              
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA]">
                <strong className="text-[#162A24] block mb-1">Kitchen & Bath Independence:</strong>
                <span>Every unit at Fairy Nest includes its own private attached kitchen setup and private bath. Guests enjoy full self-catering flexibility to brew tea, make meals, and enjoy a private holiday.</span>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA]">
                <strong className="text-[#162A24] block mb-1">Tariff Reference:</strong>
                <span className="text-[#162A24] font-medium">{activeModalUnit.pricingNote}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8E3DA] flex gap-3">
              <a
                href={getWhatsAppBookingLink(activeModalUnit.name, activeModalUnit.unitCode)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-semibold text-white bg-[#162A24] hover:bg-[#223F36] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Book This Unit via WhatsApp</span>
              </a>
              <button
                onClick={() => setActiveModalUnit(null)}
                className="px-5 py-3.5 rounded-xl text-xs font-semibold text-[#162A24] bg-[#F4EFE6] hover:bg-[#EDE6D9] transition-colors cursor-pointer"
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
