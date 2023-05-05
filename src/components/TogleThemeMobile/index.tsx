import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

export default function TogleThemeMobile () {
    const togle = () => {
        document.documentElement.classList.toggle('dark')
    }

    useEffect(() => {
        const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
        systemPreference && document.documentElement.classList.add('dark')
    })

 return (
    <div className="-mr-5 mt-5">
        <MoonIcon className="h-7 text-gray-950 block dark:hidden cursor-pointer  dark:text-gray-100" onClick={togle}/>
        <SunIcon className="h-7 text-gray-950 hidden dark:block cursor-pointer  dark:text-gray-100" onClick={togle}/>
    </div>
 )
}