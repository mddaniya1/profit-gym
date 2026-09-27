import React, { useState } from 'react';
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
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-2 bg-[#0D0D0D]/90 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2.5 px-5 sm:px-8 rounded-full border border-[#222222] bg-[#111111]/95 shadow-2xl">
        {/* Brand Logo: Uploaded icon logo mark (muscular arm/bicep + lightning bolt) + centered "PRO FIT" */}
        <a
          href="#home"
          className="flex flex-col items-center justify-center group focus:outline-none select-none transition-transform hover:scale-105 active:scale-95 shrink-0"
          aria-label="Pro Fit Gym Home"
        >
          <div className="relative flex items-center justify-center">
            <ProFitIcon className="w-8 h-8 sm:w-9 sm:h-9 text-[#C6FF00] transition-all group-hover:brightness-110" />
          </div>
          <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.25em] text-[#F5F5F5] uppercase text-center mt-0.5 leading-none transition-colors group-hover:text-[#C6FF00]">
            PRO FIT
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs sm:text-sm font-semibold tracking-wider text-[#A0A0A0] uppercase">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#C6FF00] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppLink('Hi Pro Fit Gym, I would like to join Pro Fit Gym in North Nazimabad!')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2.5 bg-[#C6FF00] text-black font-extrabold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full hover:bg-[#b5ea00] hover:shadow-[0_0_20px_rgba(198,255,0,0.4)] transition-all transform active:scale-95"
          >
            <span>JOIN NOW</span>
            <span className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-[#C6FF00]">
              <ArrowRight className="w-3 h-3" />
            </span>
          </a>

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

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-5 rounded-3xl bg-[#111111] border border-[#222222] shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Mobile Header with Logo Mark */}
          <div className="flex items-center justify-between pb-3 border-b border-[#222222]">
            <div className="flex items-center gap-3">
              <ProFitIcon className="w-8 h-8 text-[#C6FF00]" />
              <div className="flex flex-col">
                <span className="text-[11px] font-bold tracking-[0.25em] text-[#F5F5F5] uppercase">
                  PRO FIT
                </span>
                <span className="text-[10px] text-neutral-400 font-medium">North Nazimabad</span>
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
        </div>
      )}
    </header>
  );
};
