import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '站点攻略',
    items:[
      { text: 'VNDB', link: 'site/VNDB'},
      { text: 'Bangumi', link: 'site/bangumi'},
    ],
    activeMatch: '^/site',
  },
  {
    text: '速查手册',
    items:[
      { text: '简介', link: 'reference/first'},
      {
        text: '运行报错',
        link: 'reference/first'
        },
      {
        text: '画面问题',
        link: 'reference/first'
      },
      {
        text: '声音问题',
        link: 'reference/first'
      },
      {
        text: '模拟器问题',
        link: 'reference/first'
      },
    ],
    activeMatch: '^/reference',
  },
  {
    text: '基础篇',
    items:[
      {
        text: 'PC',
        items: [
          { text: '简介', link: 'basic/first'},
          { text: '下载', link: 'basic/first'},
          { text: '解压缩', link: 'basic/first'},
          { text: '安装与运行', link: 'basic/first'},
          { text: '常用软件', link: 'basic/first'},
        ],
      },
      {
        text: 'Android',
        items: [
          { text: '安装模拟器', link: 'basic/first'},
          { text: '资源下载', link: 'basic/first'},
          { text: '注意事项', link: 'basic/first'},
        ],
      },
      ],
    activeMatch: '^/basic',
  },
  {
    text: '进阶篇',
    items:[
      { text: '简介', link: 'advanced/first'},
      { text: '建设中', link: 'advanced/first'},
    ],
    activeMatch: '^/advanced',
  },
  {
    text: '大师篇',
    items:[
      { text: '简介', link: 'master/first'},
      { text: '建设中', link: 'master/first'},
    ],
    activeMatch: '^/master',
  },
  { text: '加入群聊', link: '/group', activeMatch: '^/group',},
  { text: '赞助作者', link: '/reward', activeMatch: '^/reward', },
]
