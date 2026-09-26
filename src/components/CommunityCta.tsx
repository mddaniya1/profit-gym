import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ASSETS } from '../data/content';

export const CommunityCta: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setIsSubscribed(true);
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-14 sm:py-20 bg-[#0D0D0D]">
      <div className="max-w-5xl mx-auto rounded-3xl sm:rounded-[36px] p-8 sm:p-14 bg-gradient-to-b from-[#181818] to-[#121212] border border-[#2B2B2B] shadow-2xl relative overflow-hidden text-center">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Center Thumbnail Avatar */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#D4AF37] mb-5 shadow-[0_0_20px_rgba(212,175,55,0.3)] bg-neutral-900">
            <img
              src={ASSETS.hero}
              alt="Pro Fit Gym Community"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37] mb-2 block">
            [Sign Up]
          </span>

          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-[0.95] mb-4">
            JOIN THE PRO FIT GYM COMMUNITY
          </h2>

          <p className="text-xs sm:text-sm text-[#A0A0A0] max-w-lg mx-auto mb-8 font-normal">
            Weekly training tips, gym announcements, ladies class schedules, and event updates from Pro Fit Gym North Nazimabad.
          </p>

          {/* Form or Success State */}
          {isSubscribed ? (
            <div className="flex items-center gap-3 bg-[#1A1A1A] border border-[#D4AF37]/40 px-6 py-4 rounded-full text-[#D4AF37] font-bold text-xs sm:text-sm animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
              <span>Welcome to Pro Fit Gym! Check your inbox for your starter guide.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <div className="flex flex-col sm:flex-row items-center gap-3 p-1.5 rounded-full bg-[#0D0D0D] border border-[#2E2E2E] focus-within:border-[#D4AF37] transition-colors">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full px-5 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 bg-transparent focus:outline-none"
                  aria-label="Email Address"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#D4AF37] text-black font-extrabold text-xs tracking-wider uppercase hover:bg-[#c59e2b] transition-all cursor-pointer whitespace-nowrap active:scale-95 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                >
                  SUBSCRIBE
                </button>
              </div>
              {error && <p className="text-xs text-red-400 mt-2 text-left px-4">{error}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
