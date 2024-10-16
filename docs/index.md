---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 世遗铭
  text: 被世界遗忘之人
  tagline: 愿一切付出都能有其结果
  image:
    src: /ming.png
    alt: 世遗铭
  actions:
    - text: GAL导航
      link: /nav-gal/
    - text: 小铭导航
      link: /nav/
      theme: alt
    - text: GAL百科
      link: https://netease-music.fe-mm.com
    - text: 关于我
      link: /test
      theme: alt
features:
  - icon: 🎯
    title: GAL导航
    details: GALGAME优质站点推荐<br /><small>也许</small>定期更新
    link: https://notes.fe-mm.com/fe/javascript/types
    /*linkText: 前端常用知识*/
  - icon: 📚
    title: GAL资料库
    details: 收录了相关知识、工具<br />报错的解决方案
    link: https://notes.fe-mm.com/analysis/utils/only-allow
    /*linkText: 源码阅读*/
  - icon: 📑
    title: 小铭导航
    details: 个人收藏的一些优秀站点<br /><small>它们帮助我节约很多时间和金钱</small>
    link: https://notes.fe-mm.com/workflow/utils/library
    /*linkText: 常用工具库*/
  - icon: ✍
    title: 冲浪笔记
    details: 总结归纳的一些教程<br /><small>不过是一些互联网垃圾罢了</small>
    link: https://notes.fe-mm.com/efficiency/online-tools
    /*linkText: 提效工具*/
  - icon: 👴
    title: 关于我
    details: 现实的理想主义者<br />旧时代遗留的普通人
    link: https://notes.fe-mm.com/pit/npm
    /*linkText: 踩坑记录*/
  - icon: 🥰
    title: 投喂世遗铭
    details: <small>也许会掉落什么特殊奖励也说不定</small>
    link: https://notes.fe-mm.com/mao
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
