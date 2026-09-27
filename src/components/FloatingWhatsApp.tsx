import React, { useState } from 'react';
import { getWhatsAppLink } from '../data/content';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="waRealGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4EED6B" />
        <stop offset="45%" stopColor="#25D366" />
        <stop offset="100%" stopColor="#1EBE5D" />
      </linearGradient>
    </defs>
    {/* Real WhatsApp Squircle Background */}
    <rect width="24" height="24" rx="5.5" fill="url(#waRealGradient)" />

    {/* White Speech Bubble Outline */}
    <path
      fill="#FFFFFF"
      d="M12.004 2C6.479 2 2 6.479 2 12.004c0 1.954.563 3.777 1.536 5.323L2 22l4.821-1.492c1.494.887 3.238 1.401 5.183 1.401 5.525 0 10.004-4.479 10.004-10.005C22.008 6.479 17.529 2 12.004 2zm0 18.067c-1.688 0-3.253-.492-4.577-1.339l-.328-.208-3.042.942.973-2.924-.225-.339A8.093 8.093 0 0 1 3.937 12c0-4.455 3.618-8.073 8.067-8.073 4.456 0 8.074 3.618 8.074 8.073 0 4.456-3.618 8.067-8.074 8.067z"
    />

    {/* White Telephone Handset Inside */}
    <path
      fill="#FFFFFF"
      d="M17.472 14.382c-.301-.15-1.767-.867-2.04-.966-.271-.101-.469-.15-.668.149-.197.299-.769.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.652-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
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

      {/* Real Floating WhatsApp Launcher Button */}
      <a
        href={getWhatsAppLink(defaultMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp chat with Pro Fit Gym"
        className="relative group block w-14 h-14 sm:w-16 sm:h-16 rounded-[20px] sm:rounded-[22px] transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.7)]"
      >
        {/* Glow halo */}
        <span className="absolute -inset-1 rounded-[22px] sm:rounded-[24px] bg-[#25D366]/30 blur-md group-hover:bg-[#25D366]/50 transition-all pointer-events-none" />

        {/* WhatsApp Icon */}
        <div className="relative w-full h-full overflow-hidden rounded-[20px] sm:rounded-[22px] ring-1 ring-white/20">
          <WhatsAppIcon className="w-full h-full filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]" />
        </div>

        {/* Notification Ping Badge */}
        <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#25D366] border-2 border-[#0D0D0D] items-center justify-center text-[8px] font-black text-black">
            1
          </span>
        </span>
      </a>
    </aside>
  );
};
