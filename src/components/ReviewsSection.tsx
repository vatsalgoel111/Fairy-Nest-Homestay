import React from 'react';
import { Star, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react';
import { HOMESTAY_INFO, VERBATIM_REVIEWS } from '../data/homestayData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FAF8F5] relative border-b border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Guest Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#162A24] tracking-tight">
            Loved for Breakfast, Warm Hosts & Fair Rates
          </h2>
          <p className="text-sm sm:text-base text-[#52665F] mt-3">
            Honest guest impressions recorded across 132 verified public Google Maps reviews.
          </p>
        </div>

        {/* Rating Overview Card */}
        <div className="mb-14 p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E3DA] shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Score Display */}
            <div className="md:col-span-4 flex items-center gap-5 border-b md:border-b-0 md:border-r border-[#E8E3DA] pb-6 md:pb-0 md:pr-6">
              <div className="text-5xl sm:text-6xl font-serif font-bold text-[#162A24] leading-none">
                {HOMESTAY_INFO.googleRating}
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#C5A059] mb-1.5">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A059]" />
                  ))}
                  <Star className="w-4 h-4 fill-[#C5A059]/40 text-[#C5A059]" />
                </div>
                <span className="text-xs text-[#52665F] block">
                  Based on <strong className="text-[#162A24]">{HOMESTAY_INFO.totalReviews} Google Reviews</strong>
                </span>
                <span className="text-[11px] text-[#C5A059] font-medium">Category: Homestay · Guwahati</span>
              </div>
            </div>

            {/* Verbatim AI / Google Summary */}
            <div className="md:col-span-8 space-y-2.5 text-xs sm:text-sm text-[#52665F] leading-relaxed">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#162A24] uppercase tracking-wide">
                <Quote className="w-4 h-4 text-[#C5A059]" />
                <span>Google Maps Verified Consensus Summary:</span>
              </div>
              <blockquote className="italic border-l-2 border-[#C5A059] pl-3.5 py-0.5 text-[#162A24] font-medium text-sm sm:text-base leading-relaxed">
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
              className="p-7 rounded-3xl bg-white border border-[#E8E3DA] flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                {/* Stars and verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-0.5 text-[#C5A059]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#7E948D] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#E8E3DA]">
                    {rev.date}
                  </span>
                </div>

                {/* Highlight Quote */}
                <h3 className="font-serif font-bold text-base text-[#162A24] mb-2.5">
                  "{rev.highlight}"
                </h3>

                {/* Body Quote */}
                <p className="text-xs sm:text-sm text-[#52665F] leading-relaxed mb-6">
                  {rev.content}
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-[#E8E3DA] flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#162A24] block">{rev.guestName}</span>
                  <span className="text-[11px] text-[#7E948D]">{rev.stayType}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#C5A059] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
