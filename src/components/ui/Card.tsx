import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  buttonText: string;
  onButtonClick?: () => void;
  imageSrc?: string; // For future use
  imageAlt?: string;
  className?: string;
}
export default function Card({
  title,
  buttonText,
  onButtonClick,
  imageSrc,
  imageAlt = "",
  className,
}: CardProps) {
  return (
    <div className={`flex flex-col justify-between bg-emerald-400 rounded-2xl w-[200px] h-[220px] p-6 shadow-lg ${className}`}>
      {/* Image or placeholder */}
      <div className="w-full h-40 mb-4 flex items-center justify-center rounded-xl bg-emerald-300 overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            width={300}
            height={160}
            className="object-cover w-full h-full"
            priority
          />
        ) : null}
      </div>

      {/* Title or content */}
      <div className="flex-1 flex items-end">
        {/* You can add more content here if needed */}
      </div>

      {/* Button at the bottom */}
      <button
        onClick={onButtonClick}
        className="flex items-center justify-between bg-white text-neutral-900 rounded-full px-6 py-3 mt-6 text-xl font-medium shadow transition hover:bg-zinc-100"
        style={{ minHeight: 56 }}
      >
        <span>{buttonText}</span>
        <span className="ml-4">
          <svg width="28" height="28" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="6" y1="14" x2="22" y2="14" />
            <polyline points="16 8 22 14 16 20" />
          </svg>
        </span>
      </button>
    </div>
  );
}