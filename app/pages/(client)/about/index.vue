<template>
  <div :class="n.b()">about</div>
</template>

<script setup>
const n = useNamespace('about')
</script>

<style lang="scss" scoped>
@use '@/assets/sass/bem.scss' as *;
@include b(about) {
}
</style>
