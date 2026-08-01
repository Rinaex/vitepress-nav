<script setup lang="ts">
import { computed, ref, watch, onUnmounted } from 'vue'
import { withBase } from 'vitepress'
import { slugify } from '@mdit-vue/shared'

import type { NavLink, NavDomain } from '../types'

const props = defineProps<{
  icon?: NavLink['icon']
  title?: NavLink['title']
  desc?: NavLink['desc']
  link: NavLink['link']
  domains?: NavDomain[]
}>()

const formatTitle = computed(() => (props.title ? slugify(props.title) : ''))

const svg = computed(() => (typeof props.icon === 'object' ? props.icon.svg : ''))

const isMulti = computed(() => !!props.domains && props.domains.length > 1)
const domainCount = computed(() => props.domains?.length ?? 0)

const showPopup = ref(false)

function openPopup() {
  showPopup.value = true
  document.body.style.overflow = 'hidden'
}

function closePopup() {
  showPopup.value = false
  document.body.style.overflow = ''
}

function onCardClick() {
  if (isMulti.value) openPopup()
}

function onOverlayClick(e: MouseEvent) {
  if (e.target === e.currentTarget) closePopup()
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closePopup()
}

function onImgError(e: Event) {
  const img = e.target as HTMLImageElement
  if (isMulti.value) {
    img.style.display = 'none'
  } else {
    img.parentElement?.style.setProperty('display', 'none')
  }
}

watch(showPopup, (open) => {
  if (open) {
    document.addEventListener('keydown', onKeydown)
  } else {
    document.removeEventListener('keydown', onKeydown)
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  if (showPopup.value) document.body.style.overflow = ''
})

const tagText: Record<string, string> = {
  primary: '主站',
  mirror: '镜像',
  mobile: '移动端',
  publish: '地址发布页',
  github: 'GitHub',
  cloud: '网盘',
}

function formatUrl(url: string): string {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
}
</script>

<template>
  <component
    :is="isMulti ? 'div' : 'a'"
    :class="['m-nav-link', { 'm-nav-link--multi': isMulti }]"
    v-bind="
      isMulti
        ? { role: 'button', tabindex: 0 }
        : { href: link, target: '_blank', rel: 'noreferrer' }
    "
    @click="onCardClick"
    @keydown.enter="onCardClick"
  >
    <article class="box">
      <div class="box-header">
        <div v-if="svg" class="icon" v-html="svg" />
        <div v-else-if="icon && typeof icon === 'string'" class="icon">
          <img :src="withBase(icon)" :alt="title" @error="onImgError" />
          <span v-if="isMulti" class="multi-badge">{{ domainCount }}</span>
        </div>
        <h5 v-if="title" :id="formatTitle" class="title">{{ title }}</h5>
      </div>
      <p v-if="desc" class="desc">{{ desc }}</p>
    </article>
  </component>

  <Teleport v-if="isMulti" to="body">
    <Transition name="nav-popup">
      <div v-if="showPopup" class="nav-popup-overlay" @click="onOverlayClick">
        <div class="nav-popup-modal" role="dialog" aria-modal="true">
          <div class="nav-popup-drag" />
          <div class="nav-popup-header">
            <div v-if="svg" class="popup-icon" v-html="svg" />
            <div
              v-else-if="icon && typeof icon === 'string'"
              class="popup-icon"
            >
              <img :src="withBase(icon)" :alt="title" />
            </div>
            <div class="popup-info">
              <div class="popup-title">{{ title }}</div>
              <div v-if="desc" class="popup-desc">{{ desc }}</div>
            </div>
            <button
              class="popup-close"
              aria-label="关闭"
              @click.stop="closePopup"
            >
              ×
            </button>
          </div>
          <div class="nav-popup-body">
            <a
              v-for="d in domains"
              :key="d.url"
              :href="d.url"
              target="_blank"
              rel="noreferrer"
              class="domain-link"
              :class="{ 'domain-link--primary': d.type === 'primary' }"
            >
              <div class="dl-text">
                <span class="dl-label">
                  {{ d.label }}
                  <span
                    v-if="d.type"
                    class="dl-tag"
                    :class="`dl-tag--${d.type}`"
                    >{{ tagText[d.type] }}</span
                  >
                </span>
                <span class="dl-url">{{ formatUrl(d.url) }}</span>
              </div>
              <span class="dl-arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.m-nav-link {
  --m-nav-icon-box-size: 40px;
  --m-nav-icon-size: 32px;
  --m-nav-box-gap: 12px;

  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  height: 100%;
  text-decoration: inherit;
  background-color: var(--vp-c-bg-alt);
  transition: all 0.25s;
  &:hover {
    box-shadow: var(--vp-shadow-2);
    border-color: var(--vp-c-brand);
    text-decoration: initial;
    background-color: var(--vp-c-bg);
  }

  .box {
    display: flex;
    flex-direction: column;
    padding: var(--m-nav-box-gap);
    height: 100%;
    color: var(--vp-c-text-1);
    &-header {
      display: flex;
      align-items: center;
    }
  }

  .icon {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: calc(var(--m-nav-box-gap) - 2px);
    border-radius: 6px;
    width: var(--m-nav-icon-box-size);
    height: var(--m-nav-icon-box-size);
    font-size: var(--m-nav-icon-size);
    background-color: var(--vp-c-default-soft);
    transition: background-color 0.25s;
    :deep(svg) {
      width: var(--m-nav-icon-size);
      fill: currentColor;
    }
    :deep(img) {
      border-radius: 4px;
      width: var(--m-nav-icon-size);
      height: var(--m-nav-icon-size);
      object-fit: contain;
    }
  }

  .title {
    overflow: hidden;
    flex-grow: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: var(--m-nav-icon-box-size);
    font-size: 16px;
    font-weight: 600;
  }

  .desc {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    margin: calc(var(--m-nav-box-gap) - 2px) 0 0;
    line-height: 1.5;
    font-size: 12px;
    color: var(--vp-c-text-2);
  }
}

.m-nav-link--multi {
  cursor: pointer;

  &:hover .multi-badge {
    transform: scale(1.15);
  }
  &:focus-visible {
    outline: 2px solid var(--vp-c-brand);
    outline-offset: 2px;
  }
}

.multi-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  padding: 0;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white);
  font-size: 10px;
  font-weight: 700;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--vp-c-bg-alt);
  z-index: 1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  transition: transform 0.25s;
  pointer-events: none;
}

@media (max-width: 960px) {
  .m-nav-link {
    --m-nav-icon-box-size: 36px;
    --m-nav-icon-size: 28px;
    --m-nav-box-gap: 8px;

    .title {
      font-size: 14px;
    }
  }
}

.nav-popup-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
}

.nav-popup-modal {
  width: 100%;
  max-width: 360px;
  max-height: 80vh;
  overflow-y: auto;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06);
}

.nav-popup-drag {
  display: none;
}

.nav-popup-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 18px;
  border-bottom: 1px solid var(--vp-c-divider);

  .popup-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: var(--vp-c-default-soft);
    flex-shrink: 0;
    :deep(img) {
      border-radius: 4px;
      width: 20px;
    }
    :deep(svg) {
      width: 20px;
      fill: currentColor;
    }
  }

  .popup-info {
    flex: 1;
    min-width: 0;
  }

  .popup-title {
    font-size: 15px;
    font-weight: 700;
    color: var(--vp-c-text-1);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .popup-desc {
    font-size: 12px;
    color: var(--vp-c-text-2);
    margin-top: 1px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.popup-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  font-size: 18px;
  line-height: 1;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  border: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.25s;
  &:hover {
    color: var(--vp-c-danger);
    background: rgba(239, 68, 68, 0.1);
  }
}

.nav-popup-body {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px;
}

.domain-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  transition: all 0.25s;
  text-decoration: none;
  color: inherit;
  &:hover {
    background: var(--vp-c-brand-dimm);
    transform: translateX(3px);
  }
  &--primary {
    background: var(--vp-c-brand-dimm);
    &:hover {
      filter: brightness(0.95);
    }
  }

  .dl-text {
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
    flex: 1;
  }

  .dl-label {
    font-size: 14px;
    font-weight: 600;
    color: var(--vp-c-text-1);
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .dl-url {
    font-size: 12px;
    color: var(--vp-c-text-2);
    font-family: var(--vp-font-family-mono);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dl-arrow {
    color: var(--vp-c-text-3);
    font-size: 15px;
    transition: all 0.25s;
    flex-shrink: 0;
  }
  &:hover .dl-arrow {
    color: var(--vp-c-brand-1);
    transform: translateX(2px);
  }
}

.dl-tag {
  display: inline-flex;
  align-items: center;
  font-size: 10px;
  font-weight: 600;
  padding: 1px 6px;
  border-radius: 4px;
  line-height: 1.5;

  &--primary {
    color: var(--vp-c-brand-1);
    background: var(--vp-c-brand-dimm);
  }
  &--mirror {
    color: #425ae0;
    background: rgba(66, 90, 224, 0.08);
  }
  &--mobile {
    color: #f59e0b;
    background: rgba(245, 158, 11, 0.12);
  }
  &--publish {
    color: #8b5cf6;
    background: rgba(139, 92, 246, 0.1);
  }
  &--github {
    color: #fff;
    background: #24292f;
  }
  &--cloud {
    color: #0ea5e9;
    background: rgba(14, 165, 233, 0.1);
  }
}

.nav-popup-enter-active,
.nav-popup-leave-active {
  transition: opacity 0.28s ease;
  .nav-popup-modal {
    transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  }
}
.nav-popup-enter-from,
.nav-popup-leave-to {
  opacity: 0;
  .nav-popup-modal {
    transform: scale(0.9) translateY(16px);
  }
}

@media (max-width: 768px) {
  .nav-popup-overlay {
    align-items: flex-end;
    padding: 0;
  }
  .nav-popup-modal {
    max-width: none;
    max-height: 70vh;
    border-radius: 12px 12px 0 0;
  }
  .nav-popup-drag {
    display: block;
    width: 36px;
    height: 4px;
    background: var(--vp-c-divider);
    border-radius: 2px;
    margin: 8px auto 0;
  }
  .nav-popup-enter-from .nav-popup-modal,
  .nav-popup-leave-to .nav-popup-modal {
    transform: translateY(100%);
  }
  .nav-popup-enter-to .nav-popup-modal,
  .nav-popup-leave-from .nav-popup-modal {
    transform: translateY(0);
  }

  .domain-link {
    padding: 14px;
    .dl-label {
      font-size: 15px;
    }
  }
}
</style>
