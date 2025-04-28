import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  outDir: '../dist',
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',

  lang: 'zh-CN',
  title: '世遗铭',
  description: '被世界遗忘,或是逃离世界',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '',

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

    /* socialLinks: [{ icon: 'github', link: 'https://github.com/maomao1996/vitepress-nav-template' }], */

    footer: {
      message: '<p style="display: flex;">本网站由<a herf="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral"><img src="https://gcore.jsdelivr.net/gh/rinaex/images@main/%E5%8F%88%E6%8B%8D%E4%BA%91_logo2.png" width="50"></img></a>提供CDN加速</p>',

      copyright: 'Copyright © 2024-present ming',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    /*** 自定义配置 ***/
    visitor: {
      badgeId: 'lost_ming',
    },

    comment: {
      repo: 'Rinaex/vitepress-nav',
      repoId: 'R_kgDONAS1jw',
      category: 'Announcements',
      categoryId: 'DIC_kwDONAS1j84CjYVY',
    },
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})
