import React from 'react';
import { ArrowRight, Quote, ShieldCheck, Award, Sparkles, MessageCircle } from 'lucide-react';
import { ASSETS, FOUNDER_DATA, getWhatsAppLink } from '../data/content';

interface FounderProps {
  onOpenBooking: () => void;
}

export const Founder: React.FC<FounderProps> = ({ onOpenBooking }) => {
  return (
    <section id="trainers" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#C6FF00] inline-block mb-3">
            FOUNDER & MASTER TRAINER
          </span>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight leading-[0.95] max-w-3xl">
            MEET ZULQARNAIN
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0A0] font-semibold mt-2">
            {FOUNDER_DATA.title}
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Portrait Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden bg-[#161616] border border-[#2B2B2B] shadow-2xl group">
              {/* Photo with aspect ratio */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900">
                <img
                  src={ASSETS.zulqarnain}
                  alt="Zulqarnain - Master Trainer & Founder of Pro.Fit"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                  referrerPolicy="no-referrer"
                />
                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-5 left-5 bg-black/85 backdrop-blur-md border border-[#C6FF00]/40 px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C6FF00] animate-pulse" />
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C6FF00]">
                    PRO.FIT FOUNDER
                  </span>
                </div>

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-display text-3xl sm:text-4xl text-white font-black uppercase tracking-tight leading-none mb-1">
                    {FOUNDER_DATA.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C6FF00] font-bold uppercase tracking-wider">
                    {FOUNDER_DATA.title}
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Karachi, Pakistan · Available for 1-on-1 & Global Remote
                  </p>
                </div>
              </div>

              {/* Bottom stats row inside card */}
              <div className="grid grid-cols-3 divide-x divide-[#262626] bg-[#141414] border-t border-[#262626] py-3 text-center">
                <div>
                  <div className="font-display text-xl sm:text-2xl font-black text-white">8+</div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">Years</div>
                </div>
                <div>
                  <div className="font-display text-xl sm:text-2xl font-black text-[#C6FF00]">350+</div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">Athletes</div>
                </div>
                <div>
                  <div className="font-display text-xl sm:text-2xl font-black text-white">100%</div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">Dedication</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Vision & Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            {/* Vision Eyebrow Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C1C1C] border border-[#2B2B2B] text-xs font-extrabold uppercase tracking-widest text-[#C6FF00] mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{FOUNDER_DATA.visionHeading}</span>
              </div>

              {/* Core Quote Box */}
              <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#181818] to-[#121212] border-l-4 border-l-[#C6FF00] border-y border-r border-[#262626] shadow-xl">
                <Quote className="w-8 h-8 text-[#C6FF00]/40 mb-3" />
                <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight leading-tight">
                  "{FOUNDER_DATA.quote}"
                </p>
              </div>
            </div>

            {/* Vision Body Paragraphs */}
            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
              {FOUNDER_DATA.paragraphs.map((p, idx) => (
                <p key={idx} className="font-normal">
                  {p}
                </p>
              ))}
            </div>

            {/* Credentials / Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {FOUNDER_DATA.credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#141414] border border-[#242424]"
                >
                  <ShieldCheck className="w-4 h-4 text-[#C6FF00] shrink-0" />
                  <span className="text-xs font-semibold text-neutral-200">{cred}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons matching reference */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#222222]">
              <a
                href={getWhatsAppLink(`Hi Zulqarnain, I read your vision for Pro.Fit and I want to train with you!`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#C6FF00] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:bg-[#b0e600] hover:shadow-[0_0_25px_rgba(198,255,0,0.4)] transition-all transform active:scale-95 group cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{FOUNDER_DATA.ctaText}</span>
                <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-[#C6FF00] group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/60 bg-black/40 hover:bg-black/70 text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-7 py-4 rounded-full transition-all cursor-pointer"
              >
                <span>BOOK FREE CONSULTATION</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
