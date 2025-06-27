"use client";

import React from 'react';
// import FooterBgSvg from '../svg/FooterBgSvg'
import PennyBgWhiteSvg from '../svg/PennyBgWhiteSvg';
import PennyHalfFlowerSvg from '../svg/PennyHalfFlowerSvg'
// import PennyLogoSvg from '../svg/PennyLogoSvg';
import Logo from '../svg/Logo';
// import PennyFlowerSvg3 from '../svg/PennyFlowerSvg3';

export default function Footer() {
  return (
    <footer className="flex bg-myneutral-850 relative flex-col items-center self-stretch px-16 pt-64 pb-16 w-full min-h-[600px] max-md:px-3 max-md:pt-8 max-md:pb-4 max-md:max-w-full">
      <PennyBgWhiteSvg
        className="object-cover absolute inset-0 size-full"
        aria-label="Footer background"
      />
      {/* Top-right flower for desktop */}
      <PennyHalfFlowerSvg
        className="absolute right-[0px] top-[70px] w-[110px] z-10 max-md:hidden"
        aria-label="Half Flower"
      />
      {/* Bottom-left flower for mobile */}
      {/* <PennyFlowerSvg3
        className="max-md:block hidden absolute z-10 max-md:left-30 max-md:bottom-58"
        aria-label="Half Flower"
      /> */}
      <div className="flex relative flex-col w-full max-w-[1602px] max-md:max-w-full">
        {/* Logo */}
        <div className="mb-8 max-md:mb-6 flex">
          {/* Replace with your logo component or img */}
          <span className="text-mywhite text-2xl font-bold flex items-center gap-2">
            {/* <PennyLogoSvg aria-label="Penny Logo" /> */}
            <Logo aria-label="Penny Logo" />
            LendQ
          </span>
        </div>
        {/* Desktop Footer Links */}
        <div className="self-end mr-10 max-w-full w-[90%] flex justify-end max-md:mr-2.5 max-md:hidden">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[38%] max-md:ml-0 max-md:w-full">
              <div className="text-3xl font-medium text-mywhite max-md:mt-10">
                <span style={{ fontWeight: 600, fontSize: "36px" }}>
                  Products
                </span>
                <br />
                <a href="/personal-loan" className="hover:underline text-mywhite">Personal Loans</a>
                <br />
                <a href="#" className="hover:underline text-mywhite">Consolidation Loans</a>
              </div>
            </div>
            <div className="ml-5 w-[39%] max-md:ml-0 max-md:w-full">
              <div className="text-3xl font-medium text-mywhite max-md:mt-10">
                <span style={{ fontWeight: 600, fontSize: "36px" }}>
                  Loan Uses
                </span>
                <br />
                <a href="#" className="hover:underline text-mywhite">Debt Consolidation</a>
                <br />
                <a href="#" className="hover:underline text-mywhite">Credit card refinance</a>
                <br />
                <a href="#" className="hover:underline text-mywhite">Large purchases</a>
              </div>
            </div>
            <div className="ml-5 w-[23%] max-md:ml-0 max-md:w-full">
              <div className="text-3xl font-medium text-mywhite max-md:mt-10">
                <span style={{ fontWeight: 600, fontSize: "36px" }}>
                  About Us{" "}
                </span>
                <br />
                <a href="#" className="hover:underline text-mywhite">Our Clients</a>
                <br />
                <a href="#" className="hover:underline text-mywhite">Our process</a>
                <br />
                <a href="#" className="hover:underline text-mywhite">Blogs</a>
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0 mt-72 h-px border border-mywhite border-solid max-md:mt-10 max-md:max-w-full max-md:hidden" />
        <div className="mt-7 flex flex-wrap gap-x-11 gap-y-4 text-xl font-medium text-myneutral-300 max-md:max-w-full max-md:hidden">
          <a href="#" className="hover:underline">Terms Of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Advertiser Disclosure</a>
          <a href="#" className="hover:underline">Disclosures</a>
          <a href="#" className="hover:underline">CA Privacy</a>
          <a href="#" className="hover:underline">Do Not Sell My Personal Information</a>
          <a href="#" className="hover:underline">Unsubscribe</a>
        </div>
        {/* Mobile Footer Links */}
        <div className='max-md:block hidden max-md:mt-5'>
          {/* Links */}
          <div className='max-md:pl-8 cursor-pointer'>
            <div className="flex flex-row justify-between gap-8 max-md:flex-row max-md:gap-15 max-md:pb-8">
              <div>
                <a href="#" className="text-base font-bold text-mywhite mb-2 block">Products</a>
                <a href="/personal-loan" className="text-base text-mywhite mb-1 block hover:underline">Personal Loans</a>
                <a href="#" className="text-base text-mywhite block hover:underline">Consolidation Loans</a>
              </div>
              <div>
                <a href="#" className="text-base font-bold text-mywhite mb-2 block">Loan Uses</a>
                <a href="#" className="text-base text-mywhite mb-1 block hover:underline">Debt Consolidation</a>
                <a href="#" className="text-base text-mywhite mb-1 block hover:underline">Credit card refinance</a>
                <a href="#" className="text-base text-mywhite block hover:underline">Large purchases</a>
              </div>
            </div>
            <div className='max-md:pb-8'>
              <a href="#" className="text-base font-bold text-mywhite mb-2 block">About Us</a>
              <a href="#" className="text-base text-mywhite mb-1 block hover:underline">Our Clients</a>
              <a href="#" className="text-base text-mywhite mb-1 block hover:underline">Our process</a>
              <a href="#" className="text-base text-mywhite block hover:underline">Blogs</a>
            </div>
          </div>

          {/* Divider */}
          <div className="shrink-0 mt-10 h-px border border-mywhite border-solid max-md:mt-8 max-md:max-w-full" />
          {/* Policy Links for mobile */}
          <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-10 text-base font-medium text-myneutral-300 md:hidden max-md:ml-5 max-md:pb-15">
            <a href="#" className="hover:underline">Terms Of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Advertiser Disclosure</a>
            <a href="#" className="hover:underline">Disclosures</a>
            <a href="#" className="hover:underline">CA Privacy</a>
            <a href="#" className="hover:underline">Do Not Sell My Personal Information</a>
            <a href="#" className="hover:underline">Unsubscribe</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
