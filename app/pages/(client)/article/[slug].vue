<template>
  <div :class="n.b()">article-details-{{ slug }}</div>
</template>

<script setup>
const n = useNamespace('article-details')

const route = useRoute()
const { slug } = route.params

</script>

<style lang="scss" scoped>
@use '@/assets/sass/bem.scss' as *;
@include b(article-details) {
}
</style>
