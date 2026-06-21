import { getAllProjects } from "@/app/lib/projects"

export default function Project() {
    const projects = getAllProjects()

    return (
        <section>
            {projects.map((project, index) => (
                <div id={`project${index+1}`} key={project.slug} className="pt-10">
                    <p>{`project ${index+1}`}</p>
                    <p>{project.displayName}</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae temporibus tempora repellat sint? Labore mollitia veritatis doloremque cum nobis, eius amet, sunt necessitatibus at libero consectetur vero praesentium quisquam dolore!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eligendi maiores voluptatibus, incidunt dolorem expedita quasi natus accusantium at mollitia exercitationem ipsam. Id reiciendis maiores quo blanditiis consectetur nulla atque!</p>
                </div>
        ))}
        </section>
    )
}