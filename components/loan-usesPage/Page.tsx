"use client";

import React from 'react';
import HeroSection from './HeroSection';
// import LenderLogos from './LenderLogo';
// import ConsolidationLoansSection from './ConsolidationLoansSection';
import RattingSection from './RattingSection'
import BlankPage from '../commonPage/BlankPage';
import StatSection from '../commonPage/StatSection'
import FAQSection from '../commonPage/FAQSection';
import Footer from '../commonPage/Footer';
import SectionChange from './SectionChange';

export default function Page1() {
    return (
        <main className="flex flex-col items-center bg-mywhite">
            <HeroSection />
            <SectionChange />
            {/* <LenderLogos />
            <ConsolidationLoansSection /> */}
            <RattingSection />
            <BlankPage />
            <StatSection />
            <FAQSection />
            <Footer />
        </main>
    );
}