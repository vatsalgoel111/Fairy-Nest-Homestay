import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Phone, MapPin, Star, Sparkles, Bed, Check, ChevronDown, Users, Moon, Calendar, X } from 'lucide-react';
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
    imageUrl: '/images/hero_cozy_warm.jpg',
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

interface RoomOption {
  id: '1bhk' | '2bhk' | '1rk' | 'single';
  label: string;
  shortLabel: string;
  rate: number;
  capacity: string;
  highlight: string;
  kitchenBadge: string;
}

const ROOM_OPTIONS: Record<string, RoomOption> = {
  '1bhk': { 
    id: '1bhk',
    label: '1BHK Apartment', 
    shortLabel: '1BHK Apartment',
    rate: 1400, 
    capacity: '1–3 Guests (Couples)',
    highlight: 'Warm fairy lights & private hall',
    kitchenBadge: 'Attached Kitchen'
  },
  '2bhk': { 
    id: '2bhk',
    label: '2BHK Family Flat', 
    shortLabel: '2BHK Family Flat',
    rate: 2400, 
    capacity: 'Up to 6 Guests (Families)',
    highlight: '2 separate bedrooms & living hall',
    kitchenBadge: 'Full Kitchen'
  },
  '1rk': { 
    id: '1rk',
    label: 'Penthouse Studio (1RK)', 
    shortLabel: 'Penthouse (1RK)',
    rate: 1200, 
    capacity: '1–2 Guests (Hill Breeze)',
    highlight: 'High ceiling & open hill views',
    kitchenBadge: 'Kitchenette'
  },
  'single': { 
    id: 'single',
    label: 'Unit-11 Solo Room', 
    shortLabel: 'Unit-11 Solo Room',
    rate: 950, 
    capacity: '1 Solo Guest',
    highlight: 'Private bath & study work desk',
    kitchenBadge: 'Private Bath'
  }
};

const NIGHT_OPTIONS = [
  { value: 1, label: '1 Night', hint: 'Quick stop' },
  { value: 2, label: '2 Nights', hint: 'Weekend stay' },
  { value: 3, label: '3 Nights', hint: 'Most popular' },
  { value: 4, label: '4 Nights', hint: 'Relaxed trip' },
  { value: 5, label: '5 Nights', hint: 'Holiday stay' },
  { value: 7, label: '7 Nights', hint: 'Weekly stay' },
  { value: 10, label: '10 Nights', hint: 'Extended' },
  { value: 14, label: '14 Nights', hint: 'Fortnight' },
  { value: 30, label: '30 Nights', hint: 'Monthly deal' },
];

const GUEST_OPTIONS = [
  { value: 1, label: '1 Guest', hint: 'Solo traveler' },
  { value: 2, label: '2 Guests', hint: 'Couple / Friends' },
  { value: 3, label: '3 Guests', hint: 'Couple + Child' },
  { value: 4, label: '4 Guests', hint: 'Family of 4' },
  { value: 5, label: '5 Guests', hint: 'Family / Group' },
  { value: 6, label: '6 Guests', hint: 'Maximum capacity' },
];

export const SanctuaryHero: React.FC = () => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [selectedUnitType, setSelectedUnitType] = useState<'1bhk' | '2bhk' | '1rk' | 'single'>('1bhk');
  const [stayNights, setStayNights] = useState(2);
  const [guestCount, setGuestCount] = useState(2);
  
  // Custom dropdown open state
  const [openDropdown, setOpenDropdown] = useState<'room' | 'nights' | 'guests' | null>(null);
  
  const barRef = useRef<HTMLDivElement>(null);

  const activeScene = HERO_SCENES[activeSceneIndex] || HERO_SCENES[0];
  const [currentImageSrc, setCurrentImageSrc] = useState(activeScene.imageUrl);

  useEffect(() => {
    setCurrentImageSrc(activeScene.imageUrl);
  }, [activeSceneIndex, activeScene.imageUrl]);

  // Click outside to close custom dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (barRef.current && !barRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const currentSelection = ROOM_OPTIONS[selectedUnitType] || ROOM_OPTIONS['1bhk'];
  const estimatedTotal = currentSelection.rate * stayNights;

  const handleWhatsAppBooking = () => {
    let msg = `Hello Fairy Nest Homestay! I would like to book a stay in Guwahati:\n\n`;
    msg += `• Room: ${currentSelection.label} (${currentSelection.highlight})\n`;
    msg += `• Duration: ${stayNights} Night(s)\n`;
    msg += `• Guests: ${guestCount} Person(s)\n`;
    msg += `• Estimated Price: ₹${estimatedTotal} (Free Daily Breakfast Included)\n\n`;
    msg += `Please confirm if this room is available for my dates.`;

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
      className="relative w-full min-h-[100svh] lg:h-screen lg:max-h-screen flex flex-col justify-between overflow-x-hidden overflow-y-visible bg-[#0D1411] text-white"
    >
      {/* BACKGROUND IMAGE: Responsive full-bleed cover */}
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
          className="w-full h-full object-cover object-center transition-opacity duration-700 brightness-[0.80]"
          referrerPolicy="no-referrer"
          loading="eager"
        />

        {/* Multi-stop Vignette & Scrims for Readability across orientations */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-transparent to-black/35 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-black/85 to-transparent pointer-events-none" />
      </div>

      {/* TOP ZONE: Clears fixed header, optimized for mobile orientation */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-26 lg:pt-28">
        
        {/* Subtle Top Meta */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 text-xs sm:text-sm font-medium text-white/95 mb-2.5 sm:mb-3">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 text-white/95 flex-wrap">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E2BC5A] shrink-0" />
            <span className="font-semibold tracking-wide">Gandhi Basti, Sarania Hills, Guwahati</span>
            <span className="text-white/40 hidden xs:inline">·</span>
            <span className="text-[#96E6B3] font-semibold text-xs sm:text-sm">Attached Kitchen in Every Room</span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-white/95">
            <div className="flex items-center text-[#E2BC5A]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#E2BC5A]" />
              ))}
            </div>
            <span className="font-bold text-sm sm:text-base">4.1 / 5.0</span>
            <span className="text-white/75 text-xs sm:text-sm">(132 Verified Google Reviews)</span>
          </div>
        </div>

        {/* Hero Narrative Heading */}
        <div className="max-w-3xl space-y-1.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#E2BC5A] font-bold">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>Hillside Homestay · Central Guwahati</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] drop-shadow-lg text-balance">
            A peaceful, cozy stay nestled in <span className="italic text-[#F3E5AB] font-normal underline decoration-[#D4AF37]/50 underline-offset-4">Sarania Hills</span>.
          </h1>

          <p className="text-xs sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-2xl font-normal drop-shadow-sm line-clamp-3 sm:line-clamp-none">
            Clean 1BHK, 2BHK flats & Penthouse rooms — each with your own private kitchen, attached bathroom, and free daily homemade breakfast.
          </p>
        </div>

      </div>

      {/* MIDDLE ZONE: Horizontal Touch-Friendly Photo Room Switcher */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto py-2 sm:py-3">
        
        {/* Active Scene Spotlight */}
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#E2BC5A] text-black font-bold text-[11px] sm:text-xs tracking-wide uppercase shadow-sm">
              {activeScene.highlight}
            </span>
            <span className="text-xs sm:text-sm font-serif font-bold text-white drop-shadow-md hidden sm:inline">
              {activeScene.name}
            </span>
          </div>

          <span className="text-[11px] sm:text-xs text-white/80 hidden sm:inline">
            Tap room to view real photos
          </span>
        </div>

        {/* Space Switcher Controls: Smooth Horizontal Carousel on Mobile */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
          {HERO_SCENES.map((scene, idx) => (
            <button
              key={scene.id}
              onClick={() => handleSelectScene(idx)}
              className={`shrink-0 flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer backdrop-blur-md ${
                activeSceneIndex === idx
                  ? 'bg-white text-[#14241E] shadow-xl ring-2 ring-[#E2BC5A] scale-102'
                  : 'bg-black/50 text-white/85 hover:bg-black/75 hover:text-white border border-white/20'
              }`}
            >
              <img
                src={scene.imageUrl}
                alt={scene.shortName}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = scene.fallbackUrl;
                }}
                className="w-5 h-5 rounded-md object-cover shrink-0"
              />
              <span className="whitespace-nowrap">{scene.shortName}</span>
            </button>
          ))}
        </div>

      </div>

      {/* BOTTOM ZONE: Docked Floating Reservation Bar with Custom Luxury Dropdowns */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pb-4 sm:pb-6" ref={barRef}>
        
        {/* Custom Luxury Reservation Bar */}
        <div className="bg-[#0B1511]/92 backdrop-blur-2xl rounded-2xl p-3 sm:p-4 border border-[#D4AF37]/35 shadow-2xl">
          
          <div className="grid grid-cols-12 gap-2 sm:gap-3 items-center">
            
            {/* 1. CUSTOM LUXURY ROOM SELECTOR (No native browser blue/white dropdown) */}
            <div className="col-span-12 lg:col-span-4 relative">
              <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#E2BC5A] mb-1">
                Select Room Type
              </label>

              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'room' ? null : 'room')}
                className={`w-full flex items-center justify-between gap-2 px-3.5 py-2.5 sm:py-3 rounded-xl bg-white/10 hover:bg-white/15 border transition-all text-left cursor-pointer ${
                  openDropdown === 'room' 
                    ? 'border-[#E2BC5A] ring-2 ring-[#E2BC5A]/30 bg-white/15' 
                    : 'border-white/20'
                }`}
                aria-expanded={openDropdown === 'room'}
                aria-haspopup="listbox"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-7 h-7 rounded-lg bg-[#E2BC5A]/20 border border-[#E2BC5A]/40 flex items-center justify-center shrink-0 text-[#E2BC5A]">
                    <Bed className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm sm:text-base font-bold text-white truncate">
                        {currentSelection.label}
                      </span>
                      <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#96E6B3]/20 text-[#96E6B3] border border-[#96E6B3]/30 shrink-0">
                        {currentSelection.kitchenBadge}
                      </span>
                    </div>
                    <span className="text-[11px] text-white/70 block truncate">
                      {currentSelection.capacity} · ₹{currentSelection.rate}/nt
                    </span>
                  </div>
                </div>

                <ChevronDown className={`w-4 h-4 text-[#E2BC5A] shrink-0 transition-transform duration-200 ${openDropdown === 'room' ? 'rotate-180' : ''}`} />
              </button>

              {/* Custom Popover Dropdown Menu (Opens Upward to avoid clipping) */}
              {openDropdown === 'room' && (
                <div 
                  className="absolute bottom-full left-0 right-0 mb-2 z-50 rounded-2xl bg-[#121E19] border border-[#D4AF37]/50 shadow-2xl p-2 space-y-1.5 backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-2 duration-150 max-h-[70vh] sm:max-h-96 overflow-y-auto"
                  role="listbox"
                >
                  <div className="px-3 py-1.5 border-b border-white/10 flex items-center justify-between text-xs text-[#E2BC5A] font-bold uppercase tracking-wider">
                    <span>Available Room Options</span>
                    <span className="text-[10px] text-white/50 normal-case">Free Daily Breakfast</span>
                  </div>

                  {Object.values(ROOM_OPTIONS).map((room) => {
                    const isSelected = selectedUnitType === room.id;
                    return (
                      <button
                        key={room.id}
                        type="button"
                        onClick={() => {
                          setSelectedUnitType(room.id);
                          setOpenDropdown(null);
                        }}
                        className={`w-full flex items-center justify-between gap-3 p-3 rounded-xl transition-all text-left cursor-pointer ${
                          isSelected
                            ? 'bg-[#1C362D] border border-[#E2BC5A]/70 text-white shadow-md'
                            : 'hover:bg-white/10 text-white/90 border border-transparent'
                        }`}
                        role="option"
                        aria-selected={isSelected}
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm sm:text-base text-white">
                              {room.label}
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E2BC5A]/20 text-[#F3E5AB] border border-[#E2BC5A]/30">
                              {room.kitchenBadge}
                            </span>
                          </div>
                          <p className="text-xs text-white/70 mt-0.5 truncate">
                            {room.highlight} · {room.capacity}
                          </p>
                        </div>

                        <div className="text-right shrink-0">
                          <div className="font-serif font-bold text-base sm:text-lg text-[#F3E5AB]">
                            ₹{room.rate}
                            <span className="text-[10px] font-sans text-white/60 font-normal">/nt</span>
                          </div>
                          {isSelected && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#96E6B3]">
                              <Check className="w-3 h-3" /> Selected
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 2. CUSTOM LUXURY NIGHTS SELECTOR */}
            <div className="col-span-6 lg:col-span-2 relative">
              <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#E2BC5A] mb-1">
                Duration
              </label>

              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'nights' ? null : 'nights')}
                className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 sm:py-3 rounded-xl bg-white/10 hover:bg-white/15 border transition-all text-left cursor-pointer ${
                  openDropdown === 'nights' 
                    ? 'border-[#E2BC5A] ring-2 ring-[#E2BC5A]/30 bg-white/15' 
                    : 'border-white/20'
                }`}
                aria-expanded={openDropdown === 'nights'}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Moon className="w-4 h-4 text-[#E2BC5A] shrink-0" />
                  <div className="min-w-0">
                    <span className="text-xs sm:text-sm font-bold text-white block truncate">
                      {stayNights} {stayNights === 1 ? 'Night' : 'Nights'}
                    </span>
                  </div>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-[#E2BC5A] shrink-0 transition-transform duration-200 ${openDropdown === 'nights' ? 'rotate-180' : ''}`} />
              </button>

              {/* Nights Dropdown Popover */}
              {openDropdown === 'nights' && (
                <div className="absolute bottom-full left-0 right-0 sm:w-60 mb-2 z-50 rounded-2xl bg-[#121E19] border border-[#D4AF37]/50 shadow-2xl p-2 backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-2 duration-150 max-h-72 overflow-y-auto">
                  <div className="px-2.5 py-1.5 border-b border-white/10 text-[11px] text-[#E2BC5A] font-bold uppercase tracking-wider flex items-center justify-between">
                    <span>Stay Nights</span>
                    <span className="text-[10px] text-white/50">{stayNights} selected</span>
                  </div>

                  <div className="py-1 space-y-1">
                    {NIGHT_OPTIONS.map((opt) => {
                      const isSel = stayNights === opt.value;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => {
                            setStayNights(opt.value);
                            setOpenDropdown(null);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                            isSel
                              ? 'bg-[#1C362D] text-[#E2BC5A] border border-[#E2BC5A]/60'
                              : 'text-white/90 hover:bg-white/10'
                          }`}
                        >
                          <span>{opt.label}</span>
                          <span className="text-[10px] text-white/50">{opt.hint}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 3. CUSTOM LUXURY GUESTS SELECTOR */}
            <div className="col-span-6 lg:col-span-2 relative">
              <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#E2BC5A] mb-1">
                Guests
              </label>

              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'guests' ? null : 'guests')}
                className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 sm:py-3 rounded-xl bg-white/10 hover:bg-white/15 border transition-all text-left cursor-pointer ${
                  openDropdown === 'guests' 
                    ? 'border-[#E2BC5A] ring-2 ring-[#E2BC5A]/30 bg-white/15' 
                    : 'border-white/20'
                }`}
                aria-expanded={openDropdown === 'guests'}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Users className="w-4 h-4 text-[#E2BC5A] shrink-0" />
                  <div className="min-w-0">
                    <span className="text-xs sm:text-sm font-bold text-white block truncate">
                      {guestCount} {guestCount === 1 ? 'Guest' : 'Guests'}
                    </span>
                  </div>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-[#E2BC5A] shrink-0 transition-transform duration-200 ${openDropdown === 'guests' ? 'rotate-180' : ''}`} />
              </button>

              {/* Guests Dropdown Popover */}
              {openDropdown === 'guests' && (
                <div className="absolute bottom-full left-0 right-0 sm:w-60 mb-2 z-50 rounded-2xl bg-[#121E19] border border-[#D4AF37]/50 shadow-2xl p-2 backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-2 duration-150 max-h-72 overflow-y-auto">
                  <div className="px-2.5 py-1.5 border-b border-white/10 text-[11px] text-[#E2BC5A] font-bold uppercase tracking-wider flex items-center justify-between">
                    <span>Number of Guests</span>
                    <span className="text-[10px] text-white/50">{guestCount} selected</span>
                  </div>

                  <div className="py-1 space-y-1">
                    {GUEST_OPTIONS.map((opt) => {
                      const isSel = guestCount === opt.value;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => {
                            setGuestCount(opt.value);
                            setOpenDropdown(null);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                            isSel
                              ? 'bg-[#1C362D] text-[#E2BC5A] border border-[#E2BC5A]/60'
                              : 'text-white/90 hover:bg-white/10'
                          }`}
                        >
                          <span>{opt.label}</span>
                          <span className="text-[10px] text-white/50">{opt.hint}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 4. PRICE ESTIMATE & PRIMARY ACTION BUTTONS */}
            <div className="col-span-12 lg:col-span-4 flex items-center justify-between gap-3 pt-1 sm:pt-0 lg:pl-2">
              
              <div className="text-left shrink-0">
                <span className="text-[10px] uppercase font-bold tracking-wider text-white/70 block">
                  Est. Total (Free Breakfast)
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl sm:text-2xl font-serif font-bold text-[#F3E5AB]">
                    ₹{estimatedTotal.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] sm:text-xs text-white/80">
                    / {stayNights} {stayNights === 1 ? 'nt' : 'nts'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 grow sm:grow-0 justify-end">
                {/* Direct Call Button */}
                <a
                  href={`tel:+${HOMESTAY_INFO.phoneRaw}`}
                  className="p-2.5 sm:p-3 rounded-xl text-white bg-white/15 hover:bg-white/25 border border-white/20 transition-all shrink-0 active:scale-95"
                  aria-label="Call Host directly"
                  title="Call host directly: +91 70021 76711"
                >
                  <Phone className="w-4 h-4 text-[#E2BC5A]" />
                </a>

                {/* Primary WhatsApp Booking Action */}
                <button
                  onClick={handleWhatsAppBooking}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20BD5A] shadow-lg hover:shadow-green-500/20 transition-all cursor-pointer active:scale-95 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white fill-white shrink-0" />
                  <span>Book on WhatsApp</span>
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Downward Anchor & Direct Booking Guarantee */}
        <div className="flex items-center justify-between pt-2 text-[11px] sm:text-xs text-white/80 px-1">
          <div className="flex items-center gap-1.5 truncate">
            <Check className="w-3.5 h-3.5 text-[#96E6B3] shrink-0" />
            <span className="truncate">Direct Booking with Host · Zero Extra Fees · Free Homemade Breakfast</span>
          </div>

          <a 
            href="#suites" 
            className="hidden md:inline-flex items-center gap-1 text-white/85 hover:text-white transition-colors font-medium shrink-0 ml-3"
          >
            <span>See All 13 Rooms</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>

      </div>

    </section>
  );
};
