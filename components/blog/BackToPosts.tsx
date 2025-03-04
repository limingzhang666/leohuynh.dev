// 导入 MoveLeft 图标组件，来自 lucide-react 库
import { MoveLeft } from 'lucide-react'
// 导入 Link 组件，自定义的链接组件，用于生成带有样式的锚点标签
import { Link } from '../Link'

// 定义 BackToPosts 函数组件，接收一个对象参数，该对象包含一个名为 page 的属性，类型为 number
export function BackToPosts({ page }: { page: number }) {
  // 返回一个 Link 组件，包裹了图标和文本，点击后跳转到指定博客页面
  return (
    <Link
      // 动态生成 href 属性值，根据传入的 page 参数构建目标 URL
      href={`/blog/page/${page}`}
      className="flex gap-3 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {/* 渲染 MoveLeft 图标组件，并设置其 strokeWidth 属性 */}
      <MoveLeft strokeWidth={1} />
      <span>Back to the blog</span>
    </Link>
  )
}
