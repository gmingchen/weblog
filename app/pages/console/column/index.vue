<template>
  <div :class="n.b()">column</div>
</template>

<script setup>
const n = useNamespace('column')
</script>

<style lang="scss" scoped>
@use '@/assets/sass/bem.scss' as *;
@include b(column) {
}
</style>
