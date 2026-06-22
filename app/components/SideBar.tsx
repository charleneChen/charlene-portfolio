'use client'

import type { SideBarProp } from "@/app/types"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function SideBar({ links } : SideBarProp) {
    const pathname = usePathname()

    const [active, setActive] = useState('')
    useEffect(() => {
        const observers: IntersectionObserver[] = []

        links.forEach(({ href }) => {
            const id = href.replace('#', '')
            const el = document.getElementById(id)
            if (!el) return

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActive(href)
                },
                {
                    rootMargin: '-40% 0px -60% 0px',
                    threshold: 0,
                }
            )

            observer.observe(el)
            observers.push(observer)
        })

        return () => observers.forEach(o => o.disconnect())
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
                            className="w-2 h-2 rounded-full bg-white"
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
                                className="hover:text-orange-500 transition-colors"
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