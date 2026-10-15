import React from 'react';
import { Coffee, Utensils, Heart, Sunrise, Leaf, ShieldCheck, Check } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';
import { HomestayVisualScene } from './VisualAssets';

export const AssamHospitalityStory: React.FC = () => {
  return (
    <section id="hospitality" className="py-12 sm:py-16 bg-[#F4EFE8] relative border-b border-[#EBE4D8] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#B8860B] font-bold mb-2">
            <Sunrise className="w-4 h-4" />
            <span>Our Hospitality</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14241E] tracking-tight leading-tight">
            Hot Assam Tea, Fresh Breakfast & Your Own Kitchen
          </h2>
          <p className="text-base sm:text-lg text-[#3D4F47] mt-3 max-w-2xl leading-relaxed">
            Guests love staying with us mainly for two reasons: our <strong className="text-[#14241E]">tasty homemade breakfast</strong> and the <strong className="text-[#14241E]">kind, caring hospitality of our host family</strong>.
          </p>
        </div>

        {/* 3 Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Pillar 1: Morning Breakfast */}
          <div className="rounded-2xl bg-white border border-[#E5DFD4] overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF8F5]">
              <HomestayVisualScene
                variant="tea"
                badge="Fresh Morning Breakfast"
                title="Steaming Assam Tea & Breakfast"
              />
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#14241E] mb-2.5">
                  Hot Homemade Breakfast
                </h3>
                <p className="text-base text-[#52635B] leading-relaxed mb-4">
                  Wake up to hot, fresh breakfast served every morning. Paired with aromatic local Assam tea, it makes sure you start your day energized without having to search for outside food.
                </p>
              </div>
              <div className="pt-3.5 border-t border-[#EDE6DC] flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2C6E49]">
                <Check className="w-4.5 h-4.5 text-[#2C6E49]" />
                <span>Included Free in Every Room</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: In-Room Kitchen */}
          <div className="rounded-2xl bg-white border border-[#B8860B]/40 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between relative">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF8F5]">
              <HomestayVisualScene
                variant="kitchen"
                badge="100% In-Room Kitchen"
                title="Private Cooking Station & Kettle"
              />
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#14241E] mb-2.5">
                  100% Private In-Room Kitchens
                </h3>
                <p className="text-base text-[#52635B] leading-relaxed mb-4">
                  Every room has its own attached kitchen with a gas stove, electric kettle, and cooking utensils. Ideal for families with small kids, couples, or anyone who wants home-cooked meals.
                </p>
              </div>
              <div className="pt-3.5 border-t border-[#EDE6DC] flex items-center gap-2 text-xs sm:text-sm font-bold text-[#8C6615]">
                <ShieldCheck className="w-4.5 h-4.5 text-[#B8860B]" />
                <span>Private to Your Room — Never Shared</span>
              </div>
            </div>
          </div>

          {/* Pillar 3: Host Care */}
          <div className="rounded-2xl bg-white border border-[#E5DFD4] overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF8F5]">
              <HomestayVisualScene
                variant="hills"
                badge="Sarania Hills Setting"
                title="Peaceful Hilltop Neighborhood"
              />
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#14241E] mb-2.5">
                  Warm & Caring Host Family
                </h3>
                <p className="text-base text-[#52635B] leading-relaxed mb-4">
                  We treat every guest with respect, warmth, and care. We warmly welcome couples (valid government ID required) and are always available to help with city directions and travel tips.
                </p>
              </div>
              <div className="pt-3.5 border-t border-[#EDE6DC] flex items-center gap-2 text-xs sm:text-sm font-bold text-rose-700">
                <Heart className="w-4.5 h-4.5 text-rose-600 fill-rose-600" />
                <span>Safe & Couple-Friendly Stay</span>
              </div>
            </div>
          </div>

        </div>

        {/* Google Reviews Consensus Quote */}
        <div className="p-7 sm:p-10 rounded-3xl bg-white border border-[#E2DAD0] text-center max-w-4xl mx-auto shadow-sm">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#B8860B] block mb-3 font-mono">
            What Our Guests Say on Google (132 Reviews · 4.1 Rating)
          </span>
          <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#14241E] italic font-medium leading-relaxed mb-3">
            "Guests consistently praise this homestay for its complimentary breakfast, convenient location, reasonable prices, and the kindness and loving nature of the management."
          </blockquote>
          <div className="text-xs sm:text-sm text-[#64756E]">
            Source: Public Google Maps Reviews for Fairy Nest Homestay, Gandhi Basti, Sarania Hills, Guwahati
          </div>
        </div>

      </div>
    </section>
  );
};
