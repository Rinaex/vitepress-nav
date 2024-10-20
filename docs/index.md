---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 世遗铭
  text: 被世界遗忘之人
  tagline: 愿一切付出都能有其结果
  image:
    src: 
    alt: 世遗铭
  actions:
    - text: GAL导航
      link: /nav/
    - text: GAL百科
      link: /wiki/
      theme: alt
    - text: 使用说明
      link: /manual
    - text: 关于我
      link: /about
      theme: alt
features:
  - icon: 🎯
    title: GAL导航
    details: GALGAME优质站点推荐<br /><small>也许</small>定期更新
    link: /nav/
    linkText: 前往导航
  - icon: 📚
    title: GAL百科
    details: 收录了相关知识、工具<br />报错的解决方案
    link: /wiki/
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

<script>
    var pic = [];
    pic[0] = "https://p.inari.site/usr/1177/6714dc7c0337b.png";
    pic[1] = "https://p.inari.site/usr/1177/6714dc7c03b52.png";
    pic[2] = "https://p.inari.site/usr/1177/6714dc7c03dfe.png";
    pic[3] = "https://p.inari.site/usr/1177/6714dc7c06f6f.png";
    var randomBgIndex = Math.round( Math.random() * 3 );
    document.getElementsByClassName('VPImage image-src')[0].src=pic[randomBgIndex];
</script>