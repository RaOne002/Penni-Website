"use client";

import React from 'react';
import LenderLogoSvg from '../svg/LenderLogoSvg';

const logos = ["logo", "logo", "logo", "logo", "logo", "logo"];

export default function LenderLogos() {
  return (
    <section className="mt-11 w-full max-md:mt-10 max-md:max-w-full">
      <h2 className="mx-auto text-4xl font-bold text-center text-myneutral-800 w-[998px] max-md:max-w-full max-md:text-3xl max-md:px-3 max-md:font-medium mb-7">
        Browse exclusive offers from over 1,000 lenders competing for your
        business
      </h2>
      <div className="flex flex-wrap gap-25 items-center px-3 py-2 w-[1250px] bg-myemerald-400 max-w-[1500px] rounded-[88px] mx-auto max-md:max-w-full max-md:rounded-none max-md:gap-10 max-md:text-xs">
        <div className="flex flex-col justify-center items-center self-stretch py-2 bg-myneutral-800 rounded-[45px] w-[150px] max-md:hidden">
          <LenderLogoSvg className="object-contain aspect-square w-[47px]" aria-label="Lender logo" />
        </div>
        {logos.map((logo, idx) => (
          <span
            key={idx}
            className="self-stretch my-auto text-3xl max-md:text-sm font-semibold text-center text-myneutral-800"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
};
