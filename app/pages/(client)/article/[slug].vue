<template>
  <div :class="n.b()">article-details</div>
</template>

<script setup>
const n = useNamespace('article-details')
</script>

<style lang="scss" scoped>
@use '@/assets/sass/bem.scss' as *;
@include b(article-details) {
}
</style>
