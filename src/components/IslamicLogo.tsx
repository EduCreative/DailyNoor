import React from 'react';

interface IslamicLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number;
  className?: string;
  variant?: 'shield' | 'circle' | 'minimal' | 'gold-badge';
  animateGlow?: boolean;
}

export const IslamicLogo: React.FC<IslamicLogoProps> = ({
  size = 'md',
  className = '',
  variant = 'circle',
  animateGlow = false
}) => {
  // Resolve dimension in pixels
  const getDimension = (): number => {
    if (typeof size === 'number') return size;
    switch (size) {
      case 'xs': return 24;
      case 'sm': return 32;
      case 'md': return 40;
      case 'lg': return 56;
      case 'xl': return 72;
      case '2xl': return 96;
      default: return 40;
    }
  };

  const dim = getDimension();
  const rxValue = variant === 'circle' ? 256 : variant === 'shield' ? 112 : 64;

  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`}
      style={{ width: dim, height: dim }}
    >
      <svg 
        viewBox="0 0 512 512" 
        width="100%" 
        height="100%" 
        className="w-full h-full drop-shadow-xs"
      >
        <defs>
          {/* Emerald Royal Gradient */}
          <radialGradient id={`logo-emerald-${dim}`} cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="#0E6B46" />
            <stop offset="60%" stopColor="#084D31" />
            <stop offset="100%" stopColor="#042618" />
          </radialGradient>

          {/* Metallic Gold Foil Gradient */}
          <linearGradient id={`logo-gold-${dim}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDF3CD" />
            <stop offset="25%" stopColor="#E5C76B" />
            <stop offset="50%" stopColor="#C9A227" />
            <stop offset="75%" stopColor="#E5C76B" />
            <stop offset="100%" stopColor="#997A15" />
          </linearGradient>

          <linearGradient id={`logo-gold-linear-${dim}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF0BE" />
            <stop offset="50%" stopColor="#E5C76B" />
            <stop offset="100%" stopColor="#B88E1B" />
          </linearGradient>

          {/* Noor Celestial Glow */}
          <radialGradient id={`logo-noor-${dim}`} cx="50%" cy="48%" r="48%">
            <stop offset="0%" stopColor="#E5C76B" stopOpacity="0.45" />
            <stop offset="40%" stopColor="#C9A227" stopOpacity="0.2" />
            <stop offset="80%" stopColor="#0B5D3C" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#0B5D3C" stopOpacity="0" />
          </radialGradient>

          <radialGradient id={`logo-star-glow-${dim}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#FDF3CD" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Base Background Container */}
        {variant !== 'minimal' && (
          <rect 
            width="512" 
            height="512" 
            rx={rxValue} 
            fill={`url(#logo-emerald-${dim})`} 
          />
        )}
        
        {/* Outer Filigree Border */}
        {variant !== 'minimal' && (
          <>
            <rect 
              x="22" 
              y="22" 
              width="468" 
              height="468" 
              rx={variant === 'circle' ? 234 : 92} 
              fill="none" 
              stroke={`url(#logo-gold-${dim})`} 
              strokeWidth="3" 
              strokeOpacity="0.6" 
            />
            <rect 
              x="32" 
              y="32" 
              width="448" 
              height="448" 
              rx={variant === 'circle' ? 224 : 82} 
              fill="none" 
              stroke={`url(#logo-gold-${dim})`} 
              strokeWidth="1.2" 
              strokeOpacity="0.4" 
              strokeDasharray="8 6" 
            />
          </>
        )}

        {/* Noor Glow Backdrop */}
        <circle cx="256" cy="245" r="190" fill={`url(#logo-noor-${dim})`} />

        {/* 1. Islamic Geometric Rosette (Girih 16-fold & 8-fold Mandala) */}
        <g transform="translate(256, 245)" opacity="0.32" stroke={`url(#logo-gold-${dim})`} strokeWidth="1.4" fill="none">
          <circle r="180" />
          <circle r="148" strokeDasharray="4 4" />
          <circle r="110" />
          <circle r="75" />

          {/* 8-pointed Rub el Hizb Geometry */}
          <rect x="-105" y="-105" width="210" height="210" rx="4" />
          <rect x="-105" y="-105" width="210" height="210" rx="4" transform="rotate(45)" />
          <rect x="-105" y="-105" width="210" height="210" rx="4" transform="rotate(22.5)" strokeOpacity="0.5" />
          <rect x="-105" y="-105" width="210" height="210" rx="4" transform="rotate(67.5)" strokeOpacity="0.5" />

          {/* Radiating Ray Lines */}
          <g strokeWidth="1" strokeOpacity="0.6">
            <line x1="0" y1="-180" x2="0" y2="-120" />
            <line x1="0" y1="180" x2="0" y2="120" />
            <line x1="-180" y1="0" x2="-120" y2="0" />
            <line x1="180" y1="0" x2="120" y2="0" />
            <line x1="-127" y1="-127" x2="-85" y2="-85" />
            <line x1="127" y1="127" x2="85" y2="85" />
            <line x1="-127" y1="127" x2="-85" y2="85" />
            <line x1="127" y1="-127" x2="85" y2="-85" />
          </g>

          {/* Arabesque Trefoils */}
          <path d="M0 -75 Q25 -110 0 -145 Q-25 -110 0 -75" fill={`url(#logo-gold-${dim})`} fillOpacity="0.18" />
          <path d="M0 75 Q25 110 0 145 Q-25 110 0 75" fill={`url(#logo-gold-${dim})`} fillOpacity="0.18" />
          <path d="M-75 0 Q-110 25 -145 0 Q-110 -25 -75 0" fill={`url(#logo-gold-${dim})`} fillOpacity="0.18" />
          <path d="M75 0 Q110 25 145 0 Q110 -25 75 0" fill={`url(#logo-gold-${dim})`} fillOpacity="0.18" />
        </g>

        {/* 2. Arabesque Ornate Crescent Moon (Hilal) */}
        <g>
          <path 
            d="M285 110 C185 110 110 185 110 275 C110 365 185 430 275 430 C322 430 362 414 394 384 C285 390 198 310 198 215 C198 160 230 125 285 110 Z" 
            fill={`url(#logo-gold-${dim})`} 
          />
          <path 
            d="M272 125 C195 135 132 195 132 272 C132 345 190 405 268 412 C210 395 165 340 165 272 C165 205 208 150 272 125 Z" 
            fill="#FFF4D0" 
            opacity="0.6" 
          />
        </g>

        {/* 3. Sacred 8-Point Star with Noor Core */}
        <g transform="translate(340, 215)">
          <circle cx="0" cy="0" r="60" fill={`url(#logo-star-glow-${dim})`} />

          {/* Octagram Star */}
          <rect x="-38" y="-38" width="76" height="76" rx="4" fill={`url(#logo-gold-${dim})`} />
          <rect x="-38" y="-38" width="76" height="76" rx="4" fill={`url(#logo-gold-${dim})`} transform="rotate(45)" />

          {/* Emerald Center */}
          <rect x="-28" y="-28" width="56" height="56" rx="2" fill="#0B5D3C" />
          <rect x="-28" y="-28" width="56" height="56" rx="2" fill="#0B5D3C" transform="rotate(45)" />

          {/* Golden Center Core */}
          <circle cx="0" cy="0" r="16" fill={`url(#logo-gold-linear-${dim})`} />
          <circle cx="0" cy="0" r="7" fill="#FFFFFF" />
        </g>

        {/* 4. Secondary Twinkling Noor Star */}
        <g transform="translate(395, 305) scale(0.65)">
          <circle cx="0" cy="0" r="28" fill={`url(#logo-star-glow-${dim})`} />
          <path d="M0 -30 L7 -8 L30 0 L7 8 L0 30 L-7 8 L-30 0 L-7 -8 Z" fill={`url(#logo-gold-${dim})`} />
          <path d="M-21 -21 L0 -7 L21 -21 L7 0 L21 21 L0 7 L-21 21 L-7 0 Z" fill="#FFF0BE" opacity="0.8" />
          <circle cx="0" cy="0" r="4" fill="#0B5D3C" />
        </g>

        {/* 5. Open Holy Quran / Rehal Stand Silhouette */}
        <g transform="translate(256, 395)">
          {/* Wooden crossed stand */}
          <path d="M-45 35 L0 8 L45 35 L35 40 L0 16 L-35 40 Z" fill={`url(#logo-gold-${dim})`} opacity="0.85" />
          
          {/* Left Page */}
          <path d="M0 6 C-18 -2 -42 0 -62 14 C-65 16 -63 26 -58 24 C-40 12 -18 10 0 16 Z" fill="#FDF8EE" />
          <path d="M-2 8 C-18 2 -38 4 -56 16" stroke={`url(#logo-gold-${dim})`} strokeWidth="1.4" fill="none" opacity="0.8" />
          <path d="M-10 13 C-22 9 -36 11 -50 20" stroke="#0B5D3C" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />

          {/* Right Page */}
          <path d="M0 6 C18 -2 42 0 62 14 C65 16 63 26 58 24 C40 12 18 10 0 16 Z" fill="#FDF8EE" />
          <path d="M2 8 C18 2 38 4 56 16" stroke={`url(#logo-gold-${dim})`} strokeWidth="1.4" fill="none" opacity="0.8" />
          <path d="M10 13 C22 9 36 11 50 20" stroke="#0B5D3C" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />

          {/* Center Ribbon Bookmark */}
          <path d="M0 6 L0 26" stroke={`url(#logo-gold-${dim})`} strokeWidth="2.8" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};
