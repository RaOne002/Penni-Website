"use client";

import React from 'react';
import HeroSection from './HeroSection';
import StatisticsSection from '../commonPage/StatisticsSection';
import PersonalFinance from './PersonalFinance';
import FeatureCards from './FeatureCards';
import DebtSolutionsSection from '../commonPage/DebtSolutionsSection';
import OpeningSection from './OpeningSection';
import Footer from '../commonPage/Footer';


export default function Page1() {
    return (
        <main className="flex flex-col items-center bg-mywhite">
            <HeroSection />
            <StatisticsSection />
            <PersonalFinance />
            <FeatureCards />
            <DebtSolutionsSection />
            <OpeningSection />
            <Footer />
        </main>
    );
}