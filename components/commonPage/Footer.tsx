"use client";

import React from 'react';
import FooterBgSvg from '../svg/FooterBgSvg'
import PennyHalfFlowerSvg from '../svg/PennyHalfFlowerSvg'

export default function Footer() {
  return (
    <footer className="flex relative flex-col items-center self-stretch px-16 pt-64 pb-16 w-full min-h-[600px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <FooterBgSvg
        className="object-cover absolute inset-0 size-full"
        aria-label="Footer background"
      />
      {/* Top-right flower */}
      <PennyHalfFlowerSvg
        className="absolute right-[0px] top-[70px] w-[110px] z-10"
        aria-label="Half Flower"
      />
      <div className="flex relative flex-col w-full max-w-[1602px] max-md:max-w-full">
        <div className="self-end mr-10 max-w-full w-[948px] max-md:mr-2.5">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[38%] max-md:ml-0 max-md:w-full">
              <div className="text-3xl font-medium text-white max-md:mt-10">
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
              <div className="text-3xl font-medium text-white max-md:mt-10">
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
              <div className="text-3xl font-medium text-white max-md:mt-10">
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
        <div className="shrink-0 mt-72 h-px border border-white border-solid max-md:mt-10 max-md:max-w-full" />
        <div className="mt-7 flex flex-wrap gap-x-12 gap-y-4 text-xl font-medium text-neutral-300 max-md:max-w-full">
          <a href="#" className="hover:underline">Terms Of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Advertiser Disclosure</a>
          <a href="#" className="hover:underline">Disclosures</a>
          <a href="#" className="hover:underline">CA Privacy</a>
          <a href="#" className="hover:underline">Do Not Sell My Personal Information</a>
          <a href="#" className="hover:underline">Unsubscribe</a>
        </div>
      </div>
    </footer>
  );
};
