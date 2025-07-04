"use client";
import * as React from "react";
import { HeroSection } from "./HeroSection";
import { ProgressStepper } from "./ProgressStepper";
import FormSection from "./FormSection";
import { questions } from "../data/questions";

function getProgressStep(step: number, completed: boolean) {
  if (completed) return 4;
  if (step === 0) return 1;
  if (step >= 1 && step <= 6) return 2;
  if (step >= 7 && step <= 9) return 3;
  return 4;
}

function getInitialAnswers() {
  const answers: Record<string, string> = {};
  questions.forEach((q) => {
    answers[q.id] = "";
    for (let i = 2; i <= 5; i++) {
      if ((q as Record<string, unknown>)[`inputType${i}`]) answers[`${q.id}_${i}`] = "";
    }
  });
  return answers;
}

export const Forms: React.FC = () => {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState(getInitialAnswers());
  const [completed, setCompleted] = React.useState(false);

  return (
    <main className="relative min-h-dvh overflow-hidden pr-10 bg-mywhite max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[34%] max-md:ml-0 max-md:w-full">
          <HeroSection />
        </div>
        <div className="ml-5 w-[66%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-center justify-center mt-8 w-full max-md:mt-10 max-md:max-w-full">
            <ProgressStepper currentStep={getProgressStep(step, completed)} />
            <FormSection
              step={step}
              setStep={setStep}
              answers={answers}
              setAnswers={setAnswers}
              completed={completed}
              setCompleted={setCompleted}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Forms;