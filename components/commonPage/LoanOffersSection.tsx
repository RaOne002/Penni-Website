"use client";

import React from 'react';
import PennyBgWhiteSvg from '../svg/PennyBgWhiteSvg'; 
import PennyFlowerSvg1 from '../svg/PennyFlowerSvg1'; 
import PennyFlowerSvg2 from '../svg/PennyFlowerSvg2'; 
import PennyFlowerSvg3 from '../svg/PennyFlowerSvg3'; 
import MyButton from '../ui/MyButton';

export default function LoanOffersSection() {
  return (
    <section className="rounded-3xl p-3 bg-myneutral-850 w-full max-w-[1500px] max-md:rounded-none">
      <div className="relative flex flex-row items-stretch rounded-2xl min-h-[680px] overflow-hidden max-md:flex-col max-md:min-h-0">
  <PennyBgWhiteSvg
    className="object-cover absolute inset-0 size-full"
    aria-label="Background"
  />
  {/* Top-left flower for desktop */}
  <PennyFlowerSvg1
    className="absolute left-[565px] top-[14px] z-10 max-md:hidden"
    aria-label="Flower"
  />
  {/* Bottom-right flower for desktop */}
  <PennyFlowerSvg2
    className="absolute right-[50px] bottom-[50px] z-10 max-md:hidden"
    aria-label="Flower"
  />
  {/* Flower for mobile screen */}
  <PennyFlowerSvg3
    className="absolute left-[270px] bottom-[390px] z-10 max-md:block hidden"
    aria-label="Flower"
  />
  {/* Left: Media Placeholder (will be at bottom on mobile) */}
  <div className="flex-1 flex items-center justify-center z-9 max-md:w-full max-md:min-h-[120px]">
    <div className="bg-myneutral-800 rounded-2xl w-[95%] h-[90%] m-6 max-md:w-[95%] max-md:h-[420px] max-md:my-20 max-md:mx-5" />
  </div>
  {/* Right: Content (will be at top on mobile) */}
  <div className="flex-1 flex flex-col justify-center px-12 py-10 ps-28 max-md:order-first max-md:px-8 max-md:py-6">
    <h2 className="text-mywhite text-5xl font-bold leading-tight mb-6 max-md:text-4xl max-md:mb-4">
      Get loan offers in as {" "}<br/>little as 60 seconds
    </h2>
    <p className="text-mywhite text-xl mb-4 max-md:text-xl max-md:mb-3">
      You deserve options. So we built an<br className="max-md:hidden" />
      industry leading platform to<br className="max-md:hidden" />
      compete for your business.
    </p>
    <ul className="text-mywhite text-xl mb-8 list-disc list-inside space-y-1 max-md:text-xl max-md:mb-4">
      <li>Loans up to $100,000</li>
      <li>APR starting at 5.99%</li>
      <li>Repayment terms up to 7 years</li>
    </ul>
    <div className='max-md:flex max-md:justify-center max-md:mt-8 z-10'>
      <MyButton
        bgColor="bg-white"
        hoverBgColor="hover:bg-zinc-300"
        textColor="text-black"
        iconBgColor="bg-blue-500"
        className='z-10 w-51 max-md:py-1 max-md:pl-8 max-md:pr-0'
      >Learn more
      </MyButton>
    </div>
  </div>
</div>
    </section>
  );
};
