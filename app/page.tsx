import Image from "next/image"
import CharleneImage from "@/public/charlene.jpg"
import SocialLinks from "@/app/components/SocialLinks"
import Project from "@/app/components/Project"
import SideBar from "@/app/components/SideBar"
import { getAllLinks } from "@/app/lib/side-links"

export default async function Home() { 
  const links = await getAllLinks()
  return (
    <main className="px-5 py-10">
      <section className="flex flex-col md:flex md:flex-row-reverse items-center gap-20 mt-20">
        
        {/* Right - circle image with spinnign text */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-80 h-80 md:w-full md:h-full overflow-hidden">
            <Image
              src={CharleneImage}
              loading="eager"
              alt="Charlene's photo"
              className="rounded-full mask-b-from-50% mask-b-to-100%"
            />

            <h1 className="absolute bottom-6 left-0 right-0 font-extrabold text-4xl md:text-5xl text-center text-shadow-sm text-shadow-gray-300 z-10">
              Hi, I'm Charlene!
            </h1>

            {/* Rotating text around the circle */}
            <svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]">
                <defs>
                  <path
                    id="circlePath"
                    d="M 150,150 m -135,0 a 135,135 0 1,1 270,0 a 135,135 0 1,1 -270,0"
                  />
                </defs>
                <text className="fill-white text-sm font-bold">
                  <textPath href="#circlePath" spacing="auto">
                    Hi, I'm Charlene! • Full Stack Software Engineer • Cloud Engineer • Hi, I'm Charlene! • Full Stack Software Engineer • Cloud Engineer •
                  </textPath>
                </text>
              </svg>
          </div>
        </div>

        {/* Left - About me */}
        <div className="flex-1 flex flex-col gap-5">
          <h2 id="about" className="capitalize font-bold text-3xl">about me</h2>

          <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quasi. Dicta quis quod quos ipsa vitae nostrum sed odio. Quidem nulla deserunt possimus reiciendis error distinctio, pariatur vitae consequatur aperiam.</p>

          <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vel autem quod officiis voluptates error, possimus rerum quam nam consectetur eius vitae, tempora architecto ex iure pariatur dolorum, ipsum assumenda?</p>

          <SocialLinks />
        </div>
      </section>
      
      <section className="flex flex-col gap-5 my-20">
        <h2 className="capitalize font-bold text-3xl">Selected Projects</h2>
        <Project />
      </section>

      <SideBar links={links} />

    </main> 
  )
}
