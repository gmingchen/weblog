<template>
  <div :class="n.b()">
    console
    <NuxtPage />
  </div>
</template>

<script setup>
const n = useNamespace('console')
</script>

<style lang="scss" scoped>
@use '@/assets/sass/bem.scss' as *;
@include b(console) {
}
</style>
