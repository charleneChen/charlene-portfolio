import Image from "next/image";
import HomePageHeroImage from "@/public/home-page-hero-img.png";

export default function Home() {
  return (
    <main className="md:flex md:flex-row">
      <section className="px-5 py-10">
        <p className="uppercase hidden">your go-to platform for 3d printng files</p>
        <h1 className="font-bold text-4xl">Hi there, I'm Charlene Chen (Xiaolian) · 陈晓莲 </h1>

        <button className="uppercase border-2 p-3 mt-10 font-semibold text-xl">browse models</button>
      </section>
      <div>
        <Image 
          src={HomePageHeroImage}
          loading="eager"
          alt="hero image" />
      </div>
    </main>
  )
}
