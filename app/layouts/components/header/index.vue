<template>
  <div :class="[n.b(), n.is('hide', hide)]">header</div>
</template>

<script setup>
const n = useNamespace('header')

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
@use '@/assets/sass/bem.scss' as *;
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
