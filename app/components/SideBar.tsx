'use client'

import type { SideBarProp } from "@/app/types"
import Link from "next/link"
import { useEffect, useState } from "react"


export default function SideBar({ links } : SideBarProp) {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { 
        rootMargin: "-50% 0px -50% 0px", // Shrink the top and bottom so it only fires in the middle of the screen
        threshold: 0 // Fire when more than half the element enters this middle zone
      }
    )

    links.forEach(link => {
      const el = document.getElementById(link.href.replace("#", ""))
      if (el) observer.observe(el)
    })

    return ()=> observer.disconnect()

  }, [links])

    return (
      <div>
        <div className="hidden md:flex fixed left-0 top-0 h-screen z-1000">
            <aside className="flex flex-col my-auto ml-2 w-45">
                <div className="flex rounded-xl bg-[#1a1a1a]/65 border border-[#C8C8C8] text-white">
                    {/* Left dot colume */}
                    <div className="flex flex-col justify-around items-center py-6 pl-6 gap-6">
                        {links.map(link => (
                        <span
                            key={link.id}
                            className={`w-2 h-2 rounded-full transition-all duration-300
                              ${activeSection === link.href.replace("#", "")
                                    ? "bg-orange-500 scale-125"
                                    : "bg-white"}`}
                        ></span>
                        ))}
                    </div>

                    {/* Right text colume */}
                    <nav className="flex flex-col justify-around p-6 gap-6">
                        {links.map(link => {
                            return (
                            <Link 
                                href={link.href}
                                key={link.id}
                                className={`hover:text-orange-500 transition-all duration-300
                                  ${activeSection === link.href.replace("#", "")
                                    ? "text-orange-500 scale-125"
                                    : ""
                                  }`}
                            >
                                {link.displayName}
                            </Link>
                            )
                        })}
                    </nav>
                </div>
            </aside>
        </div>
        <div className="flex md:hidden">
            <span>test</span>
        </div>
      </div>
    )
}