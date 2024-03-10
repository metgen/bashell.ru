// @ts-check
/** @type {import("pliny/config").PlinyConfig } */

const siteMetadata = {
  title: 'Про Linux и не только',
  author: 'Геннадий',
  fullName: 'Метальников Геннадий',
  headerTitle: 'Bashell.ru',
  description: 'Про Linux и не только...',
  language: 'ru-ru',
  theme: 'system',
  siteUrl: 'https://bashell.ru',
  analyticsURL: 'https://analytics.eu.umami.is/websites/f3b4f438-9f45-440c-92b8-122cd107a067',
  siteRepo: 'https://github.com/metgen/bashell',
  siteLogo: '/static/images/avatar.jpg',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/projects/bashell-blog.png',
  email: 'metalnikov.gennadiy@gmail.com',
  github: 'https://github.com/metgen',
  facebook: 'https://www.facebook.com/',
  twitter: 'https://twitter.com/',
  youtube: 'https://youtube.com/',
  instagram: `https://instagram.com/gennadiy.m`,
  vk: `https://vk.com/gennadii_m`,
  locale: 'ru-RU',
  socialAccounts: {
    github: 'metgen',
    instagram: `gennadiy.m`,
    vk: `gennadii_m`,
  },
  analytics: {
    umamiWebsiteId: 'f3b4f438-9f45-440c-92b8-122cd107a067',
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'ru',
      inputPosition: 'top',
    },
  },
};

module.exports = siteMetadata;
