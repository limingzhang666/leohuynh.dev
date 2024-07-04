export let siteMetadata = {
  siteUrl: 'https://www.yinshi.tech',
  siteRepo: 'https://github.com/limingzhang666/leohuynh.dev',
  siteLogo: '/static/images/logo.jpg',
  image: '/static/images/logo.jpg',
  socialBanner: '/static/images/logo.jpg',
  email: 'laimingcham@163.com',
  github: 'https://github.com/limingzhang666',
  x: 'https://x.com/hta218_',
  facebook: 'https://facebook.com/hta218',
  youtube: 'https://www.youtube.com/@hta218_',
  linkedin: 'https://www.linkedin.com/in/hta218/',
  locale: 'en-US',
  // locale: 'cn',
  // analyticsURL: 'https://analytics.leohuynh.dev/share/jkwRskv0/leohuynh.dev',
  analyticsURL: 'https://cloud.umami.is/share/Jd64eJ533TRh199V/yinshi.tech',
  analytics: {
    plausibleDataDomain: '',
    simpleAnalytics: false, // true | false
    umamiWebsiteId: '265eaeba-563f-43b0-bfff-5a955befd196',
    googleAnalyticsId: 'G-KKCFHXF39T', // e.g. UA-000000-2 or G-XXXXXXX
  },
  socialAccounts: {
    github: 'YinShiLiMing',
    linkedin: 'hta218',
    x: 'hta218_',
  },
  // add byzhangliming 20240310
  beian: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=36100202000363/',
  gitee: 'https://gitee.com/YinShiLiMing',
  footerTitle: '赣公网安备 36100202000363号',
  footerTitle2: 'ICP备案/许可证号:赣ICP备2022001063号-1',
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export let commentConfig = {
  provider: 'giscus', // 'giscus' | 'utterances' | 'disqus',
  // https://giscus.app/
  giscusConfig: {
    repo: 'limingzhang666/giscus', // process.env.GISCUS_REPO
    repositoryId: 'R_kgDOHndu7g', // process.env.GISCUS_REPOSITORY_ID
    category: 'Announcements', // process.env.GISCUS_CATEGORY
    categoryId: 'DIC_kwDOHndu7s4CQEwa', // process.env.GISCUS_CATEGORY_ID
    mapping: 'title', // supported options: pathname, url, title
    reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
    // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
  },
  // https://utteranc.es/
  utterancesConfig: {
    repo: '', // process.env.UTTERANCES_REPO
    issueTerm: '',
    label: '',
    lightTheme: '',
    darkTheme: '',
  },
  // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  disqus: {
    shortname: '', // process.env.DISQUS_SHORTNAME
  },
}
