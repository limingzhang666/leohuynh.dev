import { DEFAULT_LOCALE, LOCALES } from '~/constant'

export function getLocale(code: string) {
  // return LOCALES.find((locale) => locale.code === code)
  if (code === 'cn') return 'cn' // 适配你的 cn 写法
  return LOCALES.find((locale) => locale.code === code)?.code || DEFAULT_LOCALE
}
