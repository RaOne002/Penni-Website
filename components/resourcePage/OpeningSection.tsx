"use client";

import React from "react";
import LenQBgWhiteSvg from '../svg/LenQBgWhiteSvg';
import LenQHalfFlowerSvg from '../svg/LenQHalfFlowerSvg';
import MyButton from "../ui/MyButton";

export default function OpeningSection() {
    return (
        <section className="rounded-3xl pb-6 my-8 bg-myblue-500 w-full max-w-[1500px] max-md:rounded-none">
            <div className="relative flex flex-row items-stretch rounded-2xl min-h-[250px] overflow-hidden max-md:flex-col">
                <LenQBgWhiteSvg
                    className="object-cover absolute inset-0 size-full"
                    aria-label="Background"
                />
                <LenQHalfFlowerSvg
                    className="absolute scale-x-[-1] z-10 left-[-1%] top-[0%] w-16 h-16 md:w-36 md:h-36"
                    aria-label="Decorative flower"
                />
                {/* Section header content */}
                <div className="absolute top-0 left-0 w-full flex flex-col items-center pt-10 md:pt-16 z-10 max-md:pt-20">
                    <h2 className="text-mywhite text-xl md:text-5xl font-bold text-center pb-4 md:pb-8">
                        We have open roles!
                    </h2>
                    {/* Green underline */}
                    <div
                        className="flex items-center justify-center bg-myemerald-400 rounded-full mt-1 mb-6 md:mb-12 min-h-10 px-4 w-fit max-w-full text-xs md:text-lg font-medium text-myblack-800 text-center whitespace-pre-line"
                        style={{ lineHeight: "1.3" }}
                    >
                        Explore exciting career opportunities
                    </div>
                </div>
                {/* Main content */}
                <div className="flex flex-col md:flex-row py-16 gap-6 md:gap-8 w-full z-10 mt-32 md:mt-44 px-2 md:px-8 pb-8">
                    {/* Left: Image/Illustration Placeholder */}
                    <div className="bg-[#99c6fc] rounded-md w-full md:w-[600px] h-[180px] md:h-[260px] lg:h-[400px] flex-shrink-0" />
                    {/* Right: Text and Button */}
                    <div className="flex flex-col justify-center items-start pl-10 w-full md:w-auto mt-4 md:mt-0">
                        <div className="text-myblack-800 text-xs md:text-2xl md:font-semibold mb-4">
                            Explore exciting career opportunities<br />
                            with our open roles
                        </div>
                        <MyButton
                            bgColor="bg-mywhite"
                            hoverBgColor="hover:bg-zinc-300"
                            textColor="text-myblsack-800"
                            iconBgColor="bg-blue-500"
                        >
                            Join us now
                        </MyButton>
                    </div>
                </div>
            </div>
        </section>
    );
}