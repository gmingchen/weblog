<template>
  <div :class="n.b()">
    index
  </div>
</template>

<script setup>
const n = useNamespace('home')

const { WEBSIDE_TITLE, WEBSIDE_DESCRIPTION, WEBSIDE_KEYWORDS } = useRuntimeConfig().public
useHead({
  title: `首页 - ${WEBSIDE_TITLE}`,
  meta: [
    { name: 'description', content: WEBSIDE_DESCRIPTION },
    { name: 'keywords', content: WEBSIDE_KEYWORDS },
  ],
  htmlAttrs: {
    lang: 'zh-CN',
  }
})
</script>

<style lang="scss" scoped>
@use '~/assets/sass/bem.scss' as *;
@include b(a) {
  // cursor: url('~/assets/images/image.png'), auto;
}
</style>
