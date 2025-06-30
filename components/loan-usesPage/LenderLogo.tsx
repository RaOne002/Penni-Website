"use client";

import React from 'react';

type Section = {
  label: string;
  // Add other properties if needed
};

interface LenderLogosProps {
  sections: Section[];
  activeIdx: number;
  setActiveIdx: (idx: number) => void;
}

export default function LenderLogos({ sections, activeIdx, setActiveIdx }: LenderLogosProps) {
  return (
    <section className="mt-8 w-full max-md:mt-10 max-md:max-w-full pb-8">
      {/* Slider Tabs */}
      <div
        className="
          flex items-center justify-between
          w-full max-w-[78%] mx-auto
          bg-myemerald-400
          rounded-full
          overflow-hidden
          shadow
          md:h-20
          gap-18
          max-md:flex-wrap max-md:gap-2 max-md:h-auto max-md:px-2 max-md:rounded-none max-md:w-full max-md:justify-center
        "
      >
        {sections.map((section, idx) => (
          <button
            key={idx}
            className={`flex items-center justify-center font-bold text-xl px-6 py-2 h-20 transition-all duration-200
              ${activeIdx === idx
                ? "bg-myneutral-800 text-mywhite rounded-full"
                : "text-myneutral-800 bg-transparent"
              }
              max-md:h-12 max-md:text-sm max-md:px-2 max-md:rounded-full
            `}
            onClick={() => setActiveIdx(idx)}
          >
            {section.label}
          </button>
        ))}
      </div>
    </section>
  );
}