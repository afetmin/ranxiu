export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'


// 个人信息
export const name = 'Lunxiao'
export const headline = '独立开发者，专注 macOS 原生应用、AI 工作流与有用的小工具。'
export const introduction = '我是 Lunxiao。我喜欢把一个具体问题做成真正可以运行、可以使用、也可以继续迭代的产品。'
export const email = ''
export const avatarUrl = 'https://avatars.githubusercontent.com/u/26990977?v=4'
export const githubUsername = 'afetmin'

// 关于页面
export const aboutMeHeadline = '我是 Lunxiao，一个持续把想法做成可运行产品的独立开发者。'
export const aboutParagraphs = [
  '我主要关注 macOS 原生体验、AI 辅助工作流与轻量 Web 产品。相比停留在概念上，我更喜欢从真实需求出发，快速做出能被使用的版本。',
  '最近的项目包括菜单栏浏览器 TopBrowser、选中文本翻译工具 TextLens、AI 影视工作流 FilmFlow，以及研究到视频的可复现生成流程。',
  '我的项目横跨 Swift、TypeScript、Python 与 Vue。你可以在 GitHub 查看完整代码、提交记录和仍在继续的实验。',
]


// 文章
export const blogHeadLine = '写作与记录'
export const blogIntro = '关于开发、工具与实践过程的长期记录。'


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
    ariaLabel: '阅读我的博客',
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
