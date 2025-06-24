"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const cards = [
  {
    // title: "Debt Consolidation",
    buttonText: "Debt Consolidation",
    imageSrc: "",
    imageAlt: "Debt Consolidation",
  },
  {
    // title: "Another Solution",
    buttonText: "Another Solution",
    imageSrc: "",
    imageAlt: "Another Solution",
  },
  {
    // title: "More Options",
    buttonText: "More Options",
    imageSrc: "",
    imageAlt: "More Options",
  },
  {
    // title: "See All",
    buttonText: "See All",
    imageSrc: "",
    imageAlt: "See All",
  },
];

export default function CardCarousel() {
  const [frontIdx, setFrontIdx] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setFrontIdx((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
      const check = () => setIsMobile(window.innerWidth < breakpoint);
      check();
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    }, [breakpoint]);
    return isMobile;
  }

  if (isMobile) {
    // Vertical carousel for mobile
    return (
      <div className="relative flex flex-col items-center justify-center h-[600px] w-full min-w-[250px]">
        {cards.map((card, idx) => {
          const pos = (idx - frontIdx + cards.length) % cards.length;
          if (pos > 3) return null;
          const offset = pos * 75; // vertical offset
          const scale = pos === 0 ? 1.05 : 1;
          const z = 10 - pos;
          const opacity = pos === 0 ? 1 : 0.7;
          return (
            <div
              key={idx}
              className="absolute top-0 w-[90vw] max-w-[350px] h-[350px] bg-emerald-400 rounded-2xl flex flex-col justify-between items-start transition-all duration-700 ease-in-out overflow-hidden"
              style={{
                transform: `translateY(${offset}px) scale(${scale})`,
                zIndex: z,
                opacity,
                boxShadow: pos === 0 ? "0 8px 32px rgba(0,0,0,0.18)" : undefined,
                pointerEvents: pos === 0 ? "auto" : "none",
              }}
            >
              <div className="w-full h-32 relative">
                {card.imageSrc && (
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    className="object-cover rounded-t-2xl"
                    priority={pos === 0}
                    sizes="(max-width: 350px) 100vw, 350px"
                  />
                )}
              </div>
              <div className="flex-1 flex items-end px-6 pb-4 text-xl font-semibold text-neutral-900">
                {/* {card.title} */}
              </div>
              <button
                className="flex items-center w-[95%] bg-white text-neutral-900 rounded-full px-6 py-3 m-2 text-base font-medium shadow transition hover:bg-zinc-100"
                style={{ minHeight: 48 }}
              >
                <span>{card.buttonText}</span>
                <span className="ml-4">
                  <svg width="24" height="24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="6" y1="12" x2="18" y2="12" />
                    <polyline points="14 8 18 12 14 16" />
                  </svg>
                </span>
              </button>
            </div>
          );
        })}
      </div>
    );
  }

  // Horizontal carousel for desktop (as before)
  return (
    <div className="relative flex items-end justify-start h-[420px] w-full min-w-[350px]">
      {cards.map((card, idx) => {
        const pos = (idx - frontIdx + cards.length) % cards.length;
        if (pos > 3) return null;

        // Calculate offset for stacking
        const offset = pos * 300; // px, adjust for more/less overlap
        const scale = pos === 0 ? 1.05 : 1;
        const z = 10 - pos;
        const opacity = pos === 0 ? 1 : 0.7;

        return (
          <div
            key={idx}
            className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-emerald-400 rounded-2xl flex flex-col justify-between items-start transition-all duration-700 ease-in-out overflow-hidden"
            style={{
              transform: `translateX(${offset}px) scale(${scale})`,
              zIndex: z,
              opacity,
              boxShadow: pos === 0 ? "0 8px 32px rgba(0,0,0,0.18)" : undefined,
              pointerEvents: pos === 0 ? "auto" : "none",
            }}
          >
            {/* Image section */}
            <div className="w-full h-40 relative">
              {card.imageSrc && (
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover rounded-t-2xl"
                  priority={pos === 0}
                  sizes="(max-width: 420px) 100vw, 420px"
                />
              )}
            </div>
            {/* Title */}
            <div className="flex-1 flex items-end px-8 pb-4 text-2xl font-semibold text-neutral-900">
              {/* {card.title} */}
            </div>
            {/* Only show button on the front card */}
            <div className="w-full flex justify-center mb-4">
              {pos === 0 && (
                <button
                  className="flex w-[95%] items-center justify-between bg-white text-neutral-900 rounded-full px-8 py-4 mb-3 mx-1 text-2xl font-medium shadow transition hover:bg-zinc-100"
                  style={{ minHeight: 56 }}
                >
                  <span>{card.buttonText}</span>
                  <span className="flex ml-1">
                    <svg width="28" height="28" fill="none" stroke="#222" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="0" y1="14" x2="22" y2="14" />
                      <polyline points="16 8 22 14 16 20" />
                    </svg>
                  </span>
                </button>
              )}
            </div>

          </div>
        );
      })}
    </div>
  );
}