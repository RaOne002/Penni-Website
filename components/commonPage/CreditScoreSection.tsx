"use client";

import React from 'react';

export default function CreditScoreSection() {
  return (
    <section className="flex flex-col items-center px-4 py-6 w-full bg-mywhite rounded-[30px] md:px-20 md:py-10 md:max-w-[1797px]">
      <h2 className="text-3xl font-bold text-center text-neutral-my800 w-full max-w-full md:text-6xl md:w-[967px] md:mx-auto max-md:m-7">
        Millions of dollars funded for every credit score
      </h2>
      {/* --------- Toggle buttons for desktop --------- */}
      <div className="flex relative items-center pr-2 mt-4 text-base font-semibold bg-mywhite border border-solid border-myneutral-800 rounded-[47px] md:pr-2 md:mt-10 md:text-lg md:w-auto w-full max-w-xs mx-auto max-lg:hidden">
        <div className="flex z-0 shrink-0 self-stretch my-auto bg-myblue-500 h-10 rounded-[70px] w-[110px] md:h-[62px] md:w-[160px]" />
        <div className="z-0 self-stretch my-auto text-myneutral-800 px-2 max-md:px-0 max-md:pl-1">
          Income Range
        </div>
        <div className="absolute top-2 z-0 px-2 self-start h-6 text-mywhite left-[14px] w-[90px] md:top-4.5 md:w-[160px] md:h-8 max-md:px-0">
          Credit Score
        </div>
      </div>
      {/* --------- Toggle buttons for mobile/tablet --------- */}
      <div className="flex relative items-center mt-4 text-base font-semibold w-full max-w-xs mx-auto max-md:text-sm max-md:w-[220px] max-md:mb-5 max-md:bg-myblue-500 max-md:rounded-full lg:hidden">
        {/* Credit Score button (active) */}
        <button
          className="flex-1 h-10 rounded-l-full bg-myblue-500 text-mywhite transition-colors duration-200 border border-myblue-500 z-10"
          style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
        >
          Credit Score
        </button>
        {/* Income Range button (inactive) */}
        <button
          className="flex-1 h-10 rounded-full bg-mywhite text-myneutral-800 border border-myneutral-800 border-l-0 transition-colors duration-200"
        >
          Income Range
        </button>
      </div>
      <div className="self-stretch px-2 py-4 mt-4 bg-mygray-100 rounded-[20px] md:px-14 md:py-9 md:mt-8 md:rounded-[30px] max-md:bg-transparent">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">
          {/* Chart - mobile/tablet: first, desktop: right column */}
          <div className="order-2 lg:order-2 w-full lg:w-[60%] max-lg:order-1 max-lg:mb-10">
            <div className="w-full max-w-3xl mx-auto bg-mygray-200 rounded-2xl py-6 px-2 md:rounded-3xl md:py-10 md:px-8">
              {/* Y-axis labels and grid lines */}
              <div className="relative h-[220px] flex md:h-[420px]">
                {/* Y-axis labels */}
                <div className="flex flex-col justify-between h-full mr-2 text-xs text-myzinc-200 font-medium md:mr-4 md:text-sm">
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
                    <div className="border-t border-myzinc-200 w-full" />
                    <div className="border-t border-myzinc-200 w-full" />
                    <div className="border-t border-myzinc-200 w-full" />
                    <div className="border-t border-myzinc-200 w-full" />
                    <div className="border-t border-transparent w-full" />
                  </div>
                  {/* Bars */}
                  <div className="relative flex items-end h-full z-10 gap-2 px-2 md:gap-6 md:px-6">
                    <div className="bg-myneutral-800 rounded-t-xl w-1/5 md:rounded-t-2xl md:w-25" style={{ height: "60%" }} />
                    <div className="bg-myblue-500 rounded-t-xl w-1/5 md:rounded-t-2xl md:w-25" style={{ height: "75%" }} />
                    <div className="bg-myneutral-800 rounded-t-xl w-1/5 md:rounded-t-2xl md:w-25" style={{ height: "70%" }} />
                    <div className="bg-myblue-500 rounded-t-xl w-1/5 md:rounded-t-2xl md:w-25" style={{ height: "90%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Cards - mobile/tablet: after chart, desktop: left column */}
          <div className="order-1 lg:order-1 flex flex-col gap-4 w-full lg:w-[40%] max-lg:order-2 max-lg:mb-8">
            {/* Card 1 */}
            <div className="flex items-center gap-2 px-2 py-3 bg-myblue-500 rounded-2xl w-full md:gap-6 md:px-6 md:py-4 md:rounded-3xl">
              <div className="flex items-center justify-center bg-mywhite rounded w-20 h-14 md:rounded-xs md:w-32 md:h-24">
                <span className="text-xl font-bold text-myblue-500 md:text-3xl">63M+</span>
              </div>
              <span className="text-base font-medium text-mywhite md:text-lg">
                Total loan offers made through our platform
              </span>
            </div>
            {/* Card 2 */}
            <div className="flex items-center gap-2 px-2 py-3 bg-myemerald-400 rounded-2xl w-full md:gap-6 md:px-6 md:py-3 md:rounded-2xl">
              <div className="flex items-center justify-center bg-myneutral-800 rounded w-20 h-14 md:rounded-lg md:w-32 md:h-24">
                <span className="text-xl font-bold text-myemerald-400 md:text-3xl">14M+</span>
              </div>
              <span className="text-base font-medium text-myneutral-900 md:text-lg">
                Total customers funded through our platform
              </span>
            </div>
            {/* Card 3 */}
            <div className="flex items-center gap-2 px-2 py-3 bg-myblue-500 rounded-2xl w-full md:gap-4 md:px-4 md:py-3 md:rounded-2xl">
              <div className="flex items-center justify-center bg-mywhite rounded w-20 h-14 md:rounded-lg md:w-32 md:h-24">
                <span className="text-xl font-bold text-myblue-500 md:text-3xl">$1.9B+</span>
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