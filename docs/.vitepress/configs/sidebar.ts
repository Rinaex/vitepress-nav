import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/stage1/': [
        {
            text: '文件格式',
            link: '/stage1/format'
        },
        {
            text: '术语解释',
            link: '/stage1/jargon'
        },
        {
            text: '常用软件',
            link: '/stage1/software'
        },
        {
            text: '常用软件教程',
            collapsed: false,
            items: [
              { text: '解压缩', link: '/stage1/soft/ZIP' },
              { text: '转区工具', link: '/stage1/soft/LE' },
              { text: '下载工具', link: '/stage1/soft/Down' },
              { text: '虚拟光驱', link: '/stage1/soft/ISO' },
              { text: 'MT管理器', link: '/stage1/soft/MT' },
              { text: 'Shizuku', link: '/stage1/soft/Shizuku' },
              { text: 'ZArchiver', link: '/stage1/soft/ZA' },
              { text: '安卓模拟器', link: '/stage1/soft/SIM' },
            ]
        },
        {
            text: '站点攻略',
            collapsed: false,
            items: [
                { text: 'VNDB', link: '/stage1/site/VNDB' },
                { text: 'Bangumi', link: '/stage1/site/bangumi' }
            ]
        }
    ],
}