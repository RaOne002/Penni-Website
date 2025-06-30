import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from '../svg/Logo';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <nav
      className={`
        w-full
        bg-transparent
        font-inter
        relative
        z-20
        px-4 py-4
        flex items-center justify-between
        ${className}
      `}
    >
      {/* Logo */}
      <div className="text-mywhite text-base md:text-lg tracking-wider flex-shrink-0 z-20">
        <div className="mb-8 px-8 max-md:mb-6 flex max-md:px-1">
          {/* Logo is now larger and wrapped in a link to './' */}
          <a href="./" className="flex items-center gap-1">
            <span className="text-mywhite text-4xl font-bold flex items-center gap-1">
              <Logo aria-label="LenQ Logo" className="w-14 h-14" />
              LenQ
            </span>
          </a>
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 lg:gap-9 list-none m-0 p-0 justify-center flex-1">
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
                className="block px-6 py-3 text-mywhite hover:text-myblue-500 hover:bg-myneutral-850 rounded-t-xl transition-colors duration-150"
              >
                Personal Loans
              </Link>
            </li>
            <li>
              <a
                href="./consolidation-loans"
                className="block px-6 py-3 text-mywhite hover:text-myblue-500 hover:bg-myneutral-850 rounded-b-xl transition-colors duration-150"
              >
                Consolidation Loans
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="./loan-uses"
            className="text-mywhite font-semibold no-underline text-base transition-colors duration-200 hover:text-myblue-500"
          >
            Loan Uses
          </a>
        </li>
        <li>
          <a
            href="./clients"
            className="text-mywhite font-semibold no-underline text-base transition-colors duration-200 hover:text-myblue-500"
          >
            Our Clients
          </a>
        </li>
        <li>
          <a
            href="./process"
            className="text-mywhite font-semibold no-underline text-base transition-colors duration-200 hover:text-myblue-500"
          >
            Our Process
          </a>
        </li>
        <li>
          <a
            href="./resource"
            className="text-mywhite font-semibold no-underline text-base transition-colors duration-200 hover:text-myblue-500"
          >
            Resource
          </a>
        </li>
      </ul>

      {/* Desktop Get Started Button */}
      <button
        className="
          hidden md:inline-block
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
          hover:bg-mysky-800
          ml-4
        "
        onClick={() => router.push('')} // /user-form (TODO: Update with actual path)
        aria-label="Get Started"
      >
        Get Started
      </button>

      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-30"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <span className="block w-7 h-1 bg-mywhite mb-1 rounded transition-all duration-200" />
        <span className="block w-7 h-1 bg-mywhite mb-1 rounded transition-all duration-200" />
        <span className="block w-7 h-1 bg-mywhite rounded transition-all duration-200" />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-myblack-800 z-40 flex flex-col items-center justify-center md:hidden transition-all">
          {/* Logo at the top of mobile menu */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <a href="./" className="flex items-center gap-2">
              <Logo aria-label="LenQ Logo" className="w-12 h-12" />
              <span className="text-mywhite text-3xl font-bold">LenQ</span>
            </a>
          </div>
          <button
            className="absolute top-4 right-4 text-mywhite text-3xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <ul className="flex flex-col gap-8 text-center">
            <li>
              <a href="#" className="text-mywhite font-semibold text-xl">Products</a>
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
                    href="./consolidation-loans"
                    className="block px-6 py-2 text-mywhite hover:text-myblue-500 hover:bg-myneutral-850 rounded transition-colors duration-150"
                  >
                    Consolidation Loans
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="./loan-uses"
                className="text-mywhite font-semibold text-xl"
              >
                Loan Uses
              </a>
            </li>
            <li>
              <a
                href="./clients"
                className="text-mywhite font-semibold text-xl"
              >
                Our Clients
              </a>
            </li>
            <li>
              <a
                href="./process"
                className="text-mywhite font-semibold text-xl"
              >
                Our Process
              </a>
            </li>
            <li>
              <a
                href="./resource"
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
    </nav>
  );
};

export default Navbar;