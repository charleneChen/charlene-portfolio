import NavBar from "@/app/components/NavBar"

export default function SiteHeader() {
  return (
    <div className={`w-full sticky top-0 left-0 right-0 mt-8 z-500 transition-all duration-500
    `}>
      <NavBar />
    </div>
  )
}