import React from "react";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export default function SectionTwoTitle({ children }: Props) {
  return (
    <div className="mt-5 w-screen bg-gray-900 rounded-sm dark:bg-gray-500 max-md:w-full max-md:-mr-8 max-md:rounded-sm ">
      <h1 className="text-center p-3 shadow-gray-500 dark:shadow-gray-800 text-gray-200 shadow-md font-bold text-xl max-md:text-lg dark:text-gray-200 max-lg:text-lg">
        {children}
      </h1>
    </div>
  );
}
