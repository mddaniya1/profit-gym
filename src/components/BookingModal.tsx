import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, MessageCircle, Calendar } from 'lucide-react';
import { getWhatsAppLink } from '../data/content';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('Fat Loss & Conditioning');
  const [slot, setSlot] = useState('Morning (7:00 AM - 10:00 AM)');
  const [locationType, setLocationType] = useState('In-Person Karachi');

  if (!isOpen) return null;

  const goals = [
    'Fat Loss & Conditioning',
    'Hypertrophy & Muscle Gain',
    'Injury Rehab & Joint Mobility',
    'Cerebral Palsy (CP) Fitness',
    'Corporate Executive Wellness',
  ];

  const timeSlots = [
    'Early Morning (6:00 AM - 9:00 AM)',
    'Midday / Afternoon (11:00 AM - 3:00 PM)',
    'Evening Peak (5:00 PM - 9:30 PM)',
  ];

  const handleLaunchWhatsApp = () => {
    const text = `Hi Zulqarnain, I would like to book my free consultation with Pro.Fit.
- Name: ${name || 'Prospective Athlete'}
- Goal: ${goal}
- Preference: ${locationType}
- Desired Slot: ${slot}`;
    window.open(getWhatsAppLink(text), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#141414] border border-[#2B2B2B] shadow-2xl p-6 sm:p-8 overflow-hidden text-white">
        {/* Glow */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#C6FF00]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#262626] mb-6">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C6FF00] block mb-1">
              FREE ASSESSMENT & TOUR
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              BOOK YOUR CONSULTATION
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#202020] text-neutral-400 hover:text-white hover:bg-[#2A2A2A] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Daniyal Ahmed"
              className="w-full px-4 py-2.5 rounded-xl bg-[#0D0D0D] border border-[#2B2B2B] text-sm text-white focus:outline-none focus:border-[#C6FF00] transition-colors"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-1.5">
              Primary Goal
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {goals.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGoal(g)}
                  className={`text-left px-3 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                    goal === g
                      ? 'bg-[#C6FF00] text-black font-bold border-[#C6FF00]'
                      : 'bg-[#1C1C1C] text-neutral-300 border-[#2B2B2B] hover:border-neutral-600'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-1.5">
              Coaching Format
            </label>
            <div className="flex gap-2">
              {['In-Person Karachi', 'Online Coaching (Global)'].map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => setLocationType(loc)}
                  className={`flex-1 py-2 text-xs font-medium rounded-xl border transition-all cursor-pointer ${
                    locationType === loc
                      ? 'bg-white text-black font-bold border-white'
                      : 'bg-[#1C1C1C] text-neutral-400 border-[#2B2B2B] hover:border-neutral-600'
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-1.5">
              Preferred Timing
            </label>
            <select
              value={slot}
              onChange={(e) => setSlot(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#0D0D0D] border border-[#2B2B2B] text-xs sm:text-sm text-white focus:outline-none focus:border-[#C6FF00]"
            >
              {timeSlots.map((s) => (
                <option key={s} value={s} className="bg-[#141414] text-white">
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* CTA Launch to WhatsApp */}
        <div className="mt-6 pt-5 border-t border-[#262626]">
          <button
            onClick={handleLaunchWhatsApp}
            className="w-full py-3.5 px-6 rounded-full bg-[#C6FF00] text-black font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#b0e600] transition-all cursor-pointer active:scale-95 shadow-[0_0_20px_rgba(198,255,0,0.35)]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>CONFIRM ON WHATSAPP WITH ZULQARNAIN</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <p className="text-[11px] text-neutral-400 text-center mt-2.5">
            Opens direct WhatsApp conversation with pre-filled details (0339-4050702)
          </p>
        </div>
      </div>
    </div>
  );
};
