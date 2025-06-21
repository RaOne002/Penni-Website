import React, { useState } from 'react';

const faqs = [
  {
    question: "How is Pennie different than other lenders?",
    answer: "Pennie offers a unique platform that matches you with multiple lenders, increasing your chances of approval and better rates."
    
  },
  {
    question: "How do I get offers?",
    answer: "Simply fill out our application form and you’ll receive personalized offers from our network of lenders."
  },
  {
    question: "What does it mean to be pre-approved?",
    answer: "Pre-approval means you meet the initial criteria for a loan, but final approval depends on further verification."
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="px-16 py-20 max-w-full bg-white w-[1500px] max-md:px-5 max-md:mt-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[43%] max-md:ml-0 max-md:w-full">
          <div className="flex shrink-0 mx-auto max-w-full bg-neutral-400 h-[550px] w-[698px] max-md:mt-10" />
        </div>
        <div className="ml-5 w-[57%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col pt-15 self-stretch my-auto w-full text-3xl font-medium text-neutral-800 max-md:mt-10 max-md:max-w-full">
            <h2 className="self-start text-5xl font-semibold max-md:max-w-full max-md:text-4xl mb-8">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-6">
              {faqs.map((faq, idx) => (
  <div key={idx} className="relative">
    <div
      className="bg-violet-50 rounded-full px-8 py-6 text-[1.5rem] font-normal flex items-center justify-between cursor-pointer transition-shadow shadow-sm hover:shadow-md"
      onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
    >
      <div className="flex-1">{faq.question}</div>
      <span className="ml-6 flex items-center justify-center w-10 h-10 rounded-full bg-blue-500">
        <svg
          className={`transition-transform duration-300 ${openIdx === idx ? "rotate-180" : ""}`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </span>
    </div>
    {openIdx === idx && (
      <div className="absolute left-0 top-full mt-2 w-full bg-white rounded-2xl shadow-lg px-8 py-6 text-lg text-neutral-800 z-20">
        {faq.answer}
      </div>
    )}
  </div>
))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}