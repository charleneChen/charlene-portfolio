import "./globals.css"
import type { RootLayoutProps } from "@/app/types"
import { Albert_Sans, Montserrat_Alternates } from "next/font/google"
import NavBar from "@/app/components/NavBar"

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

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <header className="w-full bg-sky-50">
          <NavBar />
        </header>

      {children}
      
      </body>
    </html>
  );
}
