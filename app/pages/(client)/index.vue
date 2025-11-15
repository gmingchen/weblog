<template>
  <div :class="n.b()">
    client
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
