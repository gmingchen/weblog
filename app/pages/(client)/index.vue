<template>
  <div :class="n.b()">
    首页
    <NuxtPage />
  </div>
</template>

<script setup>
const n = useNamespace('client')
</script>

<style lang="scss" scoped>
@use '~/assets/sass/bem.scss' as *;
@include b(client) {
}
</style>
