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
  {
    name: 'FilmFlow',
    description: 'A visual, editable, and reusable AI filmmaking workflow for scripts, storyboards, keyframes, and video.',
    link: { href: 'github.com/afetmin/FilmFlow', label: 'FilmFlow' },
    category: ['Web App'],
    techStack: ['TypeScript'],
    tags: ['AI Video', 'Workflow', 'TypeScript'],
  },
  {
    name: 'FlashSeal',
    description: 'An encrypted, self-destructing text and image sharing tool built on Cloudflare Pages, Functions, and KV.',
    link: { href: 'www.flashseal.space', label: 'FlashSeal' },
    category: ['Web App'],
    techStack: ['TypeScript', 'Cloudflare'],
    tags: ['Privacy', 'Encryption', 'Cloudflare'],
  },
  {
    name: 'AI Job Copilot',
    description: 'A traceable job-search copilot that analyzes resumes and job descriptions, then suggests improvements through conversation.',
    link: { href: 'github.com/afetmin/ai-job-copilot', label: 'AI Job Copilot' },
    category: ['Web App'],
    techStack: ['Next.js', 'FastAPI', 'ChromaDB'],
    tags: ['AI', 'Next.js', 'FastAPI'],
  },
  {
    name: 'AutoSort Bookmarks',
    description: 'Save first and let AI handle the rest: automatic organization and classification for browser bookmarks.',
    link: { href: 'github.com/afetmin/AutoSort-Bookmarks', label: 'AutoSort Bookmarks' },
    category: ['Extension'],
    techStack: ['TypeScript'],
    tags: ['AI', 'Bookmarks', 'TypeScript'],
  },
  {
    name: 'PixFree',
    description: 'A queue-based image generation experiment for testing local inference pipelines, with a Cloudflare-hosted frontend.',
    link: { href: 'pixfree-web.pages.dev', label: 'PixFree' },
    category: ['Web App'],
    techStack: ['TypeScript', 'Cloudflare Workers'],
    tags: ['Image AI', 'Queue', 'Cloudflare'],
  },
  {
    name: 'Research to Video',
    description: 'A reproducible pipeline that turns research goals, reports, or drafts into HyperFrames videos with local narration.',
    link: { href: 'github.com/afetmin/hv-research-to-video', label: 'Research to Video' },
    category: ['Developer Tool'],
    techStack: ['Python'],
    tags: ['Research', 'Video', 'TTS'],
  },
]

// 开源项目
export const githubProjects: Array<ProjectItemType> = [
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
  {
    name: 'FilmFlow',
    description: 'A node-based editor for AI filmmaking workflows.',
    link: { href: 'github.com/afetmin/FilmFlow', label: 'FilmFlow' },
    gitStars: 1,
    gitForks: 0,
  },
  {
    name: 'FlashSeal',
    description: 'An open-source, encrypted, self-destructing text and image sharing tool.',
    link: { href: 'github.com/afetmin/FlashSeal', label: 'FlashSeal' },
    gitStars: 1,
    gitForks: 0,
  },
  {
    name: 'ebook',
    description: 'An EPUB reader built with Vue and epub.js.',
    link: { href: 'github.com/afetmin/ebook', label: 'ebook' },
    gitStars: 0,
    gitForks: 0,
  },
  {
    name: 'rdino',
    description: 'A component library project built with React, TypeScript, and Jest.',
    link: { href: 'github.com/afetmin/rdino', label: 'rdino' },
    gitStars: 0,
    gitForks: 0,
  },
]
