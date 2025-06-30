"use client";

import React from 'react';
import LenQBgWhiteSvg from '../svg/LenQBgWhiteSvg'; 
import Navbar from '../commonPage/Navbar';

export default function HeroSection() {
  return (
    <section
      className="w-full text-xl h-[760px] font-medium text-mywhite bg-myneutral-850 flex flex-col items-center pt-4 max-md:pb-28 max-md:px-3 max-md:pb-20px"
    >
      <Navbar/>
      <div className="max-w-4xl w-full flex flex-col items-center px-2">
        <LenQBgWhiteSvg
          className="object-cover absolute inset-0 size-full h-[760px]"
          aria-label="Background"
        />
        {/* --------- This Header for Big Screens --------- */}
        <div>
          <h1 className="text-7xl max-md:text-3xl mt-8 font-bold text-center leading-tight z-10 font-sans max-md:pt-20">
            Finally, a digital finance company for everyone
          </h1>
        </div>
      </div>
    </section>
  );
}