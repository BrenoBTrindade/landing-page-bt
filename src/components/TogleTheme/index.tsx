import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function TogleTheme () {
    const togle = () => {
        document.documentElement.classList.toggle('dark')
    }

 return (
    <div className="hidden sm:block">
        <MoonIcon className="h-7 text-gray-100 block dark:hidden cursor-pointer" onClick={togle}/>
        <SunIcon className="h-7 text-gray-100 hidden dark:block cursor-pointer" onClick={togle}/>
    </div>
 )
}