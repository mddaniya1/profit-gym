import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  MessageCircle,
  TrendingUp,
  Clock,
  MapPin,
  CheckCircle,
  Award,
  Zap
} from 'lucide-react';
import {
  TRANSFORMATIONS,
  TransformationItem,
  getWhatsAppLink,
} from '../data/content';

interface TransformationGalleryProps {
  onOpenBooking: () => void;
  onOpenChat?: () => void;
}

export const TransformationGallery: React.FC<TransformationGalleryProps> = ({
  onOpenBooking,
  onOpenChat,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const categories = ['All', 'Fat Loss & Recomp', 'Female Strength & Tone', 'Lean Hypertrophy', 'Injury Rehab & Mobility'];

  const filteredTransformations = TRANSFORMATIONS.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const totalSlides = filteredTransformations.length;
  const currentItem = filteredTransformations[currentIndex] || filteredTransformations[0];

  // Reset index if category changes and index is out of bounds
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides]);

  if (!currentItem) return null;

  const whatsappMessage = `Hi Pro Fit Gym! I was looking at ${currentItem.name}'s transformation (${currentItem.duration} ${currentItem.category}) at Pro Fit Gym North Nazimabad. I have a similar goal and would like to start training.`;

  return (
    <section id="transformations" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#0A0A0A] overflow-hidden">
      {/* Decorative background grid and gold accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-[#2B2B2B] text-xs font-extrabold uppercase tracking-widest text-[#D4AF37] mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>PROVEN CLIENT RESULTS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight leading-[0.95]">
              REAL BODIES<span className="text-[#D4AF37]">.</span> REAL STRENGTH<span className="text-[#D4AF37]">.</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-medium mt-3">
              Zero crash diets. Zero vanity gimmicks. Documented member transformations achieved on the Pro Fit Gym floor with progressive overload and metabolic precision.
            </p>
          </div>

          {/* Carousel Navigation Arrows & Slide Counter */}
          <div className="flex items-center gap-4 self-start md:self-end">
            <div className="font-mono text-xs text-neutral-400 font-bold uppercase tracking-wider">
              <span className="text-white text-base font-black">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="mx-1 text-neutral-600">/</span>
              <span>{String(totalSlides).padStart(2, '0')}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous transformation"
                className="w-12 h-12 rounded-full border border-[#2B2B2B] bg-[#141414] hover:bg-[#202020] hover:border-[#D4AF37] text-white hover:text-[#D4AF37] flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next transformation"
                className="w-12 h-12 rounded-full border border-[#2B2B2B] bg-[#141414] hover:bg-[#202020] hover:border-[#D4AF37] text-white hover:text-[#D4AF37] flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-[#D4AF37] text-black border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)] font-extrabold'
                  : 'bg-[#141414] text-neutral-400 border-[#262626] hover:text-white hover:border-[#383838]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Active Carousel Card */}
        <div className="bg-[#121212] border border-[#242424] rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left: High-Contrast Before & After Photo Frame */}
            <div className="lg:col-span-6 relative bg-black flex flex-col justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[560px] overflow-hidden group">
              <img
                key={currentItem.id}
                src={currentItem.image}
                alt={`${currentItem.name} before and after transformation at Pro Fit Gym`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 contrast-105"
                referrerPolicy="no-referrer"
              />

              {/* Before & After Floating Badges */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-black uppercase tracking-widest text-neutral-300">
                  BEFORE
                </span>
              </div>
              <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-widest shadow-md">
                  AFTER ({currentItem.duration})
                </span>
              </div>

              {/* Bottom Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30 pointer-events-none" />

              {/* Bottom Card Identity overlay on mobile */}
              <div className="absolute bottom-4 left-4 right-4 lg:hidden bg-black/80 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#D4AF37]">
                  {currentItem.category}
                </div>
                <div className="font-display text-2xl font-black text-white">
                  {currentItem.name}, {currentItem.age}
                </div>
                <div className="text-xs text-neutral-400">
                  {currentItem.occupation} · {currentItem.location}
                </div>
              </div>
            </div>

            {/* Right: Detailed Transformation Metrics & Methodology */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
              <div>
                {/* Client Header Info (Desktop) */}
                <div className="hidden lg:flex items-center justify-between border-b border-[#242424] pb-4 mb-6">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#D4AF37] block mb-1">
                      {currentItem.category}
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                      {currentItem.name}
                      <span className="text-neutral-500 text-xl font-normal ml-2">({currentItem.age} yrs)</span>
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-neutral-400 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#D4AF37]" />
                        {currentItem.location}
                      </span>
                      <span>·</span>
                      <span>{currentItem.occupation}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">
                      Program Duration
                    </span>
                    <span className="font-display text-2xl font-black text-[#D4AF37]">
                      {currentItem.duration}
                    </span>
                    <span className="text-[11px] text-neutral-400 block font-medium">
                      {currentItem.program}
                    </span>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-neutral-400 block">
                    Documented Physical Measurements
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {currentItem.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="bg-[#181818] border border-[#262626] rounded-2xl p-3 text-center flex flex-col justify-between"
                      >
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                          {stat.label}
                        </span>
                        <div className="font-display text-lg text-white font-black">
                          {stat.after}
                        </div>
                        <div className="mt-1 text-[11px] font-extrabold text-[#D4AF37] bg-[#D4AF37]/10 py-0.5 rounded-md">
                          {stat.diff}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Testimonial */}
                <div className="relative bg-[#181818] rounded-2xl p-5 border border-[#262626] mb-6">
                  <div className="text-xs sm:text-sm text-neutral-200 leading-relaxed italic">
                    "{currentItem.testimonial}"
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-400 not-italic">
                    <span className="font-bold text-white">— Verified Pro Fit Gym Member</span>
                    <span className="text-[#D4AF37] font-mono">{currentItem.duration} Protocol</span>
                  </div>
                </div>

                {/* The Pro Fit Gym Methodology Blueprint */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="text-xs font-black uppercase tracking-wider text-white">
                      The Pro Fit Methodology Used:
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentItem.methodologyNotes.map((note, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="leading-tight">{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Conversion Row */}
              <div className="pt-4 border-t border-[#222222] flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={getWhatsAppLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-[#D4AF37] text-black font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#c59e2b] transition-all cursor-pointer shadow-[0_0_20px_rgba(212,175,55,0.35)] active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start Similar Transformation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-full border border-white/20 hover:border-white/50 bg-black/40 hover:bg-black/80 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer text-center"
                >
                  Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators / Thumbnails Row */}
        <div className="flex justify-center items-center gap-2.5 mt-8">
          {filteredTransformations.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}: ${item.name}`}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'w-10 bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.5)]'
                  : 'w-2.5 bg-[#2B2B2B] hover:bg-neutral-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
