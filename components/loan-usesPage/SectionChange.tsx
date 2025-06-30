import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import LenderLogos from "./LenderLogo";
import ConsolidationLoansSection from "./ConsolidationLoansSection";

const sections = [
  {
    label: "Consolidation",
    header: "Consolidate Your Debt",
    content: "Combine multiple debts into one easy payment and save on interest with our consolidation options.",
    points: [
      "Lower your monthly payments",
      "Simplify your finances",
      "Save on interest"
    ]
  },
  {
    label: "Credit card refinancing",
    header: "Refinance Your Credit Card",
    content: "Lower your credit card interest rates and pay off balances faster with our refinancing solutions.",
    points: [
      "Reduce your credit card APR",
      "Pay off balances faster",
      "One simple monthly payment"
    ]
  },
  {
    label: "Home improvement",
    header: "Upgrade Your Home",
    content: "Finance your next renovation or home project with affordable rates and flexible terms.",
    points: [
      "Flexible loan amounts",
      "No home equity required",
      "Quick funding for your project"
    ]
  },
  {
    label: "Large purchases",
    header: "Finance Large Purchases",
    content: "Get the funds you need for major expenses, from appliances to vacations, with simple repayment plans.",
    points: [
      "Finance big expenses easily",
      "No collateral needed",
      "Transparent terms"
    ]
  }
];

export default function LoanUsesPage() {
  const searchParams = useSearchParams();
  const tabParam = searchParams?.get("tab");
  const initialIdx = tabParam
    ? sections.findIndex(s => s.label.toLowerCase().replace(/\s/g, "") === tabParam.toLowerCase().replace(/\s/g, ""))
    : 0;

  const [activeIdx, setActiveIdx] = useState(initialIdx >= 0 ? initialIdx : 0);

  useEffect(() => {
    if (tabParam) {
      const idx = sections.findIndex(s => s.label.toLowerCase().replace(/\s/g, "") === tabParam.toLowerCase().replace(/\s/g, ""));
      if (idx >= 0 && idx !== activeIdx) setActiveIdx(idx);
    }
    // eslint-disable-next-line
  }, [tabParam]);

  return (
    <div className="flex flex-col items-center justify-center w-[98%]">
      <LenderLogos
        sections={sections}
        activeIdx={activeIdx}
        setActiveIdx={setActiveIdx}
      />
      <ConsolidationLoansSection
        section={sections[activeIdx]}
      />
    </div>
  );
}