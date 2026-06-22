"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import type { ProjectsNavProps } from "@/app/types"

export default function ProjectsNav({ projects } : ProjectsNavProps) {
  
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0
      }
    )

    // observe all sections
    projects.forEach(project => {
      const projectId = project.href.replace("#", "")
      const el = document.getElementById(projectId)
      if (el) observer.observe(el)
    })

    return ()=> observer.disconnect()
  })

  return (
    // overflow-hidden on aside provides container boundary
    <aside className="relative bg-white overflow-hidden md:overflow-visible">
      {/* Responsive Navigation */}
      {/* Mobile horizontal scroll */}
      {/* overflow-x-auto on nav says "scroll me if content is too wide" */}
      <nav className="flex md:hidden gap-4 overflow-x-auto">
        {projects.map(project => (
            <Link 
              key={project.id} 
              href={project.href}
              className={`whitespace-nowrap block text-center pt-5 pb-3 px-4 hover:text-orange-accent transform hover:scale-105 transition duration-300 
                ${activeId === project.href.replace("#", "")
                    ? "text-orange-accent font-bold"  // active
                    : undefined
                }`}
            >
              {project.displayName}
            </Link>
      ))}
      </nav>
      {/* Fading edge/gradient for horizontal scroll hint on mobile */}
      <div className="md:hidden absolute top-0 right-0 w-20 h-full pointer-events-none bg-gradient-to-l from-white to-transparent" />

      {/* Desktop vertical sidebar */}
      <nav className="hidden md:block space-y-4">
          {/* use space-y for non-flex stacked block elements */}
          {projects.map(project => (
            <Link 
              key={project.id} 
              href={project.href}
              className={`block text-center py-3 px-4  hover:text-orange-accent transform hover:scale-105 transition duration-300
                ${activeId === project.href.replace("#", "")
                    ? "border-l-4 border-orange-500 text-orange-accent font-bold"  // active
                    : undefined
                }`}
            >
              {project.displayName}
            </Link>
          ))}
      </nav>
    </aside>
  )   
}