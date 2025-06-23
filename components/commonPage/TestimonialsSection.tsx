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
    className={`flex items-center bg-zinc-100 rounded-[100px] min-w-[530px] max-w-[400px] w-full px-2 py-1 gap-6 shadow-sm ${className}`}
  >
    <div className="flex-shrink-0 bg-blue-500 rounded-full w-40 h-40" />
    <div>
      <p className="text-sm md:text-sm text-neutral-800">{text}</p>
      <p className="mt-4 font-bold text-neutral-800">{author}</p>
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
      <h2 className="text-3xl md:text-5xl font-bold text-center text-neutral-800 mx-auto mb-12">
        Don't take it from us. Our best <br /> recommendations come from our customers.
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
          className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition"
        >
          <svg width="24" height="24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 6 9 12 15 18" />
          </svg>
        </button>
        <button
          aria-label="Scroll right"
          onClick={() => scroll("right")}
          className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition"
        >
          <svg width="24" height="24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>
    </section>
  );
}