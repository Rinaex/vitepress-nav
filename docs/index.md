---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 世遗铭
  text: 被世界遗忘之人
  tagline: 愿一切付出都能有其结果
  image:
    src: https://gcore.jsdelivr.net/gh/rinaex/images@main/cb19aba512b47368f992202abfa2723d.png
    alt: 世遗铭
  actions:
    - text: GAL导航
      link: /nav/
    - text: GAL百科
      link: /basic/first
      theme: alt
    - text: 使用说明
      link: /manual
    - text: 关于
      link: /about
      theme: alt
features:
  - icon: 🎯
    title: GAL导航
    details: GALGAME优质站点推荐<br /><small>也许</small>定期更新
    link: /nav/
    linkText: 前往导航
  - icon: 📚
    title: 速查手册
    details: 收录了一些问题的解决方案
    link: /basic/first
    linkText: 开始阅读
  - icon: 🥰
    title: 投喂站长
    details: <small>也许会掉落什么特殊奖励也说不定</small>
    link: /reward
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
