"use client";

import React, { useState } from 'react';

const creditCards = [
  {
    bg: "bg-myblue-500",
    boxBg: "bg-mywhite",
    textColor: "text-myblue-500",
    value: "63M+",
    desc: "Total loan offers made through our platform",
    descColor: "text-mywhite",
    boxRounded: "md:rounded-lg",
  },
  {
    bg: "bg-myemerald-400",
    boxBg: "bg-myneutral-800",
    textColor: "text-myemerald-400",
    value: "14M+",
    desc: "Total customers funded through our platform",
    descColor: "text-myneutral-900",
    boxRounded: "md:rounded-lg",
  },
  {
    bg: "bg-myblue-500",
    boxBg: "bg-mywhite",
    textColor: "text-myblue-500",
    value: "$1.9B+",
    desc: "Total credit products through our platform",
    descColor: "text-mywhite",
    boxRounded: "md:rounded-lg",
  },
];

export default function CreditScoreSection() {
  const [activeTab, setActiveTab] = useState<"credit" | "income">("credit");

  return (
    <section className="flex flex-col items-center px-4 py-6 w-full bg-mywhite rounded-[30px] md:px-20 md:py-10 md:max-w-[1797px]">
      <h2 className="text-3xl font-bold text-center text-neutral-my800 w-full max-w-full md:text-6xl md:w-[967px] md:mx-auto max-md:m-7">
        Millions of dollars funded for every credit score
      </h2>
      {/* --------- Slider Toggle --------- */}
      <div className="relative flex items-center w-full max-w-xs mx-auto mt-6 mb-4">
        <div className="w-full h-14 bg-mywhite border border-myneutral-800 rounded-full flex items-center relative">
          {/* Slider */}
          <span
            className={`
              absolute h-14 w-[50%] rounded-full bg-myblue-500 transition-all duration-300
              ${activeTab === "income" ? "translate-x-[102%]" : "translate-x-0"}
              z-0
            `}
            style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)" }}
          />
          {/* Credit Score */}
          <button
            className={`
              flex-1 h-14 rounded-full z-10 font-semibold text-lg transition-colors duration-200
              ${activeTab === "credit" ? "text-mywhite" : "text-myneutral-800"}
            `}
            onClick={() => setActiveTab("credit")}
          >
            Credit Score
          </button>
          {/* Income Range */}
          <button
            className={`
              flex-1 h-14 rounded-full z-10 font-semibold text-lg transition-colors duration-200
              ${activeTab === "income" ? "text-mywhite" : "text-myneutral-800"}
            `}
            onClick={() => setActiveTab("income")}
          >
            Income Range
          </button>
        </div>
      </div>
      {/* --------- Content --------- */}
      <div className="self-stretch px-2 py-4 mt-4 bg-mygray-100 rounded-[20px] md:px-14 md:py-9 md:mt-8 md:rounded-[30px] max-md:bg-transparent">
        {/* ***---------- Credit Score Tab Content ----------*** */}
        {activeTab === 'credit' ? (
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
              {creditCards.map((card, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-2 px-2 py-2 ${card.bg} rounded-2xl w-full md:gap-6 md:px-4 md:py-4 md:rounded-3xl`}
                >
                  <div className={`flex items-center justify-center ${card.boxBg} rounded w-20 h-14 ${card.boxRounded} md:w-32 md:h-24`}>
                    <span className={`text-xl font-bold ${card.textColor} md:text-3xl`}>{card.value}</span>
                  </div>
                  <span className={`text-base font-medium ${card.descColor} md:text-lg`}>
                    {card.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
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
              {creditCards.map((card, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-2 px-2 py-3 ${card.bg} rounded-2xl w-full md:gap-6 md:px-4 md:py-4 md:rounded-3xl`}
                >
                  <div className={`flex items-center justify-center ${card.boxBg} rounded w-20 h-14 ${card.boxRounded} md:w-32 md:h-24`}>
                    <span className={`text-xl font-bold ${card.textColor} md:text-3xl`}>{card.value}</span>
                  </div>
                  <span className={`text-base font-medium ${card.descColor} md:text-lg`}>
                    {card.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}