<template>
  <div :class="n.b()">article</div>
</template>

<script setup>
const n = useNamespace('article')
</script>

<style lang="scss" scoped>
@use '@/assets/sass/bem.scss' as *;
@include b(article) {
}
</style>
