import React from 'react';
import { ArrowRight, Star, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { ASSETS, CONTACT_INFO, FOUNDER_DATA } from '../data/content';

interface AboutProps {
  onOpenAboutModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenAboutModal }) => {
  return (
    <section id="about" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#D4AF37] inline-block mb-3">
            ABOUT US
          </span>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight leading-[0.95] max-w-3xl">
            ONE EXTRAORDINARY ROOF FOR EVERY GOAL
          </h2>
        </div>

        {/* 2-Column Content: Left Details & Right Stacked Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Proof Metrics, Intro, & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            {/* Rating / Social Proof Block matching Reference: 4.7★ / 31 Google reviews */}
            <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#161616] border border-[#262626] shadow-xl inline-flex flex-col sm:flex-row sm:items-center gap-6">
              <div>
                <div className="font-display text-5xl sm:text-6xl font-black text-white leading-none">
                  4.7
                </div>
                <div className="flex items-center gap-1 text-[#D4AF37] mt-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#8E8E8E] uppercase tracking-wider block mt-1">
                  Google Rating · 31 Reviews
                </span>
              </div>

              <div className="sm:border-l sm:border-[#2E2E2E] sm:pl-6 flex flex-col justify-center">
                {/* Client Avatar Stack */}
                <div className="flex items-center -space-x-2.5 mb-2">
                  <div className="w-10 h-10 rounded-full border-2 border-[#161616] overflow-hidden bg-neutral-800">
                    <img
                      src={ASSETS.athleteDeadlift}
                      alt="Gym Member"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#161616] overflow-hidden bg-neutral-800">
                    <img
                      src={ASSETS.gymStudio}
                      alt="Gym Member"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#161616] overflow-hidden bg-neutral-800">
                    <img
                      src={ASSETS.trainerSpotting}
                      alt="Gym Member"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#161616] bg-[#D4AF37] text-black font-extrabold text-[11px] flex items-center justify-center">
                    4.7★
                  </div>
                </div>
                <span className="text-xs text-neutral-400 font-medium">
                  Verified Google Rating
                </span>
              </div>
            </div>

            {/* Paragraph Bio & Philosophy */}
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
                Pro Fit Gym was established under the visionary leadership of <span className="text-white font-bold">Muhammad Shafiq Jalil</span> to bring North Nazimabad a modern, uncompromising fitness space. Whether you're lifting heavy on our imported plate-loaded machines or building stamina in Zumba and Aerobics, this is your arena.
              </p>
              <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#2E2E2E] flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <div className="text-xs text-neutral-300">
                  <span className="text-white font-bold block">Gym Timings: 7:00 AM – 2:00 AM</span>
                  Mon – Sat with dedicated ladies-only training hours and group studio slots.
                </div>
              </div>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-neutral-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Imported Heavy Machinery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Ladies Aerobics & Zumba</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Indoor Cycling & Spin</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Personal Training & Nutrition</span>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <button
                onClick={onOpenAboutModal}
                className="inline-flex items-center gap-3 bg-[#D4AF37] text-black font-extrabold text-xs tracking-wider uppercase px-7 py-3.5 rounded-full hover:bg-[#c59e2b] hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all cursor-pointer group"
              >
                <span>MORE ABOUT PRO FIT GYM</span>
                <span className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-[#D4AF37] group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Stacked / Offset Gym Facility Photos */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 relative">
            {/* Photo 1: Gym Studio & Weights */}
            <div className="group relative rounded-3xl overflow-hidden border border-[#262626] bg-[#161616] aspect-[4/5] shadow-2xl">
              <img
                src={ASSETS.gymStudio}
                alt="Pro Fit Gym weights floor in North Nazimabad"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
                  World-Class Equipment
                </span>
                <h4 className="font-display text-xl sm:text-2xl text-white uppercase tracking-tight">
                  STRENGTH & PLATE-LOADED ARENA
                </h4>
              </div>
            </div>

            {/* Photo 2: Aerobics & Zumba Studio (Offset downward slightly on larger screens) */}
            <div className="group relative rounded-3xl overflow-hidden border border-[#262626] bg-[#161616] aspect-[4/5] shadow-2xl sm:translate-y-8">
              <img
                src={ASSETS.gymAerobics}
                alt="Aerobics and cycling studio at Pro Fit Gym"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
                  Group Classes & Studios
                </span>
                <h4 className="font-display text-xl sm:text-2xl text-white uppercase tracking-tight">
                  ZUMBA, AEROBICS & CYCLING
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
