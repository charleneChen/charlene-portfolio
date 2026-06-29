"use client";

import Link from "next/link";
import Image from "next/image";
// usePathname is a Client Component hook that lets you read the current URL's pathname
import { usePathname } from "next/navigation";
import Logo from "@/public/charlenechen.png";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        scrolled ? "bg-white/60 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="flex h-navbar justify-between px-6">
        <Link href={"/"} className="items-cneter flex">
          <div className="flex cursor-pointer items-center gap-2.5">
            {/* Desktop logo */}
            <Image
              src={Logo}
              alt="Xiaolian (Charlene) Chen"
              className="hidden h-16 w-16 rounded-full border-4 border-dashed border-orange-500 md:block"
            />
            {/* Mobile logo */}
            <Image
              src={Logo}
              alt="Xiaolian (Charlene) Chen"
              className="block h-auto w-15 rounded-full border-4 border-dashed border-orange-500 md:hidden!"
            />
            <span className="hidden text-2xl font-bold md:block">
              Tech with Charlene
            </span>
          </div>
        </Link>

        <ul className="flex items-center gap-4 text-base font-semibold uppercase md:gap-6">
          {navigation.map((item) => (
            <li
              key={item.name}
              className={`flex h-full items-center ${
                item.href === "/" ? "hidden md:block" : ""
              }`}
            >
              <Link
                href={item.href}
                className={`flex h-full items-center border-b-4 transition-colors ${
                  pathname === item.href
                    ? "border-orange-500 font-bold text-gray-900"
                    : "border-transparent font-medium text-gray-500 hover:border-orange-300 hover:text-gray-800"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
