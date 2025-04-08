export function kebabCase(str: string): string {
  return str
    .split(/\s+/) // 按空格分隔中英文块
    .map((word) => {
      // 如果是纯英文或英文+数字，就按原来的 kebabCase 逻辑处理
      if (/^[a-zA-Z0-9]+$/.test(word)) {
        return (
          word
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            ?.map((x) => x.toLowerCase())
            .join('-') ?? ''
        )
      }
      // 其他情况（中文或中英文混合），保持原样
      return word
    })
    .filter(Boolean) // 移除空字符串
    .join('-')
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
