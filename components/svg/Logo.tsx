"use client";

import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
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
