import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/wiki/': [
        {
            text: '作者的请求',
            link: '/wiki/request'
        },
        {
            text: '文件格式',
            collapsed: false,
            items: [
                { text: '建设中', link: '' },
                { text: '建设中', link: '' },
            ]
        },
        {
            text: '站点攻略',
            collapsed: false,
            items: [
                { text: 'VNDB', link: '/wiki/VNDB' },
                { text: 'Bangumi', link: '/wiki/bangumi' },
            ]
        },
    ]
}
