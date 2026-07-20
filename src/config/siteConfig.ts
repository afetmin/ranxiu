// site config
export const utm_source = process.env.NEXT_PUBLIC_UTM_SOURCE ?? 'afetmin.github.io'
export const site_url = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://afetmin.github.io'

// navigation config
type NavItemType = {
  name: string
  href: string
}

export const footerItems: Array<NavItemType> = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Projects',
    href: '/projects'
  },
  {
    name: 'Writing',
    href: '/blogs'
  }
]

export const navItems: Array<NavItemType> = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Projects',
    href: '/projects'
  },
  {
    name: 'Writing',
    href: '/blogs'
  }
]
