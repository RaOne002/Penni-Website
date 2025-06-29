"use client";
import * as React from "react";

export const FormSection: React.FC = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { firstName, lastName });
  };

  return (
    <section className="self-center mt-48 max-w-full w-[907px] max-md:mt-10">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-2xl font-medium text-zinc-500 max-md:mt-10">
              <label htmlFor="firstName" className="self-start">
                First name
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="flex shrink-0 mt-5 rounded bg-zinc-300 h-[76px] px-4 text-neutral-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-2xl font-medium text-zinc-500 max-md:mt-10">
              <label htmlFor="lastName" className="self-start">
                Last name
              </label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="flex shrink-0 mt-5 rounded bg-zinc-300 h-[76px] px-4 text-neutral-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="self-center px-16 pt-4 pb-11 mt-16 max-w-full text-4xl font-medium text-white whitespace-nowrap bg-blue-500 rounded-2xl w-[907px] max-md:px-5 max-md:mt-10 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Next
        </button>
      </form>
    </section>
  );
};
