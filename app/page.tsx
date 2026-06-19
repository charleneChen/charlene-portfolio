import Image from "next/image";
import AboutPageHeroImage from "@/public/about-page-hero-image.png";

export default function Home() { 
  return (
    <main className="md:flex md:flex-row-reverse md:items-center md:gap-25 px-5 py-10 md:p-10">
      <section className="relative w-80 h-80 md:w-full md:h-full md:flex-1 mx-auto">
        <Image
          src={AboutPageHeroImage}
          alt="Charlene's photo"
          className="rounded-full mask-b-from-50% mask-b-to-100%"
        />

        <h1 className="absolute bottom-6 left-0 right-0 font-bold text-4xl text-center text-shadow-sm text-shadow-gray-300">
          Hi, I'm Charlene!
        </h1>
      </section>

      <div className="md:flex-1">
        <p className="my-10 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quasi. Dicta quis quod quos ipsa vitae nostrum sed odio. Quidem nulla deserunt possimus reiciendis error distinctio, pariatur vitae consequatur aperiam.</p>

        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vel autem quod officiis voluptates error, possimus rerum quam nam consectetur eius vitae, tempora architecto ex iure pariatur dolorum, ipsum assumenda?</p>
      </div>

    </main>
  )
}
