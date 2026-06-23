import type { MainLayoutProps } from "@/app/types"
import SiteHeader from "@/app/components/SiteHeader"

export default function MainLayout({ children } : MainLayoutProps) {
  return (
    <>
      <SiteHeader /> 
      {children}
    </>
  )
}