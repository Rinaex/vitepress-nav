import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/basic/': [
        {
            text: '作者的请求',
            link: '/basic/first'
        },
        {
            text: '文件格式',
            link: '/basic/format'
        },
        {
            text: '站点攻略',
            collapsed: false,
            items: [
                { text: 'VNDB', link: '/basic/VNDB' },
                { text: 'Bangumi', link: '/basic/bangumi' },
            ]
        },
    ]
}
