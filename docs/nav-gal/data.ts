import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '交流社群',
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
  {
	title: '免登录资源站',
	items : [
	  {
		icon: 'https://favicon.im/steamgalgame.com',
		title: 'Steam上的中文Galgame',
		desc: '适合Steam玩家,提供Steam上架的汉化游戏列表和对应游戏的补丁',
		link: 'https://steamgalgame.com/',
	  },
	  {
		icon: 'https://favicon.im/zi6.cc?larger=true',
		title: '梓澪の妙妙屋',
		desc: '梓澪のGalgame仓库',
		link: 'https://zi6.cc/',
	  },
	  {
		  icon: 'https://favicon.im/amoebi.com',
		  title: '稻荷·樱赞繁星',
		  desc: '不允许爬虫和多线程下载器下载',
		  link: 'https://amoebi.com/',
	  },
	  {
		 icon: 'https://favicon.im/t-satoru.top?larger=true', 
		 title: '小鳥遊暁の会员制餐厅',
		 desc: '安卓平台移植作者',
		 link: 'https://t-satoru.top/',
	  },
	  {
		title: '青桔网',
		desc: '资源站,同时也是移植组',
		link: 'https://spare.qingju.org/',
	  },
	  {
		icon: 'https://favicon.im/www.sayafx.top',
		title: 'Galgame月谣',
		desc: '体验不错,资源较少,目前还在更新',
		link: 'https://www.sayafx.top/',
	  },
	  {
		icon: 'https://favicon.im/www.touchgal.io',
		title: 'TouchGal',
		desc: 'TouchGal的自建盘使用的存储是Cloudflare R2部分国内网络可能无法下载',
		link: 'https://www.touchgal.io/',
	  },
	  {
		icon: 'https://favicon.im/www.shinnku.com?larger=true',
		title: '失落小站',
		desc: '希望大家都爱真红',
		link: 'https://www.shinnku.com/',
	  },
	  {
	  	icon: 'https://favicon.im/pan.jlbx.xyz',
	  	title: '姬路白雪の资源小站',
	  	link: 'https://pan.jlbx.xyz/',
	  },
	  {
		icon: 'https://favicon.im/galzy.eu.org',
		title: '紫缘社',
		link: 'https://galzy.eu.org/',
	  },
	  {
		icon: 'https://favicon.im/www.galdl.com?larger=true',
		title: 'GALXP',
		desc: '只推一些XP向的拔作,BT下载',
		link: 'https://www.galdl.com/',
	  }
	],
  },
  {
	title: '登录资源站',
	items: [
	  {
		icon: 'https://favicon.im/www.hikarinagi.com?larger=true',
		title: 'Hikarinagi',
		desc: '使用积分获取资源,积分获取比较简单 登录签到就行 通常来说够用',
		link: 'https://www.hikarinagi.com/',
	  },
	  {
		icon: 'https://favicon.im/www.yngal.com',
		title: '初音的青葱',
		desc: '老牌下载站,下载比较稳定,需要存到35个硬币以后使用4硬币兑换七天下载权限',
		link: 'https://www.yngal.com/',
	  },
	  {
		icon: 'https://favicon.im/lzacg.org',
		title: '量子ACG',
		desc: '目前提供OSS和MEGA盘,OSS使用Cloudflare R2，两种下载方式都不适合国内网络',
		link: 'https://lzacg.org/',
	  }
	],
  },
  {
	title: '生肉资源站',
	items: [
	  {
		icon: 'https://favicon.im/bbs4.2djgame.net',
		title: '2DJGAME',
		desc: '2DJ和绯月的生肉游戏发布的都很快,无需登录即可获取磁力链接',
		link: 'https://bbs4.2djgame.net/',
	  },
	  {
		icon: 'https://favicon.im/ggb.dlgal.com',
		title: 'GGBases',
		desc: '生肉分流站点,提供BT和PikPak',
		link: 'https://ggb.dlgal.com/'
	  },
	  {
		icon: 'https://favicon.im/www.anime-sharing.com',
		title: 'Anime Sharing',
		desc: '外国论坛,能找到一些冷门资源,但是大多数资源都是网赚盘，没会员很难下载',
		link: 'https://www.anime-sharing.com/',
	  },
	  {
		icon: 'https://favicon.im/www.erogame.space',
		title: 'Faustの旧作館',
		desc: '定期发布每月/年的作品大合集,115/PikPak分享,注册需要找老用户要邀请码',
		link: 'https://www.erogame.space/',
	  },
	],
  },
]
