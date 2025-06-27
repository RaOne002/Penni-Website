"use client";
import HeroSection from "./HeroSection";
import StatSection from '../commonPage/StatSection'
import CreditScoreSection from "../commonPage/CreditScoreSection";
import TestimonialsSection from "../commonPage/TestimonialsSection";
import BlankPage from "../commonPage/BlankPage";
import FeatureCards from "../consolidation-loansPage/FeatureCards";
import StatisticsSection from "../commonPage/StatisticsSection";
import LoanOffersSection from "../commonPage/LoanOffersSection";
import Footer from '../commonPage/Footer';

export default function Page() {
  return (
    <main className="flex flex-col items-center bg-mywhite">
        <HeroSection />
        <StatSection />
        <CreditScoreSection />
        <TestimonialsSection />
        <BlankPage />
        <FeatureCards />
        <StatisticsSection />
        <LoanOffersSection />
        <Footer />
    </main>
  );
}