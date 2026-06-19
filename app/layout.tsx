import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import type { RootLayoutProps } from "@/app/types";
import Logo from "@/public/charlenechen.png"
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap"
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montsterrat-alternates"
})

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <header className="w-full bg-sky-50">
          <nav className="flex justify-between px-6 py-4">
            <Link href={"/"}>
              <div className="flex items-center gap-2.5 cursor-pointer">
                {/* Desktop logo */}
                <Image
                  src={Logo}
                  alt="Xiaolian (Charlene) Chen"
                  className="w-16 h-16 border-4 border-orange-500 border-dashed rounded-full hidden md:block"
                />
                {/* Mobile logo */}
                <Image  
                  src={Logo}
                  alt="Xiaolian (Charlene) Chen"
                  className="w-[80px] h-auto border-4 border-orange-500 border-dashed rounded-full block md:hidden"
                />
                <span className="font-bold text-2xl hidden md:inline">Tech with Charlene</span>
              </div>
            </Link>

            <ul className="flex items-center gap-4 md:gap-6 font-semibold text-base uppercase">
              <li className="hidden md:inline">
                <Link href="/Home">Home</Link>
              </li>
              <li>
                <Link href="/projects">My Projects</Link>
              </li>
              <li>
                <Link href="/contact">Contact me</Link>
              </li>
            </ul>
          </nav>
        </header>

      {children}
      
      </body>
    </html>
  );
}
