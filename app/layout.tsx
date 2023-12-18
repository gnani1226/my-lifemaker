/* eslint-disable @next/next/no-head-element */

import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

import "@/styles/globals.css"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
})

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Godspeed",
    "Meta Framework",
    "Godspeed Systems",
    "Low Code Backend",
    "Godspeed Systems | Develop, Deploy & Monitor your tech stacks at ease"
  ],
  authors: [
    {
      name: "xcodemuse",
      url: "https://github.com/xcodemuse",
    },
  ],
  creator: "xcodemuse",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@xcodemuse",
  },
  icons: {
    // icon: "/files/pngegg.png",
    icon:"/files/godspeedOldLogo.png",
    // shortcut: "/files/pngegg.png",
    shortcut:"/files/godspeedOldLogo.png",
    // apple: "/files/pngegg.png",
    apple:"/files/godspeedOldLogo.png"
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

interface RootLayoutProps {
  children: React.ReactNode
}
import Script from "next/script";
import TrackingCode from "./trackingCode"
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <TrackingCode /></head> 
      <body
        className={cn(
          "font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        {children}
      </body>
      {/* <Toaster /> */}
    </html>
  )
}
