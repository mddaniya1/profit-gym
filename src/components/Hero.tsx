import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ASSETS } from '../data/content';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative px-4 sm:px-6 lg:px-8 pt-2 pb-12 sm:pb-20">
      <div className="max-w-7xl mx-auto relative rounded-3xl sm:rounded-[36px] overflow-hidden border border-[#2A2A2A] shadow-2xl bg-[#111111]">
        {/* Full-bleed background image with subtle ambient pulse */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
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
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.25, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-8 right-8 hidden lg:flex flex-col items-end pointer-events-none select-none z-10"
        >
          <span className="font-display text-5xl font-black tracking-widest text-stroke-white uppercase">
            POWER
          </span>
          <span className="font-display text-5xl font-black tracking-widest text-stroke-white uppercase -mt-3">
            ELEGANCE
          </span>
          <span className="font-display text-5xl font-black tracking-widest text-[#C6FF00] -mt-3">
            PRESTIGE
          </span>
        </motion.div>

        {/* Inner Content Grid */}
        <div className="relative z-10 px-6 sm:px-12 lg:px-16 pt-10 sm:pt-16 pb-16 sm:pb-24 flex flex-col justify-between min-h-[580px] sm:min-h-[680px] lg:min-h-[740px]">
          {/* Top Left Quote / Ethos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md sm:max-w-lg mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-3 bg-[#C6FF00]/10 border border-[#C6FF00]/25 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#C6FF00] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#C6FF00]">
                GYM · NORTH NAZIMABAD, KARACHI
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed font-normal">
              One extraordinary roof for every fitness aspiration. From heavy plate-loaded iron to dynamic group Zumba, Aerobics, and studio cycling — open 7:00 AM to 2:00 AM daily.
            </p>
          </motion.div>

          {/* Bottom Hero Anchor: Big Display Headline & CTA Cluster */}
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[98px] font-black uppercase tracking-tight text-white leading-[0.92] mb-6 sm:mb-8"
            >
              REDEFINING FITNESS <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E8FF80] to-[#C6FF00]">
                WITH ELEGANCE, POWER & PRESTIGE
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-[#B0B0B0] max-w-xl font-normal leading-relaxed mb-8 sm:mb-10"
            >
              North Nazimabad's premier fitness club. Featuring imported biomechanical machinery, certified personal trainers, vibrant group studios, and personalized nutrition consulting.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-wrap items-center gap-4 sm:gap-5"
            >
              <motion.button
                onClick={onOpenBooking}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-[#C6FF00] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase px-7 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-[#b5ea00] hover:shadow-[0_0_30px_rgba(198,255,0,0.55)] transition-all cursor-pointer"
              >
                <span>BOOK A FREE TRIAL</span>
                <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-[#C6FF00]">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </motion.button>

              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.04, borderColor: 'rgba(255, 255, 255, 0.7)' }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 border border-white/25 bg-black/40 hover:bg-black/70 backdrop-blur-sm text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all"
              >
                <span>VIEW PRICING</span>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Bottom subtle neon accent highlight bar */}
        <motion.div
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C6FF00]/60 to-transparent"
        />
      </div>
    </section>
  );
};
