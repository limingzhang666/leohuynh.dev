import { useTranslation } from 'next-i18next'
import { BuiltWith } from './BuiltWith'
import NextImage from 'next/image'
import { Link } from './Link'
import { siteMetadata } from '~/data/siteMetadata'

export function Footer() {
  let { t } = useTranslation('common')

  return (
    <footer>
      <div className="mb-8 mt-16 items-center justify-between space-y-4 md:mb-10 md:flex md:space-y-0">
        {/*<BuiltWith />*/}
        <div className="my-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <span>{` • `}</span>
          {/*add byzhangliming*/}
          <NextImage
            src="/static/images/beian.png"
            alt="备案信息"
            width={20}
            height={20}
            className="{`fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 h-4 w-4`}"
          />
          <Link href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=36100202000363">
            {siteMetadata.footerTitle}
          </Link>
          {/*<Link href="https://beian.miit.gov.cn">{siteMetadata.footerTitle2}</Link>*/}
          <Link href="https://beian.miit.gov.cn">ICP备案/许可证号:赣ICP备2022001063号-1</Link>

          <span>{t('build_with.copyright_author')}</span>
        </div>
      </div>
    </footer>
  )
}
