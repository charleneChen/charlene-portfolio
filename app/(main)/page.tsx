import Image from "next/image";
import CharleneImage from "@/public/charlene.jpg";
import SocialLinks from "@/app/components/SocialLinks";
import Project from "@/app/components/Project";
import SideBar from "@/app/components/SideBar";
import Experience from "@/app/components/Experience";
import { getAllLinks } from "@/app/lib/side-links";

export default async function Home() {
  const links = await getAllLinks();

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="lg:flex lg:justify-between lg:gap-10">
          <div className="hidden lg:sticky lg:sticky-top lg:block lg:max-h-primary">
            <SideBar links={links} />
          </div>
          <main id="content" className="mx-auto grid max-w-7xl gap-6 lg:gap-12">
            <section id="about" aria-label="About me">
              <div className="sticky sticky-top z-300 w-full bg-slate-900/75 text-center">
                <h2 className="text-xl font-bold tracking-widest text-white uppercase lg:sr-only">
                  About
                </h2>
              </div>
              <div className="flex flex-col items-center py-6 sm:p-6 md:flex-row-reverse md:gap-10 lg:p-0">
                {/* Right - circle image with spinnign text */}
                <div className="flex flex-1 items-center justify-center">
                  <div className="relative h-80 w-80 overflow-hidden md:h-full md:w-full">
                    <Image
                      src={CharleneImage}
                      loading="eager"
                      alt="Charlene's photo"
                      className="rounded-full mask-b-from-50% mask-b-to-100%"
                    />

                    <h1 className="absolute right-0 bottom-6 left-0 z-10 text-center text-4xl font-extrabold text-shadow-gray-300 text-shadow-sm md:text-5xl">
                      Hi, I&apos;m Charlene!
                    </h1>

                    {/* Rotating text around the circle */}
                    <svg
                      viewBox="0 0 300 300"
                      className="absolute inset-0 h-full w-full animate-[spin_20s_linear_infinite]"
                    >
                      <defs>
                        <path
                          id="circlePath"
                          d="M 150,150 m -135,0 a 135,135 0 1,1 270,0 a 135,135 0 1,1 -270,0"
                        />
                      </defs>
                      <text className="fill-white text-sm font-bold">
                        <textPath href="#circlePath" spacing="auto">
                          Hi, I&apos;m Charlene! • Full Stack Software Engineer
                          • Cloud Engineer • Hi, I&apos;m Charlene! • Full Stack
                          Software Engineer • Cloud Engineer •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>

                {/* Left - About me */}
                <div className="flex flex-1 flex-col gap-5 text-xl">
                  <h2 className="text-3xl font-bold capitalize">
                    👋Hello! I&apos;m Charlene.
                  </h2>
                  <h2 className="text-3xl font-bold capitalize">
                    Software <span className="text-indigo-600">Developer</span>{" "}
                    and <span className="text-green-600">Cloud</span> Engineer.
                  </h2>

                  <p>
                    My tech journey started in software engineering, working
                    full-time as a{" "}
                    <span className="font-bold">Ruby on Rails developer</span>{" "}
                    in China from 2016 to 2019. When COVID hit, I decided to
                    take a career break. Over the next few years, I ran a family
                    e-commerce business on Taobao and spent that time focusing
                    on raising my lovely daughter.
                  </p>

                  <p>
                    Ready for a new technical challenge, I recently returned to
                    study with a focus on cloud computing. I completed my Cloud
                    Engineering diploma at RMIT and achieved a{" "}
                    <span className="font-bold">🥉 Bronze Medal</span> in the
                    regional WorldSkills 2026 competition for Cloud Computing. I
                    also validated my updated skill set with an{" "}
                    <span className="font-bold">
                      AWS Cloud Practitioner certification
                    </span>{" "}
                    (scoring 890/1000).
                  </p>

                  <SocialLinks />
                </div>
              </div>
            </section>

            <section
              id="experience"
              aria-label="Work experience"
              className="space-y-4"
            >
              <div className="sticky sticky-top z-300 w-full bg-slate-900/75 text-center lg:relative lg:top-auto lg:bg-transparent lg:text-start">
                <h2 className="text-xl font-bold tracking-widest text-white uppercase lg:text-3xl lg:text-black lg:capitalize">
                  Experience
                </h2>
              </div>
              <Experience />
            </section>

            <section
              id="projects"
              aria-label="Selected projects"
              className="space-y-4"
            >
              <div className="sticky sticky-top z-300 w-full bg-slate-900/75 text-center lg:relative lg:top-auto lg:bg-transparent lg:text-start">
                <h2 className="text-xl font-bold tracking-widest text-white uppercase lg:text-3xl lg:text-black lg:capitalize">
                  Projects
                </h2>
              </div>
              <Project />
            </section>
          </main>
        </div>
      </div>

      <footer className="px-6 py-10 text-center text-mauve-400 lg:px-0 lg:py-30">
        <p>
          Built with Next.js and Tailwind CSS, deployed on GitHub Pages. All
          text is set in the Cascadia Code font.
        </p>
      </footer>
    </>
  );
}
