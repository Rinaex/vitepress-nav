---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

:::tip 说明
本导航仅收录以GALGAME为主要内容的优质站点,对于一些广告过多或综合性质更强的站点暂不考虑收录
您可以访问[使用说明](/Guide)详细了解如何使用本导航
:::


<script setup>
import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# GAL导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />
