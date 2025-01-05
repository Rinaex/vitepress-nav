import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '站点攻略',
    items:[
      { text: 'VNDB', link: '站点攻略/VNDB'},
      { text: 'Bangumi', link: '站点攻略/bangumi'},
    ],
    activeMatch: '^/site',
  },
  {
    text: '速查手册',
    items:[
      { text: '简介', link: '速查手册/first'},
      {
        text: '运行报错',
        link: '速查手册/first'
        },
      {
        text: '画面问题',
        link: '速查手册/first'
      },
      {
        text: '声音问题',
        link: '速查手册/first'
      },
      {
        text: '模拟器问题',
        link: '速查手册/first'
      },
    ],
    activeMatch: '^/速查手册',
  },
  {
    text: '基础教程',
    items:[
      { text: '文件格式', link: '基础教程/format'},
      {
        text: 'PC',
        items: [
          { text: '简介', link: '基础教程/first'},
          { text: '下载', link: '基础教程/first'},
          { text: '解压缩', link: '基础教程/first'},
          { text: '安装与运行', link: '基础教程/first'},
          { text: '常用软件', link: '基础教程/first'},
        ],
      },
      {
        text: 'Android',
        items: [
          { text: '安装模拟器', link: '基础教程/first'},
          { text: '资源下载', link: '基础教程/first'},
          { text: '注意事项', link: '基础教程/first'},
        ],
      },
      ],
    activeMatch: '^/基础教程',
  },
  {
    text: '进阶教程',
    items:[
      { text: '简介', link: '进阶教程/first'},
      { text: '建设中', link: '进阶教程/first'},
    ],
    activeMatch: '^/进阶教程',
  },
  {
    text: '糕手教程',
    items:[
      { text: '简介', link: '糕手教程/first'},
      { text: '建设中', link: '糕手教程/first'},
    ],
    activeMatch: '^/糕手教程',
  },
  { text: '加入群聊', link: '/加入群聊', activeMatch: '^/加入群聊',},
  { text: '赞助作者', link: '/赞赏', activeMatch: '^/赞赏', },
]
