import { ProjectsLayoutProps } from "@/app/types"
import ProjectsNav from "@/app/components/ProjectsNav"
import { getAllProjects } from "@/app/lib/project-links"

export default async function ProjectsLayout({ children } : ProjectsLayoutProps) {
  const projects = await getAllProjects()
  
  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-hidden">
      {/* Navigation container: Stays sticky/fixed on large screens */}
      <div className="flex items-center justify-center w-full md:w-1/4 md:h-screen sticky top-20 md:top-0 text-gray-500">
        <ProjectsNav projects={projects} />
      </div>

      {/* Main content area - snap container needs fixed height + overflow-y-scroll */}
      <div className="md:w-3/4 md:ml-auto h-screen bg-gray-300 overflow-y-scroll snap-y snap-mandatory">
        {children}
      </div>
    </div>
  )
}