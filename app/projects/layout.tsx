import { getAllProjects } from "@/app/lib/projects"
import type { ProjectsLayoutProps } from "@/app/types"
import Link from "next/link"

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  const projects = getAllProjects()

    return (
      <div className="flex h-screen">
        <div className="w-1/6 h-full text-white fixed flex items-center justify-center">
          <nav className="space-y-4">
            {/* use space-y for non-flex stacked block elements */}
            {projects.map(project => (
              <Link 
                key={project.id} 
                href={project.href}
                className="block w-full text-center py-3 px-4 border-l-4 border-orange-500 text-gray-500 hover:text-gray-800 transform hover:scale-105 transition duration-300"
              >
                {project.displayName}
              </Link>
            ))}
          </nav>
        </div>
        <div className="w-5/6 h-full bg-gray-300 ml-auto snap-y snap-mandatory">
            
            {projects.map(project => (
              <section key={project.id} id={project.href.replace("#", "")} className="h-screen flex flex-col justify-center items-center snap-start">
                <h1>{project.displayName}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus ad consequuntur voluptatum consequatur architecto eius tenetur, ipsum magnam fugit numquam praesentium commodi autem quae doloremque consectetur. Quia, hic ab.</p>
            </section>
            ))}
        </div>
      </div>
    )
}