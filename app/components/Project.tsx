import { getAllProjects } from "@/app/lib/project-links"
import ProjectCard from "@/app/components/ProjectCard"

export default async function Project() {
    const projects = await getAllProjects()

    return (
        <section className="flex flex-col gap-10">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
        ))}
        </section>
    )
}