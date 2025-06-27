import React, { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
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
        z-20
        w-full
        max-md:bg-bg-myblack
        ${className}
      `}
    >
      {/* Logo */}
      <div className="text-mywhite text-xs tracking-wider justify-self-start relative z-20">
        LOGO
      </div>

      {/* Desktop Menu */}
      <ul className="flex gap-9 list-none m-0 p-0 justify-center max-md:hidden">
        <li className="relative group">
          <a
            href="./"
            className="text-mywhite font-semibold no-underline text-base transition-colors duration-200 hover:text-myblue-500"
          >
            Products
          </a>
          {/* Dropdown menu */}
          <ul className="absolute font-semibold text-base left-0 top-full min-w-[180px] bg-[#222] rounded-xl shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-20">
            <li>
              <Link
                href="/personal-loan"
                className="block px-6 py-3 text-mywhite hover:text-myblue-500 hover:bg-myneutral-850 rounded-t-xl transition-colors duration-150"
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

      {/* Hamburger Icon for Mobile */}
      {!menuOpen && (
        <button
          className="md:hidden absolute right-6 top-4 z-30"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-7 h-1 bg-mywhite mb-1 rounded transition-all duration-200" />
          <span className="block w-7 h-1 bg-mywhite mb-1 rounded transition-all duration-200" />
          <span className="block w-7 h-1 bg-mywhite rounded transition-all duration-200" />
        </button>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-myblack-800 z-20 flex flex-col items-center justify-center md:hidden transition-all">
          <button
            className="absolute top-6 right-6 text-mywhite text-3xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <ul className="flex flex-col gap-8 text-center">
            <li>
              <a href="./" className="text-mywhite font-semibold text-xl">Products</a>
              <ul className="mt-2">
                <li>
                  <Link
                    href="/personal-loan"
                    className="block px-6 py-2 text-mywhite hover:text-myblue-500 hover:bg-myneutral-850 rounded transition-colors duration-150"
                    onClick={() => setMenuOpen(false)}
                  >
                    Personal Loans
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-6 py-2 text-mywhite hover:text-myblue-500 hover:bg-myneutral-850 rounded transition-colors duration-150"
                  >
                    Consolidation Loans
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="text-mywhite font-semibold text-xl"
              >
                Loan Uses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-mywhite font-semibold text-xl"
              >
                Our Clients
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-mywhite font-semibold text-xl"
              >
                Our Process
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-mywhite font-semibold text-xl"
              >
                Resource
              </a>
            </li>
            <li>
              <button
                className="bg-myblue-500 text-mywhite border-none rounded-[22px] py-[10px] px-[32px] text-base font-semibold cursor-pointer transition-colors duration-200 hover:bg-mysky-800 mt-4"
                onClick={() => setMenuOpen(false)}
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Get Started Button */}
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
          max-md:hidden
        "
      >
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;