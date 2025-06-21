import React from 'react';

export const PlaceholderCards: React.FC = () => {
  return (
    <section className="mt-11 w-full max-w-[1731px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex grow gap-2.5 items-center max-md:mt-10">
            <div className="self-stretch my-auto min-w-60 w-[525px]">
              <div className="flex shrink-0 bg-gray-100 rounded-2xl h-[550px] max-md:max-w-full" />
            </div>
          </div>
        </div>
        <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex grow gap-2.5 items-center max-md:mt-10">
            <div className="self-stretch my-auto min-w-60 w-[525px]">
              <div className="flex shrink-0 bg-gray-100 rounded-2xl h-[550px] max-md:max-w-full" />
            </div>
          </div>
        </div>
        <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex grow gap-2.5 items-center max-md:mt-10">
            <div className="self-stretch my-auto min-w-60 w-[525px]">
              <div className="flex shrink-0 bg-gray-100 rounded-2xl h-[550px] max-md:max-w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
