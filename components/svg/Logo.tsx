"use client";

import Image from "next/image";
import React from "react";
interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image
        src="/PennyLogo.png"
        alt="Logo"
        width={52}
        height={54}
        className="w-[52px] h-[54px] object-contain"
        priority
      />
    </div>
  );
};

export default Logo;