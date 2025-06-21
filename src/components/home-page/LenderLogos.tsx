"use client";

import React from 'react';

const logos = ["logo", "logo", "logo", "logo", "logo", "logo"];

export default function LenderLogos() {
  return (
    <section className="mt-11 w-full max-md:mt-10 max-md:max-w-full">
      <h2 className="mx-auto text-4xl font-bold text-center text-neutral-800 w-[998px] max-md:max-w-full max-md:text-4xl mb-7">
        Browse exclusive offers from over 1,000 lenders competing for your
        business
      </h2>
      <div className="flex flex-wrap gap-25 items-center px-3 py-2 w-[1250px] bg-emerald-400 max-w-[1500px] rounded-[88px] max-md:max-w-full mx-auto">
        <div className="flex flex-col justify-center items-center self-stretch py-2 bg-neutral-800 rounded-[45px] w-[150px] max-md:px-1">
          <img
            src="./lender_logo.svg"
            className="object-contain aspect-square w-[47px]"
            alt="Lender logo"
          />
        </div>
        {logos.map((logo, idx) => (
          <span
            key={idx}
            className="self-stretch my-auto text-3xl font-semibold text-center text-neutral-800"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
};
