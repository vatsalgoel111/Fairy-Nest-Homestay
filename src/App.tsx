import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { RoomOfferings } from './components/RoomOfferings';
import { AmenitiesSection } from './components/AmenitiesSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#162A24] selection:bg-[#C5A059]/25 selection:text-[#162A24]">
      {/* Top Bar Navigation */}
      <Navbar />

      {/* Hero with Parallax & Verified Homestay Identity */}
      <main>
        <Hero />
        <AboutSection />
        <RoomOfferings />
        <AmenitiesSection />
        <GallerySection />
        <ReviewsSection />
        <LocationSection />
        <ContactForm />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Floating Action Affordance (WhatsApp & Call) */}
      <FloatingWhatsApp />
    </div>
  );
}
