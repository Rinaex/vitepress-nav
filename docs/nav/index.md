---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

> [!TIP]
> 您可以访问[使用说明](/Guide)详细了解如何使用本导航

> [!IMPORTANT]
>
> 当前域名`nene.run`将于2025年6月10日过期,请及时收藏新域名:[https://41ming.com/](https://41ming.com/)以防走失



<script setup>
import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# GAL导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />
