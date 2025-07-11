"use client";

import React from 'react';
import LenQBgWhiteSvg from '../svg/LenQBgWhiteSvg';
import LenQHalfFlowerSvg from '../svg/LenQHalfFlowerSvg'
import LenQFlowerSvg from '../svg/LenQFlowerSvg';
import Logo from '../svg/Logo';


export default function Footer() {
  return (
    <footer className="flex bg-myneutral-850 relative flex-col items-center self-stretch pt-64 pb-16 w-full min-h-[600px] max-md:px-3 max-md:pt-8 max-md:pb-4 max-md:max-w-full">
      <LenQBgWhiteSvg
        className="object-cover absolute inset-0 size-full w-full h-full"
        aria-label="Footer background"
      />
      {/* Top-right flower for desktop */}
      <LenQHalfFlowerSvg
        className="absolute z-10 right-[0%] top-5 w-16 h-16 md:w-36 md:h-36 max-md:hidden"
        aria-label="Half Flower"
      />
      {/* Bottom-left flower for mobile */}
      <LenQFlowerSvg
        className="absolute z-10 right-[0%] top-[51.5%] w-16 h-16 md:w-36 md:h-36 max-md:block hidden"
        aria-label="Half Flower"
      />
      <div className="flex relative flex-col w-full max-w-[1602px] max-md:max-w-full">
        {/* Logo */}
        <div className="mb-8 px-8 max-md:mb-6 flex">
          {/* Logo is now larger and wrapped in a link to './' */}
          <a href="./" className="flex items-center gap-1">
            <span className="text-mywhite text-4xl font-bold flex items-center gap-1">
              <Logo aria-label="LenQ Logo" className="w-14 h-14" />
              LenQ
            </span>
          </a>
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
                <a href="./consolidation-loans" className="hover:underline text-mywhite">Consolidation Loans</a>
              </div>
            </div>
            <div className="ml-5 w-[39%] max-md:ml-0 max-md:w-full">
              <div className="text-3xl font-medium text-mywhite max-md:mt-10">
                <a href='./loan-uses' style={{ fontWeight: 600, fontSize: "36px" }}>
                  Loan Uses
                </a>
                <br />
                <a href="/loan-uses?tab=consolidation#consolidation" className="hover:underline text-mywhite">Debt Consolidation</a>
                <br />
                <a href="/loan-uses?tab=creditcardrefinancing#creditcardrefinancing" className="hover:underline text-mywhite">Credit card refinance</a>
                <br />
                <a href="/loan-uses?tab=largepurchases#largepurchases" className="hover:underline text-mywhite">Large purchases</a>
              </div>
            </div>
            <div className="ml-5 w-[23%] max-md:ml-0 max-md:w-full">
              <div className="text-3xl font-medium text-mywhite max-md:mt-10">
                <span style={{ fontWeight: 600, fontSize: "36px" }}>
                  About Us{" "}
                </span>
                <br />
                <a href="./clients" className="hover:underline text-mywhite">Our Clients</a>
                <br />
                <a href="./process" className="hover:underline text-mywhite">Our process</a>
                <br />
                <a href="./resource" className="hover:underline text-mywhite">Blogs</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <div className="flex w-[90%] items-center justify-center shrink-0 mt-24 h-px border border-mywhite border-solid max-md:mt-10 max-md:max-w-full max-md:hidden" />
        </div>
        <div className="flex w-full justify-center">
          <div className="mt-5 flex flex-wrap items-center justify-between w-[90%] gap-x-10 gap-y-4 text-xl font-medium text-myneutral-300 max-md:max-w-full max-md:hidden">
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
          <div className='max-md:pl-8 cursor-pointer'>
            <div className="flex flex-row justify-between gap-8 max-md:flex-row max-md:gap-15 max-md:pb-8">
              <div>
                <a href="#" className="text-base font-bold text-mywhite mb-2 block">Products</a>
                <a href="/personal-loan" className="text-base text-mywhite mb-1 block hover:underline">Personal Loans</a>
                <a href="./consolidation-loans" className="text-base text-mywhite block hover:underline">Consolidation Loans</a>
              </div>
              <div>
                <a href="./loan-uses" className="text-base font-bold text-mywhite mb-2 block">Loan Uses</a>
                <a href="/loan-uses?tab=consolidation#consolidation" className="text-base text-mywhite mb-1 block hover:underline">Debt Consolidation</a>
                <a href="/loan-uses?tab=creditcardrefinancing#creditcardrefinancing" className="text-base text-mywhite mb-1 block hover:underline">Credit card refinance</a>
                <a href="/loan-uses?tab=largepurchases#largepurchases" className="text-base text-mywhite block hover:underline">Large purchases</a>
              </div>
            </div>
            <div className='max-md:pb-8'>
              <a href="#" className="text-base font-bold text-mywhite mb-2 block">About Us</a>
              <a href="./clients" className="text-base text-mywhite mb-1 block hover:underline">Our Clients</a>
              <a href="./process" className="text-base text-mywhite mb-1 block hover:underline">Our process</a>
              <a href="./resource" className="text-base text-mywhite block hover:underline">Blogs</a>
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
