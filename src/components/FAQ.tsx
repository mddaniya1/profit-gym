import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { FAQS } from '../data/content';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open 1st item by default

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#0D0D0D]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#D4AF37] inline-block mb-3">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight leading-[0.95]">
            ANSWERS ABOUT PRO FIT GYM
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-[#181818] border-[#383838] shadow-xl'
                    : 'bg-[#141414] border-[#242424] hover:border-[#303030]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between gap-4 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-display text-lg sm:text-2xl font-bold uppercase tracking-tight transition-colors ${
                      isOpen ? 'text-white' : 'text-neutral-200 hover:text-white'
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Toggle Indicator Button */}
                  <span
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#D4AF37] text-black shadow-[0_0_12px_rgba(212,175,55,0.35)] rotate-90'
                        : 'bg-[#222222] text-neutral-300'
                    }`}
                  >
                    {isOpen ? <X className="w-5 h-5 stroke-[2.5]" /> : <Plus className="w-5 h-5 stroke-[2.5]" />}
                  </span>
                </button>

                {/* Expanded Answer Content */}
                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 animate-in fade-in duration-200">
                    <div className="pt-3 border-t border-[#262626]">
                      <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
