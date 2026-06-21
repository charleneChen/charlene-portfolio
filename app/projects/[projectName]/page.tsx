import type { ProjectPageProps } from "@/app/types"
import { getProjectBySlug } from "@/app/lib/projects"

export default async function ProjectPage({ params } : ProjectPageProps) {
  const { projectName } = await params
  const project = getProjectBySlug(projectName)

  return <div>{project.displayName}</div>
}