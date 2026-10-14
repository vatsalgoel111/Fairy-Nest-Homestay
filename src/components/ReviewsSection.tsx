import React from 'react';
import { Star, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react';
import { HOMESTAY_INFO, VERBATIM_REVIEWS } from '../data/homestayData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#101e1a] relative border-t border-[#1d3830]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Real Guest Experience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f4efe6] tracking-tight">
            Loved for Breakfast, Loving Hosts & Fair Value
          </h2>
          <p className="text-sm sm:text-base text-[#9fb3ab] mt-3">
            Honest guest impressions recorded across 132 verified public Google Maps reviews.
          </p>
        </div>

        {/* Rating Overview Card */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-[#142823] border border-[#d4af37]/30 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Score */}
            <div className="md:col-span-4 flex items-center gap-4 border-b md:border-b-0 md:border-r border-[#23453b] pb-6 md:pb-0 md:pr-6">
              <div className="text-4xl sm:text-5xl font-serif font-bold text-[#e5c57a]">
                {HOMESTAY_INFO.googleRating}
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#d4af37] mb-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                  ))}
                  <Star className="w-4 h-4 fill-[#d4af37]/40 text-[#d4af37]" />
                </div>
                <span className="text-xs text-[#9fb3ab] block">
                  Based on <strong>{HOMESTAY_INFO.totalReviews} Verified Google Reviews</strong>
                </span>
                <span className="text-[11px] text-[#e5c57a]">Category: Homestay / Hospitality</span>
              </div>
            </div>

            {/* Verbatim AI / Google Summary */}
            <div className="md:col-span-8 space-y-2 text-xs sm:text-sm text-[#c4d6cf] leading-relaxed">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#e5c57a] uppercase tracking-wide">
                <Quote className="w-3.5 h-3.5" />
                <span>Google Maps Verified Consensus Summary:</span>
              </div>
              <blockquote className="italic border-l-2 border-[#d4af37]/60 pl-3 py-0.5 text-[#f4efe6]">
                "Guests consistently praise this homestay for its complimentary breakfast, convenient location, reasonable prices, and the kindness and loving nature of the management. These positive aspects contribute to a highly satisfactory experience for visitors."
              </blockquote>
            </div>

          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VERBATIM_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-[#132520] border border-[#23453b] flex flex-col justify-between"
            >
              <div>
                {/* Stars and verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-0.5 text-[#d4af37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#9fb3ab] bg-[#0e1a17] px-2 py-0.5 rounded border border-[#1e3b32]">
                    {rev.date}
                  </span>
                </div>

                {/* Highlight Quote */}
                <h3 className="font-serif font-bold text-sm text-[#f4efe6] mb-2.5">
                  "{rev.highlight}"
                </h3>

                {/* Body Quote */}
                <p className="text-xs text-[#a7bbb3] leading-relaxed mb-6">
                  {rev.content}
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-[#1d3830] flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-[#f4efe6] block">{rev.guestName}</span>
                  <span className="text-[10px] text-[#8ea49c]">{rev.stayType}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#e5c57a]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Google Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
