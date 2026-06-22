'use client'

import Link from "next/link"
import Image from "next/image"
// usePathname is a Client Component hook that lets you read the current URL's pathname
import { usePathname } from "next/navigation"
import Logo from "@/public/charlenechen.png"

const navigation = [
  { name: 'Home', href: '/'},
  { name: 'Projects', href: '/projects'},
  { name: 'Contact', href: '/contact'},
]

export default function NavBar() {
  const pathname = usePathname()
  
  return (
    <header className="w-full bg-sky-50 fixed z-50">
      <nav className="flex justify-between px-6 h-20">
        <Link href={"/"} className="flex items-cneter">
          <div className="flex items-center gap-2.5 cursor-pointer">
                  {/* Desktop logo */}
                  <Image
                    src={Logo}
                    alt="Xiaolian (Charlene) Chen"
                    className="w-16 h-16 border-4 border-orange-500 border-dashed rounded-full hidden md:block"
                  />
                  {/* Mobile logo */}
                  <Image  
                    src={Logo}
                    alt="Xiaolian (Charlene) Chen"
                    className="w-[60px] h-auto border-4 border-orange-500 border-dashed rounded-full block md:hidden"
                  />
                  <span className="font-bold text-2xl hidden md:inline">Tech with Charlene</span>
          </div>
        </Link>

        <ul className="flex items-center gap-4 md:gap-6 font-semibold text-base uppercase">
          {navigation.map(item => (
            <li key={item.name} className={`h-full flex items-center ${item.href === "/" ?
              "hidden md:block"
              : ""}`
            }>
              <Link 
                href={item.href}
                className={`h-full flex items-center border-b-4 transition-colors ${
                  pathname === item.href ? 
                  "border-orange-500 text-gray-900 font-bold"
                  : "border-transparent hover:border-orange-300 text-gray-500 hover:text-gray-800 font-medium"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>        
      </nav>
    </header>
  )
}