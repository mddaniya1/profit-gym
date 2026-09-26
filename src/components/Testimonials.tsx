import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];
  // Upcoming preview testimonials
  const previewItems = [
    TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(currentIndex + 2) % TESTIMONIALS.length],
  ];

  return (
    <section id="testimonials" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Carousel Controls matching Reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#D4AF37] inline-block mb-3">
              MEMBER EXPERIENCES
            </span>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight leading-[0.95] max-w-2xl">
              REAL VOICES<span className="text-[#D4AF37]">.</span> REAL EXPERIENCES<span className="text-[#D4AF37]">.</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-[#2E2E2E] bg-[#161616] flex items-center justify-center text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all cursor-pointer active:scale-95"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-black hover:bg-[#c59e2b] transition-all cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Grid: Featured Large Card + 2 Preview Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Main Featured Testimonial Card */}
          <div className="lg:col-span-6 rounded-3xl p-8 sm:p-10 bg-[#161616] border border-[#2A2A2A] shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-6 right-6 text-neutral-800 pointer-events-none">
              <Quote className="w-20 h-20 opacity-30" />
            </div>

            <div className="relative z-10">
              {/* Highlight Stat Tag */}
              <div className="inline-block bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full mb-6">
                {activeTestimonial.highlightStat}
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1.5 text-[#D4AF37] mb-6">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37]" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-base sm:text-xl text-neutral-100 font-medium leading-relaxed mb-8">
                "{activeTestimonial.quote}"
              </p>
            </div>

            {/* Author Footer */}
            <div className="flex items-center gap-4 pt-6 border-t border-[#262626]">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37] shrink-0 bg-neutral-800">
                <img
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-display text-xl sm:text-2xl text-white font-black uppercase tracking-tight">
                  {activeTestimonial.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#8E8E8E]">
                  {activeTestimonial.role}
                </p>
              </div>
            </div>
          </div>

          {/* 2 Preview / Side Testimonial Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {previewItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setCurrentIndex((currentIndex + idx + 1) % TESTIMONIALS.length)}
                className="rounded-3xl p-6 sm:p-7 bg-[#141414] border border-[#242424] hover:border-[#383838] transition-all flex flex-col justify-between cursor-pointer group shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D4AF37] bg-black px-2.5 py-1 rounded-full border border-[#2B2B2B]">
                      {item.highlightStat}
                    </span>
                    <div className="flex items-center gap-1 text-[#D4AF37]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-4 mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#222222]">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-neutral-700 shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="min-w-0">
                    <h5 className="font-display text-base sm:text-lg text-white font-bold uppercase truncate group-hover:text-[#D4AF37] transition-colors">
                      {item.name}
                    </h5>
                    <p className="text-[11px] text-neutral-400 truncate">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
