import React from 'react';

interface IslamicBackgroundPatternProps {
  className?: string;
  opacity?: number;
}

export const IslamicBackgroundPattern: React.FC<IslamicBackgroundPatternProps> = ({
  className = '',
  opacity = 0.14
}) => {
  return (
    <div 
      aria-hidden="true" 
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden select-none ${className}`}
      style={{ opacity }}
    >
      {/* Ambient Lighting Gradients (Mimics illuminated Islamic dome ambient light) */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#C9A227]/25 via-[#0B5D3C]/15 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-t from-[#0B5D3C]/30 via-[#C9A227]/15 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-gradient-to-l from-[#128C7E]/20 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 -left-40 w-[600px] h-[600px] bg-gradient-to-r from-[#C9A227]/20 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* Main Intricate Geometric Girih & Medallion SVG */}
      <svg 
        className="w-full h-full text-[#0B5D3C] dark:text-[#E5C76B]" 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        height="100%"
      >
        <defs>
          {/* Intricate 16-Pointed Girih Zellige Tessellation Pattern (Inspired by Persian Tile Domes) */}
          <pattern 
            id="girih-tile-master" 
            x="0" 
            y="0" 
            width="220" 
            height="220" 
            patternUnits="userSpaceOnUse"
          >
            <g fill="none" stroke="currentColor">
              {/* Outer Bounding Diamond Frame */}
              <polygon points="110,0 220,110 110,220 0,110" strokeWidth="0.7" strokeDasharray="4 2" opacity="0.6" />
              <rect x="0" y="0" width="220" height="220" strokeWidth="0.4" opacity="0.3" />

              {/* Central 16-pointed Girih Star Complex */}
              <g transform="translate(110, 110)">
                {/* 16-point Star Facet Lines */}
                {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5].map((deg, i) => (
                  <g key={i} transform={`rotate(${deg})`}>
                    <line x1="-90" y1="0" x2="90" y2="0" strokeWidth="0.6" opacity="0.7" />
                    <line x1="0" y1="-90" x2="0" y2="90" strokeWidth="0.6" opacity="0.7" />
                    {/* Interlocking Diamond Facets */}
                    <polygon points="0,-50 16,-22 0,0 -16,-22" stroke="#C9A227" strokeWidth="0.9" fill="none" opacity="0.85" />
                    <polygon points="0,50 16,22 0,0 -16,22" stroke="#C9A227" strokeWidth="0.9" fill="none" opacity="0.85" />
                  </g>
                ))}

                {/* Concentric Islamic Geometry Rings */}
                <circle cx="0" cy="0" r="18" stroke="#C9A227" strokeWidth="1.2" />
                <circle cx="0" cy="0" r="36" stroke="currentColor" strokeWidth="0.8" />
                <circle cx="0" cy="0" r="56" stroke="#C9A227" strokeWidth="0.8" strokeDasharray="5 2" />
                <circle cx="0" cy="0" r="78" stroke="currentColor" strokeWidth="0.9" />

                {/* Inner 8-pointed Rub el Hizb Star Core */}
                <polygon points="0,-28 19,-19 28,0 19,19 0,28 -19,19 -28,0 -19,-19" fill="none" stroke="#C9A227" strokeWidth="1" />
                <polygon points="0,-28 28,0 0,28 -28,0" fill="none" stroke="currentColor" strokeWidth="0.8" />
              </g>

              {/* Corner 16-Pointed Star Interlocks at (0,0), (220,0), (0,220), (220,220) */}
              {[
                [0, 0],
                [220, 0],
                [0, 220],
                [220, 220]
              ].map(([cx, cy], idx) => (
                <g key={idx} transform={`translate(${cx}, ${cy})`}>
                  <circle cx="0" cy="0" r="30" stroke="#C9A227" strokeWidth="0.9" />
                  <circle cx="0" cy="0" r="52" stroke="currentColor" strokeWidth="0.6" />
                  {[0, 45].map((deg) => (
                    <rect key={deg} x="-25" y="-25" width="50" height="50" transform={`rotate(${deg})`} stroke="currentColor" strokeWidth="0.7" fill="none" />
                  ))}
                </g>
              ))}

              {/* Intersecting Arch Flourishes */}
              <path d="M 0,110 Q 55,55 110,0 Q 165,55 220,110 Q 165,165 110,220 Q 55,165 0,110 Z" stroke="#C9A227" strokeWidth="0.6" fill="none" opacity="0.5" />
            </g>
          </pattern>

          {/* Reusable Persian Shamseh Rosette Medallion Symbol (Inspired by Persian Art & Calligraphy Medallions) */}
          <g id="shamseh-medallion">
            <g className="animate-[spin_300s_linear_infinite] origin-center">
              {/* Outer Scalloped Floral Petal Border (24 Petals) */}
              <circle cx="0" cy="0" r="210" fill="none" stroke="#C9A227" strokeWidth="1.5" opacity="0.7" />
              <circle cx="0" cy="0" r="198" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />

              {/* 24 Scalloped Outer Petals */}
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i * 360) / 24;
                return (
                  <g key={i} transform={`rotate(${angle})`}>
                    <path d="M 0,-198 C 14,-190 20,-175 0,-162 C -20,-175 -14,-190 0,-198 Z" fill="none" stroke="#C9A227" strokeWidth="1" />
                    <circle cx="0" cy="-184" r="3.5" fill="#C9A227" opacity="0.8" />
                  </g>
                );
              })}

              {/* Middle Arabesque Filigree Ring */}
              <circle cx="0" cy="0" r="152" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="0" cy="0" r="136" fill="none" stroke="#C9A227" strokeWidth="1" strokeDasharray="6 3" />

              {/* 12 Arabesque Loops */}
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 360) / 12;
                return (
                  <g key={i} transform={`rotate(${angle})`}>
                    <path d="M 0,-152 Q 28,-120 0,-92 Q -28,-120 0,-152 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
                    <path d="M 0,-136 Q 16,-115 0,-92" fill="none" stroke="#C9A227" strokeWidth="0.8" />
                  </g>
                );
              })}

              {/* Inner 16-Star Core */}
              <circle cx="0" cy="0" r="82" fill="none" stroke="#C9A227" strokeWidth="1.5" />
              {[0, 22.5, 45, 67.5].map((deg) => (
                <rect key={deg} x="-50" y="-50" width="100" height="100" transform={`rotate(${deg})`} fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.85" />
              ))}

              {/* Center Medallion Star */}
              <circle cx="0" cy="0" r="34" fill="none" stroke="#C9A227" strokeWidth="1.8" />
              <circle cx="0" cy="0" r="14" fill="none" stroke="currentColor" strokeWidth="1" />
            </g>
          </g>
        </defs>

        {/* Layer 1: Background Repeating Girih Pattern Grid */}
        <rect width="100%" height="100%" fill="url(#girih-tile-master)" />

        {/* Layer 2: Decorative Large Corner & Center Floating Shamseh Medallions */}
        {/* Top-Right Corner Large Medallion */}
        <g transform="translate(1100, 120) scale(1.3)">
          <use href="#shamseh-medallion" opacity="0.45" />
        </g>

        {/* Top-Left Corner Medallion */}
        <g transform="translate(100, 180) scale(1.1)">
          <use href="#shamseh-medallion" opacity="0.35" />
        </g>

        {/* Bottom-Left Large Medallion */}
        <g transform="translate(150, 950) scale(1.5)">
          <use href="#shamseh-medallion" opacity="0.4" />
        </g>

        {/* Bottom-Right Medallion */}
        <g transform="translate(1150, 920) scale(1.2)">
          <use href="#shamseh-medallion" opacity="0.38" />
        </g>

        {/* Center Floating Watermark Medallion */}
        <g transform="translate(600, 550) scale(2.0)">
          <use href="#shamseh-medallion" opacity="0.18" />
        </g>
      </svg>
    </div>
  );
};
