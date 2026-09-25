import React from 'react';
import { X, CheckCircle2, ArrowRight, MessageCircle, Clock, MapPin, Quote } from 'lucide-react';
import { ServiceItem, PackageItem, ArticleItem, getWhatsAppLink, ASSETS, FOUNDER_DATA } from '../data/content';

interface DetailModalProps {
  service?: ServiceItem | null;
  pkg?: PackageItem | null;
  article?: ArticleItem | null;
  isAboutOpen?: boolean;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  service,
  pkg,
  article,
  isAboutOpen,
  onClose,
}) => {
  if (!service && !pkg && !article && !isAboutOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#141414] border border-[#2B2B2B] shadow-2xl p-6 sm:p-8 text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#202020] text-neutral-400 hover:text-white hover:bg-[#2A2A2A] flex items-center justify-center transition-colors cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. SERVICE DETAILS */}
        {service && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#C6FF00] block mb-1">
                SERVICE OVERVIEW
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                {service.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {service.fullDesc}
            </p>

            <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#2B2B2B]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#C6FF00] uppercase mb-1">
                <Clock className="w-4 h-4" />
                <span>Session Timings & Format</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300">{service.schedule}</p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                Key Deliverables & Benefits:
              </h4>
              <ul className="space-y-2.5">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-[#C6FF00] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#262626]">
              <a
                href={getWhatsAppLink(`Hi Zulqarnain, I want to book or ask about ${service.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-[#C6FF00] text-black font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#b0e600] transition-all cursor-pointer shadow-[0_0_20px_rgba(198,255,0,0.35)]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>INQUIRE VIA WHATSAPP</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* 2. PACKAGE DETAILS */}
        {pkg && (
          <div className="space-y-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-[#262626]">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-black/85 px-4 py-1.5 rounded-full border border-white/10 font-display text-lg font-bold text-[#C6FF00]">
                {pkg.price}
              </div>
            </div>

            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#C6FF00] block mb-1">
                {pkg.category}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                {pkg.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {pkg.description}
            </p>

            <div className="pt-4 border-t border-[#262626]">
              <a
                href={getWhatsAppLink(`Hi Zulqarnain, I am interested in the ${pkg.title} (${pkg.price}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-[#C6FF00] text-black font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#b0e600] transition-all cursor-pointer shadow-[0_0_20px_rgba(198,255,0,0.35)]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>BOOK THIS PACKAGE ON WHATSAPP</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* 3. ARTICLE DETAILS */}
        {article && (
          <div className="space-y-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-[#262626]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-xs font-bold text-[#C6FF00] uppercase tracking-wider">
                {article.author} · {article.date} · {article.readTime}
              </div>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
              {article.title}
            </h3>

            <div className="text-sm text-neutral-300 leading-relaxed whitespace-pre-line space-y-4">
              {article.fullContent}
            </div>

            <div className="pt-4 border-t border-[#262626]">
              <button
                onClick={onClose}
                className="w-full py-3 px-6 rounded-full bg-[#202020] hover:bg-[#2A2A2A] text-white font-bold text-xs tracking-wider uppercase transition-colors"
              >
                CLOSE ARTICLE
              </button>
            </div>
          </div>
        )}

        {/* 4. ABOUT ZULQARNAIN MODAL */}
        {isAboutOpen && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-5 items-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#C6FF00] shrink-0 bg-neutral-900 shadow-xl">
                <img
                  src={ASSETS.zulqarnain}
                  alt={FOUNDER_DATA.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center sm:text-left">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#C6FF00] block mb-1">
                  MASTER TRAINER & FOUNDER
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                  {FOUNDER_DATA.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-medium">
                  {FOUNDER_DATA.title} · Karachi
                </p>
              </div>
            </div>

            {/* Vision Callout Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#1C1C1C] to-[#141414] border-l-4 border-l-[#C6FF00] border-y border-r border-[#2A2A2A]">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C6FF00] block mb-1">
                {FOUNDER_DATA.visionHeading}
              </span>
              <p className="font-display text-xl sm:text-2xl text-white font-black uppercase tracking-tight">
                "{FOUNDER_DATA.quote}"
              </p>
            </div>

            <div className="space-y-3 text-sm text-neutral-300 leading-relaxed">
              {FOUNDER_DATA.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#2B2B2B]">
                <span className="font-display text-2xl sm:text-3xl font-black text-[#C6FF00] block">8+ YEARS</span>
                <span className="text-xs text-neutral-400">Elite Coaching Experience</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#2B2B2B]">
                <span className="font-display text-2xl sm:text-3xl font-black text-[#C6FF00] block">350+</span>
                <span className="text-xs text-neutral-400">Verified Transformations</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                Specializations & Credentials:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                {FOUNDER_DATA.credentials.map((cred, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C6FF00] shrink-0" />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#262626]">
              <a
                href={getWhatsAppLink('Hi Zulqarnain, I read your vision for Pro.Fit and I want to train with you!')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-[#C6FF00] text-black font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#b0e600] transition-all cursor-pointer shadow-[0_0_20px_rgba(198,255,0,0.35)]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>TRAIN WITH ZULQARNAIN (WHATSAPP)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
