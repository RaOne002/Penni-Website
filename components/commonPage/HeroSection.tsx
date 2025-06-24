"use client";

import React from 'react';
import MyButton from '../ui/MyButton';
import WorldLogoSvg from '../svg/WorldLogoSvg'

export default function HeroSection() {
  return (
    <section
      className="w-full text-xl font-medium text-white flex flex-col items-center pt-8 max-md:py-28 max-md:px-7"
      id="penny-bgNav"
    >
      <div className="max-w-4xl w-full flex flex-col items-center px-4">
        <button
          type="button"
          className="flex gap-5 items-center bg-zinc-600 bg-opacity-50 rounded-full px-2 py-1 mb-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition hover:bg-zinc-700 cursor-pointer"
        >
           <WorldLogoSvg aria-label="Join us icon" />
          <span className="text-white text-lg pr-6">Join us</span>
        </button>
        <h1 className="text-7xl max-md:text-3xl font-bold text-center leading-tight mt-2">
          Enhance your financial
        </h1>
        <h1 className="text-7xl max-md:text-3xl font-bold text-center leading-tight mb-2">
          control with{" "}
          <span className="text-neutral-800 bg-myemerald-400 px-3 md:px-6 rounded-full">
            name
          </span>
        </h1>
        <p className="text-center text-base md:text-lg mb-4 max-w-xs sm:max-w-md md:max-w-xl">
          Meet Pennie - the first digital finance company built to serve everyone.
          We never sell your information. Easily borrow up to $100,000. Low rates starting at 5.99%.
        </p>
        <MyButton>
          Check my rate
        </MyButton>
        <div className="bg-zinc-300 w-[220px] h-[220px] mt-4 md:w-[350px] md:h-[300px]" />
      </div>
    </section>
  );
}