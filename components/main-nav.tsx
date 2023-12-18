import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { NavItem } from "@/types"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-2 md:gap-10 content-center">
      <Link href="/" className="hidden items-center md:flex">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-heading text-xl font-extrabold sm:inline-block ">
          <h1>
            God<span className="font-extrabold">speed</span>
          </h1>
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map(
            (item, index) =>
             { if(item.href && !item.navigateThirdParty){
                return (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-lg font-semibold hover:scale-105 sm:text-sm font-heading",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                  >
                  {item.title}
                </Link>
                )
              }else if(item.navigateThirdParty){
                return(<a
                  key={index}
                  href={item.navigateThirdParty}
                  
                  className={cn(
                    "flex items-center text-lg font-semibold hover:scale-105 sm:text-sm font-heading",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                  >
                  {item.title}
                </a>)
              }
            }
          )}
          <a href={"https://forum.godspeed.systems/t/1-million-developer-bounty-program-build-earn-with-godspeed/128"} className="hidden xl:flex items-center rounded-md bg-gradient-to-r to-blue-400 via-blue-500 from-blue-800 px-2 py-0 text-sm md:mr-80 text-white-600 font-mono font-bold hover:cursor-pointer mt-2 ml:0 2xl:ml-12 xl:ml-1 " style={{height:34}} target="_blank">🏆 $1M Developer Bounties  </a>
         
        </nav>
        
      ) : null}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="-ml-4 text-base hover:bg-transparent focus:ring-0 md:hidden"
          >
            <Icons.menu className="h-6 w-6" />
            <span className="ml-2 font-bold font-heading">Godspeed</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          sideOffset={24}
          className="w-[300px] overflow-scroll"
        >
          {items?.map(
            (item, index) =>
              item.href && (
                <DropdownMenuItem key={index} asChild>
                   { item.href && !item.navigateThirdParty ?
               
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-lg font-semibold hover:scale-105 sm:text-sm font-heading",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                  replace={true}
                  >
                  {item.title}
                </Link>
                :item.navigateThirdParty?
                <a
                  key={index}
                  href={item.navigateThirdParty}
                  
                  className={cn(
                    "flex items-center text-lg font-semibold hover:scale-105 sm:text-sm font-heading",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                  >
                  {item.title}
                </a>
              :<></>
            }
                </DropdownMenuItem>
              )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}


{/* <div class="py-12 animate-marquee whitespace-nowrap">
    <span class="text-4xl mx-4">Marquee Item 1</span>
    <span class="text-4xl mx-4">* Marquee Item 2</span>
    <span class="text-4xl mx-4">* Marquee Item 3</span>
    <span class="text-4xl mx-4">* Marquee Item 4</span>
    <span class="text-4xl mx-4">* Marquee Item 5</span>
  </div> */}