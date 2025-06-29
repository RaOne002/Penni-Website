"use client";

import React, { useState, useEffect, useRef } from "react";
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

export default function CardRow() {
    const [hovered, setHovered] = useState<number | null>(0);
    const [opened, setOpened] = useState<number | null>(0);
    const isMobile = useIsMobile();
    const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

    // On mobile, clicking a card opens it
    const handleCardClick = (idx: number) => {
        if (isMobile) {
            setOpened(opened === idx ? null : idx);
        }
    };

    // On desktop, hover logic with lazy delay
    const handleMouseEnter = (idx: number) => {
        if (!isMobile) {
            if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
            hoverTimeout.current = setTimeout(() => setHovered(idx), 120); // 120ms delay
        }
    };
    const handleMouseLeave = () => {
        if (!isMobile) {
            if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
            hoverTimeout.current = setTimeout(() => setHovered(0), 120); // 120ms delay
        }
    };

    useEffect(() => {
        return () => {
            if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        };
    }, []);

    return (
        <div className="w-full flex flex-col md:flex-row gap-4 items-end">
            {cards.map((card, idx) => {
                // On mobile: open if clicked. On desktop: open if hovered.
                const isOpen = isMobile ? opened === idx : hovered === idx;

                return (
                    <div
                        key={idx}
                        className={`
                            bg-myemerald-400 rounded-2xl flex flex-col justify-end transition-all duration-300 cursor-pointer
                            ${isOpen
                                ? "md:flex-[3] md:h-[550px] h-[340px] z-10 shadow-2xl"
                                : "md:flex-1 md:h-[550px] h-[80px] opacity-80"}
                            w-full
                        `}
                        onClick={() => handleCardClick(idx)}
                        onMouseEnter={() => handleMouseEnter(idx)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* ...existing card content... */}
                        <div className="w-full h-32 relative rounded-t-2xl overflow-hidden flex items-center justify-center">
                            {card.imageSrc && (
                                <Image
                                    src={card.imageSrc}
                                    alt={card.imageAlt}
                                    fill
                                    className="object-cover"
                                />
                            )}
                            <span className="opacity-40 text-3xl"></span>
                        </div>
                        <div className="flex flex-col justify-end h-full">
                            {(isMobile || isOpen) && (
                                <button
                                    className="flex items-center justify-between bg-mywhite text-myneutral-900 rounded-full px-6 py-5 m-4 text-2xl font-medium shadow transition hover:bg-myneutral-475"
                                    style={{ minHeight: 48 }}
                                >
                                    <span>{card.buttonText}</span>
                                    <span className="ml-1 flex items-center justify-center">
                                        <svg width="32" height="24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="0" y1="12" x2="28" y2="12" />
                                            <polyline points="22 6 28 12 22 18" />
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