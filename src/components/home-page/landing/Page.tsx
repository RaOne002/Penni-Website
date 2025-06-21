"use client";

import React from 'react';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import LenderLogos from '../LenderLogos';
import StatisticsSection from '../StatisticsSection';
import DebtSolutionsSection from '../DebtSolutionsSection';
import CreditScoreSection from '../CreditScoreSection';
import LoanOffersSection from '../LoanOffersSection';
import FeatureCards from '../FeatureCards';
import PersonalizedOffersSection from '../PersonalizedOffersSection';
import TestimonialsSection from '../TestimonialsSection';
import FAQSection from '../FAQSection';
import Footer from '../Footer';

export default function Page() {
  return (
    <main className="flex flex-col items-center bg-white">
      <div className="w-full block max-md:hidden">
        <Navbar />
      </div>
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