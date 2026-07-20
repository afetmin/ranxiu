export function formatDate(dateString: string) {
  // 兼容旧文章中的完整 ISO 时间，以及模板原有的 YYYY-MM-DD 日期。
  const normalizedDate = /^\d{4}-\d{2}-\d{2}$/.test(dateString)
    ? `${dateString}T00:00:00Z`
    : dateString

  return new Date(normalizedDate).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
