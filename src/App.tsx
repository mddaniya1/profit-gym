/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import {
  ServiceItem,
  PackageItem,
  ArticleItem,
} from './data/content';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F5] font-sans relative selection:bg-[#C6FF00] selection:text-black">
      {/* Outer frame neon lime contour line accents */}
      <div className="fixed inset-0 pointer-events-none z-40 border border-[#C6FF00]/15 rounded-2xl m-1 sm:m-2" />

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
        />

        {/* 7. Fitness Tools & Metabolic Calculator */}
        <FitnessTools
          onOpenBooking={() => setIsBookingOpen(true)}
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

      {/* Real Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Modals */}
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
