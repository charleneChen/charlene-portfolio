import Image from "next/image";
import CharleneImage from "@/public/charlene.jpg";
import SocialLinks from "@/components/social-links"

export default function Home() { 
  return (
    <main className="md:flex md:flex-row-reverse md:items-center md:gap-25 px-5 py-10 md:p-10">
      <section className="relative md:flex-1">
        <Image
          src={CharleneImage}
          loading="eager"
          alt="Charlene's photo"
          className="w-80 h-80 md:w-full md:h-full mx-auto rounded-full mask-b-from-50% mask-b-to-100%"
        />

        <h1 className="absolute bottom-6 left-0 right-0 font-extrabold text-4xl text-center text-shadow-sm text-shadow-gray-300 z-10">
          Hi, I'm Charlene!
        </h1>

        {/* Rotating text around the circle */}
        <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
          <svg viewBox="0 0 300 300" className="w-full h-full">
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
      </section>

      <section className="md:flex-1 flex flex-col gap-5 my-20">
        <h2 className="capitalize font-bold text-3xl">about me</h2>
        
        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quasi. Dicta quis quod quos ipsa vitae nostrum sed odio. Quidem nulla deserunt possimus reiciendis error distinctio, pariatur vitae consequatur aperiam.</p>

        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vel autem quod officiis voluptates error, possimus rerum quam nam consectetur eius vitae, tempora architecto ex iure pariatur dolorum, ipsum assumenda?</p>

        <SocialLinks />
      </section>

    </main>
  )
}
