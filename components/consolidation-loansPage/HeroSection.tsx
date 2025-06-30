"use client";

import React from 'react';
import LenQBgWhiteSvg from '../svg/LenQBgWhiteSvg'; 
import Navbar from '../commonPage/Navbar';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-dvh w-full text-xl font-medium text-mywhite bg-myneutral-850 flex flex-col items-center pt-4 max-md:pb-28 max-md:px-3 max-md:pb-20px"
    >
      <Navbar/>
      <div className="max-w-4xl w-full flex flex-col items-center px-2">
        <LenQBgWhiteSvg
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          aria-label="Background"
        />
        {/* --------- This Header for Big Screens --------- */}
        <div>
          <h1 className="text-7xl max-md:text-5xl font-bold text-center leading-tight mt-2 z-10 font-sans max-md:pt-20">
            Let{"'"}s talk <br /> consolidation
          </h1>
        </div>
        <p className="text-center text-xl mt-2 mb-4 max-w-xs sm:max-w-md md:max-w-xl max-md:text-lg z-10">
          Transfer high-interest credit card balances into a <br className='max-md:hidden'/> consolidation loan up to $100k to reduce your monthly payments and save money.
        </p>
      </div>
    </section>
  );
}