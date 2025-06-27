"use client";

import React from 'react';

const cards = [
    { id: 1, image: '', /* add other properties as needed */ },
    { id: 2, image: '', /* ... */ },
    { id: 3, image: '', /* ... */ },
    // Add more cards as needed
];

export default function FeatureCards() {
    return (
        <section className="mt-11 w-full max-w-[1500px] pb-15 max-md:mt-10 max-md:max-w-full max-md:mb-20">
            <div className="flex mb-10 items-center justify-center">
                <h1 className="text-3xl md:text-5xl font-semibold p-2 md:p-5 text-center md:text-left">
                    Join over 32,000,000 people <br /> funded through our platform
                </h1>
            </div>
            <div className="flex items-center justify-center gap-1 max-md:flex-col min-h-[500px] overflow-hidden">
                {cards.map((card, idx) => (
                    <div
                        key={card.id}
                        className={`
              w-[30%] 
              ${idx !== 0 ? 'ml-5' : ''}
              max-lg:w-[45%] max-lg:ml-0
              max-md:w-[90%] max-md:ml-0
              max-md:h-[192px]
              bg-myneutral-300
              rounded-2xl 
              max-md:mb-2
            `}
                    >
                        <div className="flex grow items-center max-md:mt-10 max-md:justify-center max-md:gap-0">
                            <div className="self-stretch my-auto min-w-60 w-[450px] max-lg:w-full max-md:w-[90%]">
                                <div className="flex shrink-0 rounded-2xl h-[500px] max-lg:h-[350px] max-md:h-[220px] max-md:max-w-full">
                                    {/* Future: Add image here */}
                                    {/* <img src={card.image} alt="" className="w-full h-full object-cover rounded-2xl" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}