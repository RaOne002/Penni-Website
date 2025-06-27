"use client";

import React from "react";

const steps = [
  { number: "01", title: "Tell us what you need", desc: "Enter your loan information" },
  { number: "02", title: "Tell us what you need", desc: "Enter your loan information", active: true },
  { number: "03", title: "Tell us what you need", desc: "Enter your loan information" },
  { number: "04", title: "Tell us what you need", desc: "Enter your loan information" },
];

export default function GetStartedSection() {
  return (
    <section className="w-full max-w-[1400px] mx-auto py-10 px-4">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-10">
        How to get started?
      </h2>
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left: Image/Illustration Placeholder */}
        <div className="flex-1 bg-mygray-200 rounded-xl min-h-[420px] md:min-h-[500px] lg:min-h-[600px]" />
        {/* Right: Steps */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-8 min-h-[150px] flex flex-col justify-between
                ${step.active
                  ? "bg-myneutral-850 text-mywhite"
                  : "bg-myzinc-100 text-myneutral-900"
                }`}
            >
              <div className="text-5xl font-bold mb-2">{step.number}</div>
              <div>
                <div className="font-bold text-lg mb-1">{step.title}</div>
                <div className="text-base">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}