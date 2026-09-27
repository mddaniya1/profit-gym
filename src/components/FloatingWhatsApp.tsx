import React, { useState } from 'react';
import { motion } from 'motion/react';
import { getWhatsAppLink } from '../data/content';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    viewBox="0 0 32 32"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="waBubbleGrad" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#41E76D" />
        <stop offset="45%" stopColor="#25D366" />
        <stop offset="100%" stopColor="#1EBE5D" />
      </linearGradient>
    </defs>

    {/* Outer subtle white rim / halo exactly matching icone-removebg-preview.png */}
    <path
      d="M16 1.8C8.158 1.8 1.8 8.158 1.8 16c0 2.82.826 5.45 2.25 7.66L1.8 30.2l6.85-1.79A14.15 14.15 0 0016 30.2c7.842 0 14.2-6.358 14.2-14.2S23.842 1.8 16 1.8z"
      fill="#FFFFFF"
      fillOpacity="0.95"
    />

    {/* Vibrant WhatsApp Green Speech Bubble Body */}
    <path
      d="M16 3C8.82 3 3 8.82 3 16c0 2.58.74 4.98 2.03 7.02L3.2 28.8l6.02-1.57A12.94 12.94 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3z"
      fill="url(#waBubbleGrad)"
    />

    {/* Crisp White Telephone Handset in the center */}
    <path
      fill="#FFFFFF"
      d="M22.062 18.723c-.347-.174-2.05-1.012-2.368-1.127-.318-.116-.549-.174-.78.174-.231.348-.896 1.127-1.099 1.358-.202.231-.405.26-.752.087-.347-.174-1.464-.539-2.788-1.72-1.03-0.919-1.725-2.054-1.928-2.402-.202-.347-.022-.535.152-.708.156-.156.347-.405.52-.607.174-.202.231-.347.347-.579.116-.231.058-.434-.029-.607-.087-.174-.78-1.88-1.069-2.574-.282-.676-.569-.584-.78-.595l-.666-.012c-.231 0-.607.087-.925.434-.318.347-1.214 1.186-1.214 2.893 0 1.706 1.243 3.355 1.416 3.586.174.231 2.444 3.732 5.921 5.234.827.357 1.473.57 1.976.73.83.264 1.586.227 2.183.138.666-.099 2.05-.838 2.339-1.648.289-.81.289-1.504.202-1.648-.087-.145-.318-.231-.666-.405z"
    />
  </svg>
);

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultMessage =
    'Hi Pro Fit Gym! I would like to inquire about joining Pro Fit Gym North Nazimabad (timings, fee & packages).';

  return (
    <aside
      aria-label="Contact options"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Chat Pill Notification / Tooltip */}
      <a
        href={getWhatsAppLink(defaultMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp message: Pro Fit Gym Online"
        className={`hidden sm:flex items-center gap-2.5 bg-[#141414]/95 text-white border border-[#2A2A2A] hover:border-[#25D366]/50 py-2.5 px-4 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 transform ${
          isHovered
            ? 'opacity-100 translate-x-0 pointer-events-auto'
            : 'opacity-90 translate-x-1'
        }`}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" />
        </span>
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-white leading-none">
            Chat on WhatsApp
          </span>
          <span className="text-[9px] font-semibold text-[#25D366] uppercase tracking-wider mt-0.5 leading-none">
            Online · Instant Reply
          </span>
        </div>
      </a>

      {/* Real Floating WhatsApp Circular Launcher Button */}
      <motion.a
        href={getWhatsAppLink(defaultMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp chat with Pro Fit Gym"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="relative group block w-14 h-14 sm:w-16 sm:h-16 rounded-full transition-shadow duration-300 shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_45px_rgba(37,211,102,0.75)]"
      >
        {/* Glow halo */}
        <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/35 blur-lg group-hover:bg-[#25D366]/55 transition-all pointer-events-none" />

        {/* WhatsApp Icon */}
        <div className="relative w-full h-full flex items-center justify-center filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]">
          <WhatsAppIcon className="w-full h-full" />
        </div>

        {/* Notification Ping Badge */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#25D366] border-2 border-[#0D0D0D] items-center justify-center text-[8px] font-black text-black">
            1
          </span>
        </span>
      </motion.a>
    </aside>
  );
};
