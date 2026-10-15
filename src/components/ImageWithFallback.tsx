import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackGradient?: string;
  overlayBadge?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackGradient = 'from-[#1A2621] via-[#141E1A] to-[#0D1412]',
  overlayBadge,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#141E1A] ${className}`}>
      {!hasError ? (
        <>
          {/* Subtle loading shimmer */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#141E1A] via-[#1D2B25] to-[#141E1A] animate-pulse" />
          )}
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            {...props}
          />
        </>
      ) : (
        /* Graceful fallback container */
        <div className={`w-full h-full flex flex-col justify-end p-4 bg-gradient-to-br ${fallbackGradient} relative`}>
          <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] opacity-10 [background-size:16px_16px]" />
          <div className="relative z-10">
            <span className="text-xs font-serif font-bold text-[#FAF6EF] block">{alt}</span>
            <span className="text-[11px] text-[#D4AF37]">Fairy Nest Homestay · Guwahati</span>
          </div>
        </div>
      )}

      {overlayBadge && (
        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-[#F0D78C] border border-white/10">
          {overlayBadge}
        </div>
      )}
    </div>
  );
};
