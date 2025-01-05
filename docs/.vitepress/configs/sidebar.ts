import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/stage1/': [
        {
            text: '作者的请求',
            link: '/stage1/first'
        },
        {
            text: '文件格式',
            link: '/stage1/format'
        },
        {
            text: '术语解释',
            link: '/stage1/jargon'
        },
        {
            text: 'site',
            collapsed: false,
            items: [
                { text: 'VNDB', link: '/site/VNDB' },
                { text: 'Bangumi', link: '/site/bangumi' },
            ]
        },
    ]
}
