"use client";

import React from 'react';

const logos = [
  "Credit card refinancing",
  "Home improvement",
  "Large purchases"
];

export default function LenderLogos() {
  return (
    <section className="mt-11 w-full max-md:mt-10 max-md:max-w-full pb-16">
      <div
        className="
          flex items-center justify-center
          w-full max-w-[78%] mx-auto
          bg-myemerald-400
          rounded-full
          overflow-hidden
          shadow
          md:h-20
          gap-18
          max-md:flex-wrap max-md:gap-2 max-md:h-auto max-md:px-2 max-md:rounded-none max-md:w-full 
        "
      >
        {/* Active/selected tab */}
        <div className="flex items-center justify-center bg-myneutral-800 text-mywhite font-bold text-xl px-6 py-2 rounded-full h-20 min-w-[260px] max-md:h-12 max-md:min-w-[110px] max-md:text-sm max-md:px-2 max-md:rounded-full">
          consolidation
        </div>
        {/* Other tabs */}
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center text-myneutral-800 font-bold text-xl px-6 py-2 h-20 max-md:h-12 max-md:text-sm max-md:px-2"
          >
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
};