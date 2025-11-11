<template>
  <div :class="n.b()">b</div>
</template>

<script setup>
const n = useNamespace('b')
</script>

<style lang="scss" scoped>
@use '@/assets/sass/bem.scss' as *;
@include b(b) {
}
</style>
