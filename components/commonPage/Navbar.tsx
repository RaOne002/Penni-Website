import React from "react";
import Link from "next/link";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => (
  <nav
    className={`
      grid
      grid-cols-[120px_1fr_160px]
      items-center
      bg-transparent
      py-[18px]
      px-[40px]
      font-inter
      relative
      z-10
      w-full
      ${className}
    `}
  >
    <div className="text-mywhite text-xs tracking-wider justify-self-start relative">
      LOGO
    </div>
    <ul className="flex gap-9 list-none m-0 p-0 justify-center">
      <li className="relative group">
  <a
    href="#"
    className="text-mywhite font-semibold no-underline text-base transition-colors duration-200 hover:text-myblue-500"
  >
    Products
  </a>
  {/* Dropdown menu */}
  <ul className="absolute font-semibold text-base left-0 top-full min-w-[180px] bg-[#222] rounded-xl shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-20">
    <li>
      <Link
        href="/personal-loan"
        className="block px-6 py-3 text-mywhite hover:text-myblue-500 hover:bg-myneutral-850; rounded-t-xl transition-colors duration-150"
      >
        Personal Loans
      </Link>
    </li>
    <li>
      <a
        href="#"
        className="block px-6 py-3 text-mywhite hover:text-myblue-500 hover:bg-myneutral-850 rounded-b-xl transition-colors duration-150"
      >
        Consolidation Loans
      </a>
    </li>
  </ul>
</li>
      <li>
        <a
          href="#"
          className="text-mywhite font-semibold no-underline text-base transition-colors duration-200 hover:text-myblue-500"
        >
          Loan Uses
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-mywhite font-semibold no-underline text-base transition-colors duration-200 hover:text-myblue-500"
        >
          Our Clients
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-mywhite font-semibold no-underline text-base transition-colors duration-200 hover:text-myblue-500"
        >
          Our Process
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-mywhite font-semibold no-underline text-base transition-colors duration-200 hover:text-myblue-500"
        >
          Resource
        </a>
      </li>
    </ul>
    <button
      className="
        bg-myblue-500
        text-mywhite
        border-none
        rounded-[22px]
        py-[10px]
        px-[32px]
        text-base
        font-semibold
        cursor-pointer
        transition-colors
        duration-200
        justify-self-end
        hover:bg-mysky-800
      "
    >
      Get Started
    </button>
  </nav>
);

export default Navbar;