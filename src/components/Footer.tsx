import React from 'react';
import { MessageCircle, Mail, MapPin, Instagram, Youtube, Facebook, ArrowUp } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-[#1F1F1F] pt-16 sm:pt-24 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3 Main Columns matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-16 border-b border-[#1F1F1F]">
          {/* Column 1: Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#707070] block">
              [Quick Links]
            </span>
            <ul className="space-y-3 font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
              <li>
                <a href="#home" className="hover:text-[#C6FF00] transition-colors">
                  HOME
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C6FF00] transition-colors">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-[#C6FF00] transition-colors">
                  TRAINERS & FOUNDER
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#C6FF00] transition-colors">
                  PACKAGES
                </a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-[#C6FF00] transition-colors">
                  TRANSFORMATIONS
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-[#C6FF00] transition-colors">
                  FITNESS TOOLS
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#C6FF00] transition-colors">
                  PRICING
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#C6FF00] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Programs */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#707070] block">
              [Programs]
            </span>
            <ul className="space-y-3 font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
              <li>
                <a href="#services" className="hover:text-[#C6FF00] transition-colors">
                  PERSONAL TRAINING
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C6FF00] transition-colors">
                  ONLINE COACHING
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C6FF00] transition-colors">
                  REHAB & CP FITNESS
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C6FF00] transition-colors">
                  CORPORATE SOLUTIONS
                </a>
              </li>
              <li>
                <a href="#articles" className="hover:text-[#C6FF00] transition-colors">
                  NUTRITION GUIDELINES
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Direct Connect */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#707070] block">
              [Contact & Support]
            </span>

            <div className="space-y-3 text-xs sm:text-sm text-neutral-300">
              <a
                href={getWhatsAppLink('Hi Zulqarnain, I am contacting you through the Pro.Fit website.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#C6FF00] transition-colors py-1 group"
              >
                <MessageCircle className="w-4 h-4 text-[#C6FF00] group-hover:scale-110 transition-transform" />
                <span className="font-semibold">WhatsApp: {CONTACT_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2.5 hover:text-[#C6FF00] transition-colors py-1 group"
              >
                <Mail className="w-4 h-4 text-[#C6FF00] group-hover:scale-110 transition-transform" />
                <span className="font-semibold">{CONTACT_INFO.email}</span>
              </a>

              <div className="flex items-center gap-2.5 text-neutral-400 py-1">
                <MapPin className="w-4 h-4 text-[#C6FF00] shrink-0" />
                <span>Karachi, Pakistan (Clifton, DHA, PECHS)</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#181818] border border-[#2B2B2B] flex items-center justify-center text-white hover:text-[#C6FF00] hover:border-[#C6FF00] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppLink('Hi Zulqarnain, I want to connect.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#181818] border border-[#2B2B2B] flex items-center justify-center text-white hover:text-[#C6FF00] hover:border-[#C6FF00] transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#181818] border border-[#2B2B2B] flex items-center justify-center text-white hover:text-[#C6FF00] hover:border-[#C6FF00] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#181818] border border-[#2B2B2B] flex items-center justify-center text-white hover:text-[#C6FF00] hover:border-[#C6FF00] transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Back to Top */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-neutral-400">
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#home" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <span>·</span>
            <span>© 2026 Pro.Fit. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-[#C6FF00] transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* GIANT OVERSIZED WORDMARK AT BOTTOM matching reference DEXAFIT */}
        <div className="pt-4 pb-2 text-center overflow-hidden select-none pointer-events-none">
          <h1 className="font-display text-[18vw] font-black uppercase tracking-tighter leading-none text-[#181818] hover:text-[#1F1F1F] transition-colors">
            PRO<span className="text-[#C6FF00]/40">.</span>FIT
          </h1>
        </div>

        {/* Bottom micro branding matching reference */}
        <div className="flex items-center justify-between pt-2 text-[10px] text-neutral-400 font-semibold tracking-wider uppercase">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#C6FF00]" />
            <span>PRO.FIT COACHING</span>
          </div>
          <div>MASTER TRAINER ZULQARNAIN · KARACHI</div>
        </div>
      </div>
    </footer>
  );
};
