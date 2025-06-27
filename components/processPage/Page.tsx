"use client";

import React from 'react';
import HeroSection from './HeroSection';
import GetStartedSection from './GetStartedSection';
import TestimonialsSection from '../commonPage/TestimonialsSection';
import LoanOffersSection from "../commonPage/LoanOffersSection";
import StatSection from '../commonPage/StatSection'
import BlankPage from '../commonPage/BlankPage';
import FAQSection from '../commonPage/FAQSection';
import Footer from '../commonPage/Footer';


export default function Page1() {
    return (
        <main className="flex flex-col items-center bg-mywhite">
            <HeroSection />
            <GetStartedSection />
            <TestimonialsSection />
            <LoanOffersSection />
            <StatSection />
            <BlankPage />
            <FAQSection />
            <Footer />
        </main>
    );
}