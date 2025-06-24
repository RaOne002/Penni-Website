"use client";

import React from 'react';
import PennyBgWhiteSvg from '../svg/PennyBgWhiteSvg'; 
import PennyFlowerSvg1 from '../svg/PennyFlowerSvg1'; 
import PennyFlowerSvg2 from '../svg/PennyFlowerSvg2'; 
import MyButton from '../ui/MyButton';

export default function LoanOffersSection() {
  return (
    <section className="rounded-3xl p-3 bg-neutral-800 w-full max-w-[1500px]">
      <div className="relative flex flex-row items-stretch rounded-2xl min-h-[680px] overflow-hidden">
        <PennyBgWhiteSvg
          className="object-cover absolute inset-0 size-full"
          aria-label="Background"
        />
        {/* Top-left flower */}
        <PennyFlowerSvg1
          className="absolute left-[565px] top-[34px] z-10"
          aria-label="Flower"
        />
        {/* Bottom-right flower */}
        <PennyFlowerSvg2
          className="absolute right-[50px] bottom-[50px] z-10"
          aria-label="Flower"
        />
        {/* Left: Media Placeholder */}
        <div className="flex-1 flex items-center justify-center z-9">
          <div className="bg-neutral-800 rounded-2xl w-[95%] h-[90%] m-6" />
        </div>
        {/* Right: Content */}
        <div className="flex-1 flex flex-col justify-center px-12 py-10 ps-28">
          <h2 className="text-white text-5xl font-bold leading-tight mb-6">
            Get loan offers in as<br />little as 60 seconds
          </h2>
          <p className="text-white text-xl mb-4">
            You deserve options. So we built an<br />
            industry leading platform to<br />
            compete for your business.
          </p>
          <ul className="text-white text-xl mb-8 list-disc list-inside space-y-1">
            <li>Loans up to $100,000</li>
            <li>APR starting at 5.99%</li>
            <li>Repayment terms up to 7 years</li>
          </ul>
          <MyButton
            bgColor="bg-white"
            hoverBgColor="hover:bg-zinc-300"
            textColor="text-black"
            iconBgColor="bg-blue-500"
            className='z-10 w-56'
          >Visit our offers
          </MyButton>
        </div>
      </div>
    </section>
  );
};
