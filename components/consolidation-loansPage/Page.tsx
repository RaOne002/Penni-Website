"use client";
import HeroSection from "./HeroSection";
import FeatureCards from "./FeatureCards";
import BlankPage from "../commonPage/BlankPage";
import CreditScoreSection from '../commonPage/CreditScoreSection';
import StatSection from '../commonPage/StatSection';
import FAQSection from '../commonPage/FAQSection';
import Footer from '../commonPage/Footer';

export default function Page() {
  return (
    <main className="flex flex-col items-center bg-mywhite">
        <HeroSection />
        <FeatureCards />
        <BlankPage />
        <CreditScoreSection />
        <StatSection />
        <FAQSection />
        <Footer />
    </main>
  );
}