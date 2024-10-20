---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

::: tip 建议
您可以访问[使用说明](/manual)详细了解如何使用本导航
:::

<script setup>
import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# GAL导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />
