import Image from "next/image";
import AboutPageHeroImage from "@/public/about-page-hero-image.png";

export default function Home() { 
  return (
    <main className="md:flex md:flex-row">
      <section className="px-5 py-10">
        <div className="relative">
          <div className="w-50 h-50 max-w-full bg-[url(/about-page-hero-image.png)] bg-cover bg-center rounded-full mx-auto mask-b-from-50% mask-b-to-100%"></div>

          <h1 className="absolute bottom-4 left-0 right-0 font-bold text-4xl text-center text-shadow-sm text-shadow-sky-300">
            Hi, I'm Charlene!
          </h1>
        </div>

        <p className="my-10 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quasi. Dicta quis quod quos ipsa vitae nostrum sed odio. Quidem nulla deserunt possimus reiciendis error distinctio, pariatur vitae consequatur aperiam.</p>

        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vel autem quod officiis voluptates error, possimus rerum quam nam consectetur eius vitae, tempora architecto ex iure pariatur dolorum, ipsum assumenda?</p>
      </section>

    </main>
  )
}
