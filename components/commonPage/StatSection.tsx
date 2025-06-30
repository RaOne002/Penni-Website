"use client";

import React from 'react';
import LenQBgWhiteSvg from '../svg/LenQBgWhiteSvg';
import LenQHalfFlowerSvg from '../svg/LenQHalfFlowerSvg'; 

const stats = [
    {
        value: "$10B+",
        label: "Total credit products through our platform",
    },
    {
        value: "32M+",
        label: "Total customers funded through our platform",
    },
    {
        value: "100M+",
        label: "Total loan offers made through our platform",
    },
    {
        value: "200M+",
        label: "Total inquiries on our platform in 2024",
    },
];

export default function StatisticsSection() {
    return (
        <section className="rounded-3xl my-8 p-3 bg-myblue-500 w-full max-w-[1500px] max-md:rounded-none">
            <div className="relative flex flex-row items-stretch rounded-2xl min-h-[650px] overflow-hidden max-md:flex-col">
                <LenQBgWhiteSvg
                    className="object-cover absolute inset-0 size-full"
                    aria-label="Background"
                />
                <LenQHalfFlowerSvg
                    className="absolute scale-x-[-1] z-10 left-0 top-0 w-16 h-16 md:w-36 md:h-36"
                    aria-label="Decorative flower"
                />
                {/* Section header content */}
                <div className="absolute top-0 left-0 w-full flex flex-col items-center pt-16 z-10 max-md:pt-20">
                    <h2 className="text-mywhite text-2xl md:text-5xl font-bold text-center pb-8">
                        Our mission is to help everyday<br className="hidden md:block" />
                        people eliminate high interest debt
                    </h2>
                    {/* Green underline */}
                    <div className="h-10 w-48 md:w-1/3 bg-myemerald-400 rounded-full mt-3 mb-16" />
                    
                    {/* Stats */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 w-full px-2">
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className={`flex-1 flex flex-col items-center px-2 md:px-0`}
                            >
                                <div className="text-mywhite text-3xl md:text-6xl font-semibold mb-2">{stat.value}</div>
                                <div className="text-mywhite text-base md:text-xl text-center pt-2 w-full max-w-[220px]">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}