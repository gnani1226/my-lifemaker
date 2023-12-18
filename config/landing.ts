import { LandingNavConfig } from "@/types"

export const landingNavConfig: LandingNavConfig = {
  mainNav: [
    {
      title: "Docs",
      href: "/docs",
      navigateThirdParty:'https://docs.godspeed.systems'
    },
    // {
    //   title: "Developer GPT",
    //   href: "/gpt",
    //   navigateThirdParty:'https://gpt.godspeed.systems/login'
    // },
    {
      title: "Blogs",
      href: "/blogs",
      navigateThirdParty:"https://forum.godspeed.systems"
    },
    {
      title: "About Us",
      href: "/about",
      navigateThirdParty:"",
    }
    
  ],
}
