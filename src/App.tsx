import React from 'react';
import { FloatingNavDock } from './components/FloatingNavDock';
import { SanctuaryHero } from './components/SanctuaryHero';
import { InteractiveSuiteExplorer } from './components/InteractiveSuiteExplorer';
import { All13UnitsCatalog } from './components/All13UnitsCatalog';
import { AssamHospitalityStory } from './components/AssamHospitalityStory';
import { GuwahatiRadar } from './components/GuwahatiRadar';
import { VerifiedLedger } from './components/VerifiedLedger';
import { InstantEnquirySection } from './components/InstantEnquirySection';
import { SanctuaryFooter } from './components/SanctuaryFooter';
import { FloatingWhatsAppPill } from './components/FloatingWhatsAppPill';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C2723] selection:bg-[#D4AF37]/30 selection:text-[#14241E] font-sans overflow-x-hidden w-full max-w-full">
      {/* Modern Boutique Navigation Dock */}
      <FloatingNavDock />

      {/* Main Living Editorial Experience */}
      <main>
        {/* Full-Viewport Sanctuary Hero with Integrated Sticky Booking Bar */}
        <SanctuaryHero />

        {/* Interactive Suite Architecture (2BHK, 1BHK, Penthouse, Solo with In-Room Kitchen & Bath Specs) */}
        <InteractiveSuiteExplorer />

        {/* Full Architectural Catalog of all 13 Units with Visual Modal Inspector */}
        <All13UnitsCatalog />

        {/* The Homestay Experience: Fresh Morning Breakfast, Assam Tea & Loving Host Care */}
        <AssamHospitalityStory />

        {/* Sarania Hills & City Landmarks Distance Guide */}
        <GuwahatiRadar />

        {/* Verified Public Reputation Ledger (132 Google Reviews · 4.1 Rating) */}
        <VerifiedLedger />

        {/* Direct Lead Capture & Instant Reservation Engine */}
        <InstantEnquirySection />
      </main>

      {/* Quiet Sanctuary Footer */}
      <SanctuaryFooter />

      {/* Discrete 1-Tap WhatsApp Booking Pill */}
      <FloatingWhatsAppPill />
    </div>
  );
}
