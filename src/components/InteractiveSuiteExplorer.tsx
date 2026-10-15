import React, { useState, useEffect } from 'react';
import { Bed, Utensils, Bath, Heart, Users, Coffee, Sparkles, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Camera } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';
import { HomestayVisualScene } from './VisualAssets';

interface SuitePreset {
  id: string;
  categoryName: string;
  title: string;
  tagline: string;
  badge: string;
  featuredUnits: string;
  capacity: string;
  rateEstimate: string;
  gallery: { label: string; src: string }[];
  description: string;
  highlights: string[];
  kitchenSpecs: string[];
  bathSpecs: string[];
}

const SUITE_PRESETS: SuitePreset[] = [
  {
    id: "2bhk-family",
    categoryName: "2BHK Family Flat",
    title: "Spacious 2BHK Family Flat",
    tagline: "Two separate bedrooms, sofa living room, and attached full kitchen",
    badge: "Best for Families",
    featuredUnits: "Units: 1, 8, & 10 (2BHK)",
    capacity: "Up to 5–6 Guests",
    rateEstimate: "From ₹2,400 / night",
    gallery: [
      { label: "Living Room", src: "/images/twobhk_living.jpg" },
      { label: "Master Bedroom", src: "/images/twobhk_bedroom.jpg" },
      { label: "Attached Kitchen", src: "/images/kitchenette.jpg" },
      { label: "Clean Bathroom", src: "/images/bathroom_luxury.jpg" },
    ],
    description: "Our largest flat, ideal for families and small groups. You get two private bedrooms with queen beds, a cozy living room with sofas, and your own attached kitchen to cook meals anytime.",
    highlights: [
      "2 Separate Bedrooms with Queen Beds",
      "Spacious Living Room with Sofa",
      "Attached Private Kitchen with Stove & Utensils",
      "Attached Bathroom with Hot Water Geyser",
      "Free Tasty Breakfast Every Morning",
      "Fresh Hill Breeze and Quiet Surroundings"
    ],
    kitchenSpecs: [
      "Gas Stove / Induction Cooktop",
      "Electric Tea Kettle",
      "Cooking Pots, Kadai & Ladles",
      "Dinner Plates, Glasses & Spoons"
    ],
    bathSpecs: [
      "Attached Private Bathroom",
      "Hot Water Geyser on Demand",
      "Clean Towels & Toiletries",
      "24/7 Running Water Supply"
    ]
  },
  {
    id: "1bhk-couple",
    categoryName: "1BHK Couple Flat",
    title: "Cozy 1BHK Couple Flat",
    tagline: "Warm fairy lights, private hall, and your own attached kitchen",
    badge: "Couples' Choice",
    featuredUnits: "Units: 2, 9, 12, & 13 (1BHK)",
    capacity: "1–3 Guests (Couple Friendly)",
    rateEstimate: "From ₹1,400 – ₹1,700 / night",
    gallery: [
      { label: "Master Bedroom", src: "/images/onebhk_couple.jpg" },
      { label: "Cozy Corner", src: "/images/cozy_reading_nook.jpg" },
      { label: "Kitchen Counter", src: "/images/kitchenette.jpg" },
      { label: "Private Bathroom", src: "/images/bathroom_luxury.jpg" },
    ],
    description: "A private, couple-friendly flat with pretty fairy lights, a comfortable queen bed, separate sitting area, and an attached kitchen. Cook your favorite food together and enjoy a calm, private stay.",
    highlights: [
      "Private Bedroom with Queen Size Bed",
      "Attached Kitchen to Cook Easily",
      "Warm Fairy Lights for a Cozy Mood",
      "100% Couple Friendly (Valid ID Required)",
      "Attached Bathroom with Hot Geyser",
      "Free Daily Homemade Breakfast"
    ],
    kitchenSpecs: [
      "Private Cooking Counter & Stove",
      "Electric Tea Kettle & Mugs",
      "Frying Pan & Cooking Pot",
      "Plates & Spoons for Two"
    ],
    bathSpecs: [
      "Attached Private Bathroom",
      "Instant Hot Water Geyser",
      "Neat & Sanitized Space",
      "Complete Privacy"
    ]
  },
  {
    id: "penthouse-studio",
    categoryName: "Penthouse Studio (1RK)",
    title: "Top-Floor Penthouse Studio (1RK)",
    tagline: "Open high ceiling, cool hill air, and attached kitchen counter",
    badge: "Top Floor Breeze",
    featuredUnits: "Units: 3, 4, 5, 6, & 7 (1RK)",
    capacity: "1–2 Guests (Couple Friendly)",
    rateEstimate: "From ₹1,200 / night",
    gallery: [
      { label: "Studio Room", src: "/images/penthouse_studio.jpg" },
      { label: "Balcony View", src: "/images/balcony_view.jpg" },
      { label: "Kitchenette", src: "/images/kitchenette.jpg" },
      { label: "Sarania Hills", src: "/images/sarania_hills.jpg" },
    ],
    description: "Located on our top floor with scenic hill views. Features high airy ceilings, large windows that catch the pleasant breeze, an attached kitchen corner, and a private bathroom.",
    highlights: [
      "High Ceiling & Scenic Hill Views",
      "Attached Private Kitchenette",
      "Private Bathroom with Hot Water",
      "Cool Hill Breeze & Quiet Nights",
      "Comfortable Queen Bed",
      "Free Daily Morning Tea & Breakfast"
    ],
    kitchenSpecs: [
      "Compact Counter Stove",
      "Electric Kettle & Cups",
      "Basic Cooking Utensils",
      "Clean Drinking Water"
    ],
    bathSpecs: [
      "Attached Bathroom",
      "Hot Geyser Shower",
      "Mirror & Washbasin",
      "Clean Towels"
    ]
  },
  {
    id: "solo-room",
    categoryName: "Single Solo Room",
    title: "Budget Single Room for Solo Guests",
    tagline: "Affordable private room with attached bath and study desk",
    badge: "Solo Value (Unit-11)",
    featuredUnits: "Unit 11 (Single Room)",
    capacity: "1 Solo Guest",
    rateEstimate: "From ₹950 / night",
    gallery: [
      { label: "Solo Room", src: "/images/single_room.jpg" },
      { label: "Work Desk", src: "/images/room_aesthetic_3.jpg" },
      { label: "Private Bath", src: "/images/bathroom_luxury.jpg" },
      { label: "Assam Morning Tea", src: "/images/assam_tea.jpg" },
    ],
    description: "A clean, peaceful room made for solo travelers, students, and professionals visiting Guwahati. Comes with a single bed, work desk, private bathroom, and free morning breakfast.",
    highlights: [
      "Single Bed with Clean Cotton Sheets",
      "Attached Private Bathroom with Hot Water",
      "Study Desk & Charging Points",
      "Free Daily Morning Breakfast",
      "Quiet Environment for Work or Rest",
      "Safe and Helpful Host"
    ],
    kitchenSpecs: [
      "Electric Kettle Access",
      "Drinking Water Supply",
      "Morning Tea Service"
    ],
    bathSpecs: [
      "Attached Private Bathroom",
      "Hot Water Geyser",
      "Clean Towels"
    ]
  }
];

export const InteractiveSuiteExplorer: React.FC = () => {
  const [selectedSuiteId, setSelectedSuiteId] = useState<string>("2bhk-family");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0);

  const activeSuite = SUITE_PRESETS.find((s) => s.id === selectedSuiteId) || SUITE_PRESETS[0];

  useEffect(() => {
    setSelectedPhotoIndex(0);
  }, [selectedSuiteId]);

  const activePhoto = activeSuite.gallery[selectedPhotoIndex] || activeSuite.gallery[0];

  const handleWhatsAppEnquiry = () => {
    const text = encodeURIComponent(
      `Hello Fairy Nest Homestay! I would like to check availability for ${activeSuite.title} (${activeSuite.categoryName}). Please share details and rates for my upcoming stay.`
    );
    window.open(`https://wa.me/${HOMESTAY_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="suites" className="py-14 sm:py-20 bg-[#FAF8F5] border-b border-[#EBE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#B8860B] block mb-2">
            Our Room Types
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14241E] leading-tight">
            Comfortable Flats & Rooms for Every Trip
          </h2>
          <p className="text-base sm:text-lg text-[#3D4F47] mt-3 leading-relaxed">
            Whether you are traveling as a couple, with family, or solo — every room at Fairy Nest includes its own attached kitchen and private bathroom.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 p-2 bg-white rounded-2xl border border-[#E5DFD4] mb-10 overflow-x-auto no-scrollbar shadow-xs">
          {SUITE_PRESETS.map((suite) => (
            <button
              key={suite.id}
              onClick={() => setSelectedSuiteId(suite.id)}
              className={`flex-1 min-w-[160px] py-3.5 px-5 rounded-xl text-sm sm:text-base font-bold transition-all text-center cursor-pointer whitespace-nowrap ${
                selectedSuiteId === suite.id
                  ? 'bg-[#14241E] text-white shadow-xs'
                  : 'text-[#52635B] hover:text-[#14241E] hover:bg-[#FAF8F5]'
              }`}
            >
              <span>{suite.categoryName}</span>
            </button>
          ))}
        </div>

        {/* Detailed Suite Showcase Card */}
        <div className="bg-white rounded-3xl border border-[#E2DAD0] shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Photography Column */}
            <div className="lg:col-span-6 relative bg-[#FAF8F5] border-b lg:border-b-0 lg:border-r border-[#E5DFD4] flex flex-col justify-between">
              
              <div>
                {/* Main Large Photograph */}
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden">
                  <HomestayVisualScene
                    src={activePhoto.src}
                    title={`${activeSuite.title} — ${activePhoto.label}`}
                    badge={activeSuite.badge}
                    alt={`${activeSuite.title} in Guwahati`}
                  />
                </div>

                {/* Multi-Photo Gallery Selector */}
                <div className="p-3.5 sm:p-4 bg-[#FAF8F5] border-t border-[#EDE6DC]">
                  <div className="flex items-center justify-between mb-2.5 px-1">
                    <span className="text-xs sm:text-sm font-bold text-[#14241E] uppercase tracking-wider flex items-center gap-1.5">
                      <Camera className="w-4 h-4 text-[#B8860B]" />
                      <span>Real Room Photos ({selectedPhotoIndex + 1}/{activeSuite.gallery.length})</span>
                    </span>
                    <span className="text-xs text-[#64756E] font-medium">Click thumbnail to view</span>
                  </div>

                  <div className="grid grid-cols-4 gap-2.5">
                    {activeSuite.gallery.map((photo, pIdx) => {
                      const isSelected = selectedPhotoIndex === pIdx;
                      return (
                        <button
                          key={pIdx}
                          onClick={() => setSelectedPhotoIndex(pIdx)}
                          className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all cursor-pointer text-left ${
                            isSelected
                              ? 'border-[#14241E] ring-2 ring-[#B8860B]/30 shadow-sm scale-102'
                              : 'border-transparent opacity-75 hover:opacity-100 hover:border-[#D8D0C3]'
                          }`}
                        >
                          <img
                            src={photo.src}
                            alt={photo.label}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-1.5">
                            <span className="text-[11px] font-semibold text-white truncate drop-shadow">
                              {photo.label}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* In-Suite Kitchen & Bathroom Amenities Included */}
                <div className="p-4 sm:p-5 bg-white border-t border-[#EDE6DC]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs sm:text-sm font-bold text-[#8C6615] uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#B8860B]" />
                      <span>Private In-Room Facilities</span>
                    </span>
                    <span className="text-xs text-[#2C6E49] font-semibold bg-[#E8F3ED] px-2.5 py-1 rounded-md">
                      100% Attached & Private
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD4]">
                      <div className="flex items-center gap-2 font-bold text-sm text-[#14241E] mb-2">
                        <Utensils className="w-4 h-4 text-[#B8860B] shrink-0" />
                        <span>Attached Kitchen</span>
                      </div>
                      <ul className="text-xs sm:text-sm text-[#52635B] space-y-1.5">
                        {activeSuite.kitchenSpecs.map((spec, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD4]">
                      <div className="flex items-center gap-2 font-bold text-sm text-[#14241E] mb-2">
                        <Bath className="w-4 h-4 text-[#B8860B] shrink-0" />
                        <span>Attached Bathroom</span>
                      </div>
                      <ul className="text-xs sm:text-sm text-[#52635B] space-y-1.5">
                        {activeSuite.bathSpecs.map((spec, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Facts Strip */}
              <div className="p-4 sm:p-5 bg-[#F4EFE8] border-t border-[#EDE6DC] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-[#14241E]">
                  <Users className="w-4.5 h-4.5 text-[#B8860B] shrink-0" />
                  <span className="font-semibold">{activeSuite.capacity}</span>
                </div>
                <div className="flex items-center gap-2 text-[#14241E]">
                  <Utensils className="w-4.5 h-4.5 text-[#B8860B] shrink-0" />
                  <span className="font-semibold">Kitchen Ready</span>
                </div>
                <div className="flex items-center gap-2 text-[#14241E]">
                  <Bath className="w-4.5 h-4.5 text-[#B8860B] shrink-0" />
                  <span className="font-semibold">Private Bath</span>
                </div>
                <div className="flex items-center gap-2 text-[#14241E]">
                  <Coffee className="w-4.5 h-4.5 text-[#B8860B] shrink-0" />
                  <span className="font-semibold">Free Breakfast</span>
                </div>
              </div>
            </div>

            {/* Details & Specs Column */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div className="space-y-6">
                
                <div>
                  <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#FBF6EB] border border-[#E8D4A2] text-xs sm:text-sm font-bold text-[#8C6615] mb-2.5">
                    {activeSuite.featuredUnits}
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#14241E] leading-tight">
                    {activeSuite.title}
                  </h3>
                  <p className="text-base sm:text-lg font-medium text-[#52635B] mt-1.5 leading-relaxed">
                    {activeSuite.tagline}
                  </p>
                </div>

                {/* Price Indicator */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD4] flex items-center justify-between">
                  <div>
                    <span className="text-xs sm:text-sm text-[#64756E] block font-medium">Estimated Price Per Night</span>
                    <strong className="text-2xl sm:text-3xl font-serif font-bold text-[#14241E]">
                      {activeSuite.rateEstimate}
                    </strong>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#2C6E49] bg-[#E8F3ED] px-3 py-1.5 rounded-lg">
                    Zero Booking Fee
                  </span>
                </div>

                <p className="text-base sm:text-lg text-[#3D4F47] leading-relaxed">
                  {activeSuite.description}
                </p>

                {/* Highlights Checklist */}
                <div>
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#14241E] mb-3">
                    Highlights of this Room
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm sm:text-base text-[#3D4F47]">
                    {activeSuite.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#2C6E49] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Host Hospitality & Colony Assurance */}
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EDE6DC] flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#2C6E49] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[#52635B] leading-relaxed">
                    <strong className="text-[#14241E] block font-semibold mb-0.5">Quiet Hillside Colony · Safe & Private</strong>
                    Valid Govt photo ID required for all staying guests at check-in. Completely family & couple friendly.
                  </div>
                </div>

              </div>

              {/* Bottom Reservation Button */}
              <div className="pt-6 mt-6 border-t border-[#EDE6DC] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#64756E]">
                  <Coffee className="w-4.5 h-4.5 text-[#B8860B] shrink-0" />
                  <span>Fresh Assam tea & home-style breakfast included</span>
                </div>

                <button
                  onClick={handleWhatsAppEnquiry}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-base text-white bg-[#14241E] hover:bg-[#1D362C] shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
                >
                  <MessageCircle className="w-4.5 h-4.5 text-[#E2BC5A]" />
                  <span>Check Availability on WhatsApp</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
