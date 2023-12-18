import Link from "next/link"
import { Glow } from "./glow";
import { Icons } from "./icons";
import Image from "next/image";
export function Footer() {
  return (
    <footer className="w-full pb-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 lg:px-0 pt-10 flex-col sm:flex-row">
        <div className="inline-flex items-center justify-center flex-col">
          <div className="flex flex-row items-center justify-start"><Icons.logo className="h-6 w-6"/>
          <span className="ml-1 text-xl font-bold font-heading">Godspeed</span></div>
          
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <p className="text-sm font-medium text-white font-mono">
            Ready for revolution ?
          </p>
          <Link
            href="/registration"
            className="font-heading rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm bg-gradient-to-r hover:to-[#7ecef5] hover:from-blue-600 to-white from-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            GET EARLY ACCESS
          </Link>
        </div>
      </div>
      <hr className="my-8" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between space-x-18 md:flex-row pb-4 gap-4">
        <div className="flex flex-row gap-4 items-center">
          <h3 className="font-heading text-lg">Resources :</h3>
          <a href="https://docs.godspeed.systems" className="font-mono font-bold text-md underline">
            Docs
          </a>
        </div>
        <div className="flex flex-col justify-center items-center font-mono gap-3 p-2"><p className="text-center text-sm">© 2023 by Godspeed Systems</p> <p className="text-center text-sm">admin@godspeed.systems  |  (+91) 9149777180</p> <p className="text-center text-sm">UEN NO.: 202236386Z
160 ROBINSON ROAD #23-08 SINGAPORE  068914</p></div>
        <div className="flex flex-row gap-4">
        <Link href="https://github.com/godspeedsystems/gs-node-service" target="_blank">
            <img src="/files/github.svg" height={12} width={24} style={{ filter: 'invert sepia(100%) saturate(10000%) hue-rotate(180deg)' }} alt="discordicon"/>
          </Link>
          <Link href="https://discord.com/invite/MKjv3KdD7X" target="_blank">
            <img src="/files/discord.svg" height={12} width={24} style={{ filter: 'invert sepia(100%) saturate(10000%) hue-rotate(180deg)' }} alt="discordicon"/>
          </Link>
          <Link href="https://www.linkedin.com/company/godspeed-systems" target="_blank">
          <img src="/files/linkedin.svg" height={12} width={24} style={{ filter: 'invert sepia(100%) saturate(10000%) hue-rotate(180deg)' }} alt="discordicon"/>
          
          </Link>
        </div>
       
      </div>
    </footer>
  )
}
