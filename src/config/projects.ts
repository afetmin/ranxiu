// 项目
export const projectHeadLine = 'Things I’ve built—and keep building.'
export const projectIntro = 'From macOS menu bar apps to AI workflows and lightweight web products, here are a few projects that best represent my work.'

export type ProjectItemType = {
  name: string
  description: string
  link: { href: string, label: string }
  date?: string
  logo?: string
  category?: string[]
  tags?: string[]
  image?: string
  techStack?: string[]
  gitStars?: number
  gitForks?: number
}

// 精选项目
export const projects: Array<ProjectItemType> = [
  {
    name: 'FlashSeal',
    description: 'An encrypted, self-destructing text and image sharing tool built on Cloudflare Pages, Functions, and KV.',
    link: { href: 'www.flashseal.space', label: 'FlashSeal' },
    category: ['Web App'],
    techStack: ['TypeScript', 'Cloudflare'],
    tags: ['Privacy', 'Encryption', 'Cloudflare'],
  },
  {
    name: 'TopBrowser',
    description: 'A lightweight macOS menu bar browser built with WebKit.',
    link: { href: 'github.com/afetmin/TopBrowser', label: 'TopBrowser' },
    category: ['App'],
    techStack: ['Swift', 'WebKit'],
    tags: ['macOS', 'Swift', 'WebKit'],
  },
  {
    name: 'TextLens',
    description: 'A native macOS menu bar app that translates selected text and adds AI-powered explanations.',
    link: { href: 'github.com/afetmin/TextLens', label: 'TextLens' },
    category: ['App'],
    techStack: ['SwiftUI'],
    tags: ['macOS', 'SwiftUI', 'AI'],
  },
]

// 开源项目
export const githubProjects: Array<ProjectItemType> = [
  {
    name: 'infinity-photo-wall',
    description: 'A framework-agnostic infinite photo wall engine with pannable, zoomable, tiled rendering powered by Three.js.',
    link: { href: 'github.com/afetmin/infinity-photo-wall', label: 'infinity-photo-wall' },
    gitStars: 0,
    gitForks: 0,
  },
  {
    name: 'AutoSort Bookmarks',
    description: 'Save first and let AI automatically organize and classify your browser bookmarks.',
    link: { href: 'github.com/afetmin/AutoSort-Bookmarks', label: 'AutoSort Bookmarks' },
    gitStars: 0,
    gitForks: 0,
  },
  {
    name: 'Research to Video',
    description: 'Turn research goals, reports, or manuscripts into reproducible HyperFrames videos with local narration.',
    link: { href: 'github.com/afetmin/hv-research-to-video', label: 'Research to Video' },
    gitStars: 0,
    gitForks: 0,
  },
  {
    name: 'vue-music-next',
    description: 'A full-featured music player built with the Vue ecosystem and NetEase Cloud Music APIs.',
    link: { href: 'github.com/afetmin/vue-music-next', label: 'vue-music-next' },
    gitStars: 7,
    gitForks: 3,
  },
  {
    name: 'musicforprogramming',
    description: 'A recreation of the immersive visual music experience from musicforprogramming.',
    link: { href: 'github.com/afetmin/musicforprogramming', label: 'musicforprogramming' },
    gitStars: 3,
    gitForks: 1,
  },
]
