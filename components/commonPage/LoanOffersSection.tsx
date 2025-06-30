"use client";

import React from 'react';
import LenQBgWhiteSvg from '../svg/LenQBgWhiteSvg';
import LenQFlowerSvg from '../svg/LenQFlowerSvg';
import MyButton from '../ui/MyButton';

export default function LoanOffersSection() {
  return (
    <section className="rounded-3xl mb-8 p-3 bg-myneutral-850 w-full max-w-[1500px] max-md:rounded-none">
      <div className="relative flex flex-row items-stretch rounded-2xl min-h-[680px] overflow-hidden max-md:flex-col max-md:min-h-0">
        <LenQBgWhiteSvg
          className="object-cover absolute inset-0 size-full"
          aria-label="Background"
        />
        {/* Top-left flower for desktop */}
        <LenQFlowerSvg
          className="absolute z-10 left-[38%] top-5 w-16 h-16 md:w-36 md:h-36 max-md:hidden"
          aria-label="Flower"
        />
        {/* Bottom-right flower for desktop */}
        <LenQFlowerSvg
          className="absolute z-10 right-1/12 bottom-5 w-12 h-12 md:w-32 md:h-32 max-md:hidden"
          aria-label="Flower"
        />
        {/* Flower for mobile screen */}
        <LenQFlowerSvg
          className="absolute z-10 right-[2%] top-[45%] w-24 h-24 max-md:block hidden"
          aria-label="Flower"
        />
        {/* Left: Media Placeholder (will be at bottom on mobile) */}
        <div className="flex-1 flex items-center justify-center z-9 max-md:w-full max-md:min-h-[120px]">
          <div className="bg-myneutral-800 rounded-2xl w-[95%] h-[90%] m-6 max-md:w-[95%] max-md:h-[420px] max-md:my-20 max-md:mx-5" />
        </div>
        {/* Right: Content (will be at top on mobile) */}
        <div className="flex-1 flex flex-col justify-center px-12 py-10 ps-28 max-md:order-first max-md:px-8 max-md:py-6">
          <h2 className="text-mywhite text-5xl font-bold leading-tight mb-6 max-md:text-4xl max-md:mb-4">
            Get loan offers in as {" "}<br />little as 60 seconds
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
