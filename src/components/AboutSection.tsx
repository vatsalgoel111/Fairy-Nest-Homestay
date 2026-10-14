import React from 'react';
import { Heart, Coffee, ShieldCheck, MapPin, Sparkles, Home, Check } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden border-b border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Kicker & Headline */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-3">
            <Home className="w-4 h-4" />
            <span>The Fairy Nest Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#162A24] tracking-tight leading-[1.18] text-balance">
            Thoughtfully designed for comfort, privacy, and true home-cooked freedom.
          </h2>
        </div>

        {/* 2-Column Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Narrative Prose */}
          <div className="lg:col-span-7 space-y-6 text-[#52665F] text-base sm:text-lg leading-relaxed">
            <p>
              Perched peacefully on <strong className="text-[#162A24]">Gandhi Basti Road in the scenic Sarania Hills</strong> of Guwahati, <span className="text-[#162A24] font-semibold">Fairy Nest Homestay</span> offers visitors an alternative to impersonal commercial hotels. Here, you step into a tranquil, secure, and clean environment where everyday travel feels effortless.
            </p>

            <p>
              Our defining distinction is complete self-reliance: <strong className="text-[#162A24]">every 1BHK apartment, 2BHK suite, and Penthouse studio includes its own attached private kitchen and private bathroom</strong>. Whether you want to boil fresh milk for children, brew rich Assam tea at dawn, or prepare your own comforting meals during a multi-day Guwahati visit, you have everything right inside your room.
            </p>

            <p>
              We take deep pride in the qualities our guests value most: a warm and welcoming environment for couples, clean well-kept bedding, attentive local host care, and a <strong className="text-[#162A24]">complimentary morning breakfast</strong> that sets a comforting tone for your day.
            </p>

            {/* Core Values Row */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#F4EFE6] border border-[#E8E3DA]">
                <div className="flex items-center gap-2 text-[#162A24] font-semibold text-sm mb-1.5">
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>Kind Host Management</span>
                </div>
                <p className="text-xs text-[#52665F] leading-normal">
                  Celebrated across 132 Google reviews for the kindness, loving care, and prompt assistance of our host family.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F4EFE6] border border-[#E8E3DA]">
                <div className="flex items-center gap-2 text-[#162A24] font-semibold text-sm mb-1.5">
                  <Coffee className="w-4 h-4 text-[#C5A059]" />
                  <span>Fresh Morning Breakfast</span>
                </div>
                <p className="text-xs text-[#52665F] leading-normal">
                  Enjoy hot breakfast paired with authentic Assam tea included complimentary with your stay.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Profile Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-7 sm:p-8 bg-white border border-[#E8E3DA] shadow-lg relative">
              
              <div className="flex items-center justify-between border-b border-[#E8E3DA] pb-5 mb-6">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A059] block">
                    Verified Profile
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#162A24]">
                    Fairy Nest Homestay
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-xl font-serif font-bold text-[#162A24] leading-none">
                    4.1 ⭐
                  </div>
                  <span className="text-[11px] text-[#7E948D]">132 Google Reviews</span>
                </div>
              </div>

              {/* Verified Checklist */}
              <ul className="space-y-4 text-xs sm:text-sm text-[#52665F]">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EDE6D9] text-[#162A24] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-[#162A24] block">Attached Kitchen in Every Unit</strong>
                    <span className="text-xs text-[#7E948D]">Private cooking setups across all 1BHK, 2BHK, & Studios</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EDE6D9] text-[#162A24] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-[#162A24] block">Couple & Family Friendly Policy</strong>
                    <span className="text-xs text-[#7E948D]">Safe, respectful, and private environment (Valid ID required)</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EDE6D9] text-[#162A24] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-[#162A24] block">Prime Sarania Hills Location</strong>
                    <span className="text-xs text-[#7E948D]">Gandhi Basti, Guwahati-3 · 0.5 km from Paltan Bazar hub</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EDE6D9] text-[#162A24] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-[#162A24] block">13 Individual Units (Units 1 to 13)</strong>
                    <span className="text-xs text-[#7E948D]">Documented on Instagram highlights with tailored options</span>
                  </div>
                </li>
              </ul>

              {/* Host Message Quote */}
              <div className="mt-6 p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] text-xs text-[#52665F] italic leading-relaxed">
                "Our aim is to provide genuine warmth at affordable rates so travelers have a peaceful space of their own in Guwahati."
              </div>

              {/* Action Button */}
              <div className="mt-6">
                <a
                  href={`https://wa.me/${HOMESTAY_INFO.phoneRaw}?text=${encodeURIComponent('Hello! I would like to inquire about booking a stay at Fairy Nest Homestay.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs text-white bg-[#162A24] hover:bg-[#223F36] transition-colors"
                >
                  <span>Inquire Directly with Host</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
