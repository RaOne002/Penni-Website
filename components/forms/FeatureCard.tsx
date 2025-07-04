import * as React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps & { className?: string }> = ({ title, description, className }) => {
  return (
    <article
      className={`flex flex-col items-start py-3 px-4 sm:px-6 md:px-7 mt-2 rounded-xl bg-myneutral-700 ${className || ""}`}
    >
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-myzinc-200">
        {title}
      </h3>
      <p className="mt-1 text-base sm:text-lg md:text-xl font-normal text-myzinc-300">
        {description}
      </p>
    </article>
  );
};