export function formatDate(date: string, language: string = 'en') {
  // 统一 'cn' 到 'zh-CN'
  let locale = language === 'cn' ? 'zh-CN' : language
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function dateSortDesc(a: string, b: string) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}
