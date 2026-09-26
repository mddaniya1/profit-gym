import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/content';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative px-4 sm:px-6 lg:px-8 pt-2 pb-12 sm:pb-20">
      <div className="max-w-7xl mx-auto relative rounded-3xl sm:rounded-[36px] overflow-hidden border border-[#2A2A2A] shadow-2xl bg-[#111111]">
        {/* Full-bleed background image with film grain and dark scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.hero}
            alt="Pro Fit Gym interior in North Nazimabad Karachi"
            className="w-full h-full object-cover object-center opacity-55 sm:opacity-65 filter brightness-90 contrast-110"
            referrerPolicy="no-referrer"
          />
          {/* Measured gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/65 to-black/75" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0D0D0D]/40 to-[#0D0D0D]/80" />
        </div>

        {/* Ambient Top Right Branding Watermark */}
        <div className="absolute top-8 right-8 hidden lg:flex flex-col items-end pointer-events-none opacity-25 select-none z-10">
          <span className="font-display text-5xl font-black tracking-widest text-stroke-white uppercase">
            POWER
          </span>
          <span className="font-display text-5xl font-black tracking-widest text-stroke-white uppercase -mt-3">
            ELEGANCE
          </span>
          <span className="font-display text-5xl font-black tracking-widest text-[#D4AF37] -mt-3">
            PRESTIGE
          </span>
        </div>

        {/* Inner Content Grid */}
        <div className="relative z-10 px-6 sm:px-12 lg:px-16 pt-10 sm:pt-16 pb-16 sm:pb-24 flex flex-col justify-between min-h-[580px] sm:min-h-[680px] lg:min-h-[740px]">
          {/* Top Left Quote / Ethos */}
          <div className="max-w-md sm:max-w-lg mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
                GYM · NORTH NAZIMABAD, KARACHI
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed font-normal">
              One extraordinary roof for every fitness aspiration. From heavy plate-loaded iron to dynamic group Zumba, Aerobics, and studio cycling — open 7:00 AM to 2:00 AM daily.
            </p>
          </div>

          {/* Bottom Hero Anchor: Big Display Headline & CTA Cluster */}
          <div className="max-w-4xl">
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[98px] font-black uppercase tracking-tight text-white leading-[0.92] mb-6 sm:mb-8">
              REDEFINING FITNESS <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5E6B3] to-[#D4AF37]">
                WITH ELEGANCE, POWER & PRESTIGE
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#B0B0B0] max-w-xl font-normal leading-relaxed mb-8 sm:mb-10">
              North Nazimabad's premier fitness club. Featuring imported biomechanical machinery, certified personal trainers, vibrant group studios, and personalized nutrition consulting.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-3 bg-[#D4AF37] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase px-7 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-[#c59e2b] hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] transition-all transform active:scale-95 group cursor-pointer"
              >
                <span>BOOK A FREE TRIAL</span>
                <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-[#D4AF37] group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>

              <a
                href="#pricing"
                className="inline-flex items-center gap-2 border border-white/25 hover:border-white/70 bg-black/40 hover:bg-black/70 backdrop-blur-sm text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all"
              >
                <span>VIEW PRICING</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom subtle gold accent highlight bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
      </div>
    </section>
  );
};
