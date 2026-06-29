import { getAllProjects } from "@/app/lib/project-links";
import ProjectCard from "@/app/components/ProjectCard";

export default async function Project() {
  const projects = await getAllProjects();

  return (
    <div className="grid gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
