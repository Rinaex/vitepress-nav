import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '站点攻略',
    items:[
      { text: 'VNDB', link: '/site/VNDB'},
      { text: 'Bangumi', link: '/site/bangumi'},
    ],
    activeMatch: '^/site',
  },
  {
    text: '速查手册',
    items:[
      { text: '简介', link: '/reference/first'},
      {
        text: '运行报错',
        link: '/reference/first'
        },
      {
        text: '画面问题',
        link: '/reference/first'
      },
      {
        text: '声音问题',
        link: '/reference/first'
      },
      {
        text: '模拟器问题',
        link: '/reference/first'
      },
    ],
    activeMatch: '^/reference',
  },
  {
    text: '基础教程',
    items:[
      { text: '文件格式', link: '/stage1/format'},
      { text: '术语解释', link: '/stage1/jargon'},
      { text: '常用软件', link: '/stage1/software'},
      {
        text: 'PC',
        items: [
          { text: '下载', link: '/stage1/first'},
          { text: '解压缩', link: '/stage1/first'},
          { text: '安装与运行', link: '/stage1/first'},
          { text: '常用软件', link: '/stage1/first'},
        ],
      },
      {
        text: 'Android',
        items: [
          { text: '安装模拟器', link: '/stage1/first'},
          { text: '资源下载', link: '/stage1/first'},
          { text: '注意事项', link: '/stage1/first'},
        ],
      },
      ],
    activeMatch: '^/stage1',
  },
  {
    text: '进阶教程',
    items:[
      { text: '简介', link: '/stage2/first'},
      { text: '建设中', link: '/stage2/first'},
    ],
    activeMatch: '^/stage2',
  },
  {
    text: '糕手教程',
    items:[
      { text: '简介', link: '/stage3/first'},
      { text: '建设中', link: '/stage3/first'},
    ],
    activeMatch: '^/stage3',
  },
  { text: '加入群聊', link: '/group', activeMatch: '^/group',},
  { text: '赞助作者', link: '/reward', activeMatch: '^/reward', },
]
