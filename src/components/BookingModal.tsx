import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, MessageCircle, Calendar } from 'lucide-react';
import { getWhatsAppLink } from '../data/content';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('General Fitness & Gym Membership');
  const [slot, setSlot] = useState('Morning (7:00 AM - 11:00 AM)');
  const [serviceType, setServiceType] = useState('Gym Membership');

  if (!isOpen) return null;

  const goals = [
    'General Fitness & Gym Membership',
    'Fat Loss & Conditioning',
    'Ladies Zumba & Aerobics',
    'Hypertrophy & Heavy Lifting',
    '1-on-1 Personal Training & Nutrition',
  ];

  const timeSlots = [
    'Morning (7:00 AM - 11:00 AM)',
    'Ladies Studio Batch (Morning / Afternoon)',
    'Evening Peak (5:00 PM - 10:00 PM)',
    'Late Night (10:00 PM - 2:00 AM)',
  ];

  const handleLaunchWhatsApp = () => {
    const text = `Hi Pro Fit Gym, I would like to book a free trial / consultation at Block A, North Nazimabad.
- Name: ${name || 'Prospective Member'}
- Goal: ${goal}
- Preference: ${serviceType}
- Desired Slot: ${slot}`;
    window.open(getWhatsAppLink(text), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#141414] border border-[#2B2B2B] shadow-2xl p-6 sm:p-8 overflow-hidden text-white">
        {/* Glow */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#262626] mb-6">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#D4AF37] block mb-1">
              FREE TRIAL & GYM TOUR
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              BOOK YOUR TRIAL SESSION
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
              className="w-full px-4 py-2.5 rounded-xl bg-[#0D0D0D] border border-[#2B2B2B] text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
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
                      ? 'bg-[#D4AF37] text-black font-bold border-[#D4AF37]'
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
              Interested Program
            </label>
            <div className="flex gap-2">
              {['Gym Membership', 'Ladies Classes', 'Personal Training'].map((prog) => (
                <button
                  key={prog}
                  type="button"
                  onClick={() => setServiceType(prog)}
                  className={`flex-1 py-2 text-xs font-medium rounded-xl border transition-all cursor-pointer ${
                    serviceType === prog
                      ? 'bg-white text-black font-bold border-white'
                      : 'bg-[#1C1C1C] text-neutral-400 border-[#2B2B2B] hover:border-neutral-600'
                  }`}
                >
                  {prog}
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
              className="w-full px-4 py-2.5 rounded-xl bg-[#0D0D0D] border border-[#2B2B2B] text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4AF37]"
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
            className="w-full py-3.5 px-6 rounded-full bg-[#D4AF37] text-black font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#c59e2b] transition-all cursor-pointer active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.35)]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>CONFIRM ON WHATSAPP WITH PRO FIT GYM</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <p className="text-[11px] text-neutral-400 text-center mt-2.5">
            Opens direct WhatsApp conversation with pre-filled details (0320 8200254)
          </p>
        </div>
      </div>
    </div>
  );
};
