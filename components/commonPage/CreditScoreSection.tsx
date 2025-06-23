"use client";

import React from 'react';

export default function CreditScoreSection() {
  return (
    <section className="flex flex-col items-center px-4 py-6 w-full bg-white rounded-[30px] md:px-20 md:py-10 md:max-w-[1797px]">
      <h2 className="text-3xl font-bold text-center text-neutral-800 w-full max-w-full md:text-6xl md:w-[967px] md:mx-auto max-md:m-7">
        Millions of dollars funded for every credit score
      </h2>
      {/* Toggle buttons */}
      <div className="flex relative items-center pr-2 mt-4 text-base font-semibold bg-white border border-solid   border-neutral-800 rounded-[47px] md:pr-2 md:mt-10 md:text-lg md:w-auto w-full max-w-xs mx-auto max-md:text-sm max-md:w-[220px] max-md:mb-5">
        <div className="flex z-0 shrink-0 self-stretch my-auto bg-blue-500 h-10 rounded-[70px] w-[110px] md:h-[62px] md:w-[160px]" />
        <div className="z-0 self-stretch my-auto text-neutral-800 px-2 max-md:px-0 max-md:pl-1">
          Income Range
        </div>
        <div className="absolute top-2 z-0 px-2 self-start h-6 text-white left-[14px] w-[90px] md:top-4.5 md:w-[160px] md:h-8 max-md:px-0">
          Credit Score
        </div>
      </div>
      <div className="self-stretch px-2 py-4 mt-4 bg-gray-100 rounded-[20px] md:px-14 md:py-9 md:mt-8 md:rounded-[30px] max-md:bg-transparent">
        <div className="flex flex-col md:flex-row gap-4 md:gap-5">
          {/* Chart - mobile: first, desktop: right column */}
          <div className="order-2 md:order-2 w-full md:w-[60%] max-md:order-1 max-md:mb-10">
            <div className="w-full max-w-3xl mx-auto bg-gray-200 rounded-2xl py-6 px-2 md:rounded-3xl md:py-10 md:px-8">
              {/* Y-axis labels and grid lines */}
              <div className="relative h-[220px] flex md:h-[420px]">
                {/* Y-axis labels */}
                <div className="flex flex-col justify-between h-full mr-2 text-xs text-zinc-500 font-medium md:mr-4 md:text-sm">
                  <span>800M</span>
                  <span>600M</span>
                  <span>400M</span>
                  <span>200M</span>
                  <span>0M</span>
                </div>
                {/* Chart grid and bars */}
                <div className="relative flex-1 flex flex-col">
                  {/* Grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between z-0">
                    <div className="border-t border-zinc-300 w-full" />
                    <div className="border-t border-zinc-300 w-full" />
                    <div className="border-t border-zinc-300 w-full" />
                    <div className="border-t border-zinc-300 w-full" />
                    <div className="border-t border-transparent w-full" />
                  </div>
                  {/* Bars */}
                  <div className="relative flex items-end h-full z-10 gap-2 px-2 md:gap-6 md:px-6">
                    <div className="bg-neutral-800 rounded-t-xl w-1/5 md:rounded-t-2xl md:w-25" style={{ height: "60%" }} />
                    <div className="bg-blue-500 rounded-t-xl w-1/5 md:rounded-t-2xl md:w-25" style={{ height: "75%" }} />
                    <div className="bg-neutral-800 rounded-t-xl w-1/5 md:rounded-t-2xl md:w-25" style={{ height: "70%" }} />
                    <div className="bg-blue-500 rounded-t-xl w-1/5 md:rounded-t-2xl md:w-25" style={{ height: "90%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Cards - mobile: after chart, desktop: left column */}
          <div className="order-1 md:order-1 flex flex-col gap-4 w-full md:w-[40%] max-md:order-2 max-md:mb-8">
            {/* Card 1 */}
            <div className="flex items-center gap-2 px-2 py-3 bg-blue-500 rounded-2xl w-full md:gap-6 md:px-6 md:py-4 md:rounded-3xl">
              <div className="flex items-center justify-center bg-white rounded w-20 h-14 md:rounded-xs md:w-32 md:h-24">
                <span className="text-xl font-bold text-blue-500 md:text-3xl">63M+</span>
              </div>
              <span className="text-base font-medium text-white md:text-lg">
                Total loan offers made through our platform
              </span>
            </div>
            {/* Card 2 */}
            <div className="flex items-center gap-2 px-2 py-3 bg-emerald-400 rounded-2xl w-full md:gap-6 md:px-6 md:py-3 md:rounded-2xl">
              <div className="flex items-center justify-center bg-neutral-800 rounded w-20 h-14 md:rounded-lg md:w-32 md:h-24">
                <span className="text-xl font-bold text-emerald-400 md:text-3xl">14M+</span>
              </div>
              <span className="text-base font-medium text-neutral-900 md:text-lg">
                Total customers funded through our platform
              </span>
            </div>
            {/* Card 3 */}
            <div className="flex items-center gap-2 px-2 py-3 bg-blue-500 rounded-2xl w-full md:gap-4 md:px-4 md:py-3 md:rounded-2xl">
              <div className="flex items-center justify-center bg-white rounded w-20 h-14 md:rounded-lg md:w-32 md:h-24">
                <span className="text-xl font-bold text-blue-500 md:text-3xl">$1.9B+</span>
              </div>
              <span className="text-base font-medium text-white md:text-lg">
                Total credit products through our platform
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}