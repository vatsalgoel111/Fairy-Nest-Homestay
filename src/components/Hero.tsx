import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { MessageCircle, Phone, MapPin, Heart, Utensils, Star, ShieldCheck, Sparkles, Coffee } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';
import { FairyNestLogo } from './FairyNestLogo';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Layered parallax depths
  const yDepth1 = useTransform(scrollYProgress, [0, 1], ['0%', shouldReduceMotion ? '0%' : '30%']);
  const yDepth2 = useTransform(scrollYProgress, [0, 1], ['0%', shouldReduceMotion ? '0%' : '15%']);
  const opacityFade = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  const whatsappLink = `https://wa.me/${HOMESTAY_INFO.phoneRaw}?text=${encodeURIComponent('Hello Fairy Nest Homestay! I would like to check availability and rates for a stay in Guwahati.')}`;

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[92vh] sm:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex flex-col justify-between bg-[#0e1a17]"
    >
      {/* Depth Layer 1: Ambient Forest Glow & Hills Backdrop */}
      <motion.div 
        style={{ y: yDepth1 }}
        className="absolute inset-0 pointer-events-none select-none z-0"
      >
        {/* Deep sanctuary atmospheric lighting & radial warmth */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-b from-[#d4af37]/15 via-[#1a3830]/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#16332a]/60 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#d4af37]/10 rounded-full blur-3xl" />
        
        {/* Soft decorative hill contours overlay */}
        <svg 
          className="absolute bottom-0 left-0 right-0 w-full h-48 text-[#132721]/70 opacity-40 preserve-3d" 
          viewBox="0 0 1440 280" 
          fill="currentColor"
        >
          <path d="M0,160L80,176C160,192,320,224,480,218.7C640,213,800,171,960,160C1120,149,1280,171,1360,181.3L1440,192L1440,280L1360,280C1280,280,1120,280,960,280C800,280,640,280,480,280C320,280,160,280,80,280L0,280Z" />
        </svg>
      </motion.div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Narrative, Positioning, and CTAs */}
          <motion.div 
            style={{ opacity: opacityFade }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Real verified badge line (Zero-pill text format with dots) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#c5a059] mb-4 tracking-wide uppercase">
              <span className="flex items-center gap-1.5 text-[#e5c57a]">
                <MapPin className="w-3.5 h-3.5" />
                Gandhi Basti, Guwahati-3
              </span>
              <span aria-hidden="true" className="text-[#9fb3ab]/50">·</span>
              <span className="flex items-center gap-1 text-[#f4efe6]">
                <Heart className="w-3.5 h-3.5 text-rose-400" />
                Couple Friendly
              </span>
              <span aria-hidden="true" className="text-[#9fb3ab]/50">·</span>
              <span className="text-[#9fb3ab]">
                Budget Friendly
              </span>
            </div>

            {/* Display Headline with Balanced Wrapping */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f4efe6] leading-[1.12] mb-6 text-balance">
              Your Peaceful Nest in the <span className="bg-gradient-to-r from-[#faeec8] via-[#e5c57a] to-[#d4af37] bg-clip-text text-transparent">Sarania Hills</span> of Guwahati.
            </h1>

            {/* Real Positioning Prose */}
            <p className="text-base sm:text-lg text-[#b8ccc4] leading-relaxed max-w-2xl mb-8">
              Experience warm Assamese hospitality at <strong className="text-[#f4efe6] font-semibold">Fairy Nest Homestay</strong>. Whether you are traveling as a couple, visiting with family, or on transit, enjoy spacious <span className="text-[#e5c57a]">1BHK, 2BHK, and Penthouse studio</span> apartments — all complete with <strong className="text-[#f4efe6]">attached private kitchens</strong>, private bathrooms, and complimentary breakfast.
            </p>

            {/* Verification & Social Proof Strip (No pills - clean text) */}
            <div className="flex items-center gap-3 py-2 px-3 rounded-xl bg-[#142923]/70 border border-[#d4af37]/25 mb-8 text-xs sm:text-sm text-[#f4efe6]">
              <div className="flex items-center gap-1 text-[#e5c57a] font-bold">
                <Star className="w-4 h-4 fill-[#d4af37]" />
                <span className="tabular-nums">{HOMESTAY_INFO.googleRating}</span>
              </div>
              <span aria-hidden="true" className="text-[#3b5950]">|</span>
              <span className="text-[#c5d8d1]">Based on {HOMESTAY_INFO.totalReviews} verified Google reviews</span>
              <span aria-hidden="true" className="text-[#3b5950]">·</span>
              <span className="text-[#e5c57a] hidden sm:inline">Complimentary Breakfast Included</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#0e1a17] bg-gradient-to-r from-[#d4af37] via-[#e6c86e] to-[#c5a059] hover:brightness-110 shadow-lg shadow-[#d4af37]/20 transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-[#0e1a17]" />
                <span>Book via WhatsApp</span>
              </a>

              <a
                href={`tel:${HOMESTAY_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-[#f4efe6] bg-[#162e27] hover:bg-[#1d3d34] border border-[#2d574b] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call Host ({HOMESTAY_INFO.displayPhone})</span>
              </a>

              <a
                href="#rooms"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs text-[#9fb3ab] hover:text-[#e5c57a] transition-colors"
              >
                <span>Explore 13 Unit Options ↓</span>
              </a>
            </div>

            {/* Quick Guarantees from source */}
            <div className="mt-8 pt-6 border-t border-[#1d3830] w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#9fb3ab]">
              <div className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Attached Private Kitchen</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Couple & Budget Friendly</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Coffee className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Complimentary Breakfast</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Layer 2 Cinematic Visual & Feature Showcase Card */}
          <motion.div 
            style={{ y: yDepth2 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/35 bg-gradient-to-b from-[#183129] to-[#0e1c18] p-2 shadow-2xl shadow-black/60">
              
              {/* Main Visual Composition */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#12231e]">
                {/* Atmospheric scene background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1613] via-[#162e27] to-[#25463c]">
                  {/* Stylized interior with fairy lights and window silhouette */}
                  <div className="absolute inset-0 opacity-80 mix-blend-overlay bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#e5c57a]/25 via-transparent to-black" />
                </div>

                {/* Handcrafted Visual Illustration of Fairy Nest Homestay Room */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  {/* Top Ambient Fairy String Lights */}
                  <div className="flex justify-between items-center px-4 py-1">
                    {[...Array(9)].map((_, i) => (
                      <div 
                        key={i} 
                        className="relative flex flex-col items-center"
                        style={{ transform: `translateY(${Math.sin(i * 0.8) * 6}px)` }}
                      >
                        <div className="w-px h-3 bg-white/20" />
                        <div 
                          className="w-2.5 h-2.5 rounded-full bg-[#fce8a6] shadow-[0_0_8px_#faeec8] animate-pulse" 
                          style={{ animationDelay: `${i * 0.3}s` }} 
                        />
                      </div>
                    ))}
                  </div>

                  {/* Room Center Motif */}
                  <div className="flex flex-col items-center text-center my-auto">
                    <FairyNestLogo size="lg" showText={false} className="mb-3" />
                    <span className="font-serif text-xl sm:text-2xl text-[#f4efe6] font-semibold tracking-wide">
                      Fairy Nest Homestay
                    </span>
                    <span className="text-xs text-[#d4af37] tracking-widest uppercase mt-0.5">
                      Guwahati · Gandhi Basti
                    </span>
                    <p className="text-xs text-[#9fb3ab] max-w-xs mt-2 italic">
                      "Clean comfortable stays with attached kitchen and loving management."
                    </p>
                  </div>

                  {/* Room Highlights Pill-less Row */}
                  <div className="bg-[#0b1613]/85 backdrop-blur-md rounded-lg p-3 border border-[#d4af37]/20 flex items-center justify-around text-center text-xs">
                    <div>
                      <span className="block font-semibold text-[#f4efe6]">1BHK & 2BHK</span>
                      <span className="text-[10px] text-[#9fb3ab]">Full Flats</span>
                    </div>
                    <div className="w-px h-6 bg-[#1f3d34]" />
                    <div>
                      <span className="block font-semibold text-[#e5c57a]">Kitchens</span>
                      <span className="text-[10px] text-[#9fb3ab]">All Attached</span>
                    </div>
                    <div className="w-px h-6 bg-[#1f3d34]" />
                    <div>
                      <span className="block font-semibold text-[#f4efe6]">13 Units</span>
                      <span className="text-[10px] text-[#9fb3ab]">Custom Choice</span>
                    </div>
                  </div>
                </div>

                {/* Soft Gradient Overlay for depth */}
                <div className="absolute inset-0 pointer-events-none border border-inset border-white/5 rounded-xl" />
              </div>

              {/* Floating Verified Trust Capsule */}
              <div className="absolute -bottom-5 -left-4 sm:left-4 z-20 bg-[#162d26] border border-[#d4af37]/40 shadow-xl rounded-xl p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#e5c57a]" />
                </div>
                <div className="text-xs">
                  <span className="block font-bold text-[#f4efe6]">100% Genuine Stay</span>
                  <span className="text-[11px] text-[#9fb3ab]">132 Google Reviews · 4.1 Rating</span>
                </div>
              </div>

              {/* Floating Couple-Friendly Tag */}
              <div className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-[#19362e] to-[#21473d] border border-[#d4af37]/40 shadow-lg rounded-full px-3.5 py-1.5 flex items-center gap-1.5 text-xs font-semibold text-[#f4efe6]">
                <Sparkles className="w-3.5 h-3.5 text-[#e5c57a]" />
                <span>Couple & Budget Friendly</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Quick Summary Booking Strip at the bottom of Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 sm:mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#142823]/80 border border-[#2d564a]/60 backdrop-blur-sm text-center">
          <div className="p-2 border-r border-[#1f3b33] last:border-0">
            <span className="text-[11px] text-[#9fb3ab] block uppercase tracking-wider">Accommodation</span>
            <span className="text-xs sm:text-sm font-semibold text-[#f4efe6] mt-0.5 block">1BHK / 2BHK / 1RK</span>
          </div>
          <div className="p-2 md:border-r border-[#1f3b33]">
            <span className="text-[11px] text-[#9fb3ab] block uppercase tracking-wider">Cooking</span>
            <span className="text-xs sm:text-sm font-semibold text-[#e5c57a] mt-0.5 block">Attached Kitchen</span>
          </div>
          <div className="p-2 border-r border-[#1f3b33] last:border-0">
            <span className="text-[11px] text-[#9fb3ab] block uppercase tracking-wider">Morning Meal</span>
            <span className="text-xs sm:text-sm font-semibold text-[#f4efe6] mt-0.5 block">Free Breakfast</span>
          </div>
          <div className="p-2">
            <span className="text-[11px] text-[#9fb3ab] block uppercase tracking-wider">Direct Contact</span>
            <span className="text-xs sm:text-sm font-semibold text-[#e5c57a] mt-0.5 block">070021 76711</span>
          </div>
        </div>
      </div>
    </section>
  );
};
