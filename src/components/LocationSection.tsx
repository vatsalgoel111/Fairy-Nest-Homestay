import React from 'react';
import { MapPin, Navigation, Compass, Train, Mountain, ExternalLink } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 lg:py-28 bg-[#F4EFE6] relative border-b border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
            <Compass className="w-4 h-4" />
            <span>Guwahati Neighborhood Guide</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#162A24] tracking-tight">
            Central Location in Scenic Sarania Hills
          </h2>
          <p className="text-sm sm:text-base text-[#52665F] mt-3">
            Situated in Gandhi Basti near Nabagraha Than — quiet residential hillside atmosphere, yet just 0.5 km from the transit and commercial hub of Paltan Bazar.
          </p>
        </div>

        {/* Location Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details Card */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E8E3DA] shadow-xs">
              <span className="text-[11px] font-mono text-[#C5A059] uppercase tracking-wider font-semibold block mb-2">
                Official Homestay Location
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#162A24] mb-3">
                {HOMESTAY_INFO.address}
              </h3>
              
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#52665F] mb-6">
                <span className="bg-[#FAF8F5] border border-[#E8E3DA] px-3 py-1 rounded-md text-[#162A24] font-mono font-medium">
                  Plus Code: {HOMESTAY_INFO.plusCode}
                </span>
                <span>Landmark: Opposite Nabagraha Than area</span>
              </div>

              {/* Direct Maps Action */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={HOMESTAY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-white bg-[#162A24] hover:bg-[#223F36] transition-colors shadow-xs"
                >
                  <Navigation className="w-4 h-4 fill-white" />
                  <span>Get Directions in Google Maps</span>
                </a>

                <a
                  href={`tel:${HOMESTAY_INFO.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs font-semibold text-[#162A24] bg-[#FAF8F5] hover:bg-[#EDE6D9] border border-[#E8E3DA] transition-colors"
                >
                  <span>Call Host for Route Help</span>
                </a>
              </div>
            </div>

            {/* Neighborhood Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-[#E8E3DA]">
                <div className="flex items-center gap-2 text-[#162A24] text-xs font-bold mb-1.5">
                  <Mountain className="w-4 h-4 text-[#C5A059]" />
                  <span>Sarania Hills Setting</span>
                </div>
                <p className="text-xs text-[#52665F] leading-relaxed">
                  Rated 3.9/5 by visitors on Google Maps for pleasant hillside walks, peaceful surroundings, and quiet evenings.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E8E3DA]">
                <div className="flex items-center gap-2 text-[#162A24] text-xs font-bold mb-1.5">
                  <Train className="w-4 h-4 text-[#C5A059]" />
                  <span>Near Paltan Bazar (0.5 km)</span>
                </div>
                <p className="text-xs text-[#52665F] leading-relaxed">
                  Easy connectivity to Guwahati Railway Station, city markets, food restaurants, and tourist cabs.
                </p>
              </div>
            </div>

          </div>

          {/* Interactive Map Visual Presentation */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-[#E8E3DA] bg-white p-3 shadow-md">
              
              {/* Map Canvas Graphic */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-[#162A24] flex flex-col justify-between p-6 text-white">
                
                {/* Stylized Map Grid Lines */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="lightMapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#lightMapGrid)" />
                  </svg>
                </div>

                {/* Map Road paths visualization */}
                <svg className="absolute inset-0 w-full h-full stroke-white/20" fill="none" strokeWidth="3">
                  <path d="M-20,180 Q200,160 400,200 T800,150" strokeWidth="6" stroke="#25463C" />
                  <path d="M120,-20 L260,320" strokeWidth="4" stroke="#25463C" strokeDasharray="6 4" />
                  <path d="M220,170 Q280,100 360,60" strokeWidth="5" stroke="#C5A059" strokeOpacity="0.8" />
                </svg>

                {/* Top Location Header */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="bg-black/40 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-white/10">
                    <span className="text-[10px] text-white/70 block">Guwahati · Assam 781003</span>
                  </div>
                  <span className="text-xs text-[#E0C788] font-semibold bg-black/40 backdrop-blur-xs px-3 py-1 rounded-full border border-white/10">
                    Sarania Hills
                  </span>
                </div>

                {/* Center Pin for Fairy Nest Homestay */}
                <div className="relative z-10 my-auto flex flex-col items-center">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-[#C5A059] flex items-center justify-center text-[#162A24] shadow-lg shadow-black/40 animate-bounce">
                      <MapPin className="w-6 h-6 fill-[#162A24]" />
                    </div>
                    <div className="w-6 h-2 bg-black/40 rounded-full blur-[2px] mx-auto mt-1" />
                  </div>
                  
                  <div className="mt-2 bg-[#FAF8F5] px-4 py-1.5 rounded-xl border border-[#E8E3DA] text-center shadow-lg">
                    <span className="font-serif text-xs font-bold text-[#162A24] block">
                      Fairy Nest Homestay
                    </span>
                    <span className="text-[10px] text-[#52665F]">Gandhi Basti Rd, Guwahati-3</span>
                  </div>
                </div>

                {/* Map Bottom Card */}
                <div className="relative z-10 flex items-center justify-between bg-black/50 backdrop-blur-xs px-4 py-2.5 rounded-xl border border-white/10 text-xs">
                  <span className="text-white/80">
                    Near Paltan Bazar (0.5 km)
                  </span>
                  <a
                    href={HOMESTAY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E0C788] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>

              {/* Transit hints */}
              <div className="p-3 text-[11px] text-[#7E948D] flex items-center justify-between">
                <span>Cabs, auto-rickshaws, and e-rickshaws connect directly to Gandhi Basti.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
