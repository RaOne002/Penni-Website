"use client";

import React from 'react';
import MyButton from '../ui/MyButton';
import WorldLogoSvg from '../svg/WorldLogoSvg'
import LenQBgWhiteSvg from '../svg/LenQBgWhiteSvg';
import Navbar from './Navbar';
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section
      className="relative min-h-dvh w-full text-xl font-medium text-mywhite bg-myneutral-850 flex flex-col items-center pt-4 max-md:pb-28 max-md:px-3 max-md:pb-20px"
    >
      <Navbar />
      <div className="max-w-4xl w-full flex flex-col items-center px-2 max-md:pt-16">
        <LenQBgWhiteSvg
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          aria-label="Background"
        />
        <button
          type="button"
          className="flex gap-5 items-center bg-myneutral-700 bg-opacity-50 rounded-full px-2 py-1 mb-1 focus:outline-none focus:ring-2 focus:ring-myblue-500 transition hover:bg-myneutral-800 cursor-pointer mt-8"
        >
          <WorldLogoSvg aria-label="Join us icon" />
          <span className="text-mywhite text-lg pr-6 z-10">Join us</span>
        </button>
        <h1 className="font-bold text-center leading-tight mt-2 mb-2 z-10 font-sans text-7xl max-md:text-5xl">
          Enhance your
          <span className="max-md:hidden"> financial</span>
          <span className="block">
            <span className="max-md:hidden">control with </span>
            <span className="max-md:inline hidden">financial control<br />with </span>
            <span className="text-myneutral-850 bg-myemerald-400 px-3 md:px-5 rounded-full z-10">
              name
            </span>
          </span>
        </h1>
        <p className="text-center text-base mt-2 mb-4 max-w-xs sm:max-w-md md:max-w-xl z-10">
          Meet LenQ - the first digital finance company built to serve everyone.
          We never sell your information. Easily borrow up to $100,000. Low rates starting at 5.99%.
        </p>
        <MyButton className='z-10 w-60' onClick={() => router.push("/user-form")}>
          Check my rate
        </MyButton>
        <div className="bg-myzinc-300 w-[220px] h-[220px] mt-4 md:w-[350px] md:h-[300px] z-10" />
      </div>
    </section>
  );
}