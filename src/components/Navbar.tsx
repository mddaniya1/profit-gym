import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink } from '../data/content';

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
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-5 sm:px-8 rounded-full border border-[#262626] bg-[#141414]/90 shadow-2xl">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] group-hover:scale-125 transition-transform" />
          <span className="font-display text-2xl sm:text-3xl tracking-wider text-white font-black">
            PRO FIT <span className="text-[#D4AF37]">GYM</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs sm:text-sm font-semibold tracking-wider text-[#A0A0A0] uppercase">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#D4AF37] after:absolute after:bottom-0 after:left-0 after:transition-all"
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
            className="hidden sm:inline-flex items-center gap-2.5 bg-[#D4AF37] text-black font-extrabold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full hover:bg-[#c59e2b] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all transform active:scale-95"
          >
            <span>JOIN NOW</span>
            <span className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-[#D4AF37]">
              <ArrowRight className="w-3 h-3" />
            </span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#D4AF37] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-5 rounded-3xl bg-[#141414] border border-[#262626] shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3 py-2 border-b border-[#262626]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wider text-neutral-300 hover:text-[#D4AF37] py-1.5 transition-colors uppercase"
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
              className="flex items-center justify-center gap-2 bg-[#D4AF37] text-black font-extrabold text-xs tracking-wider uppercase py-3 rounded-full hover:bg-[#c59e2b] transition-all"
            >
              <span>JOIN VIA WHATSAPP</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-300 border border-[#333] rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
            >
              Book Free Trial Session
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
