import projectLinks from "@/app/data/project-links.json"
import type { Link } from "@/app/types"


// Keeping 'async' forces a Promise return, matching future database behavior
export async function getAllProjects(): Promise<Link[]> {
  // This is where you'd write code to fetch the list
  // of models from a database. We're mocking that with
  // our JSON array of data in projects.json for now.
  return projectLinks
}

export async function getProjectById(id: string | number): Promise<Link> {
  // These functions don't technically need to be async functions,
  // but we're planning for the future when they'll be fetching
  // from a real data source.
  const foundProject = projectLinks.find(
    (link: Link) => link.id.toString() === id.toString()
  )
  if (!foundProject) {
    throw new Error(`Project with id ${id} not found`)
  }
  return foundProject
}