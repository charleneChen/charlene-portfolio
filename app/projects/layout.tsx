import { getAllProjects } from "@/app/lib/projects"
import type { ProjectsLayoutProps } from "@/app/types"
import Link from "next/link"

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  const projects = getAllProjects()

    return (
      <div className="flex flex-col md:flex-row md:h-screen">
        {/* Navigation */}
        {/* Mobile horizontal scroll */}
        <div className="flex md:hidden items-center justify-center text-gray-500 fixed top-20">
          <nav className="flex gap-4 overflow-x-auto">
            {/* use space-y for non-flex stacked block elements */}
            {projects.map(project => (
              <Link 
                key={project.id} 
                href={project.href}
                className="whitespace-nowrap text-center py-3 px-4 hover:text-orange-accent transform hover:scale-105 transition duration-300"
              >
                {project.displayName}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop vertical sidebar */}
        <div className="hidden md:flex items-center justify-center w-1/6 h-full text-gray-500 sticky">
          <nav className="space-y-4">
            {/* use space-y for non-flex stacked block elements */}
            {projects.map(project => (
              <Link 
                key={project.id} 
                href={project.href}
                className="block w-full text-center py-3 px-4 border-l-4 border-orange-500 hover:text-orange-accent transform hover:scale-105 transition duration-300"
              >
                {project.displayName}
              </Link>
            ))}
          </nav>
        </div>


        {/* Main content area - snap container needs fixed height + overflow-y-scroll */}
        <div className="w-full md:w-5/6 h-screen bg-gray-300 md:ml-auto overflow-y-scroll snap-y snap-mandatory">
            
          {projects.map(project => (
            <section key={project.id} id={project.href.replace("#", "")} className="h-screen flex flex-col justify-center items-center snap-start">
              <h1>{project.displayName}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus ad consequuntur voluptatum consequatur architecto eius tenetur, ipsum magnam fugit numquam praesentium commodi autem quae doloremque consectetur. Quia, hic ab.</p>
            </section>
            ))}
            {/* Responsive Navigation */}
            <aside className="sticky top-0 z-10 w-full bg-white border-b border-gray-200 md:fixed md:w-64 md:top-1/2 md:-translate-y-1/2 md:border-none">
              <div className="relative">
                
                {/* Fading edge/gradient for horizontal scroll hint on mobile */}
                <div className="absolute top-0 right-0 w-8 h-full pointer-events-none bg-gradient-to-l from-white to-transparent md:hidden" />
              </div>
            </aside>
        </div>
      </div>
    )
}