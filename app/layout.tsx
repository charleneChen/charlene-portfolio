import "./globals.css";
import type { RootLayoutProps } from "@/app/types";
import localFont from "next/font/local";

// If loading a variable font, you don't need to specify the font weight
const cascadiaMono = localFont({
  src: "../public/fonts/CascadiaMono.woff2",
  variable: "--font-cascadia-mono",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${cascadiaMono.variable}`}>{children}</body>
    </html>
  );
}
