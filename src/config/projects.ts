// 项目
export const projectHeadLine = '正在做，也已经做出来的东西。'
export const projectIntro = '从 macOS 菜单栏工具，到 AI 工作流与轻量 Web 产品。这里收录了一些我最具代表性的项目。'

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
    description: '一款使用 WebKit 构建的轻量 macOS 菜单栏浏览器。',
    link: { href: 'github.com/afetmin/TopBrowser', label: 'TopBrowser' },
    category: ['App'],
    techStack: ['Swift', 'WebKit'],
    tags: ['macOS', 'Swift', 'WebKit'],
  },
  {
    name: 'TextLens',
    description: '选中文本即可翻译并获得 AI 解释的原生 macOS 菜单栏工具。',
    link: { href: 'github.com/afetmin/TextLens', label: 'TextLens' },
    category: ['App'],
    techStack: ['SwiftUI'],
    tags: ['macOS', 'SwiftUI', 'AI'],
  },
  {
    name: 'FilmFlow',
    description: '把剧本、分镜、关键帧与视频串成可视化、可编辑、可复用的 AI 影视工作流。',
    link: { href: 'github.com/afetmin/FilmFlow', label: 'FilmFlow' },
    category: ['Web App'],
    techStack: ['TypeScript'],
    tags: ['AI Video', 'Workflow', 'TypeScript'],
  },
  {
    name: 'FlashSeal',
    description: '基于 Cloudflare Pages、Functions 与 KV 的加密阅后即焚文本和图片分享工具。',
    link: { href: 'www.flashseal.space', label: 'FlashSeal' },
    category: ['Web App'],
    techStack: ['TypeScript', 'Cloudflare'],
    tags: ['Privacy', 'Encryption', 'Cloudflare'],
  },
  {
    name: 'AI Job Copilot',
    description: '可追溯地分析简历与岗位描述，并通过对话生成改写建议与复盘的求职辅助平台。',
    link: { href: 'github.com/afetmin/ai-job-copilot', label: 'AI Job Copilot' },
    category: ['Web App'],
    techStack: ['Next.js', 'FastAPI', 'ChromaDB'],
    tags: ['AI', 'Next.js', 'FastAPI'],
  },
  {
    name: 'AutoSort Bookmarks',
    description: '只管收藏，剩下的交给 AI：自动整理与归类浏览器书签。',
    link: { href: 'github.com/afetmin/AutoSort-Bookmarks', label: 'AutoSort Bookmarks' },
    category: ['Extension'],
    techStack: ['TypeScript'],
    tags: ['AI', 'Bookmarks', 'TypeScript'],
  },
  {
    name: 'PixFree',
    description: '用于验证本地推理链路的排队式图片生成实验，前端托管于 Cloudflare。',
    link: { href: 'pixfree-web.pages.dev', label: 'PixFree' },
    category: ['Web App'],
    techStack: ['TypeScript', 'Cloudflare Workers'],
    tags: ['Image AI', 'Queue', 'Cloudflare'],
  },
  {
    name: 'Research to Video',
    description: '把研究目标、报告或文稿编排为带本地旁白、可复现的 HyperFrames 视频。',
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
    description: '使用 Vue 全家桶与网易云音乐接口构建的完整音乐播放器。',
    link: { href: 'github.com/afetmin/vue-music-next', label: 'vue-music-next' },
    gitStars: 7,
    gitForks: 3,
  },
  {
    name: 'musicforprogramming',
    description: '复现 musicforprogramming 网站的沉浸式音乐可视化体验。',
    link: { href: 'github.com/afetmin/musicforprogramming', label: 'musicforprogramming' },
    gitStars: 3,
    gitForks: 1,
  },
  {
    name: 'FilmFlow',
    description: '基于节点编排的 AI 影视工作流编辑器。',
    link: { href: 'github.com/afetmin/FilmFlow', label: 'FilmFlow' },
    gitStars: 1,
    gitForks: 0,
  },
  {
    name: 'FlashSeal',
    description: '开源的加密阅后即焚文本与图片分享工具。',
    link: { href: 'github.com/afetmin/FlashSeal', label: 'FlashSeal' },
    gitStars: 1,
    gitForks: 0,
  },
  {
    name: 'ebook',
    description: '使用 Vue 与 epub.js 构建的 EPUB 电子书阅读器。',
    link: { href: 'github.com/afetmin/ebook', label: 'ebook' },
    gitStars: 0,
    gitForks: 0,
  },
  {
    name: 'rdino',
    description: '使用 React、TypeScript 与 Jest 打造的组件库实践。',
    link: { href: 'github.com/afetmin/rdino', label: 'rdino' },
    gitStars: 0,
    gitForks: 0,
  },
]
