import { Card } from '@/components/shared/Card'
import { formatDate } from '@/lib/formatDate'
import { type BlogType } from '@/lib/blogs'

export function BlogCard({
  blog,
  titleAs,
}: {
  blog: BlogType
  titleAs?: keyof React.JSX.IntrinsicElements
}) {
  const as = titleAs ?? 'h2'
  return (
    <Card as="article" className="h-full">
      {/* 桌面端固定文字区域节奏，让同一行卡片的操作入口保持对齐。 */}
      <Card.Title
        as={as}
        href={`/blogs/${blog.slug}`}
        className="sm:line-clamp-2 sm:min-h-14"
      >
        {blog.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={blog.date} decorate>
        {formatDate(blog.date)}
      </Card.Eyebrow>
      <Card.Description className="sm:line-clamp-3 sm:min-h-[4.5rem]">
        {blog.description}
      </Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}
