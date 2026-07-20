import { Feed } from 'feed'
import { name, email } from '@/config/infoConfig'
import { getAllBlogs } from '@/lib/blogs'
import { site_url } from '@/config/siteConfig'
import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function GET() {
  // 本地预览没有环境变量时，使用站点配置中的默认地址生成绝对链接。
  const siteUrl = site_url.replace(/\/$/, '')
  const author = email ? { name, email } : { name }

  const feed = new Feed({
    title: author.name,
    description: `${name}'s writing on software and building products`,
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${name} ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed`,
    },
  })

  const blogs = await getAllBlogs()

  for (const blog of blogs) {
    const filePath = path.join(process.cwd(), 'src/content/blog', `${blog.slug}.mdx`)
    const source = await fs.readFile(filePath, 'utf-8')
    const { content } = matter(source)

    feed.addItem({
      title: blog.title,
      id: `${siteUrl}/blogs/${blog.slug}`,
      link: `${siteUrl}/blogs/${blog.slug}`,
      description: blog.description,
      content: content,
      author: [author],
      date: new Date(blog.date),
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'cache-control': 's-maxage=86400', // one day cache
    },
  })
}
