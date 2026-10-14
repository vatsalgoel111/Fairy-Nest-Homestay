import React from 'react';
import { MapPin, Navigation, Compass, Train, Mountain, ExternalLink } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 lg:py-28 bg-[#0e1a17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-2">
            <Compass className="w-4 h-4" />
            <span>Sarania Hills & Guwahati Neighborhood</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f4efe6] tracking-tight">
            Central Convenience with Hillside Peace
          </h2>
          <p className="text-sm sm:text-base text-[#9fb3ab] mt-3">
            Located in Gandhi Basti at the foot of Sarania Hills, providing quick access to transit hubs while keeping you away from heavy road noise.
          </p>
        </div>

        {/* Location Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details Card */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="p-6 sm:p-7 rounded-2xl bg-[#132520] border border-[#23453b]">
              <span className="text-xs font-mono text-[#d4af37] uppercase tracking-wider block mb-2">
                Official Homestay Address
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#f4efe6] mb-3">
                {HOMESTAY_INFO.address}
              </h3>
              
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#9fb3ab] mb-6">
                <span className="bg-[#1b342e] px-2.5 py-1 rounded text-[#e5c57a] font-mono">
                  Plus Code: {HOMESTAY_INFO.plusCode}
                </span>
                <span>Landmark: Near Nabagraha Than area</span>
              </div>

              {/* Direct Maps Action */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={HOMESTAY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-[#0e1a17] bg-[#d4af37] hover:bg-[#e6c86e] transition-colors shadow-md"
                >
                  <Navigation className="w-4 h-4 fill-[#0e1a17]" />
                  <span>Get Directions in Google Maps</span>
                </a>

                <a
                  href={`tel:${HOMESTAY_INFO.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-medium text-[#f4efe6] bg-[#1a382f] hover:bg-[#23493e] border border-[#325e51] transition-colors"
                >
                  <span>Call for Route Help</span>
                </a>
              </div>
            </div>

            {/* Neighborhood Highlights from source */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#142823] border border-[#23453b]">
                <div className="flex items-center gap-2 text-[#e5c57a] text-xs font-semibold mb-1">
                  <Mountain className="w-4 h-4" />
                  <span>Sarania Hills Setting</span>
                </div>
                <p className="text-xs text-[#9fb3ab] leading-relaxed">
                  Rated 3.9/5 by visitors for sightseeing, calm residential recreation, and pleasant green hill breezes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#142823] border border-[#23453b]">
                <div className="flex items-center gap-2 text-[#e5c57a] text-xs font-semibold mb-1">
                  <Train className="w-4 h-4" />
                  <span>Near Paltan Bazar</span>
                </div>
                <p className="text-xs text-[#9fb3ab] leading-relaxed">
                  Only 0.4 – 0.5 km away from major shopping, food streets, and transit connecting Guwahati railway station.
                </p>
              </div>
            </div>

          </div>

          {/* Interactive Map Visual Presentation */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-[#d4af37]/30 bg-[#142923] p-3 shadow-xl">
              
              {/* Map Canvas Graphic */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-[#0c1815] flex flex-col justify-between p-6">
                
                {/* Stylized Map Grid Lines */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d4af37" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#mapGrid)" />
                  </svg>
                </div>

                {/* Map Road paths visualization */}
                <svg className="absolute inset-0 w-full h-full text-[#1f4236] stroke-current" fill="none" strokeWidth="3">
                  <path d="M-20,180 Q200,160 400,200 T800,150" strokeWidth="6" stroke="#1f4236" />
                  <path d="M120,-20 L260,320" strokeWidth="4" stroke="#255243" strokeDasharray="6 4" />
                  <path d="M220,170 Q280,100 360,60" strokeWidth="5" stroke="#d4af37" strokeOpacity="0.7" />
                </svg>

                {/* Top Location Header */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="bg-[#0e1a17]/90 px-3 py-1.5 rounded-lg border border-[#d4af37]/30">
                    <span className="text-[10px] text-[#9fb3ab] block">District</span>
                    <span className="text-xs font-bold text-[#f4efe6]">Guwahati, Assam</span>
                  </div>
                  <span className="text-xs text-[#d4af37] font-semibold bg-[#1a382f]/90 px-2.5 py-1 rounded">
                    Sarania Hills
                  </span>
                </div>

                {/* Center Pin for Fairy Nest Homestay */}
                <div className="relative z-10 my-auto flex flex-col items-center">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-[#d4af37] flex items-center justify-center text-[#0e1a17] shadow-[0_0_20px_#d4af37] animate-bounce">
                      <MapPin className="w-6 h-6 fill-[#0e1a17]" />
                    </div>
                    <div className="w-6 h-2 bg-black/50 rounded-full blur-[2px] mx-auto mt-1" />
                  </div>
                  
                  <div className="mt-2 bg-[#0e1a17]/95 px-3 py-1.5 rounded-lg border border-[#d4af37]/50 text-center shadow-lg">
                    <span className="font-serif text-xs font-bold text-[#f4efe6] block">
                      Fairy Nest Homestay
                    </span>
                    <span className="text-[10px] text-[#e5c57a]">Gandhi Basti Rd, Guwahati-3</span>
                  </div>
                </div>

                {/* Map Bottom Card */}
                <div className="relative z-10 flex items-center justify-between bg-[#0e1a17]/90 px-4 py-2.5 rounded-lg border border-white/10 text-xs">
                  <span className="text-[#c4d6cf]">
                    Near Paltan Bazar (0.5 km)
                  </span>
                  <a
                    href={HOMESTAY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d4af37] hover:underline flex items-center gap-1 font-medium"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>

              {/* Transit hints */}
              <div className="p-3 text-[11px] text-[#9fb3ab] flex items-center justify-between">
                <span>Auto-rickshaws, cabs and local city transit readily available to Gandhi Basti.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
