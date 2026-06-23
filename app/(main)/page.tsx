import Image from "next/image"
import CharleneImage from "@/public/charlene.jpg"
import SocialLinks from "@/app/components/SocialLinks"
import Project from "@/app/components/Project"
import SideBar from "@/app/components/SideBar"
import { getAllLinks } from "@/app/lib/side-links"

export default async function Home() { 
  const links = await getAllLinks()

  return (
    <>
      <SideBar links={links} />
      <main className="flex flex-1 flex-col w-full max-w-full pl-0 md:pl-55">
        <section className="flex flex-col md:flex-row-reverse items-center gap-20 py-16">
        
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
        <div id="about" className="flex-1 flex flex-col gap-5 text-xl">
          <h2 className="capitalize font-bold text-3xl">👋Hello! I'm Charlene.</h2>
          <h2 className="capitalize font-bold text-3xl">Software <span className="text-indigo-600">Developer</span> and <span className="text-green-600">Cloud</span> Engineer.</h2>

          <p>My tech journey started in software engineering, working full-time as a <span className="font-bold">Ruby on Rails developer</span> in China from 2016 to 2019. When COVID hit, I decided to take a career break. Over the next few years, I ran a family e-commerce business on Taobao and spent that time focusing on raising my lovely daughter.</p>

          <p>Ready for a new technical challenge, I recently returned to study with a focus on cloud computing. I completed my Cloud Engineering diploma at RMIT and achieved a <span className="font-bold">🥉 Bronze Medal</span> in the regional WorldSkills 2026 competition for Cloud Computing. I also validated my updated skill set with an <span className="font-bold">AWS Cloud Practitioner certification</span> (scoring 890/1000).</p>

          <SocialLinks />
        </div>
        </section>
      
        <section className="flex flex-col gap-5 pb-16">
          <h2 className="capitalize font-bold text-3xl">My Projects</h2>
          <Project />
        </section>

        <section id="experience">
          test
        </section>
      </main>
    </> 
  )
}
