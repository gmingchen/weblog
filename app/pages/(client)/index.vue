<template>
  <div :class="n.b()">
    首页    <Icon name="i-costom-bug" />
    <NuxtPage />
  </div>
</template>

<script setup>
const n = useNamespace('index')
</script>

<style lang="scss" scoped>
@use '@/assets/sass/bem.scss' as *;
@include b(index) {
}
</style>
