"use client";

import React from 'react';
import MyButton from '../ui/MyButton';
import WorldLogoSvg from '../svg/WorldLogoSvg'
import PennyBgWhiteSvg from '../svg/PennyBgWhiteSvg'; 
import Navbar from './Navbar';

export default function HeroSection() {
  return (
    <section
      className="w-full text-xl font-medium text-mywhite bg-myneutral-850 flex flex-col items-center pt-4 max-md:py-28 max-md:px-3 max-md:pb-20px"
    >
      <Navbar className='max-md:hidden'/>
      <div className="max-w-4xl w-full flex flex-col items-center px-2">
        <PennyBgWhiteSvg
          className="object-cover absolute inset-0 size-full h-[860px]"
          aria-label="Background"
        />
        <button
          type="button"
          className="flex gap-5 items-center bg-myneutral-700 bg-opacity-50 rounded-full px-2 py-1 mb-1 focus:outline-none focus:ring-2 focus:ring-myblue-500 transition hover:bg-myneutral-800 cursor-pointer mt-8"
        >
           <WorldLogoSvg aria-label="Join us icon" />
          <span className="text-mywhite text-lg pr-6 z-10">Join us</span>
        </button>
        {/* --------- This Header for Big Screens --------- */}
        <div className='max-md:hidden'>
          <h1 className="text-7xl font-bold text-center leading-tight mt-2 z-10 font-sans">
            Enhance your financial
          </h1>
          <h1 className="text-7xl font-bold text-center leading-tight mb-2 z-10">
            control with{" "}
            <span className="text-myneutral-850 bg-myemerald-400 px-3 md:px-5 rounded-full z-10">
              name
            </span>
          </h1>
        </div>
        {/* --------- This Header for Small Screens --------- */}
        <div className='max-md:block hidden'>
          <h1 className="text-7xl max-md:text-5xl font-bold text-center leading-tight mt-2 z-10 font-sans">
            Enhance your 
          </h1>
          <h1 className="text-7xl max-md:text-5xl font-bold text-center leading-tight mb-2 z-10">
            financial control
          </h1>
          <h1 className="text-7xl max-md:text-5xl font-bold text-center leading-tight mb-2 z-10">
            with{" "} 
            <span className="text-myneutral-850 bg-myemerald-400 px-3 md:px-5 rounded-full z-10">
              name
            </span>
          </h1>
          
        </div>
        <p className="text-center text-base mt-2 mb-4 max-w-xs sm:max-w-md md:max-w-xl z-10">
          Meet Pennie - the first digital finance company built to serve everyone.
          We never sell your information. Easily borrow up to $100,000. Low rates starting at 5.99%.
        </p>
        <MyButton className='z-10'>
          Check my rate
        </MyButton>
        <div className="bg-myzinc-300 w-[220px] h-[220px] mt-4 md:w-[350px] md:h-[300px] z-10" />
      </div>
    </section>
  );
}