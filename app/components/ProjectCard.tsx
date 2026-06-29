import type { ProjectCardProps } from "@/app/types";
import Image from "next/image";
import ImagePlaceholder from "@/public/placeholder.png";

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      id={project.href.replace("#", "")}
      key={project.id}
      className="flex flex-col gap-8 rounded-2xl border-transparent p-10 font-medium shadow-xl outline outline-black/5 md:flex-row"
    >
      <Image
        src={ImagePlaceholder}
        alt="Project image"
        className="self-center object-cover"
      />
      <div className="space-y-4">
        <p
          className="text-2xl font-bold"
          aria-label={`Project name: ${project.displayName}`}
        >
          {project.displayName}
        </p>
        <div aria-label="Project description">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            temporibus tempora repellat sint? Labore mollitia veritatis
            doloremque cum nobis, eius amet, sunt necessitatibus at libero
            consectetur vero praesentium quisquam dolore!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            eligendi maiores voluptatibus, incidunt dolorem expedita quasi natus
            accusantium at mollitia exercitationem ipsam. Id reiciendis maiores
            quo blanditiis consectetur nulla atque!
          </p>
        </div>
        <ul
          className="flex flex-wrap gap-2 text-white"
          aria-label="Technologies used"
        >
          <li>
            <div className="flex items-center rounded-full bg-teal-800 px-3 py-1 text-xs leading-5">
              Next.js
            </div>
          </li>
          <li>
            <div className="flex items-center rounded-full bg-teal-800 px-3 py-1 text-xs leading-5">
              Tailwind CSS
            </div>
          </li>
          <li>
            <div className="flex items-center rounded-full bg-teal-800 px-3 py-1 text-xs leading-5">
              TypeScript
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
