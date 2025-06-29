import * as React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <article className="flex flex-col items-start py-7 pr-20 pl-6 mt-4 rounded-xl bg-neutral-700 max-md:px-5">
      <h3 className="text-3xl font-bold text-zinc-400">
        {title}
      </h3>
      <p className="mt-4 text-2xl font-normal text-neutral-400">
        {description}
      </p>
    </article>
  );
};
