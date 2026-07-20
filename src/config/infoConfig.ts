export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'


// 个人信息
export const name = 'Ranxiu'
export const headline = 'Independent developer building native macOS apps, AI workflows, and useful small tools.'
export const introduction = 'I’m Ranxiu. I turn specific problems into products that work, get used, and keep evolving.'
export const email = ''
export const avatarUrl = '/avatar.png'
export const githubUsername = 'afetmin'

// 关于页面
export const aboutMeHeadline = 'I’m Ranxiu, an independent developer who keeps turning ideas into working products.'
export const aboutParagraphs = [
  'I focus on native macOS experiences, AI-assisted workflows, and lightweight web products. I prefer starting with a real need and shipping something people can use instead of leaving an idea as a concept.',
  'Recent work includes TopBrowser, a menu bar browser; TextLens, a translation tool for selected text; FilmFlow, an AI filmmaking workflow; and a reproducible research-to-video pipeline.',
  'My projects span Swift, TypeScript, Python, and Vue. You can find the source code, commit history, and ongoing experiments on GitHub.',
]


// 文章
export const blogHeadLine = 'Writing & Notes'
export const blogIntro = 'Long-form notes on software, tools, and the process of building.'


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string,
  external?: boolean
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/afetmin',
    external: true
  },
  {
    name: 'Blog',
    ariaLabel: 'Read my writing',
    icon: 'rss',
    href: '/blogs',
    external: false
  }
]

// https://simpleicons.org/
export const techIcons = [
  "swift",
  "python",
  "typescript",
  "javascript",
  "cloudflare",
  "react",
  "nodedotjs",
  "nextdotjs",
  "vuedotjs",
  "astro",
  "tailwindcss",
  "html5",
  "css",
  "docker",
  "git",
  "github",
  "apple",
  "macos"
];
