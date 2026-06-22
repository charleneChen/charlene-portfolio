import sideLinks from "@/app/data/side-navigation-list.json"
import type { Link } from "@/app/types"

export async function getAllLinks(): Promise<Link[]> {
  // This is where you'd write code to fetch the list
  // of models from a database. We're mocking that with
  // our JSON array of data in projects.json for now.
  return sideLinks
}