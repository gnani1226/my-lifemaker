export interface SiteConfig {
  name: string
  url: string
  description: string
  links: {
    twitter: string
    github: string
    docs: string
  },
  mainNav:NavItem[]
}

export interface NavItem {
  title: string
  href: string
  disabled?: boolean,
  navigateThirdParty?:string
}

export type LoginLoadingState = "loading" | "idle" | "error" | "validating"| 'google' |'github';


export type MainNavItem = NavItem

export type LandingNavConfig = {
  mainNav: MainNavItem[]
}
