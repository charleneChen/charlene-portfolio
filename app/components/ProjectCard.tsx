import type { ProjectCardProps } from "@/app/types"
import ImagePlaceholder from "@/public/placeholder.png"

export default function ProjectCard({ project } : ProjectCardProps) {
  return (
    <div 
      id={project.href.replace("#", "")} 
      key={project.id} 
      className="p-10 border-transparent rounded-2xl shadow-xl outline outline-black/5 flex flex-col md:flex-row gap-8"
    >
      <img 
        src={ImagePlaceholder.src} 
        alt="project image"
        className=""
       />
      <div>
        <p className="text-sm">{`project ${project.id}`}</p>
        <h1 className="text-2xl font-bold">{project.displayName}</h1>
        <div className="font-medium">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae temporibus tempora repellat sint? Labore mollitia veritatis doloremque cum nobis, eius amet, sunt necessitatibus at libero consectetur vero praesentium quisquam dolore!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eligendi maiores voluptatibus, incidunt dolorem expedita quasi natus accusantium at mollitia exercitationem ipsam. Id reiciendis maiores quo blanditiis consectetur nulla atque!</p>
        </div>
      </div>
    </div>      
  )
}