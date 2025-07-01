import * as React from "react";
import { FeatureCard } from "./FeatureCard";
import LenQBgWhiteSvg from '../svg/LenQBgWhiteSvg';
import LenQHalfFlowerSvg from '../svg/LenQHalfFlowerSvg'

const features = [
    { title: "Fast funds", description: "up to $100K" },
    { title: "Fixed payments", description: "up to 7 Years" },
    { title: "No credit minimum", description: "APR starting at 7.99%" },
];

export const HeroSection: React.FC = () => {
    return (
        <aside className="relative min-h-dvh overflow-hidden grow w-full bg-myneutral-850 max-md:mt-5">
            {/* Background SVG */}
            <LenQBgWhiteSvg className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" />
            <div className="relative flex flex-col pt-5 md:pt-20 pb-5 md:pb-16 w-full h-full items-center justify-center z-10">
                <LenQHalfFlowerSvg className="absolute scale-x-[-1] z-10 left-[-5%] top-[50%] w-8 h-8 md:w-16 md:h-16" />
                <LenQHalfFlowerSvg className="absolute z-10 right-[-5%] bottom-[-7%] w-10 h-10 md:w-26 md:h-26" />
                {/* Main Content */}
                <div className="flex flex-col gap-2 w-full max-w-xl px-2 md:px-8">
                    <header>
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-mywhite leading-tight text-center">
                            Hi, future borrower!
                            <br />
                            Your offers are 60
                            <br />
                            seconds away.
                        </h1>
                    </header>
                    <div className="text-xl mt-1 md:mt-7 flex flex-col gap-2 w-full max-w-2xl mx-auto items-center justify-center">
                        {features.map((feature, idx) => (
                            <FeatureCard
                                key={idx}
                                title={feature.title}
                                description={feature.description}
                                className="w-full max-w-[80%] h-[100px]"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
};