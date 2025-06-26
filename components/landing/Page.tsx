"use client";

import React from 'react';
import HeroSection from '../commonPage/HeroSection';
import LenderLogos from '../commonPage/LenderLogos';
import StatisticsSection from '../commonPage/StatisticsSection';
import DebtSolutionsSection from '../commonPage/DebtSolutionsSection';
import CreditScoreSection from '../commonPage/CreditScoreSection';
import LoanOffersSection from '../commonPage/LoanOffersSection';
import FeatureCards from '../commonPage/FeatureCards';
import PersonalizedOffersSection from '../commonPage/PersonalizedOffersSection';
import TestimonialsSection from '../commonPage/TestimonialsSection';
import FAQSection from '../commonPage/FAQSection';
import Footer from '../commonPage/Footer';

export default function Page() {
  return (
    <main className="flex flex-col items-center bg-mywhite">
      <HeroSection />
      <LenderLogos />
      <StatisticsSection />
      <DebtSolutionsSection />
      <CreditScoreSection />
      <LoanOffersSection />
      <FeatureCards />
      <PersonalizedOffersSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}