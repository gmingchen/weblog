<template>
  <div :class="n.b()">tag</div>
</template>

<script setup>
const n = useNamespace('tag')
</script>

<style lang="scss" scoped>
@use '@/assets/sass/bem.scss' as *;
@include b(tag) {
}
</style>
