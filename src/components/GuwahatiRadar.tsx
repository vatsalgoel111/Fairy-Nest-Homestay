import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Phone, ExternalLink } from 'lucide-react';
import { HOMESTAY_INFO, NEARBY_LANDMARKS } from '../data/homestayData';
import { HomestayVisualScene } from './VisualAssets';

export const GuwahatiRadar: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'transit' | 'sightseeing' | 'shopping'>('all');

  const filteredLandmarks = selectedCategory === 'all'
    ? NEARBY_LANDMARKS
    : NEARBY_LANDMARKS.filter(l => l.category === selectedCategory);

  return (
    <section id="location" className="py-14 sm:py-20 bg-[#FAF8F5] relative border-b border-[#EBE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#B8860B] font-bold mb-2">
            <Compass className="w-4 h-4" />
            <span>Location & Nearby Places</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14241E] tracking-tight leading-tight">
            Sarania Hills & Guwahati City Guide
          </h2>
          <p className="text-base sm:text-lg text-[#3D4F47] mt-3 leading-relaxed">
            Located on Gandhi Basti Road in Sarania Hills. Enjoy a peaceful neighborhood while staying just 5 minutes (about 500 meters) from Paltan Bazar and Guwahati Railway Station.
          </p>
        </div>

        {/* 2-Column Map & Distance Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Location Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-white border border-[#E5DFD4] shadow-sm overflow-hidden">
              
              {/* Hillside view artwork */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F4EFE8]">
                <HomestayVisualScene
                  variant="hills"
                  badge="Gandhi Basti · Guwahati-3"
                />
              </div>

              <div className="p-6 sm:p-7 space-y-4">
                <span className="text-xs sm:text-sm font-bold font-mono uppercase tracking-wider text-[#B8860B] block">
                  Official Homestay Address
                </span>
                
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#14241E] leading-snug">
                  {HOMESTAY_INFO.address}
                </h3>

                <div className="space-y-2 text-sm text-[#52635B]">
                  <p className="flex items-center gap-2">
                    <span className="text-[#14241E] font-mono font-bold bg-[#F4EFE8] px-3 py-1 rounded-md border border-[#E5DFD4]">
                      Plus Code: {HOMESTAY_INFO.plusCode}
                    </span>
                  </p>
                  <p className="text-sm text-[#52635B]">Near Nabagraha Than area · Assam 781003</p>
                </div>

                {/* Direct Maps Navigation */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <a
                    href={HOMESTAY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm sm:text-base text-white bg-[#14241E] hover:bg-[#1D362C] shadow-xs active:scale-95 transition-all"
                  >
                    <Navigation className="w-4 h-4 text-[#E2BC5A]" />
                    <span>Open in Google Maps</span>
                  </a>

                  <a
                    href={`tel:+${HOMESTAY_INFO.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm sm:text-base font-semibold text-[#14241E] bg-[#F4EFE8] hover:bg-[#EAE4D9] border border-[#E5DFD4] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#B8860B]" />
                    <span>Call Host</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Neighborhood Rating Box */}
            <div className="p-5 rounded-2xl bg-white border border-[#E5DFD4] flex items-center gap-4 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#B8860B]/30 flex items-center justify-center text-[#B8860B] shrink-0 font-serif font-bold text-2xl">
                3.9
              </div>
              <div>
                <span className="text-base font-bold text-[#14241E] block">
                  Great Location for Visitors
                </span>
                <span className="text-sm text-[#52635B]">
                  Peaceful hillside area, only 0.5 km to central Paltan Bazar
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Key Transit & Destination Landmarks */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1.5 bg-white border border-[#E5DFD4] rounded-2xl self-start overflow-x-auto no-scrollbar shadow-xs">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === 'all' 
                    ? 'bg-[#14241E] text-white shadow-xs' 
                    : 'text-[#52635B] hover:text-[#14241E]'
                }`}
              >
                All Places
              </button>
              <button
                onClick={() => setSelectedCategory('transit')}
                className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === 'transit' 
                    ? 'bg-[#14241E] text-white shadow-xs' 
                    : 'text-[#52635B] hover:text-[#14241E]'
                }`}
              >
                Railway & Travel
              </button>
              <button
                onClick={() => setSelectedCategory('sightseeing')}
                className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === 'sightseeing' 
                    ? 'bg-[#14241E] text-white shadow-xs' 
                    : 'text-[#52635B] hover:text-[#14241E]'
                }`}
              >
                Temples & River
              </button>
              <button
                onClick={() => setSelectedCategory('shopping')}
                className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === 'shopping' 
                    ? 'bg-[#14241E] text-white shadow-xs' 
                    : 'text-[#52635B] hover:text-[#14241E]'
                }`}
              >
                Markets & Food
              </button>
            </div>

            {/* Landmarks List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredLandmarks.map((lm, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#E5DFD4] hover:border-[#B8860B] transition-colors flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs sm:text-sm mb-1.5">
                      <span className="font-mono font-bold text-[#B8860B] bg-[#FBF6EB] px-2 py-0.5 rounded-md">
                        {lm.distance}
                      </span>
                      <span className="text-[#64756E] font-medium">{lm.time}</span>
                    </div>

                    <div className="flex items-start gap-3.5 mt-2">
                      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[#FAF8F5] border border-[#E5DFD4] shadow-xs">
                        <img
                          src={lm.imageUrl}
                          alt={lm.name}
                          loading="lazy"
                          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-lg sm:text-xl font-bold text-[#14241E] leading-snug">
                          {lm.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#52635B] mt-1 leading-relaxed">
                          {lm.note}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#EDE6DC] flex items-center justify-between text-xs text-[#64756E]">
                    <span className="capitalize">{lm.category}</span>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(HOMESTAY_INFO.address)}&destination=${encodeURIComponent(lm.name + ' Guwahati')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#14241E] font-bold hover:underline inline-flex items-center gap-1"
                    >
                      <span>Directions</span>
                      <ExternalLink className="w-3 h-3 text-[#B8860B]" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
