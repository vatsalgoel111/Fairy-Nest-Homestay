import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const FairyNestLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const dimensionMap = {
    sm: { icon: 34, title: 'text-base', sub: 'text-[9px]' },
    md: { icon: 44, title: 'text-lg', sub: 'text-[10px]' },
    lg: { icon: 64, title: 'text-2xl', sub: 'text-xs' },
    xl: { icon: 110, title: 'text-3xl', sub: 'text-sm' },
  };

  const { icon, title, sub } = dimensionMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Handcrafted Vector Icon mirroring the Fairy Nest logo: Nest wreath + Home + Bird */}
      <div 
        className="relative shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-[#1b342e] via-[#12231e] to-[#0c1815] border border-[#d4af37]/40 shadow-inner p-1"
        style={{ width: icon, height: icon }}
      >
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Organic Leaf Branches / Nest Twigs */}
          <path 
            d="M50 8C73.196 8 92 26.804 92 50C92 73.196 73.196 92 50 92C26.804 92 8 73.196 8 50C8 26.804 26.804 8 50 8Z" 
            stroke="url(#goldGradient)" 
            strokeWidth="3.5" 
            strokeDasharray="4 2 8 3"
            strokeLinecap="round"
          />
          {/* Layered woven nest lines */}
          <circle cx="50" cy="50" r="36" stroke="#c5a059" strokeWidth="2" strokeOpacity="0.8" strokeDasharray="6 3" />
          <circle cx="50" cy="50" r="32" stroke="#e5c57a" strokeWidth="1.5" strokeOpacity="0.7" />
          
          {/* Leaves sprouting on branch */}
          <path d="M78 28C84 25 87 18 87 18C87 18 80 19 75 24C73 26 76 30 78 28Z" fill="url(#goldGradient)" />
          <path d="M85 40C90 39 94 33 94 33C94 33 88 33 83 36C81 37 83 41 85 40Z" fill="url(#goldGradient)" />
          <path d="M22 30C16 28 13 22 13 22C13 22 20 22 24 26C26 28 24 32 22 30Z" fill="url(#goldGradient)" />
          <path d="M15 45C10 43 7 38 7 38C7 38 13 38 17 42C19 44 17 47 15 45Z" fill="url(#goldGradient)" />
          <path d="M50 92C54 96 61 97 61 97C61 97 58 92 54 89C51 87 48 90 50 92Z" fill="url(#goldGradient)" />

          {/* Cottage silhouette inside nest */}
          {/* Chimney */}
          <rect x="58" y="32" width="6" height="12" fill="#f4efe6" rx="1" />
          {/* Roof */}
          <polygon points="50,28 32,44 68,44" fill="#f4efe6" />
          {/* Main House Body */}
          <rect x="36" y="44" width="28" height="25" fill="#f4efe6" rx="1.5" />
          {/* Arched Window */}
          <path d="M47 38H53V43H47V38Z" fill="#1d362f" />
          <path d="M47 38C47 35.8 48.3 34 50 34C51.7 34 53 35.8 53 38H47Z" fill="#1d362f" />
          {/* Door */}
          <path d="M47 55H53V69H47V55Z" fill="#1d362f" rx="1" />

          {/* Sweet Little Bird on Nest base */}
          <path 
            d="M62 64C65 60 70 61 70 61C70 61 68 64 66 65C64 66 61 67 59 66C59 66 59 63 62 64Z" 
            fill="#d4af37" 
          />
          <circle cx="67" cy="62" r="1.5" fill="#12231e" />

          {/* Nest bottom twigs */}
          <path d="M28 69C36 76 64 76 72 69" stroke="#d4af37" strokeWidth="4" strokeLinecap="round" />
          <path d="M32 72C42 78 58 78 68 72" stroke="#c5a059" strokeWidth="2.5" strokeLinecap="round" />

          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5e6b3" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#aa8222" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-serif tracking-wide bg-gradient-to-r from-[#faeec8] via-[#e5c57a] to-[#d4af37] bg-clip-text text-transparent font-bold ${title}`}>
            Fairy Nest
          </span>
          <span className={`tracking-[0.25em] uppercase text-[#9fb3ab] font-medium mt-1 ${sub}`}>
            Homestay · Guwahati
          </span>
        </div>
      )}
    </div>
  );
};
