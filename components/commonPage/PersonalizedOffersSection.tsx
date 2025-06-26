"use client";

import React from 'react';
import PennyBgWhiteSvg from '../svg/PennyBgWhiteSvg';
import PennyFlowerSvg2 from '../svg/PennyFlowerSvg2'; 
import PennyFlowerSvg3 from '../svg/PennyFlowerSvg3'; 
import MyButton from '../ui/MyButton';

export default function PersonalizedOffersSection() {
  return (
    <section className="rounded-3xl p-3 bg-myneutral-850 w-full max-w-[1500px] max-md:rounded-none">
      <div className="relative flex flex-row items-stretch rounded-2xl min-h-[700px] overflow-hidden max-md:flex-col max-md:min-h-0">
        <PennyBgWhiteSvg
          className="object-cover absolute inset-0 size-full"
          aria-label="Background"
        />
        {/* Top-left flower */}
        <PennyFlowerSvg3
          className="absolute left-[60px] top-[34px] z-10 max-md:hidden"
          aria-label="Flower"
        />
        {/* Bottom-right flower */}
        <PennyFlowerSvg2
          className="absolute right-[650px] bottom-[10px] z-10 max-md:hidden"
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
            className='z-10 w-56 max-md:pl-7 max-md:py-1 max-md:pr-0'
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