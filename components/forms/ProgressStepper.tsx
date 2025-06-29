import * as React from "react";

interface ProgressStepperProps {
    currentStep: number;
}

const steps = [
    "Personal Data",
    "Loan Info",
    "Additional Info",
    "Final Review",
];

export const ProgressStepper: React.FC<ProgressStepperProps> = ({ currentStep }) => {
    return (
        <nav aria-label="Application progress" className="w-full px-2 md:px-8">
            <div className="flex items-center justify-center w-full">
                {steps.map((label, idx) => (
                    <React.Fragment key={label}>
                        {/* Step circle */}
                        <div className="flex flex-col items-center flex-1">
                            <div
                                className={` flex items-center justify-center w-6 h-6 rounded-full border-2
                                    ${currentStep === idx + 1
                                        ? "border-teal-400 bg-white"
                                        : "border-gray-200 bg-zinc-100"
                                    }
                                `}
                            >
                                {/* Empty for outlined circle */}
                            </div>
                            <span
                                className={`mt-2 text-xs md:text-sm text-center
                                            ${currentStep === idx + 1 ? "text-neutral-700 font-medium" : "text-zinc-400"}
                                        `}
                            >
                                {label}
                            </span>
                        </div>
                        {/* Line between steps */}
                        {idx < steps.length - 1 && (
                            <div className="flex-1 h-0.5 bg-gray-200 mx-1 items-center justify-center" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </nav>
    );
};