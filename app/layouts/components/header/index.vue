<template>
  <div :class="[n.b(), n.is('hide', hide)]">
    <NuxtLink
      v-for="menu in menus"
      :key="menu.path"
      :to="menu.path"
      :title="menu.name">
      {{ menu.name }}
    </NuxtLink>
  </div>
</template>

<script setup>
const n = useNamespace('header')

const menus = [
  { name: '首页', path: '/' },
  { name: '文章', path: '/article' },
  { name: '日记', path: '/diary' },
  { name: '留言板', path: '/message' },
  { name: '时间线', path: '/timeline' },
  { name: '关于我', path: '/about' },
  { name: '控制台', path: '/console' },
]

const hide = ref(false)

const handleScroll = () => {
  const { scrollY } = window
  hide.value = scrollY > 400
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
@use '~/assets/sass/bem.scss' as *;
@include b(header) {
  position: sticky;
  top: 0;
  height: var(--header-height);
  transition: transform .2s;
  @include when(hide) {
    transform: translate(0, -100%);
  }
}
</style>
