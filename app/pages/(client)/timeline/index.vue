<template>
  <div :class="n.b()">timeline</div>
</template>

<script setup>
const n = useNamespace('timeline')
</script>

<style lang="scss" scoped>
@use '@/assets/sass/bem.scss' as *;
@include b(timeline) {
}
</style>
