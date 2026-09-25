import React from 'react';
import { ArrowRight, Star, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ASSETS } from '../data/content';

interface AboutProps {
  onOpenAboutModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenAboutModal }) => {
  return (
    <section id="about" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#C6FF00] inline-block mb-3">
            ABOUT US
          </span>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight leading-[0.95] max-w-3xl">
            WHERE CONSISTENCY CREATES CHANGE
          </h2>
        </div>

        {/* 2-Column Content: Left Details & Right Stacked Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Proof Metrics, Intro, & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            {/* Rating / Social Proof Block matching Reference */}
            <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#161616] border border-[#262626] shadow-xl inline-flex flex-col sm:flex-row sm:items-center gap-6">
              <div>
                <div className="font-display text-5xl sm:text-6xl font-black text-white leading-none">
                  4.8
                </div>
                <div className="flex items-center gap-1 text-[#C6FF00] mt-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C6FF00]" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#8E8E8E] uppercase tracking-wider block mt-1">
                  Customer Satisfaction
                </span>
              </div>

              <div className="sm:border-l sm:border-[#2E2E2E] sm:pl-6 flex flex-col justify-center">
                {/* Client Avatar Stack */}
                <div className="flex items-center -space-x-2.5 mb-2">
                  <div className="w-10 h-10 rounded-full border-2 border-[#161616] overflow-hidden bg-neutral-800">
                    <img
                      src={ASSETS.athleteDeadlift}
                      alt="Client"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#161616] overflow-hidden bg-neutral-800">
                    <img
                      src={ASSETS.hero}
                      alt="Client"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#161616] overflow-hidden bg-neutral-800">
                    <img
                      src={ASSETS.trainerSpotting}
                      alt="Client"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#161616] bg-[#C6FF00] text-black font-extrabold text-[11px] flex items-center justify-center">
                    +350
                  </div>
                </div>
                <span className="text-xs text-neutral-400 font-medium">
                  Verified Transformations
                </span>
              </div>
            </div>

            {/* Paragraph Bio & Philosophy */}
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
                We're more than just a gym—we're a dedicated space built for progress. From beginners taking their first steps to advanced athletes, our coaching environment is designed to help you push limits and build lasting physical resilience.
              </p>
              <p className="text-sm sm:text-base text-[#8E8E8E] leading-relaxed">
                Founded by Zulqarnain, Pro.Fit merges evidence-based biomechanics with real-world lifestyle design. Whether through 1-on-1 private training in Karachi, global online programming, or specialized rehabilitation, our system eliminates excuses.
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-neutral-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C6FF00] shrink-0" />
                <span>Certified Bio-mechanics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C6FF00] shrink-0" />
                <span>Cerebral Palsy & Rehab</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C6FF00] shrink-0" />
                <span>Tailored Macro Targets</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C6FF00] shrink-0" />
                <span>Daily Accountability</span>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <button
                onClick={onOpenAboutModal}
                className="inline-flex items-center gap-3 bg-[#C6FF00] text-black font-extrabold text-xs tracking-wider uppercase px-7 py-3.5 rounded-full hover:bg-[#b0e600] hover:shadow-[0_0_20px_rgba(198,255,0,0.35)] transition-all cursor-pointer group"
              >
                <span>MORE ABOUT US</span>
                <span className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-[#C6FF00] group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Stacked / Offset Training Photos */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 relative">
            {/* Photo 1: Trainer Spotting / Coaching */}
            <div className="group relative rounded-3xl overflow-hidden border border-[#262626] bg-[#161616] aspect-[4/5] shadow-2xl">
              <img
                src={ASSETS.trainerSpotting}
                alt="Zulqarnain coaching client"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C6FF00] block mb-1">
                  Coaching Precision
                </span>
                <h4 className="font-display text-xl sm:text-2xl text-white uppercase tracking-tight">
                  1-ON-1 FORM MASTERCLASS
                </h4>
              </div>
            </div>

            {/* Photo 2: Athlete Training / Chalk (Offset downward slightly on larger screens) */}
            <div className="group relative rounded-3xl overflow-hidden border border-[#262626] bg-[#161616] aspect-[4/5] shadow-2xl sm:translate-y-8">
              <img
                src={ASSETS.athleteDeadlift}
                alt="Muscular training session"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C6FF00] block mb-1">
                  Progressive Overload
                </span>
                <h4 className="font-display text-xl sm:text-2xl text-white uppercase tracking-tight">
                  UNBREAKABLE STRENGTH
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
