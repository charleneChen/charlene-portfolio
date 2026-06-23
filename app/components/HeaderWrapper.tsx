import NavBar from "@/app/components/NavBar"

export default function HeaderWrapper() {
  return (
    <div className={`w-full sticky top-0 left-0 right-0 z-500 transition-all duration-500`}>
      <NavBar />
    </div>
  )
}