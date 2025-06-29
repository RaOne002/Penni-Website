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
    <section className="px-8 py-16 bg-mywhite w-full max-w-[1500px] mx-auto max-md:px-6 max-md:pt-0 max-md:pb-10">
      <div className="flex gap-8 justify-center max-md:flex-col-reverse">
        {/* Left: Image/Media */}
        <div className="w-[35%] flex justify-between items-center bg-myneutral-400 max-md:w-[90%] max-md:justify-center mx-auto">
          <div className="flex shrink-0 mx-auto h-[450px] w-full max-w-[400px] max-md:mt-6 max-md:h-[350px]" />
        </div>
        {/* Right: FAQ */}
        <div className="w-[57%] max-md:w-full">
          <div className="flex flex-col pt-10 w-full text-3xl font-medium text-myneutral-800 max-md:mt-6 max-md:text-xl">
            <h2 className="text-5xl font-semibold mb-8 max-md:text-3xl max-md:mb-12">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-6">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`relative transition-all duration-300 ${openIdx === idx ? "rounded-2xl shadow-lg bg-myviolet-50" : ""
                    }`}
                >
                  <div
                    className={`bg-myviolet-50 ${openIdx === idx ? "rounded-t-2xl" : "rounded-full"} px-8 py-6 text-[1.5rem] font-normal flex items-center justify-between cursor-pointer transition-shadow shadow-sm hover:shadow-md max-md:px-6 max-md:py-4 max-md:text-sm`}
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    style={{
                      borderBottomLeftRadius: openIdx === idx ? '0' : '',
                      borderBottomRightRadius: openIdx === idx ? '0' : '',
                      borderBottom: openIdx === idx ? 'none' : '',
                    }}
                  >
                    <div className="flex-1">{faq.question}</div>
                    <span className="ml-6 flex items-center justify-center w-10 h-10 rounded-full bg-myblue-500">
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
                  <div
                    className={`overflow-hidden transition-all duration-300 bg-myviolet-50 px-8 max-md:px-4 ${openIdx === idx ? "rounded-b-2xl" : ""}`}
                    style={{
                      maxHeight: openIdx === idx ? 200 : 0,
                      paddingTop: openIdx === idx ? 24 : 0,
                      paddingBottom: openIdx === idx ? 24 : 0,
                      opacity: openIdx === idx ? 1 : 0,
                    }}
                  >
                    <div className="text-lg text-myneutral-800 max-md:text-base">
                      {openIdx === idx && faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}