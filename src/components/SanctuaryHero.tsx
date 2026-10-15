import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, MapPin, Star, Sparkles, Utensils, Coffee, Bed, ArrowRight, ShieldCheck, Check, ChevronDown } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';

interface HeroScene {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  unitType: '1bhk' | '2bhk' | '1rk' | 'single';
  imageUrl: string;
  fallbackUrl: string;
  highlight: string;
}

const HERO_SCENES: HeroScene[] = [
  {
    id: 'flagship-2bhk',
    name: 'Flagship 2BHK Family Flat',
    shortName: 'Flagship 2BHK',
    tagline: 'Two spacious bedrooms, private living room, and attached full kitchen',
    unitType: '2bhk',
    imageUrl: '/images/hero_luxury_wide.jpg',
    fallbackUrl: '/images/twobhk_living.jpg',
    highlight: '2 Queen Beds · Living Hall · Full Kitchen'
  },
  {
    id: 'couple-1bhk',
    name: 'Scenic 1BHK Couple Flat with Fairy Lights',
    shortName: 'Couple 1BHK',
    tagline: 'Warm fairy lights, cozy living corner, and private attached kitchen',
    unitType: '1bhk',
    imageUrl: '/images/hero_homestay.jpg',
    fallbackUrl: '/images/onebhk_couple.jpg',
    highlight: 'Fairy Lights · Couple Friendly · Private Bath'
  },
  {
    id: 'penthouse-studio',
    name: 'Top-Floor Penthouse 1RK Studio',
    shortName: 'Penthouse 1RK',
    tagline: 'High ceiling, cool hillside breeze, and private kitchen counter',
    unitType: '1rk',
    imageUrl: '/images/penthouse_studio.jpg',
    fallbackUrl: '/images/room_aesthetic_3.jpg',
    highlight: 'High Ceiling · Hill Breeze · Kitchenette'
  },
  {
    id: 'balcony-hills',
    name: 'Sarania Hills Greenery & Balcony View',
    shortName: 'Hills Balcony',
    tagline: 'Fresh morning air, peaceful surroundings, and green hill views',
    unitType: '1bhk',
    imageUrl: '/images/balcony_view.jpg',
    fallbackUrl: '/images/sarania_hills.jpg',
    highlight: 'Hill Views · Fresh Air · Quiet Area'
  },
  {
    id: 'kitchenette',
    name: 'Private Attached Kitchen in Every Room',
    shortName: 'Private Kitchen',
    tagline: 'Cook your own food with gas stove, electric kettle, pots, pans & plates',
    unitType: '2bhk',
    imageUrl: '/images/kitchenette.jpg',
    fallbackUrl: '/images/twobhk_living.jpg',
    highlight: 'Gas Stove · Electric Kettle · Utensils'
  }
];

export const SanctuaryHero: React.FC = () => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [selectedUnitType, setSelectedUnitType] = useState<'1bhk' | '2bhk' | '1rk' | 'single'>('1bhk');
  const [stayNights, setStayNights] = useState(2);
  const [guestCount, setGuestCount] = useState(2);
  const [datesText, setDatesText] = useState('');

  const activeScene = HERO_SCENES[activeSceneIndex] || HERO_SCENES[0];
  const [currentImageSrc, setCurrentImageSrc] = useState(activeScene.imageUrl);

  useEffect(() => {
    setCurrentImageSrc(activeScene.imageUrl);
  }, [activeSceneIndex, activeScene.imageUrl]);

  const unitRates: Record<string, { label: string; rate: number; capacity: string; highlight: string }> = {
    '1bhk': { 
      label: '1BHK Apartment', 
      rate: 1400, 
      capacity: '1–3 Guests (Couple Friendly)',
      highlight: 'Warm fairy lights, attached kitchen & private bath'
    },
    '2bhk': { 
      label: '2BHK Family Flat', 
      rate: 2400, 
      capacity: 'Up to 6 Guests (Families & Groups)',
      highlight: '2 separate bedrooms, living hall & full kitchen'
    },
    '1rk': { 
      label: 'Penthouse 1RK Studio', 
      rate: 1200, 
      capacity: '1–2 Guests (Top Floor Breeze)',
      highlight: 'High ceiling, hill breeze & kitchen counter'
    },
    'single': { 
      label: 'Unit-11 Single Room', 
      rate: 950, 
      capacity: '1 Solo Guest',
      highlight: 'Attached private bath & study work desk'
    }
  };

  const currentSelection = unitRates[selectedUnitType] || unitRates['1bhk'];
  const estimatedTotal = currentSelection.rate * stayNights;

  const handleWhatsAppBooking = () => {
    let msg = `Hello Fairy Nest Homestay! I would like to book a stay in Guwahati:\n\n`;
    msg += `• Room: ${currentSelection.label} (${currentSelection.highlight})\n`;
    msg += `• Duration: ${stayNights} Night(s)\n`;
    msg += `• Guests: ${guestCount} Person(s)\n`;
    if (datesText.trim()) {
      msg += `• Dates: ${datesText.trim()}\n`;
    }
    msg += `• Estimated Price: ₹${estimatedTotal} (Free Daily Breakfast Included)\n\n`;
    msg += `Please let me know if this room is available.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${HOMESTAY_INFO.phoneRaw}?text=${encoded}`, '_blank');
  };

  const handleSelectScene = (index: number) => {
    setActiveSceneIndex(index);
    const scene = HERO_SCENES[index];
    if (scene && scene.unitType) {
      setSelectedUnitType(scene.unitType);
    }
  };

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between overflow-hidden bg-[#0D1411] text-white"
    >
      {/* 
        BACKGROUND IMAGE: COVERS THE ENTIRE HERO SECTION 
        Fits cleanly within the initial single window / 100vh viewport
      */}
      <div className="absolute inset-0 z-0">
        <img
          key={activeScene.id}
          src={currentImageSrc}
          alt={activeScene.name}
          onError={() => {
            if (activeScene.fallbackUrl && currentImageSrc !== activeScene.fallbackUrl) {
              setCurrentImageSrc(activeScene.fallbackUrl);
            }
          }}
          className="w-full h-full object-cover object-center transition-opacity duration-700 brightness-[0.82]"
          referrerPolicy="no-referrer"
          loading="eager"
        />

        {/* Cinematic Multi-stop Vignette & Scrims for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
      </div>

      {/* TOP ZONE: Clears the fixed floating navbar (pt-24 sm:pt-28) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
        
        {/* Subtle Top Meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm sm:text-base font-medium text-white/95 mb-3">
          <div className="inline-flex items-center gap-2 text-white/95">
            <MapPin className="w-4 h-4 text-[#E2BC5A]" />
            <span className="font-semibold tracking-wide">Gandhi Basti, Sarania Hills, Guwahati</span>
            <span className="text-white/40">·</span>
            <span className="text-[#96E6B3] font-semibold">Attached Kitchen in Every Room</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-white/95">
            <div className="flex items-center text-[#E2BC5A]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#E2BC5A]" />
              ))}
            </div>
            <span className="font-bold text-base">4.1 / 5.0</span>
            <span className="text-white/75 text-sm">(132 Verified Google Reviews)</span>
          </div>
        </div>

        {/* Hero Narrative Heading */}
        <div className="max-w-3xl space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.22em] text-[#E2BC5A] font-bold">
            <Sparkles className="w-4 h-4" />
            <span>Hillside Homestay · Central Guwahati</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] drop-shadow-lg text-balance">
            A peaceful, cozy stay nestled in <span className="italic text-[#F3E5AB] font-normal underline decoration-[#D4AF37]/50 underline-offset-4">Sarania Hills</span>.
          </h1>

          <p className="text-sm sm:text-lg text-white/90 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
            Clean 1BHK, 2BHK flats & Penthouse rooms — each with your own private kitchen, attached bathroom, and free daily homemade breakfast.
          </p>
        </div>

      </div>

      {/* MIDDLE ZONE: Interactive Photo Room Tabs */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto py-2">
        
        {/* Active Scene Spotlight */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-[#E2BC5A] text-black font-bold text-xs tracking-wide uppercase shadow-sm">
              {activeScene.highlight}
            </span>
            <span className="text-sm sm:text-base font-serif font-bold text-white drop-shadow-md hidden sm:inline">
              {activeScene.name}
            </span>
          </div>

          <span className="text-xs sm:text-sm text-white/80 hidden md:inline">
            Click any room to view real photos
          </span>
        </div>

        {/* Space Switcher Controls */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          {HERO_SCENES.map((scene, idx) => (
            <button
              key={scene.id}
              onClick={() => handleSelectScene(idx)}
              className={`flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer backdrop-blur-md ${
                activeSceneIndex === idx
                  ? 'bg-white text-[#14241E] shadow-xl ring-2 ring-[#E2BC5A] scale-102'
                  : 'bg-black/45 text-white/80 hover:bg-black/70 hover:text-white border border-white/20'
              }`}
            >
              <img
                src={scene.imageUrl}
                alt={scene.shortName}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = scene.fallbackUrl;
                }}
                className="w-5 h-5 rounded-md object-cover"
              />
              <span>{scene.shortName}</span>
            </button>
          ))}
        </div>

      </div>

      {/* BOTTOM ZONE: Docked Floating Reservation Bar & Scroll Indicator */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
        
        {/* Compact Reservation Bar that fits in the First Window */}
        <div className="bg-black/70 backdrop-blur-xl rounded-2xl p-3 sm:p-4 border border-white/20 shadow-2xl">
          
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-3 items-center">
            
            {/* Unit Selection */}
            <div className="sm:col-span-3 p-2.5 rounded-xl bg-white/10 border border-white/15">
              <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-0.5">
                Select Room
              </label>
              <select
                value={selectedUnitType}
                onChange={(e) => setSelectedUnitType(e.target.value as any)}
                className="w-full text-sm sm:text-base font-semibold text-white bg-transparent outline-none cursor-pointer [&>option]:text-black"
              >
                <option value="1bhk">1BHK Apartment (Attached Kitchen)</option>
                <option value="2bhk">2BHK Family Flat (Attached Kitchen)</option>
                <option value="1rk">Penthouse Studio (1RK)</option>
                <option value="single">Unit-11 Solo Room</option>
              </select>
            </div>

            {/* Stay Duration */}
            <div className="sm:col-span-2 p-2.5 rounded-xl bg-white/10 border border-white/15">
              <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-0.5">
                Nights
              </label>
              <select
                value={stayNights}
                onChange={(e) => setStayNights(Number(e.target.value))}
                className="w-full text-sm sm:text-base font-semibold text-white bg-transparent outline-none cursor-pointer [&>option]:text-black"
              >
                {[1, 2, 3, 4, 5, 7, 10, 14, 30].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'Night' : 'Nights'}</option>
                ))}
              </select>
            </div>

            {/* Guests */}
            <div className="sm:col-span-2 p-2.5 rounded-xl bg-white/10 border border-white/15">
              <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-0.5">
                Guests
              </label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full text-sm sm:text-base font-semibold text-white bg-transparent outline-none cursor-pointer [&>option]:text-black"
              >
                {[1, 2, 3, 4, 5, 6].map(g => (
                  <option key={g} value={g}>{g} {g === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>

            {/* Price Estimate & Actions */}
            <div className="sm:col-span-5 flex flex-wrap sm:flex-nowrap items-center justify-between sm:justify-end gap-2.5 sm:pl-2">
              <div className="text-left">
                <span className="text-xs uppercase tracking-wider text-white/70 block">Estimated Price</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-serif font-bold text-[#F3E5AB]">₹{estimatedTotal}</span>
                  <span className="text-xs sm:text-sm text-white/80">/ {stayNights} {stayNights === 1 ? 'Night' : 'Nights'} (Free Breakfast)</span>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`tel:+${HOMESTAY_INFO.phoneRaw}`}
                  className="p-2.5 rounded-xl text-white bg-white/15 hover:bg-white/25 border border-white/20 transition-colors"
                  aria-label="Call Host"
                  title="Call host directly"
                >
                  <Phone className="w-4 h-4 text-[#E2BC5A]" />
                </a>

                <button
                  onClick={handleWhatsAppBooking}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm sm:text-base text-white bg-[#25D366] hover:bg-[#20BD5A] shadow-lg transition-all cursor-pointer active:scale-95 whitespace-nowrap"
                >
                  <MessageCircle className="w-4.5 h-4.5 text-white fill-white" />
                  <span>Book on WhatsApp</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Downward Anchor */}
        <div className="flex items-center justify-between pt-2.5 text-xs sm:text-sm text-white/75">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#96E6B3]" />
            <span>Direct Booking with Host · Zero Extra Fees · Free Daily Breakfast</span>
          </div>

          <a 
            href="#suites" 
            className="hidden sm:inline-flex items-center gap-1.5 text-white/85 hover:text-white transition-colors font-medium"
          >
            <span>See All 13 Rooms</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </div>

    </section>
  );
};
