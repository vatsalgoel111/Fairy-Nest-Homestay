import React from 'react';
import { Star, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react';
import { HOMESTAY_INFO, VERBATIM_REVIEWS } from '../data/homestayData';

export const VerifiedLedger: React.FC = () => {
  return (
    <section id="reviews" className="py-14 sm:py-20 bg-[#F4EFE8] relative border-b border-[#EBE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#B8860B] font-bold mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Guest Reviews</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14241E] tracking-tight leading-tight">
            132 Real Google Reviews (4.1 ⭐)
          </h2>
          <p className="text-base sm:text-lg text-[#3D4F47] mt-3 leading-relaxed">
            Honest feedback and ratings from families, couples, and solo travelers who stayed at Fairy Nest Homestay.
          </p>
        </div>

        {/* Highlight Scorecard Banner */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#E5DFD4] shadow-sm mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Score & Stars */}
            <div className="lg:col-span-4 flex items-center gap-6 border-b lg:border-b-0 lg:border-r border-[#EDE6DC] pb-6 lg:pb-0 lg:pr-8">
              <div className="font-serif text-6xl sm:text-7xl font-bold text-[#14241E] leading-none">
                {HOMESTAY_INFO.googleRating}
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-[#B8860B] mb-2">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#B8860B]" />
                  ))}
                  <Star className="w-5 h-5 fill-[#B8860B]/40 text-[#B8860B]" />
                </div>
                <strong className="text-base sm:text-lg text-[#14241E] block font-bold">
                  {HOMESTAY_INFO.totalReviews} Google Reviews
                </strong>
                <span className="text-sm text-[#64756E]">Category: Homestay / Hospitality</span>
              </div>
            </div>

            {/* Google Consensus */}
            <div className="lg:col-span-8 space-y-2.5">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#B8860B] uppercase tracking-wider">
                <Quote className="w-4 h-4" />
                <span>Google Maps Public Review Summary:</span>
              </div>
              <blockquote className="font-serif text-lg sm:text-xl text-[#14241E] italic font-medium leading-relaxed border-l-3 border-[#B8860B] pl-5 py-1">
                "Guests consistently praise this homestay for its complimentary breakfast, convenient location, reasonable prices, and the kindness and loving nature of the management. These positive aspects contribute to a highly satisfactory experience for visitors."
              </blockquote>
            </div>

          </div>
        </div>

        {/* Authentic Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VERBATIM_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E5DFD4] hover:border-[#B8860B] transition-colors flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-1 text-[#B8860B]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 fill-[#B8860B]" />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-[#64756E] bg-[#FAF8F5] px-2.5 py-1 rounded-md border border-[#EDE6DC]">
                    {rev.date}
                  </span>
                </div>

                {/* Highlight Quote */}
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#14241E] mb-2.5 leading-snug">
                  "{rev.highlight}"
                </h3>

                {/* Body Content */}
                <p className="text-sm sm:text-base text-[#52635B] leading-relaxed mb-5">
                  {rev.content}
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-3.5 border-t border-[#EDE6DC] flex items-center justify-between text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-[#14241E] text-base block">{rev.guestName}</span>
                  <span className="text-xs sm:text-sm text-[#64756E]">{rev.stayType}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#2C6E49] font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Google Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
