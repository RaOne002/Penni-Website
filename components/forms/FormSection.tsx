"use client";
import React from "react";
import { questions } from "../data/questions";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from "dayjs";

interface FormSectionProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  answers: Record<string, string>;
  setAnswers: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  completed: boolean;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FormSection({
  step,
  setStep,
  answers,
  setAnswers,
  completed,
  setCompleted,
}: FormSectionProps) {
  const current = questions[step];

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    key: string = current.id
  ) {
    setAnswers({ ...answers, [key]: e.target.value });
  }

  function handleNext() {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setCompleted(true);
    }
  }

  function handleBack() {
    if (step > 0) setStep(step - 1);
  }

  if (completed) {
    return (
      <div className="p-8 bg-mywhite rounded-xl shadow text-center max-w-xl mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-2">Well that was easy!<br />Review info and see your offers</h2>
        <div className="mb-4 text-myneutral-500 text-base">Here’s what you provided:</div>
        <div className="bg-myneutral-300 rounded-lg p-6 mb-8 text-left">
          <div className="flex justify-between py-2 border-b border-myneutral-200">
            <span className="text-myneutral-700">Loan amount</span>
            <span className="font-semibold text-myneutral-900">
              {answers.loanAmount ? `$ ${Number(answers.loanAmount).toLocaleString()}` : "-"}
            </span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-myneutral-700">Loan purpose</span>
            <span className="font-semibold text-myneutral-900">
              {answers.fundingPurpose || "-"}
            </span>
          </div>
        </div>
        <button
          className="w-full py-3 rounded-lg bg-myblue-500 text-mywhite font-semibold text-lg hover:bg-mysky-800 transition"
          onClick={() => {/* handle submit or next action here */ }}
        >
          Agree and view offers
        </button>
      </div>
    );
  }

  // --- Custom rendering for each question ---
  function renderQuestion() {
    // Example 1: Custom style for the first question
    if (current.id === "personalData") {
      return (
        <form
          onSubmit={e => {
            e.preventDefault();
            handleNext();
          }}
          className="bg-transparent p-8"
        >
          <h2 className="text-2xl font-bold mb-8 text-myneutral-900">{current.title}</h2>
          <div className="flex gap-6 mb-8">
            <div className="flex-1">
              <label className="block text-sm text-mygray-500 mb-2">First name</label>
              <input
                type="text"
                className="w-full bg-myneutral-300 rounded-md px-4 py-3 text-base focus:outline-none"
                placeholder="First name"
                value={answers[`${current.id}`] || ""}
                onChange={e => handleChange(e, `${current.id}`)}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-mygray-500 mb-2">Last name</label>
              <input
                type="text"
                className="w-full bg-myneutral-300 rounded-md px-4 py-3 text-base focus:outline-none"
                placeholder="Last name"
                value={answers[`${current.id}_2`] || ""}
                onChange={e => handleChange(e, `${current.id}_2`)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-myblue-500 text-mywhite font-semibold text-lg hover:bg-mysky-800 transition"
          >
            Next
          </button>
        </form>
      );
    }

    // Example 2: Custom style for the second question
    if (current.id === "loanAmount") {
      return (
        <form
          onSubmit={e => {
            e.preventDefault();
            handleNext();
          }}
          className="bg-transparent p-8"
        >
          <h2 className="text-2xl font-bold mb-2 text-myneutral-900">{(current.title ?? "").replace("{userName}", answers.personalData || "")}</h2>
          {current.text && (
            <div className="mb-4 text-myneutral-500 text-base">{current.text}</div>
          )}
          <input
            type="number"
            className="w-full bg-myneutral-300 rounded-md px-4 py-4 text-lg mb-4 focus:outline-none"
            placeholder={current.placeholder}
            value={answers[current.id] || ""}
            onChange={e => handleChange(e, current.id)}
            required
          />
          <div className="mb-2 text-mygray-500 text-sm font-medium">Quick select</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {(current.options || []).map((opt, i) => (
              <button
                type="button"
                key={i}
                className={`rounded-md px-0 py-3 text-lg font-medium bg-myneutral-300 hover:bg-myneutral-400 transition ${answers[current.id] == opt.replace(/[^0-9]/g, "") ? "ring-2 ring-blue-400" : ""
                  }`}
                onClick={() =>
                  setAnswers({ ...answers, [current.id]: opt.replace(/[^0-9]/g, "") })
                }
              >
                {opt}
              </button>
            ))}
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-myblue-500 text-mywhite font-semibold text-lg hover:bg-mysky-800 transition"
          >
            Next
          </button>
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 0}
            className="mt-3 w-[50%] px-6 py-3 rounded-lg bg-mygray-200 text-myneutral-800 font-medium disabled:opacity-50"
          >
            Back
          </button>
        </form>
      );
    }

    // Example 3: Custom style for the funding purpose question
    if (current.id === "fundingPurpose") {
      return (
        <form
          onSubmit={e => {
            e.preventDefault();
            handleNext();
          }}
          className="bg-transparent p-8"
        >
          <h2 className="text-2xl font-bold mb-2 text-myneutral-900">{current.title}</h2>
          {current.text && (
            <div className="mb-4 text-myneutral-500 text-base">{current.text}</div>
          )}
          <div className="relative mb-8">
            <select
              className="w-full py-4 px-4 rounded-lg text-lg font-medium bg-myneutral-300 focus:outline-none appearance-none"
              value={answers[current.id] || ""}
              onChange={e => setAnswers({ ...answers, [current.id]: e.target.value })}
              required
              size={1}
              style={{
                maxHeight: "220px",
                overflowY: "auto",
              }}
            >
              <option value="" disabled>
                Select an option
              </option>
              {(current.options || []).map((opt, i) => (
                <option key={i} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-mygray-500">
              ▼
            </span>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-myblue-500 text-mywhite font-semibold text-lg hover:bg-mysky-800 transition"
            disabled={!answers[current.id]}
          >
            Next
          </button>
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 0}
            className="mt-3 w-[50%] px-6 py-3 rounded-lg bg-mygray-200 text-myneutral-800 font-medium disabled:opacity-50"
          >
            Back
          </button>
        </form>
      );
    }

    // Example 4: Custom style for the repaymentTerm question
    if (current.id === "repaymentTerm") {
      const subQ = current.subQuestion;
      return (
        <form
          onSubmit={e => {
            e.preventDefault();
            handleNext();
          }}
          className="bg-transparent p-8"
        >
          <h2 className="text-2xl font-bold mb-2 text-myneutral-900">{current.title}</h2>
          {current.text && (
            <div className="mb-4 text-myneutral-500 text-base">{current.text}</div>
          )}
          <label className="block text-sm text-mygray-500 mb-2 mt-4">
            {current.placeholder}
          </label>
          <input
            type="number"
            min={0}
            className="w-full bg-myneutral-300 rounded-md px-4 py-4 text-lg mb-6 focus:outline-none"
            placeholder={current.placeholder}
            value={answers[current.id] || ""}
            onChange={e => handleChange(e, current.id)}
            required
          />

          {subQ && (
            <>
              <h3 className="text-lg font-semibold mb-2 text-myneutral-900">{subQ.title}</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {(subQ.options || []).map((opt, i) => (
                  <button
                    type="button"
                    key={i}
                    className={`w-full py-4 rounded-lg text-lg font-medium transition
                  ${answers["repaymentTerm_sub"] === opt
                        ? "bg-myneutral-400 text-myneutral-900"
                        : "bg-myneutral-300 hover:bg-myneutral-400"
                      }`}
                    onClick={() => setAnswers({ ...answers, ["repaymentTerm_sub"]: opt })}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </>
          )}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-myblue-500 text-mywhite font-semibold text-lg hover:bg-mysky-800 transition"
            disabled={!answers[current.id] || (subQ && !answers["repaymentTerm_sub"])}
          >
            Next
          </button>
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 0}
            className="mt-3 w-[50%] px-6 py-3 rounded-lg bg-mygray-200 text-myneutral-800 font-medium disabled:opacity-50"
          >
            Back
          </button>
        </form>
      );
    }

    // Example 5: Custom style for the unsecuredDebt question
    if (current.id === "unsecuredDebt") {
      return (
        <form
          onSubmit={e => {
            e.preventDefault();
            handleNext();
          }}
          className="bg-transparent p-8"
        >
          <h2 className="text-2xl font-bold mb-2 text-myneutral-900">{current.title}</h2>
          {current.text && (
            <div className="mb-4 text-myneutral-500 text-base whitespace-pre-line">{current.text}</div>
          )}
          <div className="relative mb-8">
            <select
              className="w-full py-4 px-4 rounded-lg text-lg font-medium bg-myneutral-300"
              value={answers[current.id] || ""}
              onChange={e => setAnswers({ ...answers, [current.id]: e.target.value })}
              required
            >
              <option value="" disabled>
                {current.placeholder || "Select an amount"}
              </option>
              {(current.options || []).map((opt, i) => (
                <option key={i} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-mygray-500">
              ▼
            </span>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-myblue-500 text-mywhite font-semibold text-lg hover:bg-mysky-800 transition"
            disabled={!answers[current.id]}
          >
            Next
          </button>
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 0}
            className="mt-3 w-[50%] px-6 py-3 rounded-lg bg-mygray-200 text-myneutral-800 font-medium disabled:opacity-50"
          >
            Back
          </button>
        </form>
      );
    }

    // Example 6: Custom style for the home address question
    if (current.id === "homeAddress") {
      const subQ = current.subQuestion;
      return (
        <form
          onSubmit={e => {
            e.preventDefault();
            handleNext();
          }}
          className="bg-transparent p-8"
        >
          <h2 className="text-2xl font-bold mb-2 text-myneutral-900">{current.title}</h2>
          <label className="block text-sm text-mygray-500 mb-2 mt-4">{current.text}</label>
          <input
            type="text"
            className="w-full bg-myneutral-300 rounded-md px-4 py-4 text-lg mb-2 focus:outline-none"
            placeholder={current.placeholder}
            value={answers[current.id] || ""}
            onChange={e => handleChange(e, current.id)}
            required
          />
          <div className="mb-2 text-mygray-500 text-sm">
            Can{"'"}t find your address? <span className="font-semibold">Enter it manually</span>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-mygray-500 mb-2">{current.text2}</label>
              <input
                type="text"
                className="w-full bg-myneutral-300 rounded-md px-4 py-4 text-lg focus:outline-none"
                placeholder={current.placeholder2}
                value={answers[`${current.id}_2`] || ""}
                onChange={e => handleChange(e, `${current.id}_2`)}
                required
              />
            </div>
            <div>
              <label className="block text-sm text-mygray-500 mb-2">{current.text3}</label>
              <input
                type="text"
                className="w-full bg-myneutral-300 rounded-md px-4 py-4 text-lg focus:outline-none"
                placeholder={current.placeholder3}
                value={answers[`${current.id}_3`] || ""}
                onChange={e => handleChange(e, `${current.id}_3`)}
                required
              />
            </div>
            <div>
              <label className="block text-sm text-mygray-500 mb-2">{current.text4}</label>
              <input
                type="text"
                className="w-full bg-myneutral-300 rounded-md px-4 py-4 text-lg focus:outline-none"
                placeholder={current.placeholder4}
                value={answers[`${current.id}_4`] || ""}
                onChange={e => handleChange(e, `${current.id}_4`)}
                required
              />
            </div>
            <div>
              <label className="block text-sm text-mygray-500 mb-2">{current.text5}</label>
              <input
                type="text"
                className="w-full bg-myneutral-300 rounded-md px-4 py-4 text-lg focus:outline-none"
                placeholder={current.placeholder5}
                value={answers[`${current.id}_5`] || ""}
                onChange={e => handleChange(e, `${current.id}_5`)}
                required
              />
            </div>
          </div>
          {subQ && (
            <>
              <h3 className="text-lg font-semibold mb-2 text-myneutral-900">{subQ.title}</h3>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {(subQ.options || []).map((opt, i) => (
                  <button
                    type="button"
                    key={i}
                    className={`w-full py-4 rounded-lg text-lg font-medium
                  ${answers["homeAddress_sub"] === opt
                        ? "bg-myneutral-400 text-myneutral-900"
                        : "bg-myneutral-300 hover:bg-myneutral-400"
                      }`}
                    onClick={() => setAnswers({ ...answers, ["homeAddress_sub"]: opt })}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </>
          )}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-myblue-500 text-mywhite font-semibold text-lg hover:bg-mysky-800 transition"
            disabled={
              !answers[current.id] ||
              !answers[`${current.id}_2`] ||
              !answers[`${current.id}_3`] ||
              !answers[`${current.id}_4`] ||
              !answers[`${current.id}_5`] ||
              (subQ && !answers["homeAddress_sub"])
            }
          >
            Next
          </button>
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 0}
            className="mt-3 w-[50%] px-6 py-3 rounded-lg bg-mygray-200 text-myneutral-800 font-medium disabled:opacity-50"
          >
            Back
          </button>
        </form>
      );
    }

    // Example 7: Custom style for Information question
    if (current.id === "profileInfo") {
      return (
        <form
          onSubmit={e => {
            e.preventDefault();
            handleNext();
          }}
          className="bg-transparent p-8"
        >
          <h2 className="text-2xl font-bold mb-2 text-myneutral-900">{current.title}</h2>
          {current.text && (
            <div className="mb-4 text-myneutral-500 text-base">{current.text}</div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div>
              <label className="block text-sm text-mygray-500 mb-2">{current.text}</label>
              <input
                type="text"
                className="w-full bg-myneutral-300 rounded-md px-4 py-4 text-base focus:outline-none"
                placeholder={current.placeholder}
                value={answers[current.id] || ""}
                onChange={e => handleChange(e, current.id)}
                required
              />
            </div>
            <div>
              <label className="block text-sm text-mygray-500 mb-2">{current.text2}</label>
              <input
                type="text"
                className="w-full bg-myneutral-300 rounded-md px-4 py-4 text-base focus:outline-none"
                placeholder={current.placeholder2}
                value={answers[`${current.id}_2`] || ""}
                onChange={e => handleChange(e, `${current.id}_2`)}
                required
              />
            </div>
            <div>
              <label className="block text-sm text-mygray-500 mb-2">{current.text3}</label>
              <input
                type="email"
                className="w-full bg-myneutral-300 rounded-md px-4 py-4 text-base focus:outline-none"
                placeholder={current.placeholder3}
                value={answers[`${current.id}_3`] || ""}
                onChange={e => handleChange(e, `${current.id}_3`)}
                required
              />
            </div>
            <div>
              <label className="block text-sm text-mygray-500 mb-2">{current.text4}</label>
              <input
                type="tel"
                className="w-full bg-myneutral-300 rounded-md px-4 py-4 text-base focus:outline-none"
                placeholder={current.placeholder4}
                value={answers[`${current.id}_4`] || ""}
                onChange={e => handleChange(e, `${current.id}_4`)}
                required
                pattern="\d{10}"
                maxLength={10}
                minLength={10}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-myblue-500 text-mywhite font-semibold text-lg hover:bg-mysky-800 transition"
            disabled={
              !answers[current.id] ||
              !answers[`${current.id}_2`] ||
              !answers[`${current.id}_3`] ||
              !answers[`${current.id}_4`]
            }
          >
            Next
          </button>
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 0}
            className="mt-3 w-[50%] px-6 py-3 rounded-lg bg-mygray-200 text-myneutral-800 font-medium disabled:opacity-50"
          >
            Back
          </button>
        </form>
      );
    }

    // Example 8: Custom style for credit history question
    if (current.id === "creditRating") {
      return (
        <form
          onSubmit={e => {
            e.preventDefault();
            handleNext();
          }}
          className="bg-transparent p-8"
        >
          <h2 className="text-2xl font-bold mb-2 text-myneutral-900">{current.title}</h2>
          {current.text && (
            <div className="mb-4 text-myneutral-500 text-base">{current.text}</div>
          )}
          <div className="flex flex-col gap-4 mb-8">
            {(current.options || []).map((opt, i) => (
              <button
                type="button"
                key={i}
                className={`w-full py-4 rounded-lg text-lg font-medium transition
              ${answers[current.id] === opt
                    ? "bg-myneutral-400 text-myneutral-900"
                    : "bg-myneutral-300 hover:bg-myneutral-400"
                  }`}
                onClick={() => setAnswers({ ...answers, [current.id]: opt })}
              >
                {opt}
              </button>
            ))}
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-myblue-500 text-mywhite font-semibold text-lg hover:bg-mysky-800 transition"
            disabled={!answers[current.id]}
          >
            Next
          </button>
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 0}
            className="mt-3 w-[50%] px-6 py-3 rounded-lg bg-mygray-200 text-myneutral-800 font-medium disabled:opacity-50"
          >
            Back
          </button>
        </form>
      );
    }

    // Example 9: Custom style for Education and Employment question
    if (current.id === "educationEmployment") {
      return (
        <form
          onSubmit={e => {
            e.preventDefault();
            handleNext();
          }}
          className="bg-transparent p-8"
        >
          <h2 className="text-2xl font-bold mb-2 text-myneutral-900">{current.title}</h2>
          {current.text && (
            <label className="block text-sm text-mygray-500 mb-2 mt-4">{current.text}</label>
          )}
          <select
            className="w-full bg-myneutral-300 rounded-md px-4 py-4 text-lg mb-6 focus:outline-none"
            value={answers[current.id] || ""}
            onChange={e => handleChange(e, current.id)}
            required
          >
            <option value="" disabled>
              {current.placeholder || "Select an option"}
            </option>
            {(current.options || []).map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <label className="block text-sm text-mygray-500 mb-2">{current.text2}</label>
          <select
            className="w-full bg-myneutral-300 rounded-md px-4 py-4 text-lg mb-8 focus:outline-none"
            value={answers[`${current.id}_2`] || ""}
            onChange={e => handleChange(e, `${current.id}_2`)}
            required
          >
            <option value="" disabled>
              {current.placeholder2 || "Select an option"}
            </option>
            {(current.options2 || []).map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-myblue-500 text-mywhite font-semibold text-lg hover:bg-mysky-800 transition"
            disabled={!answers[current.id] || !answers[`${current.id}_2`]}
          >
            Next
          </button>
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 0}
            className="mt-3 w-[50%] px-6 py-3 rounded-lg bg-mygray-200 text-myneutral-800 font-medium disabled:opacity-50"
          >
            Back
          </button>
        </form>
      );
    }

    // Example 10: Custom style for the Date of birth question
    if (current.id === "dateOfBirth") {
      return (
        <form
          onSubmit={e => {
            e.preventDefault();
            handleNext();
          }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-2 text-myneutral-900">{current.title}</h2>
          {current.text && (
            <div className="mb-4 text-myneutral-500 text-base">{current.text}</div>
          )}
          <label className="block text-sm text-mygray-500 mb-2 mt-4">Date of birth</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              format="MM/DD/YYYY"
              value={answers[current.id] ? dayjs(answers[current.id]) : null}
              onChange={value => {
                setAnswers({ ...answers, [current.id]: value ? value.format("YYYY-MM-DD") : "" });
              }}
              slotProps={{
                textField: {
                  fullWidth: true,
                  placeholder: current.placeholder,
                  className: "w-full bg-myneutral-300 rounded-md px-4 py-4 text-lg mb-8 focus:outline-none",
                  required: true,
                }
              }}
            />
          </LocalizationProvider>
          <button
            type="submit"
            className="w-full mt-3 py-3 rounded-lg bg-myblue-500 text-mywhite font-semibold text-lg hover:bg-mysky-800 transition"
            disabled={!answers[current.id]}
          >
            Next
          </button>
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 0}
            className="mt-3 w-[50%] px-6 py-3 rounded-lg bg-mygray-200 text-myneutral-800 font-medium disabled:opacity-50"
          >
            Back
          </button>
        </form>
      );
    }

    // Default: fallback to your previous generic rendering
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleNext();
        }}
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-4 text-myneutral-900">
            {current.title}
          </h2>
          <input
            type={current.inputType || "text"}
            className="w-full border border-mygray-200 bg-myneutral-300 rounded-lg px-4 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-myneutral-700"
            placeholder={current.placeholder}
            value={answers[current.id] || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col mt-8 items-center justify-center">
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-myblue-500 text-mywhite font-semibold hover:bg-mysky-800 transition"
          >
            {step === questions.length - 1 ? "Submit" : "Next"}
          </button>
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 0}
            className="mt-3 w-[50%] px-6 py-3 rounded-lg bg-mygray-200 text-myneutral-800 font-medium disabled:opacity-50"
          >
            Back
          </button>
        </div>
      </form>
    );
  }

  // --- Main render ---
  return (
    <div className="max-w-3xl w-full bg-transparent p-1 mt-1 mb-5">
      <div className="text-xs text-mygray-500 mb-2 text-right">
        Step {step + 1} of {questions.length}
      </div>
      {renderQuestion()}
    </div>
  );
}