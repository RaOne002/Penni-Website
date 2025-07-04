"use client";

import React from 'react';
import LenQBgWhiteSvg from '../svg/LenQBgWhiteSvg'; 
import MyButton from '../ui/MyButton';
import Card from '../ui/Card';
import { useRouter } from "next/navigation";
// import CardCarousel from '../ui/CardCarousel';

export default function DebtSolutionsSection() {
  const router = useRouter();

  return (
    <section className="overflow-hidden mt-15 w-full rounded-3xl bg-myneutral-850 max-w-[1500px] max-md:mt-10 max-md:max-w-full max-md:rounded-none max-md:px-5">
      <div className="flex relative flex-col px-16 py-12 w-full min-h-[680px] max-md:px-5 max-md:max-w-full">
        <LenQBgWhiteSvg
          className="object-cover absolute inset-0 size-full"
          aria-label="Background"
        />
        <div className="flex relative flex-wrap gap-5 justify-between w-full font-medium max-md:mr-2.5 max-md:max-w-full">
          {/* --------- Desktop: show in header --------- */}
          <h2 className="text-6xl leading-none text-mywhite max-md:hidden">
            Debt happens.LenQ can help.
          </h2>
          {/* --------- Mobile: show in header --------- */}
          <h2 className="text-6xl leading-none text-mywhite max-md:max-w-full max-md:text-4xl max-md:block hidden">
            Debt happens.<br />LenQ can help.
          </h2>
          {/* --------- Desktop: show in header --------- */}
          <div className="hidden md:block">
            <MyButton
              bgColor="bg-mywhite"
              hoverBgColor="hover:bg-myneutral-475"
              textColor="text-myblack"
              iconBgColor="bg-myblue-500"
              onClick={() => router.push("./loan-uses")}
            >
              Learn more
            </MyButton>
          </div>  
        </div>
        <div className="relative mt-11 ml-3 max-md:mt-10 max-md:max-w-full">
          <Card  />
        </div>
        {/* --------- Mobile: show at bottom --------- */}
          <div className="md:hidden mt-8 w-full flex justify-center z-10">
            <MyButton
              bgColor="bg-mywhite"
              hoverBgColor="hover:bg-myneutral-475"
              textColor="text-myblack"
              iconBgColor="bg-myblue-500"
              onClick={() => router.push("/loan-uses")}
            >
              Learn more
            </MyButton>
          </div>
      </div>
    </section>
  );
}