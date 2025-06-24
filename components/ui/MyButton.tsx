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
  bgColor = "bg-myblue-500",
  hoverBgColor = "hover:bg-mysky-800",
  textColor = "text-mywhite",
  iconBgColor = "bg-myneutral-850",
}: buttonProps) {
  return (
    <button
      className={`flex items-center ${bgColor} ${hoverBgColor} ${textColor} rounded-full pl-10 pr-1 py-2 text-base mb-4 transition-colors duration-200 ${className}`}
      onClick={onClick}
    >
      <p className="pr-4">{children}</p>
      <span className={`flex items-center justify-center ${iconBgColor} rounded-full w-15 h-10`}>
        <svg width="30" height="30" fill="none" stroke="var(--mywhite)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <line x1="0" y1="15" x2="27" y2="15" />
          <polyline points="23 8 30 15 23 22" />
        </svg>
      </span>
    </button>
  );
}