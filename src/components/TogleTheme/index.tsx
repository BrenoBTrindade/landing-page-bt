import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

export default function TogleTheme () {
    const togle = () => {
        document.documentElement.classList.toggle('dark')
    }

    useEffect(() => {
        const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
        systemPreference && document.documentElement.classList.add('dark')
    })

 return (
    <div className="hidden sm:block">
        <MoonIcon className="h-7 text-gray-100 block dark:hidden cursor-pointer" onClick={togle}/>
        <SunIcon className="h-7 text-gray-100 hidden dark:block cursor-pointer" onClick={togle}/>
    </div>
 )
}