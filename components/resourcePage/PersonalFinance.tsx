"use client";

import React from "react";

export default function PersonalFinance() {
    return (
        <section className="w-full max-w-[98%] mx-auto px-2 mb-8">
            {/* Image/Media Placeholder */}
            <div className="bg-myneutral-200 rounded-md w-full h-[180px] sm:h-[220px] md:h-[450px] mb-0" />
            {/* Blue info bar */}
            <div className="relative flex flex-col md:h-[180px] md:flex-row bg-myblue-500 rounded-b-md p-4 md:p-6 mt-0 gap-2 md:gap-0">
                <div className="font-bold text-base sm:text-lg md:text-2xl lg:text-4xl text-myblack-800 w-full md:w-[40%] mb-2 md:mb-0">
                    Simplifying personal <br /> finance through education <br /> and technology
                </div>
                <div className="w-full border-1 bg-myblack-800 md:w-0 md:bg-myblack-800 md:mr-8" />
                <div className="text-myblack-800 text-xs sm:text-sm md:text-base lg:text-xl md:font-semibold w-full md:w-[60%]">
                    Founded in 2022, LenQ Financial helps consumers navigate their financial lives through education and smart product matching. Unlike existing marketplaces, LenQ provides clarity and education to guide better financial decisions.
                </div>
                {/* Decorative icon */}
            </div>
        </section>
    );
}