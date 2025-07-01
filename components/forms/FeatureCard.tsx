import * as React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps & { className?: string }> = ({ title, description, className }) => {
  return (
    <article className={`flex flex-col items-start py-3 px-7 mt-2 rounded-xl bg-myneutral-700 max-md:px-5 ${className || ""}`}>
      <h3 className="text-3xl font-bold text-myzinc-200">
        {title}
      </h3>
      <p className="mt-1 text-xl font-normal text-myzinc-300">
        {description}
      </p>
    </article>
  );
};
