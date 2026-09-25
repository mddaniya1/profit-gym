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
    { label: 'Trainers', href: '#trainers' },
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Results', href: '#transformations' },
    { label: 'Tools', href: '#tools' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-2 bg-[#0D0D0D]/90 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-5 sm:px-8 rounded-full border border-[#262626] bg-[#141414]/90 shadow-2xl">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C6FF00] group-hover:scale-125 transition-transform" />
          <span className="font-display text-2xl sm:text-3xl tracking-wider text-white font-black">
            PRO<span className="text-[#C6FF00]">.</span>FIT
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs sm:text-sm font-semibold tracking-wider text-[#A0A0A0] uppercase">
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
            href={getWhatsAppLink('Hi Zulqarnain, I would like to inquire about Pro.Fit personal training and coaching in Karachi.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2.5 bg-[#C6FF00] text-black font-extrabold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full hover:bg-[#b0e600] hover:shadow-[0_0_20px_rgba(198,255,0,0.4)] transition-all transform active:scale-95"
          >
            <span>CONTACT US</span>
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
        <div className="md:hidden mt-3 p-5 rounded-3xl bg-[#141414] border border-[#262626] shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3 py-2 border-b border-[#262626]">
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
              href={getWhatsAppLink('Hi Zulqarnain, I would like to inquire about Pro.Fit personal training in Karachi.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#C6FF00] text-black font-extrabold text-xs tracking-wider uppercase py-3 rounded-full hover:bg-[#b0e600] transition-all"
            >
              <span>CONTACT VIA WHATSAPP</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-300 border border-[#333] rounded-full hover:border-[#C6FF00] hover:text-[#C6FF00] transition-colors"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
