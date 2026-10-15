import React, { useState } from 'react';

export interface VisualProps {
  className?: string;
  variant?: 'hero' | '2bhk' | '1bhk' | 'penthouse' | 'single' | 'breakfast' | 'kitchen' | 'bathroom' | 'hills' | 'tea' | 'balcony' | 'entrance' | 'nook';
  src?: string;
  title?: string;
  badge?: string;
  alt?: string;
  aspectRatio?: string;
}

export const VARIANT_MAP: Record<string, string> = {
  hero: '/images/hero_homestay.jpg',
  '2bhk': '/images/twobhk_living.jpg',
  '1bhk': '/images/onebhk_couple.jpg',
  penthouse: '/images/penthouse_studio.jpg',
  single: '/images/single_room.jpg',
  kitchen: '/images/kitchenette.jpg',
  bathroom: '/images/bathroom_luxury.jpg',
  breakfast: '/images/breakfast_spread.jpg',
  tea: '/images/assam_tea.jpg',
  hills: '/images/sarania_hills.jpg',
  balcony: '/images/balcony_view.jpg',
  entrance: '/images/boutique_entrance.jpg',
  nook: '/images/cozy_reading_nook.jpg',
};

export const HomestayVisualScene: React.FC<VisualProps> = ({
  className = 'w-full h-full',
  variant = 'hero',
  src,
  title,
  badge,
  alt
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const initialSrc = src || VARIANT_MAP[variant] || '/images/hero_homestay.jpg';
  const displaySrc = hasError ? '/images/hero_homestay.jpg' : initialSrc;
  const imageAlt = alt || title || badge || 'Fairy Nest Homestay Guwahati';

  return (
    <div className={`relative overflow-hidden group select-none bg-[#EAE4D9] ${className}`}>
      {/* Loading shimmer placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#EDE6D8] via-[#FAF8F5] to-[#EDE6D8] animate-pulse" />
      )}

      {/* Realistic High-Resolution Architectural Photograph */}
      <img
        src={displaySrc}
        alt={imageAlt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Subtle editorial warm gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />

      {/* Top Badge */}
      {badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/65 backdrop-blur-md text-xs sm:text-sm font-semibold text-[#F7E7CE] border border-white/15 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2BC5A]" />
            {badge}
          </span>
        </div>
      )}

      {/* Bottom Title Bar */}
      {title && (
        <div className="absolute bottom-3 left-3 right-3 z-10 pointer-events-none">
          <p className="text-sm sm:text-base font-serif font-bold text-white drop-shadow-md line-clamp-1">
            {title}
          </p>
        </div>
      )}
    </div>
  );
};
