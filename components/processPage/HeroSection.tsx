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
          <h1 className="text-7xl max-md:text-3xl mt-8 font-bold text-center leading-tight mt-2 z-10 font-sans max-md:pt-20">
            Modern tech meets a personal approach
          </h1>
        </div>
      </div>
    </section>
  );
}