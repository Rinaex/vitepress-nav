import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  description: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '交流社群',
	description : '这里对描述进行一个测试',
    items: [
      {
        icon: 'https://favicon.im/miaola.work',
        title: '绯月ScarletMoon',
        desc: '当下最好的Galgame 论坛',
        link: 'https://kf.miaola.work/',
      },
      {
        icon: 'https://favicon.im/miaola.work',
        title: '绯月ScarletMoon',
        desc: '适配手机版的绯月',
        link: 'https://m.miaola.work/',
      },
      {
        icon: 'https://favicon.im/www.ymgal.games',
        title: '月幕Galgame',
        desc: '综合性质的Galgame交流平台',
        link: 'https://www.ymgal.games/index',
      },
      {
        icon: 'https://favicon.im/www.kungal.com',
        title: '鲲Galgame',
        desc: '活跃用户很多,获取资源没有门槛',
        link: 'https://www.kungal.com/zh-cn',
      },
      {
        icon: 'https://favicon.im/galgamer.moe',
        title: 'Galgamer',
        //desc: '大家都是美少女',
        link: 'https://galgamer.moe/',
      },
	  {
	    //icon: '',
	    title: 'SS同盟',
	    desc: 'SSTM的考核机制比较严格,所以存留下来的用户和交流氛围都还不错',
	    link: 'https://sstm.moe/',
	  },
    ],
  },
]
