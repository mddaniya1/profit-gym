import React from 'react';

interface ProFitIconProps {
  className?: string;
  size?: number | string;
  strokeColor?: string;
}

export const ProFitIcon: React.FC<ProFitIconProps> = ({
  className = 'w-9 h-9 sm:w-10 sm:h-10',
  strokeColor = '#C6FF00',
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Dynamic glow effect filter */}
      <defs>
        <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#C6FF00" floodOpacity="0.45" />
        </filter>
      </defs>

      <g
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#neon-glow)"
      >
        {/* Head, Hair & Profile */}
        <path d="M 39 24 Q 42 22 45 23 Q 48 24 50 28 Q 51 32 49 35 L 45 37" />
        <path d="M 37 25 Q 36 28 38 31 Q 39 33 38 35 Q 39 37 42 38" />
        {/* Spiky hair tufts */}
        <path d="M 36 26 L 39 23 L 42 25 L 45 22 L 48 24" />

        {/* Left Arm & Flexed Bicep (Viewer's Left) */}
        {/* Outer shoulder to forearm & fist */}
        <path d="M 36 39 Q 30 38 27 34 Q 25 31 27 28 Q 29 27 33 29 Q 34 32 32 35" />
        {/* Inner bicep & armpit to torso */}
        <path d="M 32 35 Q 35 38 36 44" />
        {/* Fist detail */}
        <path d="M 28 29 Q 30 31 32 30" />

        {/* Right Arm Peak Flex & Bicep (Viewer's Right) */}
        {/* Trapezius into shoulder and arched upper bicep */}
        <path d="M 49 32 Q 54 31 59 34 Q 66 31 73 24 Q 77 21 75 18 Q 72 17 67 19 L 60 22 Q 56 22 55 24 Q 57 26 61 25" />
        {/* Peak bicep curve & inner forearm connection */}
        <path d="M 64 23 Q 66 27 63 32 Q 59 36 53 38" />
        {/* Forearm & Outer tricep/lat silhouette */}
        <path d="M 75 20 Q 77 26 73 34 Q 69 41 62 46 Q 59 51 55 57" />

        {/* Chest & Pecks Contour */}
        <path d="M 43 38 Q 44 43 40 47" />
        <path d="M 45 37 Q 48 39 52 38" />

        {/* The Signature Lightning Bolt slicing across torso */}
        <path
          d="M 52 38 L 47 48 L 53 48 L 40 67 L 46 54 L 40 54 L 45 42"
          fill={strokeColor}
          fillOpacity="0.25"
          stroke={strokeColor}
          strokeWidth="2"
        />

        {/* Torso & Abdominal / Rib lines */}
        <path d="M 37 49 Q 38 56 39 63 Q 41 68 47 70 Q 52 69 54 62" />
        <path d="M 39 53 Q 41 57 40 61" />
        <path d="M 53 52 Q 52 56 53 60" />
      </g>
    </svg>
  );
};
