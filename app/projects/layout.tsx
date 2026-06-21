import { getAllProjects } from "@/app/lib/projects"
import type { ProjectsLayoutProps } from "@/app/types"
import SideBar from "@/app/components/SideBar"

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  const projects = getAllProjects()

    return (
      <SideBar links={projects}>{ children }</SideBar>
    )
}