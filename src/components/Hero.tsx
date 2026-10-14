import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { MessageCircle, Phone, MapPin, Heart, Star, Coffee, Sparkles, Utensils } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';
import { FloatingBookingBar } from './FloatingBookingBar';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ['0%', shouldReduceMotion ? '0%' : '20%']);
  const yContent = useTransform(scrollYProgress, [0, 1], ['0%', shouldReduceMotion ? '0%' : '10%']);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0.1]);

  const whatsappLink = `https://wa.me/${HOMESTAY_INFO.phoneRaw}?text=${encodeURIComponent('Hello Fairy Nest Homestay! I would like to check room availability in Guwahati.')}`;

  return (
    <div className="relative bg-[#FAF8F5]">
      
      {/* Hero Visual Section */}
      <section 
        ref={containerRef}
        className="relative min-h-[85vh] lg:min-h-[90vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden border-b border-[#E8E3DA]"
      >
        {/* Parallax Layer 1: Ambient Editorial Warm Canvas */}
        <motion.div 
          style={{ y: yBackground }}
          className="absolute inset-0 pointer-events-none select-none z-0"
        >
          {/* Subtle warm sunlight radial gradients */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-b from-[#EDE6D9]/80 via-[#F5F2EB]/40 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl" />
          
          {/* Soft architectural line texture */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#162A24_1px,transparent_1px)] [background-size:24px_24px]" />
        </motion.div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Editorial Headline & Narrative */}
            <motion.div 
              style={{ y: yContent, opacity: opacityFade }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              {/* Unboxed clean metadata kicker */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7E948D] mb-4">
                <span className="flex items-center gap-1.5 text-[#162A24]">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  Gandhi Basti, Sarania Hills
                </span>
                <span aria-hidden="true" className="text-[#C5A059]">·</span>
                <span className="text-[#162A24]">Guwahati-3</span>
                <span aria-hidden="true" className="text-[#C5A059]">·</span>
                <span className="text-[#C5A059] font-medium">Boutique Homestay</span>
              </div>

              {/* Main Editorial Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#162A24] leading-[1.12] mb-6 text-balance">
                A quiet hillside sanctuary in the heart of Guwahati.
              </h1>

              {/* Editorial Subtext */}
              <p className="text-base sm:text-lg text-[#52665F] leading-relaxed max-w-2xl mb-8">
                Welcome to <strong className="text-[#162A24] font-semibold">Fairy Nest Homestay</strong>. Thoughtfully designed for couples, visiting families, and mindful travelers — offering spacious <span className="text-[#162A24] font-medium">1BHK, 2BHK, and Penthouse studio</span> apartments with attached private kitchens, private baths, and complimentary breakfast.
              </p>

              {/* Social Proof (Clean Unboxed Rating) */}
              <div className="flex items-center gap-3 py-2.5 px-4 rounded-xl bg-white border border-[#E8E3DA] mb-8 shadow-xs">
                <div className="flex items-center gap-1 text-[#C5A059] font-bold">
                  <Star className="w-4 h-4 fill-[#C5A059]" />
                  <span className="tabular-nums text-sm text-[#162A24]">{HOMESTAY_INFO.googleRating}</span>
                </div>
                <span aria-hidden="true" className="text-[#D0C9BE]">|</span>
                <span className="text-xs text-[#52665F]">
                  <strong className="text-[#162A24]">{HOMESTAY_INFO.totalReviews} Reviews</strong> on Google Maps
                </span>
                <span aria-hidden="true" className="text-[#D0C9BE] hidden sm:inline">·</span>
                <span className="text-xs text-[#52665F] hidden sm:inline">
                  Praised for Host Kindness & Breakfast
                </span>
              </div>

              {/* CTA Action Cluster */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#162A24] hover:bg-[#223F36] shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Reserve on WhatsApp</span>
                </a>

                <a
                  href={`tel:${HOMESTAY_INFO.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-[#162A24] bg-white hover:bg-[#FAF8F5] border border-[#E8E3DA] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Call {HOMESTAY_INFO.displayPhone}</span>
                </a>

                <a
                  href="#rooms"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1 text-xs font-semibold text-[#7E948D] hover:text-[#162A24] transition-colors py-2"
                >
                  <span>Explore All 13 Units ↓</span>
                </a>
              </div>

            </motion.div>

            {/* Right Column: Airbnb Luxe Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-white border border-[#E8E3DA] p-3 shadow-xl">
                
                {/* Visual Photography Presentation */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#162A24] to-[#0E1C18] flex flex-col justify-between p-6">
                  
                  {/* Ambient Lighting Scene */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C5A059]/20 via-transparent to-black/60 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] font-medium tracking-wide text-white/90 bg-black/40 backdrop-blur-xs px-3 py-1 rounded-full border border-white/10">
                      Sarania Hills · Guwahati
                    </span>
                    <span className="text-[11px] font-semibold text-[#E0C788] bg-[#162A24]/90 px-3 py-1 rounded-full border border-[#C5A059]/30 flex items-center gap-1">
                      <Heart className="w-3 h-3 text-rose-400" />
                      <span>Couple Friendly</span>
                    </span>
                  </div>

                  {/* Center Visual Statement */}
                  <div className="relative z-10 text-center my-auto px-4">
                    <span className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight block">
                      Fairy Nest
                    </span>
                    <span className="text-xs text-[#E0C788] tracking-[0.2em] uppercase font-medium mt-1 block">
                      Homestay
                    </span>
                    <p className="text-xs text-white/80 max-w-xs mx-auto mt-2 italic leading-relaxed">
                      "Clean comfortable rooms, loving management, and attached kitchens for complete self-reliance."
                    </p>
                  </div>

                  {/* Bottom Unit Features Pill-less Strip */}
                  <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-[#E8E3DA] grid grid-cols-3 text-center text-xs">
                    <div>
                      <span className="font-bold text-[#162A24] block">1BHK & 2BHK</span>
                      <span className="text-[10px] text-[#7E948D]">Full Flats</span>
                    </div>
                    <div className="border-x border-[#E8E3DA]">
                      <span className="font-bold text-[#C5A059] block">Attached</span>
                      <span className="text-[10px] text-[#7E948D]">Private Kitchens</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#162A24] block">Free Breakfast</span>
                      <span className="text-[10px] text-[#7E948D]">Every Morning</span>
                    </div>
                  </div>

                </div>

                {/* Floating Tag */}
                <div className="absolute -bottom-4 left-6 z-20 bg-white border border-[#E8E3DA] rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold text-[#162A24]">
                    Direct Booking: No Middleman Commission
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Floating Interactive Airbnb-Style Booking Bar */}
      <FloatingBookingBar />

      {/* Quick Value Strip below Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-b border-[#E8E3DA] text-center sm:text-left">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Utensils className="w-5 h-5 text-[#C5A059] shrink-0" />
            <div>
              <strong className="text-xs sm:text-sm font-semibold text-[#162A24] block">Attached Kitchen</strong>
              <span className="text-[11px] text-[#7E948D]">Self-catering in all units</span>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Heart className="w-5 h-5 text-rose-500 shrink-0" />
            <div>
              <strong className="text-xs sm:text-sm font-semibold text-[#162A24] block">Couple Welcoming</strong>
              <span className="text-[11px] text-[#7E948D]">Safe, respectful environment</span>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Coffee className="w-5 h-5 text-[#C5A059] shrink-0" />
            <div>
              <strong className="text-xs sm:text-sm font-semibold text-[#162A24] block">Free Morning Breakfast</strong>
              <span className="text-[11px] text-[#7E948D]">Freshly prepared with tea</span>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Sparkles className="w-5 h-5 text-[#C5A059] shrink-0" />
            <div>
              <strong className="text-xs sm:text-sm font-semibold text-[#162A24] block">Budget Friendly</strong>
              <span className="text-[11px] text-[#7E948D]">Honest direct rates</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
