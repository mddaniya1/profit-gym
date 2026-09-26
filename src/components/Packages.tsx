import React from 'react';
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#D4AF37] inline-block mb-3">
              MEMBERSHIP PACKAGES
            </span>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight leading-[0.95]">
              CHOOSE YOUR MEMBERSHIP & TRAINING PATH
            </h2>
          </div>

          <div className="shrink-0">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2.5 bg-[#D4AF37] text-black font-extrabold text-xs tracking-wider uppercase px-6 py-3 rounded-full hover:bg-[#c59e2b] hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all group"
            >
              <span>VIEW MEMBERSHIP TIERS</span>
              <span className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-[#D4AF37] group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-3 h-3" />
              </span>
            </a>
          </div>
        </div>

        {/* 3-Card Horizontal Row matching reference product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => onSelectPackage(pkg)}
              className="group relative rounded-3xl overflow-hidden bg-[#161616] border border-[#262626] hover:border-[#383838] transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 shadow-xl"
            >
              {/* Image Container with Price Badge */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1D1D1D]">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-80" />

                {/* Price Tag Pill */}
                <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full shadow-lg">
                  <span className="font-display text-sm sm:text-base font-extrabold tracking-wide text-[#D4AF37]">
                    {pkg.price}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D4AF37] block mb-1.5">
                    {pkg.category}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8E8E8E] leading-relaxed mb-4 line-clamp-2">
                    {pkg.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#242424] flex items-center justify-between">
                  <span className="text-xs font-bold text-neutral-300 group-hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1.5">
                    <span>{pkg.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[11px] text-neutral-500 font-medium">North Nazimabad</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
