import React from "react";

interface buttonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  bgColor?: string;         
  hoverBgColor?: string;   
  textColor?: string;       
  iconBgColor?: string;     
}

export default function MyButton({
  children = "Click here",
  onClick,
  className = "",
  bgColor = "bg-blue-500",
  hoverBgColor = "hover:bg-blue-600",
  textColor = "text-white",
  iconBgColor = "bg-neutral-900",
}: buttonProps) {
  return (
    <button
      className={`flex items-center ${bgColor} ${hoverBgColor} ${textColor} rounded-full pl-10 pr-1 py-2 text-base mb-4 transition-colors duration-200 ${className}`}
      onClick={onClick}
    >
      <p className="pr-4">{children}</p>
      <span className={`flex items-center justify-center ${iconBgColor} rounded-full w-15 h-10`}>
        <svg width="30" height="30" fill="none" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <line x1="0" y1="17.5" x2="27" y2="17.5" />
          <polyline points="20 11 27 17.5 20 24" />
        </svg>
      </span>
    </button>
  );
}