import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '站点攻略',
    items:[
      { text: 'VNDB', link: 'site/VNDB'},
      { text: 'Bangumi', link: 'site/bangumi'},
    ],
  },
  {
    text: '速查手册',
    items:[
      { text: '简介', link: 'reference/first'},
      { text: '建设中', link: 'reference/first'},
      { text: '建设中', link: 'reference/first'},
      {items:[
        { text: '建设中', link: 'reference/first'},
        { text: '建设中', link: 'reference/first'},
        ],
      },
    ],
  },
  {
    text: '基础篇',
    items:[
      { text: '简介', link: 'basic/first'},
      { text: '建设中', link: 'basic/first'},
      { text: '建设中', link: 'basic/first'},
      {items:[
        { text: '建设中', link: 'basic/first'},
        { text: '建设中', link: 'basic/first'},
        ],
      },
    ],
  },
  {
    text: '进阶篇',
    items:[
      { text: '简介', link: 'advanced/first'},
      { text: '建设中', link: 'advanced/first'},
    ],
  },
  {
    text: '大师篇',
    items:[
      { text: '简介', link: 'master/first'},
      { text: '建设中', link: 'master/first'},
    ],
  },
  { text: '加入群聊',link: '/group',},
  { text: '赞助作者', link: '/reward' },
]
