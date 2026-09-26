/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageCircle, Sparkles, Bot } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Founder } from './components/Founder';
import { Services } from './components/Services';
import { Packages } from './components/Packages';
import { TransformationGallery } from './components/TransformationGallery';
import { FitnessTools } from './components/FitnessTools';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Articles } from './components/Articles';
import { CommunityCta } from './components/CommunityCta';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { DetailModal } from './components/DetailModal';
import { GeminiChatModal } from './components/GeminiChatModal';
import {
  ServiceItem,
  PackageItem,
  ArticleItem,
  getWhatsAppLink,
} from './data/content';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F5] font-sans relative selection:bg-[#D4AF37] selection:text-black">
      {/* Outer frame gold contour line accents */}
      <div className="fixed inset-0 pointer-events-none z-40 border border-[#D4AF37]/15 rounded-2xl m-1 sm:m-2" />

      {/* 1. Navbar */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Sections */}
      <main className="relative z-10 space-y-4 sm:space-y-6">
        {/* 2. Hero Section */}
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 3. About Section */}
        <About onOpenAboutModal={() => setIsAboutOpen(true)} />

        {/* 4. Trainers / Founder Section */}
        <Founder onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 5. Services Section */}
        <Services onSelectService={(service) => setSelectedService(service)} />

        {/* 5. Packages Section */}
        <Packages onSelectPackage={(pkg) => setSelectedPackage(pkg)} />

        {/* 6. Transformations Gallery Carousel */}
        <TransformationGallery
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenChat={() => setIsChatOpen(true)}
        />

        {/* 7. Fitness Tools & Metabolic Calculator */}
        <FitnessTools
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenChat={() => setIsChatOpen(true)}
        />

        {/* 8. Pricing Section */}
        <Pricing />

        {/* 7. Testimonials Section */}
        <Testimonials />

        {/* 8. FAQ Section */}
        <FAQ />

        {/* 9. Articles Section */}
        <Articles onSelectArticle={(article) => setSelectedArticle(article)} />

        {/* 10. Community CTA */}
        <CommunityCta />
      </main>

      {/* 11. Footer & Giant Wordmark */}
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Floating Gemini AI Coach Trigger */}
        <button
          onClick={() => setIsChatOpen(true)}
          aria-label="Open Pro Fit Gym AI Coach"
          className="group flex items-center gap-2.5 bg-[#161616] hover:bg-[#1E1E1E] text-white border-2 border-[#D4AF37] px-4 py-2.5 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="font-display text-sm font-black uppercase tracking-wider text-white">
            AI COACH
          </span>
        </button>

        {/* Floating WhatsApp Action Button */}
        <a
          href={getWhatsAppLink('Hi Pro Fit Gym, I would like to inquire about joining Pro Fit Gym North Nazimabad!')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp chat with Pro Fit Gym"
          className="w-14 h-14 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-110 active:scale-95 transition-all group"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-black rounded-full flex items-center justify-center">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-ping" />
          </span>
          <MessageCircle className="w-7 h-7 fill-current stroke-none" />
        </a>
      </div>

      {/* Interactive Modals */}
      <GeminiChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <DetailModal
        service={selectedService}
        pkg={selectedPackage}
        article={selectedArticle}
        isAboutOpen={isAboutOpen}
        onClose={() => {
          setSelectedService(null);
          setSelectedPackage(null);
          setSelectedArticle(null);
          setIsAboutOpen(false);
        }}
      />
    </div>
  );
}
