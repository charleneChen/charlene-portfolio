import { getAllProjects } from "@/app/lib/project-links"


export default async function ProjectsPage() {
  const projects = await getAllProjects()

    return (
      projects.map(project => (
        <section key={project.id} id={project.href.replace("#", "")} className="h-screen flex flex-col justify-center items-center snap-start px-12">
          <h1 className="text-2xl font-bold">{project.displayName}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus ad consequuntur voluptatum consequatur architecto eius tenetur, ipsum magnam fugit numquam praesentium commodi autem quae doloremque consectetur. Quia, hic ab.</p>
        </section>
      ))
    )
}