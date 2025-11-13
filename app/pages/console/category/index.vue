<template>
  <div :class="n.b()">category</div>
</template>

<script setup>
const n = useNamespace('category')
</script>

<style lang="scss" scoped>
@use '@/assets/sass/bem.scss' as *;
@include b(category) {
}
</style>
