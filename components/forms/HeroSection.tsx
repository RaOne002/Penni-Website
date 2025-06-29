import * as React from "react";
import { FeatureCard } from "./FeatureCard";
import PennyBgWhiteSvg from '../svg/PennyBgWhiteSvg';

export const HeroSection: React.FC = () => {
    return (
        <aside className="overflow-hidden grow w-full bg-myneutral-850 max-md:mt-10 max-md:max-w-full">
            <div className="flex relative flex-col pt-32 md:pt-44 pb-10 md:pb-20 w-full min-h-[480px] md:min-h-[800px] lg:min-h-[1080px] max-md:max-w-full">
                <div className="absolute top-0 left-0 w-full h-full">
                    <PennyBgWhiteSvg className="w-full h-full object-cover" />
                </div>
                <div className="flex relative flex-col gap-6 self-start w-full px-4 md:px-12">
                    <div className="grow shrink-0 basis-0 w-full max-w-xl">
                        <header>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white max-md:mr-1 leading-tight">
                                Hi, future borrower!
                                <br />
                                Your offers are 60 seconds away.
                                <br />
                            </h1>
                        </header>
                        <div className="mt-8 md:mt-14 gap-4 max-w-2xl">
                            <FeatureCard
                                title="Fast funds"
                                description="up to $100K"
                            />
                            <FeatureCard
                                title="Fixed payments"
                                description="up to 7 Years"
                            />
                            <FeatureCard
                                title="No credit minimum"
                                description="APR starting at 7.99%"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};