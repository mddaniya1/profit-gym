import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PACKAGES, PackageItem } from '../data/content';

interface PackagesProps {
  onSelectPackage: (pkg: PackageItem) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Eyebrow, Headline, and View All Plans Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#C6FF00] inline-block mb-3">
              MEMBERSHIP PACKAGES
            </span>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight leading-[0.95]">
              CHOOSE YOUR MEMBERSHIP & TRAINING PATH
            </h2>
          </div>

          <div className="shrink-0">
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2.5 bg-[#C6FF00] text-black font-extrabold text-xs tracking-wider uppercase px-6 py-3 rounded-full hover:bg-[#b5ea00] hover:shadow-[0_0_20px_rgba(198,255,0,0.35)] transition-all group"
            >
              <span>VIEW MEMBERSHIP TIERS</span>
              <span className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-[#C6FF00]">
                <ArrowRight className="w-3 h-3" />
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* 3-Card Horizontal Row matching reference product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              onClick={() => onSelectPackage(pkg)}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative rounded-3xl overflow-hidden bg-[#111111] border border-[#222222] hover:border-[#383838] transition-colors flex flex-col justify-between cursor-pointer shadow-xl"
            >
              {/* Image Container with Price Badge */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1D1D1D]">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />

                {/* Price Tag Pill */}
                <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full shadow-lg">
                  <span className="font-display text-sm sm:text-base font-extrabold tracking-wide text-[#C6FF00]">
                    {pkg.price}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C6FF00] block mb-1.5">
                    {pkg.category}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-2 group-hover:text-[#C6FF00] transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8E8E8E] leading-relaxed mb-4 line-clamp-2">
                    {pkg.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#222222] flex items-center justify-between">
                  <span className="text-xs font-bold text-neutral-300 group-hover:text-[#C6FF00] transition-colors inline-flex items-center gap-1.5">
                    <span>{pkg.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[11px] text-neutral-500 font-medium">North Nazimabad</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
