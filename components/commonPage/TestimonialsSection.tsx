"use client";

import React, { useRef } from "react";

// TestimonialCard component
const TestimonialCard = ({
  text,
  author,
  className = "",
}: {
  text: string;
  author: string;
  className?: string;
}) => (
  <div
    className={`group flex items-center bg-myzinc-100 rounded-[100px] min-w-[530px] max-w-[400px] w-full px-2 py-1 gap-6 shadow-sm max-md:min-w-[95vw] max-md:max-w-[95vw] max-md:gap-1.5 hover:bg-myneutral-900 hover:text-mywhite transition-colors duration-200 cursor-pointer ${className}`}
  >
    <div className="flex-shrink-0 bg-myblue-500 rounded-full w-40 h-40 max-md:w-32 max-md:h-32" />
    <div>
      <p className="text-sm md:text-sm max-md:xs text-myneutral-800 group-hover:text-mywhite">{text}</p>
      <p className="mt-4 font-bold text-myneutral-800 group-hover:text-mywhite">{author}</p>
    </div>
  </div>
);

// Example testimonials data
const testimonials = [
  {
    id: 1,
    text: "The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered.",
    author: "-Kanye West",
  },
  {
    id: 2,
    text: "The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered.",
    author: "-Kanye West",
  },
  {
    id: 3,
    text: "The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered.",
    author: "-Kanye West",
  },
  {
    id: 4,
    text: "The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered.",
    author: "-Kanye West",
  },
  {
    id: 5,
    text: "The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered.",
    author: "-Kanye West",
  },
  {
    id: 6,
    text: "The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered.",
    author: "-Kanye West",
  },
  {
    id: 7,
    text: "The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered.",
    author: "-Kanye West",
  },
  {
    id: 8,
    text: "The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered.",
    author: "-Kanye West",
  },
  {
    id: 9,
    text: "The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered.",
    author: "-Kanye West",
  },
  {
    id: 10,
    text: "The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered.",
    author: "-Kanye West",
  },
];

// Split testimonials into two rows
function splitIntoRows<T>(arr: T[], perRow: number) {
  return [arr.slice(0, perRow), arr.slice(perRow, perRow * 2)];
}

export default function TestimonialsSection() {
  const perRow = Math.ceil(testimonials.length / 2);
  const [row1, row2] = splitIntoRows(testimonials, perRow);

  // Refs for both rows
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll the whole container
  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current;
      containerRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full px-2 md:px-8 py-8 mt-5">
      <h2 className="text-2xl md:text-5xl font-bold text-center text-myneutral-800 mx-auto mb-12 max-md:font-semibold">
        Don{"'"}t take it from us. Our best <br className="max-md:hidden" /> recommendations come from our customers.
      </h2>
      <div
        ref={containerRef}
        className="
          flex flex-col gap-8
          overflow-x-auto
          md:overflow-x-hidden
          scrollbar-hide
          pb-2
        "
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex gap-8">
          {row1.map((t) => (
            <TestimonialCard key={t.id} text={t.text} author={t.author} />
          ))}
        </div>
        <div className="flex gap-8 lg:justify-center lg:items-center">
          {row2.map((t) => (
            <TestimonialCard key={t.id} text={t.text} author={t.author} />
          ))}
        </div>
      </div>
      {/* Arrows centered below both rows */}
      <div className="flex gap-4 mt-8 justify-end">
        <button
          aria-label="Scroll left"
          onClick={() => scroll("left")}
          className="w-24 h-12 rounded-full border border-myneutral-300 flex items-center justify-center bg-mywhite hover:bg-myneutral-100 transition"
        >
          <svg width="36" height="36" fill="none" stroke="#222" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            {/* Longer arrow line */}
            <line x1="28" y1="18" x2="10" y2="18" />
            {/* Arrow head */}
            <polyline points="16 12 10 18 16 24" />
          </svg>
        </button>
        <button
          aria-label="Scroll right"
          onClick={() => scroll("right")}
          className="w-24 h-12 rounded-full border border-myneutral-300 flex items-center justify-center bg-mywhite hover:bg-myneutral-100 transition"
        >
          <svg width="36" height="36" fill="none" stroke="#222" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            {/* Longer arrow line */}
            <line x1="8" y1="18" x2="26" y2="18" />
            {/* Arrow head */}
            <polyline points="20 12 26 18 20 24" />
          </svg>
        </button>
      </div>
    </section>
  );
}