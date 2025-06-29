// "use client";

// import React, { useState } from "react";
// import { questions } from "../data/questions";

// function getInitialAnswers() {
//   const answers: Record<string, string> = {};
//   questions.forEach(q => {
//     answers[q.id] = "";
//   });
//   return answers;
// }

// export default function Forms() {
//   const [step, setStep] = useState(0);
//   const [answers, setAnswers] = useState(getInitialAnswers());
//   const [completed, setCompleted] = useState(false);

//   const current = questions[step];

//   function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
//     setAnswers({ ...answers, [current.id]: e.target.value });
//   }

//   function handleNext() {
//     if (step < questions.length - 1) {
//       setStep(step + 1);
//     } else {
//       setCompleted(true);
//     }
//   }

//   function handleBack() {
//     if (step > 0) setStep(step - 1);
//   }

//   if (completed) {
//     return (
//       <div className="p-8 bg-mywhite rounded-xl shadow text-center">
//         <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
//         <p>Your application has been submitted.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-xl mx-auto bg-mywhite rounded-xl shadow p-6">
//       <div className="mb-6">
//         <div className="text-xs text-mygray-500 mb-2">
//           Step {step + 1} of {questions.length}
//         </div>
//         <h2 className="text-xl font-bold mb-2">{current.title?.replace("{userName}", answers.personalData || "")}</h2>
//         {current.text && <div className="mb-2 text-myneutral-600">{current.text}</div>}
//       </div>
//       <form
//         onSubmit={e => {
//           e.preventDefault();
//           handleNext();
//         }}
//       >
//         {/* Render input(s) based on question type */}
//         {current.inputType === "select" ? (
//           <select
//             className="w-full border rounded px-3 py-2 mb-4"
//             value={answers[current.id] || ""}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select...</option>
//             {current.options?.map((opt: string, i: number) => (
//               <option key={i} value={opt}>{opt}</option>
//             ))}
//           </select>
//         ) : current.inputType === "date" ? (
//           <input
//             type="date"
//             className="w-full border rounded px-3 py-2 mb-4"
//             value={answers[current.id] || ""}
//             onChange={handleChange}
//             required
//           />
//         ) : (
//           <input
//             type={current.inputType || "text"}
//             className="w-full border rounded px-3 py-2 mb-4"
//             placeholder={current.placeholder}
//             value={answers[current.id] || ""}
//             onChange={handleChange}
//             required
//           />
//         )}

//         {/* Render additional fields if present */}
//         {current.inputType2 && (
//           <input
//             type={current.inputType2}
//             className="w-full border rounded px-3 py-2 mb-4"
//             placeholder={current.placeholder2}
//             value={answers[`${current.id}_2`] || ""}
//             onChange={e => setAnswers({ ...answers, [`${current.id}_2`]: e.target.value })}
//             required
//           />
//         )}
//         {current.inputType3 && (
//           <input
//             type={current.inputType3}
//             className="w-full border rounded px-3 py-2 mb-4"
//             placeholder={current.placeholder3}
//             value={answers[`${current.id}_3`] || ""}
//             onChange={e => setAnswers({ ...answers, [`${current.id}_3`]: e.target.value })}
//             required
//           />
//         )}
//         {current.inputType4 && (
//           <input
//             type={current.inputType4}
//             className="w-full border rounded px-3 py-2 mb-4"
//             placeholder={current.placeholder4}
//             value={answers[`${current.id}_4`] || ""}
//             onChange={e => setAnswers({ ...answers, [`${current.id}_4`]: e.target.value })}
//             required
//           />
//         )}
//         {current.inputType5 && (
//           <input
//             type={current.inputType5}
//             className="w-full border rounded px-3 py-2 mb-4"
//             placeholder={current.placeholder5}
//             value={answers[`${current.id}_5`] || ""}
//             onChange={e => setAnswers({ ...answers, [`${current.id}_5`]: e.target.value })}
//             required
//           />
//         )}

//         <div className="flex justify-between">
//           <button
//             type="button"
//             onClick={handleBack}
//             disabled={step === 0}
//             className="px-4 py-2 rounded bg-mygray-200 text-myneutral-800 disabled:opacity-50"
//           >
//             Back
//           </button>
//           <button
//             type="submit"
//             className="px-6 py-2 rounded bg-myblue-500 text-mywhite font-semibold"
//           >
//             {step === questions.length - 1 ? "Submit" : "Next"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }


import * as React from "react";
import { HeroSection } from "./HeroSection";
import { ProgressStepper } from "./ProgressStepper";
import { FormSection } from "./FormSection";

export const Forms: React.FC = () => {
  return (
    <main className="overflow-hidden pr-20 bg-white max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[34%] max-md:ml-0 max-md:w-full">
          <HeroSection />
        </div>
        <div className="ml-5 w-[66%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-20 w-full max-md:mt-10 max-md:max-w-full">
            <ProgressStepper currentStep={1} />
            <FormSection />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Forms;
