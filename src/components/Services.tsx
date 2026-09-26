import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Dumbbell, Activity, Music, Bike, Apple } from 'lucide-react';
import { SERVICES, ServiceItem, ASSETS } from '../data/content';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIcon = (type: string, isHighlighted: boolean) => {
    const iconClass = isHighlighted ? 'text-black' : 'text-[#D4AF37]';
    switch (type) {
      case 'dumbbell':
        return <Dumbbell className={`w-6 h-6 ${iconClass}`} />;
      case 'activity':
        return <Activity className={`w-6 h-6 ${iconClass}`} />;
      case 'music':
        return <Music className={`w-6 h-6 ${iconClass}`} />;
      case 'bike':
        return <Bike className={`w-6 h-6 ${iconClass}`} />;
      case 'apple':
        return <Apple className={`w-6 h-6 ${iconClass}`} />;
      default:
        return <Dumbbell className={`w-6 h-6 ${iconClass}`} />;
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#0D0D0D]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-14 sm:mb-20 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#D4AF37] inline-block mb-3">
            OUR SERVICES & CLASSES
          </span>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight leading-[0.95]">
            FITNESS DESIGNED FOR EVERY GOAL
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-medium mt-3">
            North Nazimabad's full-spectrum facility: heavy strength arena, high-energy group studios & certified coaching.
          </p>
        </div>

        {/* 5 Service Cards + 1 Showcase Card in a balanced 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {SERVICES.map((service, index) => {
            const isHighlight = service.highlighted;
            const staggerDelayMs = (index + 1) * 120;

            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                style={{ transitionDelay: `${staggerDelayMs}ms` }}
                className={`group relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between cursor-pointer transition-all duration-700 ease-out hover:delay-0 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                } ${
                  isHighlight
                    ? 'bg-[#D4AF37] text-black shadow-[0_0_35px_rgba(212,175,55,0.35)] hover:scale-[1.02]'
                    : 'bg-[#161616] text-white border border-[#262626] hover:border-[#383838] hover:bg-[#1A1A1A]'
                }`}
              >
                <div>
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                      isHighlight ? 'bg-black/10' : 'bg-[#222222]'
                    }`}
                  >
                    {getIcon(service.iconName, !!isHighlight)}
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-display text-2xl sm:text-3xl font-black uppercase tracking-tight mb-3 ${
                      isHighlight ? 'text-black' : 'text-white'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 font-medium ${
                      isHighlight ? 'text-black/85 font-semibold' : 'text-[#9A9A9A]'
                    }`}
                  >
                    {service.shortDesc}
                  </p>
                </div>

                {/* View Details Link */}
                <div className="pt-2">
                  <button
                    type="button"
                    className={`inline-flex items-center gap-2 text-xs font-black tracking-wider uppercase group-hover:gap-3 transition-all ${
                      isHighlight ? 'text-black hover:opacity-80' : 'text-neutral-300 group-hover:text-[#D4AF37]'
                    }`}
                  >
                    <span>VIEW DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* 6th Slot: Featured Showcase Card */}
          <div
            style={{ transitionDelay: `${6 * 120}ms` }}
            className={`relative rounded-3xl overflow-hidden border border-[#262626] bg-[#161616] min-h-[320px] group transition-all duration-700 ease-out hover:delay-0 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <img
              src={ASSETS.gymStudio}
              alt="Pro Fit Gym North Nazimabad floor"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
              referrerPolicy="no-referrer"
            />
            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

            {/* Bottom Content Tag */}
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#D4AF37] block mb-1">
                PREMIUM EXPERIENCE
              </span>
              <h4 className="font-display text-2xl sm:text-3xl text-white font-black uppercase leading-tight">
                PRO FIT GYM ARENA
              </h4>
              <p className="text-xs text-neutral-300 mt-1 line-clamp-2">
                7:00 AM – 2:00 AM daily. Dedicated ladies slots, imported machinery & certified trainers in North Nazimabad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
