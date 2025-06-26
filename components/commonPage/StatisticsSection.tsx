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
    <section className="p-5 mt-11 w-[1100px] bg-mygray-100 rounded-3xl max-w-[1558px] max-md:mt-10 max-md:max-w-[90%]">
      <div className="flex gap-7 max-md:flex-col">
        <div className="w-[35%] max-md:ml-0 max-md:w-full">
          {/* --------- Desktop content --------- */}
          <div className="grow px-7 py-8 w-full text-2xl leading-10 text-center text-mygray-100 bg-myblue-500 rounded-xl max-md:hidden">
            Join over
            <br />
            <span style={{ fontWeight: 700, fontSize: "36px" }}>
              32 million
            </span>
            <br />
            people who have been funded
          </div>
          {/* --------- Mobile content --------- */}
          <div className="grow px-7 py-8 w-full text-xl leading-8 text-center text-mygray-100 bg-myblue-500 rounded-xl hidden max-md:block hidden">
            Join over <span style={{ fontWeight: 700, fontSize: "xl" }}>32 million</span> people who
            <br />
            have been funded
          </div>
        </div>
        <div className="flex justify-center items-center gap-15 w-full max-md:flex-col max-md:items-center max-md:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center w-1/4 min-w-[120px] max-md:w-full"
            >
              <div className="text-6xl font-semibold text-myneutral-800 max-md:mt-6 max-md:text-4xl text-center max-md:font-bold">
                {stat.value}
              </div>
              <p className="mt-2 text-xl text-myneutral-600 max-md:text-base text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
