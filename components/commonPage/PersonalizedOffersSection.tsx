"use client";

import React from 'react';
import LenQBgWhiteSvg from '../svg/LenQBgWhiteSvg';
import LenQFlowerSvg from '../svg/LenQFlowerSvg'; 
import MyButton from '../ui/MyButton';

export default function PersonalizedOffersSection() {
  return (
    <section className="rounded-3xl p-3 bg-myneutral-850 w-full max-w-[1500px] max-md:rounded-none">
      <div className="relative flex flex-row items-stretch rounded-2xl min-h-[700px] overflow-hidden max-md:flex-col max-md:min-h-0">
        <LenQBgWhiteSvg
          className="object-cover absolute inset-0 size-full"
          aria-label="Background"
        />
        {/* Top-left flower */}
        <LenQFlowerSvg
          className="absolute z-10 left-[1%] top-1/6 w-12 h-12 md:w-20 md:h-20 max-md:top-1"
          aria-label="Flower"
        />
        {/* Bottom-right flower */}
        <LenQFlowerSvg
          className="absolute z-10 right-[45%] bottom-5 w-20 h-20 md:w-36 md:h-36 max-md:top-[45%] max-md:right-1"
          aria-label="Flower"
        />
        {/* Left: Content */}
        <div className="flex-1 flex flex-col justify-center px-12 py-10 ps-28 z-10 max-md:px-8 max-md:mt-5">
          <h2 className="text-white text-6xl font-bold leading-tight mb-6 max-md:text-4xl">
            Personalised Loan<br />Offers
          </h2>
          <p className="text-white text-2xl mb-8 max-md:text-xl">
            For all financial situations regardless<br /> of credit score or income
          </p>
          <MyButton
            bgColor="bg-mywhite"
            hoverBgColor="hover:bg-myneutral-475"
            textColor="text-myblack"
            iconBgColor="bg-myblue-500"
            className='z-10 w-60'
          >
            visit our offers
          </MyButton>
        </div>
        {/* Right: Media Placeholder */}
        <div className="flex-1 flex items-center justify-center z-9">
          <div className="bg-myneutral-800 rounded-2xl w-[95%] h-[90%] m-6 max-md:h-96"/>
        </div>
      </div>
    </section>
  );
}