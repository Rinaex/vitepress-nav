import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '速查手册',
    items:[
      {
        text: '通用方案',
        link: '/reference/Universal'
        },
      {
        text: '运行报错',
        link: '/reference/Runtime'
        },
      {
        text: '画面问题',
        link: '/reference/Graphics'
      },
      {
        text: '声音问题',
        link: '/reference/Audio'
      },
      {
        text: '模拟器问题',
        link: '/reference/Emulator'
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
          { text: '下载', link: '/first'},
          { text: '解压缩', link: '/first'},
          { text: '安装与运行', link: '/first'},
          { text: '常用软件', link: '/first'},
        ],
      },
      {
        text: 'Android',
        items: [
          { text: '安装模拟器', link: '/first'},
          { text: '资源下载', link: '/first'},
          { text: '注意事项', link: '/first'},
        ],
      },
      ],
    activeMatch: '^/stage1',
  },
  { text: '加入群聊', link: '/group', activeMatch: '^/group',},
  { text: '赞助作者', link: '/reward', activeMatch: '^/reward', },
]
