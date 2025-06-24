"use client";

import React from 'react';
import PennyBgWhiteSvg from '../svg/PennyBgWhiteSvg';
// import PennyFlowerSvg from '../svg/PennyFlowerSvg';  
import MyButton from '../ui/MyButton';

export default function PersonalizedOffersSection() {
  return (
    <section className="rounded-3xl p-3 bg-neutral-800 w-full max-w-[1500px]">
      <div className="relative flex flex-row items-stretch rounded-2xl min-h-[700px] overflow-hidden">
        <PennyBgWhiteSvg
          className="object-cover absolute inset-0 size-full"
          aria-label="Background"
        />
        {/* Top-left flower */}
        <img
          src="/penny-flower.svg"
          alt="Flower"
          className="absolute left-[60px] top-[34px] w-[60px] z-10"
        />
        {/* Bottom-right flower */}
        <img
          src="/penny-flower.svg"
          alt="Flower"
          className="absolute right-[650px] bottom-[10px] w-[100px] z-10"
        />
        {/* Left: Content */}
        <div className="flex-1 flex flex-col justify-center px-12 py-10 ps-28 z-10">
          <h2 className="text-white text-6xl font-bold leading-tight mb-6 max-md:text-4xl">
            Personalised Loan<br />Offers
          </h2>
          <p className="text-white text-2xl mb-8 max-md:text-xl">
            For all financial situations regardless<br /> of credit score or income
          </p>
          <MyButton
            bgColor="bg-white"
            hoverBgColor="hover:bg-zinc-300"
            textColor="text-black"
            iconBgColor="bg-blue-500"
            className='z-10 w-55'
          >
            visit our offers
          </MyButton>
        </div>
        {/* Right: Media Placeholder */}
        <div className="flex-1 flex items-center justify-center z-9">
          <div className="bg-neutral-800 rounded-2xl w-[95%] h-[90%] m-6" />
        </div>
      </div>
    </section>
  );
}