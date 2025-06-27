"use client";

import React from 'react';
import HeroSection from './HeroSection';
import FeatureCards from './FeatureCards';
import LoanOffersSection from '../commonPage/LoanOffersSection';
import CreditScoreSection from '../commonPage/CreditScoreSection';
import FAQSection from '../commonPage/FAQSection';
import Footer from '../commonPage/Footer';


export default function Page1() {
  return (
    <main className="flex flex-col items-center bg-mywhite">
      <HeroSection />
      <FeatureCards />
      <LoanOffersSection />
      <CreditScoreSection />
      <FAQSection />
      <Footer />
    </main>
  );
}