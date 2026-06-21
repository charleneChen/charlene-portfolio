import type { ReactNode } from "react";

// With Readonly — props are immutable (safer)
export type RootLayoutProps = Readonly<{
  children: ReactNode;
}>

// same as above
export type ProjectsLayoutProps = {
  readonly children: ReactNode
}

export type Link = {
  id: number,
  displayName: string
  slug?: string,
  href: string
}

export type ProjectPageProps = {
  params: Promise<{
    projectName: string
  }>
}

export type SideBarProp = {
  links: Link[],
  children?: ReactNode  // ← optional with ?
}