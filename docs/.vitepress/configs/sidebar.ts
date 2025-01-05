import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/基础教程/': [
        {
            text: '作者的请求',
            link: '/基础教程/first'
        },
        {
            text: '文件格式',
            link: '/基础教程/文件格式'
        },
        {
            text: '术语解释',
            link: '/基础教程/术语解释'
        },
        {
            text: '站点攻略',
            collapsed: false,
            items: [
                { text: 'VNDB', link: '/站点攻略/VNDB' },
                { text: 'Bangumi', link: '/站点攻略/bangumi' },
            ]
        },
    ]
}
