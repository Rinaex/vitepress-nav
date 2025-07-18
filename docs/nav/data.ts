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
		icon: 'https://favicon.im/www.kungal.com',
		title: '鲲Galgame',
		desc: '活跃用户很多,获取资源没有门槛',
		link: 'https://www.kungal.com/zh-cn',
	  },
	  {
		icon: 'https://favicon.im/galbase.top',
		title: 'galbase',
		desc: '一个开源且数据公开的综合型论坛',
		link: 'https://galbase.top/',
	  },
	  {
		icon: 'https://favicon.im/www.ymgal.games',
		title: '月幕Galgame',
		desc: '综合性质的Galgame交流平台',
		link: 'https://www.ymgal.games/index',
	  },
	  {
		icon: 'https://favicon.im/galgamer.moe',
		title: 'Galgamer',
		//desc: '大家都是美少女',
		link: 'https://galgamer.moe/',
	  },

	],
  },
  {
	title: '免登录资源站',
	items : [
		{
		//icon: '',
		title: 'Galgame聚合搜索',
		desc: '聚合了很多资源站',
		link: 'https://searchgal.homes/',
	  },
	  {
		icon: 'https://favicon.im/zi6.cc?larger=true',
		title: '梓澪の妙妙屋',
		desc: '梓澪のGalgame仓库',
		link: 'https://zi6.cc/',
	  },
	  {
		icon: 'https://favicon.im/inarigal.com',
		title: '稻荷Gal',
		desc: '海超人和大洋游侠合为一体',
		link: 'https://inarigal.com/',
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
		desc: '好就是好！',
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
		icon: 'https://favicon.im/www.galdl.com?larger=true',
 		title: 'GALXP',
 		desc: '只推一些XP向的拔作,BT下载',
 		link: 'https://www.galdl.com/',
	  },
		{
		icon: 'https://www.limulu.moe/favicon.ico',
		title: '莉斯坦ACG',
		desc: '一个简洁美观人性化的ACG资源站，我们致力于为ACG爱好者打造最优质的体验！',
		link: 'https://www.limulu.moe/',
	  },
	  {
		icon: 'https://gcore.jsdelivr.net/gh/Rinaex/images@main/7ce73a11-6cf7-484e-9f99-7e3f6741de4f.png',
		title: '0721Galgame',
		desc: '提供夸克和迅雷,解压密码挺抽象的',
		link: 'https://nn0721.icu/',
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
		desc: '提供MEGA盘和Cloudflare R2，两种下载方式都需要使用代理',
		link: 'https://lzacg.org/',
	  },
		{
		icon: 'https://files.catbox.moe/3ozfnq.webp',
		title: '紫缘社',
		desc: '紫缘社现在需要获取密码,遂移至此分区',
		link: 'https://www.galzy.eu.org/',
	  },
		{
		icon: 'https://www.nekogal.com/wp-content/uploads/2023/11/favneko.png',
		title: 'NekoGAL',
		desc: '需要登录评论获取下载',
		link: 'https://www.nekogal.com/',
	  },
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
  {
	title: '游戏工具',
	items: [
	  {
		icon: 'https://favicon.im/steamgalgame.com',
		title: 'Steam上的中文Galgame',
		desc: '适合Steam玩家,提供Steam上架的汉化游戏列表和对应游戏的补丁',
		link: 'https://steamgalgame.com/',
	  },
	  {
		icon: 'https://favicon.im/vndb.org',
		title: 'VNDB',
		desc: '视觉小说数据库,用来查资料/筛选游戏',
		link: 'https://vndb.org/',
	  },
	  {
		icon: 'https://favicon.im/erogamescape.dyndns.org?larger=true',
		title: '批评空间',
		desc: '看游戏排行和评分',
		link: 'https://erogamescape.dyndns.org/~ap2/ero/toukei_kaiseki/',
	  },
	  {
		icon: 'https://favicon.im/plumz.me?larger=true',
		title: '批评空间',
		desc: '这个是李先生的反代',
		link: 'https://ero.plumz.me/',
	  },
	  {
		icon: 'https://favicon.im/plumz.me?larger=true',
		title: "Plum's Blog",
		desc: '李先生的blog',
		link: 'https://plumz.me/',
	  },
	  {
		icon: 'https://favicon.im/seiya-saiga.com',
		title: '誠也の部屋',
		desc: '提供游戏攻略和完美存档',
		link: 'https://seiya-saiga.com/',
	  },
	  {
		icon: 'https://favicon.im/sagaoz.net',
		title: 'ＳＡＧＡＯ．Ｚのホームページ',
		desc: '提供游戏攻略和完美存档',
		link: 'https://sagaoz.net/',
	  },
	  {
		icon: 'https://favicon.im/sagaoz.net',
		title: 'ＳＡＧＡＯ．Ｚのホームページ',
		desc: '提供游戏攻略和完美存档',
		link: 'https://sagaoz.net/',
	  },
	  {
		icon: 'https://favicon.im/moepedia.net',
		title: 'moepedia',
		desc: 'GALGAME信息站,同时罗列了对应游戏的购买地址以及线下商铺',
		link: 'https://moepedia.net/',
	  },
	  {
		icon: 'https://favicon.im/moe-gameaward.com',
		title: '萌えゲーアワード',
		desc: '游戏排行榜',
		link: 'https://moe-gameaward.com/top.html',
	  },
	  {
		icon: 'https://favicon.im/bgm.tv',
		title: 'Bangumi',
		desc: '功能强大的计划管理工具',
		link: 'https://bgm.tv/',
	  },
	  {
		icon: 'https://favicon.im/2dfan.com',
		title: '2DFan',
		desc: '新作情报,存档、补丁下载',
		link: 'https://2dfan.com/',
	  },
	  {
		icon: 'https://favicon.im/2dfan.com',
		title: '2DFan',
		desc: '如果打不开主域名,可以看看这个发布页',
		link: 'https://github.com/2dfan/domains/',
	  },
	  {
		icon: 'https://favicon.im/moyu.moe',
		title: '鲲Galgame补丁',
		desc: '鲲的补丁站,提供无需登录的补丁下载服务.',
		link: 'https://www.moyu.moe/',
	  },
	  {
		icon: 'https://favicon.im/gallibrary.pw',
		title: 'GAL图书馆',
		desc: '查询游戏基本信息,部分文章带下载链接',
		link: 'https://gallibrary.pw/',
	  },
	  {
		icon: 'https://favicon.im/docs.google.com',
		title: '穹之空',
		desc: '一个记录新作情报和汉化情况的表格',
		link: 'https://docs.google.com/spreadsheets/d/1xOzRNqtdjjX445izA392jvMTMRgBQ5XcEawC5spR3_Y/edit#gid=1334180289',
	  },
	],
  },
]
