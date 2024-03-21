import type { Project } from '~/types/data'

export let projectsData: Project[] = [
  {
    type: 'work',
    title: 'Pilot - Shopify Hydrogen theme',
    description:
      'The first Hydrogen-driven theme for Shopify. Pilot is a Shopify theme that allows you to build a lightning-fast storefront with all the benefits of Hydrogen.',
    imgSrc: '/static/images/weaverse-pilot.jpg',
    repo: 'weaverse/pilot',
    url: 'https://pilot.weaverse.io/',
    builtWith: ['Hydrogen', 'Remix', 'Tailwind', 'Headless UI'],
  },
  {
    type: 'work',
    title: '阿里dataV实践',
    description: `通过使用阿里datav，实现数据可视化，展示业务数据，分析数据，辅助决策，异常监控.`,
    imgSrc: '/static/images/Project/00-dataV.png',
    url: 'https://yinshi.tech/blog/project/%E9%98%BF%E9%87%8Cdatav%E5%AE%9E%E8%B7%B5',
    builtWith: ['DataV', 'filter'],
  },
  {
    type: 'self',
    title: 'Personal website',
    imgSrc: '/static/images/leoblog.jpg',
    repo: 'leohuynh.dev',
    builtWith: ['Next.js', 'Tailwind', 'Typescript', 'Prisma', 'Umami'],
  },
]
