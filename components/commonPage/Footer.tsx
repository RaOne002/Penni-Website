"use client";

import React from 'react';
// import FooterBgSvg from '../svg/FooterBgSvg'
import PennyBgWhiteSvg from '../svg/PennyBgWhiteSvg';
import PennyHalfFlowerSvg from '../svg/PennyHalfFlowerSvg'
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
            <span className="w-10 h-10 rounded-full bg-myblue-500 flex items-center justify-center mr-2">
              {/* Example logo SVG or icon */}
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#222" /><text x="8" y="20" fill="#fff" fontSize="12" fontWeight="bold">LQ</text></svg>
            </span>
            LendQ
          </span>
        </div>
        {/* Desktop Footer Links */}
        <div className='max-md:hidden'>
          <div className="self-end mr-10 max-w-full w-[948px] max-md:mr-2.5">
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-[38%] max-md:ml-0 max-md:w-full">
                <div className="text-3xl font-medium text-mywhite max-md:mt-10">
                  <span style={{ fontWeight: 600, fontSize: "36px" }}>
                    Products
                  </span>
                  <br />
                  Personal Loans
                  <br />
                  Consolidation Loans
                </div>
              </div>
              <div className="ml-5 w-[39%] max-md:ml-0 max-md:w-full">
                <div className="text-3xl font-medium text-mywhite max-md:mt-10">
                  <span style={{ fontWeight: 600, fontSize: "36px" }}>
                    Loan Uses
                  </span>
                  <br />
                  Debt Consolidation
                  <br />
                  Credit card refinance
                  <br />
                  Large purchases
                </div>
              </div>
              <div className="ml-5 w-[23%] max-md:ml-0 max-md:w-full">
                <div className="text-3xl font-medium text-mywhite max-md:mt-10">
                  <span style={{ fontWeight: 600, fontSize: "36px" }}>
                    About Us{" "}
                  </span>
                  <br />
                  Our Clients
                  <br />
                  Our process
                  <br />
                  Blogs
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 mt-72 h-px border border-mywhite border-solid max-md:mt-10 max-md:max-w-full" />
          <div className="mt-7 flex flex-wrap gap-x-11 gap-y-4 text-xl font-medium text-myneutral-300 max-md:max-w-full">
            <a href="#" className="hover:underline">Terms Of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Advertiser Disclosure</a>
            <a href="#" className="hover:underline">Disclosures</a>
            <a href="#" className="hover:underline">CA Privacy</a>
            <a href="#" className="hover:underline">Do Not Sell My Personal Information</a>
            <a href="#" className="hover:underline">Unsubscribe</a>
          </div>
        </div>
        {/* Mobile Footer Links */}
        <div className='max-md:block hidden max-md:mt-5'>
          {/* Links */}
          <div className='max-md:pl-8'>
            <div className="flex flex-row justify-between gap-8 max-md:flex-row max-md:gap-15 max-md:pb-8">
              <div>
                <div className="text-base font-bold text-mywhite mb-2">Products</div>
                <div className="text-base text-mywhite mb-1">Personal Loans</div>
                <div className="text-base text-mywhite">Consolidation Loans</div>
              </div>
              <div>
                <div className="text-base font-bold text-mywhite mb-2">Loan Uses</div>
                <div className="text-base text-mywhite mb-1">Debt Consolidation</div>
                <div className="text-base text-mywhite mb-1">Credit card refinance</div>
                <div className="text-base text-mywhite">Large purchases</div>
              </div>
            </div>
            <div className='max-md:pb-8'>
              <div className="text-base font-bold text-mywhite mb-2">About Us</div>
              <div className="text-base text-mywhite mb-1">Our Clients</div>
              <div className="text-base text-mywhite mb-1">Our process</div>
              <div className="text-base text-mywhite">Blogs</div>
            </div>
          </div>

          {/* Divider */}
          <div className="shrink-0 mt-10 h-px border border-mywhite border-solid max-md:mt-8 max-md:max-w-full" />
          {/* Policy Links for desktop */}
          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-base font-medium text-myneutral-300 max-md:hidden">
            <a href="#" className="hover:underline w-1/2">Terms Of Service</a>
            <a href="#" className="hover:underline w-1/2">Privacy Policy</a>
            <a href="#" className="hover:underline w-1/2">Advertiser Disclosure</a>
            <a href="#" className="hover:underline w-1/2">Disclosures</a>
            <a href="#" className="hover:underline w-1/2">CA Privacy</a>
            <a href="#" className="hover:underline w-1/2">Do Not Sell My Personal Information</a>
            <a href="#" className="hover:underline w-1/2">Unsubscribe</a>
          </div>
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
