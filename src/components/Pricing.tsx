import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { PRICING_PLANS, getWhatsAppLink } from '../data/content';

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');

  return (
    <section id="pricing" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#C6FF00] inline-block mb-3">
            GYM MEMBERSHIP TIERS
          </span>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight leading-[0.95] mb-6">
            CHOOSE YOUR PRO FIT PASS
          </h2>

          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-[#161616] border border-[#262626]">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-black bg-[#C6FF00] px-3 py-1 rounded-full">
              Save 17%
            </span>
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-[#8E8E8E] hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('quarterly')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  billingCycle === 'quarterly'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-[#8E8E8E] hover:text-white'
                }`}
              >
                Quarterly
              </button>
            </div>
          </div>
        </motion.div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            const isHighlight = plan.highlighted;
            const currentPrice =
              billingCycle === 'monthly' ? plan.priceMonthly : plan.priceQuarterly;
            const currentPeriod =
              billingCycle === 'monthly' ? plan.periodMonthly : plan.periodQuarterly;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                whileHover={{ y: -8, scale: 1.015 }}
                className={`relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-colors shadow-2xl ${
                  isHighlight
                    ? 'bg-[#141414] border-2 border-[#C6FF00] shadow-[0_0_35px_rgba(198,255,0,0.25)]'
                    : 'bg-[#111111] border border-[#222222] hover:border-[#383838]'
                }`}
              >
                {/* Popular Pill Tag for Highlighted Plan */}
                {isHighlight && (
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C6FF00] text-black font-extrabold text-[10px] sm:text-xs uppercase tracking-widest px-4 py-1 rounded-full shadow-md"
                  >
                    MOST POPULAR
                  </motion.div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div
                    className={`rounded-2xl p-4 sm:p-5 mb-6 ${
                      isHighlight
                        ? 'bg-[#C6FF00] text-black'
                        : 'bg-[#1A1A1A] text-white border border-[#262626]'
                    }`}
                  >
                    <h3
                      className={`font-display text-2xl sm:text-3xl font-black uppercase tracking-tight ${
                        isHighlight ? 'text-black' : 'text-white'
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`text-xs mt-1 leading-snug ${
                        isHighlight ? 'text-black/85 font-medium' : 'text-[#8E8E8E]'
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
                      {currentPrice}
                    </span>
                    <span className="text-xs sm:text-sm text-[#8E8E8E] font-medium">
                      {currentPeriod}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <div className="mb-8">
                    <motion.a
                      href={getWhatsAppLink(plan.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className={`w-full py-4 px-6 rounded-full font-extrabold text-xs tracking-wider uppercase flex items-center justify-between transition-all group ${
                        isHighlight
                          ? 'bg-[#C6FF00] text-black hover:bg-[#b5ea00] shadow-[0_0_20px_rgba(198,255,0,0.4)]'
                          : 'bg-white text-black hover:bg-neutral-200'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </motion.a>
                  </div>

                  {/* Features Divider & List */}
                  <div className="border-t border-[#222222] pt-6">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-neutral-400 block mb-4">
                      What Includes:
                    </span>
                    <ul className="space-y-3.5">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                          <span
                            className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              isHighlight ? 'bg-[#C6FF00] text-black' : 'bg-[#222222] text-[#C6FF00]'
                            }`}
                          >
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </span>
                          <span className="text-[#C4C4C4] leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Guarantee Note */}
                <div className="mt-8 pt-4 border-t border-[#222222] text-center">
                  <span className="text-[11px] text-[#707070] font-medium">
                    Pricing placeholder · Confirm directly via WhatsApp (0320 8200254)
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
