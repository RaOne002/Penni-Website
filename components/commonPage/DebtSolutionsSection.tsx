"use client";

import React from 'react';
import PennyBgWhiteSvg from '../svg/PennyBgWhiteSvg'; 
import MyButton from '../ui/MyButton';
import Card from '../ui/Card';
// import CardCarousel from '../ui/CardCarousel';

export default function DebtSolutionsSection() {
  return (
    <section className="overflow-hidden mt-15 w-full rounded-3xl bg-neutral-800 max-w-[1500px] max-md:mt-10 max-md:max-w-full">
      <div className="flex relative flex-col px-16 py-12 w-full min-h-[680px] max-md:px-5 max-md:max-w-full">
        <PennyBgWhiteSvg
          className="object-cover absolute inset-0 size-full"
          aria-label="Background"
        />
        <div className="flex relative flex-wrap gap-5 justify-between w-full font-medium max-md:mr-2.5 max-md:max-w-full">
          <h2 className="text-6xl leading-none text-white max-md:max-w-full max-md:text-4xl">
            Debt happens.Pennie can help.
          </h2>
          {/* Desktop: show in header */}
          <div className="hidden md:block">
            <MyButton
              bgColor="bg-mywhite"
              hoverBgColor="hover:bg-myneutral-475"
              textColor="text-myblack"
              iconBgColor="bg-myblue-500"
            >
              Learn more
            </MyButton>
          </div>  
        </div>
        <div className="relative mt-11 ml-3 max-md:mt-10 max-md:max-w-full">
          <Card  />
        </div>
        {/* Mobile: show at bottom */}
          <div className="md:hidden mt-8 w-full flex justify-center z-10">
            <MyButton
              bgColor="bg-mywhite"
              hoverBgColor="hover:bg-myneutral-475"
              textColor="text-myblack"
              iconBgColor="bg-myblue-500"
            >
              Learn more
            </MyButton>
          </div>
      </div>
    </section>
  );
}