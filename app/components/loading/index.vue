<template>
  <div :class="n.b()">
    <Ball />
  </div>
</template>

<script setup>
import Ball from './ball.vue'
const n = useNamespace('loading')
</script>

<style lang="scss" scoped>
@use '@/assets/sass/bem.scss' as *;
$prefix: #{$namespace}loading#{$element-separator};
@include b(loading) {
  width: fit-content;
}
</style>
