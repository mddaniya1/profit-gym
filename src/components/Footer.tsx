import React from 'react';
import { MessageCircle, Mail, MapPin, Instagram, Youtube, Facebook, ArrowUp, Clock } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#0A0A0A] border-t border-[#1F1F1F] pt-16 sm:pt-24 pb-8 overflow-hidden">
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
                <a href="#home" className="hover:text-[#D4AF37] transition-colors">
                  HOME
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  SERVICES & CLASSES
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#D4AF37] transition-colors">
                  PACKAGES
                </a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-[#D4AF37] transition-colors">
                  TRANSFORMATIONS
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-[#D4AF37] transition-colors">
                  FITNESS TOOLS
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#D4AF37] transition-colors">
                  PRICING
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#D4AF37] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Programs */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#707070] block">
              [Services & Classes]
            </span>
            <ul className="space-y-3 font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  PERSONAL TRAINING
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  AEROBICS CLASSES
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  ZUMBA STUDIO
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  CYCLING & SPIN
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  NUTRITION CONSULTING
                </a>
              </li>
              <li>
                <a href="#articles" className="hover:text-[#D4AF37] transition-colors">
                  FITNESS TIPS
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Direct Connect */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#707070] block">
              [Contact & Visit]
            </span>

            <div className="space-y-3 text-xs sm:text-sm text-neutral-300">
              <a
                href={getWhatsAppLink('Hi Pro Fit Gym, I want to inquire about memberships and timings.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#D4AF37] transition-colors py-1 group"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                <span className="font-semibold">WhatsApp: {CONTACT_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2.5 hover:text-[#D4AF37] transition-colors py-1 group"
              >
                <Mail className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                <span className="font-semibold">{CONTACT_INFO.email}</span>
              </a>

              <div className="flex items-center gap-2.5 text-neutral-400 py-1">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{CONTACT_INFO.location}</span>
              </div>

              <div className="flex items-center gap-2.5 text-neutral-400 py-1">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{CONTACT_INFO.timings}</span>
              </div>
            </div>

            {/* Social Links including Instagram @profitnorthnazimabad */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#181818] border border-[#2B2B2B] flex items-center justify-center text-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
                aria-label="Instagram @profitnorthnazimabad"
                title="Instagram @profitnorthnazimabad"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppLink('Hi Pro Fit Gym, I want to connect.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#181818] border border-[#2B2B2B] flex items-center justify-center text-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#181818] border border-[#2B2B2B] flex items-center justify-center text-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#181818] border border-[#2B2B2B] flex items-center justify-center text-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
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
            <span>© 2026 Pro Fit Gym. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* GIANT OVERSIZED WORDMARK AT BOTTOM */}
        <div className="pt-4 pb-2 text-center overflow-hidden select-none pointer-events-none">
          <h1 className="font-display text-[15vw] font-black uppercase tracking-tighter leading-none text-[#181818] hover:text-[#1F1F1F] transition-colors">
            PRO FIT <span className="text-[#D4AF37]/35">GYM</span>
          </h1>
        </div>

        {/* Bottom micro branding */}
        <div className="flex items-center justify-between pt-2 text-[10px] text-neutral-400 font-semibold tracking-wider uppercase">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span>PRO FIT GYM · NORTH NAZIMABAD</span>
          </div>
          <div>BLOCK A, KARACHI 74600 · OPEN 7:00 AM – 2:00 AM</div>
        </div>
      </div>
    </footer>
  );
};
