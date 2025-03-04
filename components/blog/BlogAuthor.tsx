import type { AuthorFrontMatter } from '~/types/mdx'
import { Link } from '../Link'
import { Image } from '../Image'

export function AuthorDetails({ authorDetails }: { authorDetails: AuthorFrontMatter[] }) {
  // 渲染作者详情列表
  return (
    <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-6">
      {authorDetails.map((author) => (
        <Author key={author.name} author={author} />
      ))}
    </ul>
  )
}

export function Author({ author }: { author: AuthorFrontMatter }) {
  // 渲染单个作者的详细信息
  return (
    <li className="flex items-center space-x-2">
      {author.avatar && (
        // 渲染作者头像
        <Image
          src={author.avatar}
          width={38}
          height={38}
          alt="avatar"
          className="h-10 w-10 rounded-full"
        />
      )}
      <dl className="whitespace-nowrap text-sm font-medium leading-5">
        <dt className="sr-only">Name</dt>
        {/* 渲染作者名字 */}
        <dd className="mb-0.5 text-gray-900 dark:text-gray-100">{author.name}</dd>
        <dt className="sr-only">Github</dt>
        <dd>
          {author.github && (
            <>
              {/* 渲染作者的GitHub链接 */}
              <Link
                href={author.github}
                className="text-primary-500 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                {author.github.replace('https://github.com/', '@')}
              </Link>
            </>
          )}
        </dd>
      </dl>
    </li>
  )
}
