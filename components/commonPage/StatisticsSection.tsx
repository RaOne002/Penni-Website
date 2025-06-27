"use client";

import React from 'react';

const stats = [
  {
    value: "$10B+",
    label: "in credit products",
  },
  {
    value: "$350M+",
    label: "loan offers made",
  },
  {
    value: "$200M+",
    label: "customer inquiries",
  },
];

export default function StatisticsSection() {
  return (
    <section className="p-5 mt-8 mb-8 w-[70%] bg-mygray-100 rounded-3xl max-w-[1558px] max-md:mt-10 max-md:w-[90%] max-md:max-w-[95vw] mx-auto">
      <div className="flex gap-7 max-lg:flex-col">
        <div className="w-[35%] max-lg:w-full">
          {/* --------- Desktop content --------- */}
          <div className="grow px-7 py-8 w-full text-2xl leading-10 text-center text-mygray-100 bg-myblue-500 rounded-xl max-lg:hidden">
            Join over
            <br />
            <span style={{ fontWeight: 700, fontSize: "36px" }}>
              32 million
            </span>
            <br />
            people who have been funded
          </div>
          {/* --------- Mobile/Tablet content --------- */}
          <div className="grow px-7 py-8 w-full text-xl leading-8 text-center text-mygray-100 bg-myblue-500 rounded-xl lg:hidden">
            Join over <span className="font-bold text-2xl">32 million</span> people who
            <br />
            have been funded
          </div>
        </div>
        <div className="flex justify-center items-center gap-15 w-full max-lg:flex-col max-lg:items-center max-lg:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center w-1/4 min-w-[120px] max-lg:w-full"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold text-myneutral-800 mt-6 lg:mt-0 text-center font-bold">
                {stat.value}
              </div>
              <p className="mt-2 text-xl text-myneutral-600 max-lg:text-base text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};