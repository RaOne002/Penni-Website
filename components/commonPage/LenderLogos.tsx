"use client";

import React from 'react';
import LenderLogoSvg from '../svg/LenderLogoSvg';

const logos = ["logo", "logo", "logo", "logo", "logo"];

export default function LenderLogos() {
  return (
    <section className="mt-11 w-full max-md:mt-10 max-md:max-w-full">
      <h2 className="mx-auto text-4xl font-bold text-center text-myneutral-800 max-w-[998px] w-full max-md:text-2xl max-md:px-3 max-md:font-medium mb-7">
        Browse exclusive offers from over 1,000 lenders competing for your
        business
      </h2>
      <div className="
        flex flex-wrap items-center justify-center
        gap-10 md:gap-16 lg:gap-24
        px-2 py-2
        w-full max-w-[1250px]
        bg-myemerald-400
        rounded-[44px] md:rounded-[88px]
        mx-auto
        max-md:rounded-none
        max-md:text-xs
        ">
        <div className="flex flex-col justify-center items-center self-stretch py-2 bg-myneutral-800 rounded-[45px] w-[90px] md:w-[150px] max-md:hidden">
          <LenderLogoSvg className="object-contain aspect-square w-[32px] md:w-[47px]" aria-label="Lender logo" />
        </div>
        {logos.map((logo, idx) => (
          <span
            key={idx}
            className="flex items-center justify-center self-stretch my-auto text-lg md:text-2xl lg:text-3xl font-semibold text-center text-myneutral-800 min-w-[60px] md:min-w-[100px]"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
};