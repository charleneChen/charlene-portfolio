import type { ReactNode } from "react";

// Page types
// With Readonly — props are immutable (safer)
export type RootLayoutProps = Readonly<{
  children: ReactNode;
}>

// same as above
export type ProjectsLayoutProps = {
  readonly children: ReactNode
}

// Data types
export type Link = {
  id: number,
  displayName: string
  slug?: string,
  href: string
}

// Component types
export type SideBarProp = {
  links: Link[],
  children?: ReactNode  // ← optional with ?
}

export type ProjectsNavProps = {
  projects: Link[]
}