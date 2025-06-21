"use client";

import React from 'react';

const stats = [
  {
    value: "$10B+",
    label: "in credit products",
  },
  {
    value: "350M+",
    label: "loan offers made",
  },
  {
    value: "200M+",
    label: "customer inquiries",
  },
];

export default function StatisticsSection() {
  return (
    <section className="p-5 mt-11 w-[1100px] bg-gray-100 rounded-3xl max-w-[1558px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-7 max-md:flex-col">
        <div className="w-[35%] max-md:ml-0 max-md:w-full">
          <div className="grow px-7 py-8 w-full text-2xl leading-10 text-center text-gray-100 bg-blue-500 rounded-xl max-md:px-5 max-md:mt-10">
            Join over
            <br />
            <span style={{ fontWeight: 700, fontSize: "36px" }}>
              32 million
            </span>
            <br />
            people who have been funded
          </div>
        </div>
        <div className="flex justify-center items-center gap-15 w-full max-md:flex-col max-md:items-center max-md:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center w-1/4 min-w-[120px] max-md:w-full"
            >
              <div className="text-6xl font-semibold text-neutral-800 max-md:mt-6 max-md:text-4xl text-center">
                {stat.value}
              </div>
              <p className="mt-2 text-xl text-neutral-600 max-md:text-base text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
