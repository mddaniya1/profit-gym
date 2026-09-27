import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink } from '../data/content';
import { ProFitIcon } from './ProFitIcon';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Classes', href: '#services' },
    { label: 'Timings', href: '#timings' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-2 bg-[#0D0D0D]/90 backdrop-blur-md transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-5 sm:px-8 rounded-full border border-[#222222] bg-[#111111]/95 shadow-2xl">
        {/* Brand Logo: Uploaded icon logo mark (muscular arm/bicep + lightning bolt) + "PRO FIT" */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-3 sm:gap-3.5 group focus:outline-none select-none shrink-0"
          aria-label="Pro Fit Gym Home"
        >
          <div className="relative flex items-center justify-center p-1 sm:p-1.5 rounded-2xl bg-black/60 border border-[#C6FF00]/25 shadow-[0_0_20px_rgba(198,255,0,0.18)] transition-all group-hover:border-[#C6FF00]/50 group-hover:shadow-[0_0_25px_rgba(198,255,0,0.3)]">
            <ProFitIcon className="w-10 h-10 sm:w-12 sm:h-12 text-[#C6FF00] transition-all group-hover:brightness-110" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl sm:text-3xl font-black tracking-wider text-[#F5F5F5] uppercase leading-none transition-colors group-hover:text-[#C6FF00]">
              PRO FIT
            </span>
            <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.25em] text-[#C6FF00] uppercase mt-1 leading-none">
              GYM · KARACHI
            </span>
          </div>
        </motion.a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs sm:text-sm font-semibold tracking-wider text-[#A0A0A0] uppercase">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ y: -2, color: '#FFFFFF' }}
              transition={{ duration: 0.2 }}
              className="hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#C6FF00] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <motion.a
            href={getWhatsAppLink('Hi Pro Fit Gym, I would like to join Pro Fit Gym in North Nazimabad!')}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:inline-flex items-center gap-2.5 bg-[#C6FF00] text-black font-extrabold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full hover:bg-[#b5ea00] hover:shadow-[0_0_20px_rgba(198,255,0,0.4)] transition-all"
          >
            <span>JOIN NOW</span>
            <span className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-[#C6FF00]">
              <ArrowRight className="w-3 h-3" />
            </span>
          </motion.a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#C6FF00] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden mt-3 p-5 rounded-3xl bg-[#111111] border border-[#222222] shadow-2xl flex flex-col gap-4"
          >
            {/* Mobile Header with Logo Mark */}
            <div className="flex items-center justify-between pb-3 border-b border-[#222222]">
              <div className="flex items-center gap-3">
                <div className="p-1 rounded-xl bg-black/60 border border-[#C6FF00]/30 shadow-[0_0_12px_rgba(198,255,0,0.2)]">
                  <ProFitIcon className="w-10 h-10 text-[#C6FF00]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-black tracking-wider text-[#F5F5F5] uppercase leading-none">
                    PRO FIT
                  </span>
                  <span className="text-[10px] text-[#C6FF00] font-extrabold tracking-widest uppercase mt-0.5">
                    North Nazimabad
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-bold text-[#C6FF00] px-2.5 py-0.5 rounded-full bg-[#C6FF00]/10 border border-[#C6FF00]/20">
                7AM – 2AM
              </span>
            </div>

            <div className="flex flex-col gap-3 py-1 border-b border-[#222222]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold tracking-wider text-neutral-300 hover:text-[#C6FF00] py-1.5 transition-colors uppercase"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2.5 pt-1">
              <a
                href={getWhatsAppLink('Hi Pro Fit Gym, I would like to join Pro Fit Gym in North Nazimabad!')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#C6FF00] text-black font-extrabold text-xs tracking-wider uppercase py-3 rounded-full hover:bg-[#b5ea00] transition-all"
              >
                <span>JOIN VIA WHATSAPP</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-300 border border-[#333] rounded-full hover:border-[#C6FF00] hover:text-[#C6FF00] transition-colors"
              >
                Book Free Trial Session
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
