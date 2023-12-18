import Link from "next/link"

import { landingNavConfig } from "@/config/landing"
import { cn } from "@/lib/utils"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import Image from "next/image"
interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container top-0 z-4">
      {/* <div className="relative flex h-16 items-center justify-between py-0">
      
          <MainNav items={landingNavConfig.mainNav} />
           <nav className="flex flex-row justify-center gap-3 items-center">
           <div className=" items-center flex flex-row bg-white px-1 rounded-md flex-nowrap py-1 gap-1">
                <a href="https://replit.com/@GodspeedSystems/Godspeed-sample-project" className="" target="_blank">
                <Image src="/files/play-button.svg" height={14} width={14} alt="playground"/>
                </a>
                <a href={"https://replit.com/@GodspeedSystems/Godspeed-sample-project"} className="flex flex-row whitespace-nowrap items-center text-sm md:text-md text-slate-800  font-bold text-center" target="_blank">code playground</a>
          </div>
          <a href="https://github.com/godspeedsystems/gs-node-service" target="_blank">
            <Image src="/files/github.svg" height={12} width={24} style={{ filter: 'invert sepia(100%) saturate(10000%) hue-rotate(180deg)' }} alt="discordicon"/>
          </a>
          <a href="https://discord.com/invite/MKjv3KdD7X" target="_blank">
            <Image src="/files/discord.svg" height={12} width={24} style={{ filter: 'invert sepia(100%) saturate(10000%) hue-rotate(180deg)' }} alt="discordicon"/>
          </a>
          </nav>
        </div> */}
      </header>
     {children}
           {/* <Footer /> */}
    </div>
  )
}
