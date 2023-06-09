import React from "react";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export default function Title({ children }: Props) {
  return (
    <h1 className="text-center text-4xl max-lg:text-lg max-md:text-xl dark:text-gray-100 ">
      {children}
    </h1>
  );
}
