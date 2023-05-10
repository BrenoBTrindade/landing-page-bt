import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

export default function TogleTheme() {
  const togle = () => {
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const systemPreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    systemPreference && document.documentElement.classList.add("dark");
  });

  return (
    <div className="hidden sm:block mr-5 select-none">
      <MoonIcon
        className="h-7 w-8 -mr-6 animate-bounce text-gray-950 block dark:hidden cursor-pointer  dark:text-gray-100"
        onClick={togle}
      />
      <SunIcon
        className="h-7 w-8 -mr-6 animate-bounce text-gray-950 hidden dark:block cursor-pointer  dark:text-gray-100"
        onClick={togle}
      />
    </div>
  );
}
