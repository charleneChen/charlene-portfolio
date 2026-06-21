import projectsData from "@/app/data/projects.json"
import type { Link } from "@/app/types"

export function getAllProjects(): Link[] {
  // This is where you'd write code to fetch the list
  // of models from a database. We're mocking that with
  // our JSON array of data in projects.json for now.
  return projectsData
}

export function getProjectBySlug(slug: string): Link {
  const project = projectsData.find(p => p.slug === slug)
  if (!project) {
    throw new Error(`Project with slug ${slug} not found`)
  }
  return project
}

export function getDisplayNameFromSlug(slug: string): string {
  const project = getProjectBySlug(slug)
  return project.displayName
}