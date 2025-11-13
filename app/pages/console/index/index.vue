<template>
  <div :class="n.b()">home</div>
</template>

<script setup>
const n = useNamespace('home')
</script>

<style lang="scss" scoped>
@use '~/assets/sass/bem.scss' as *;
@include b(home) {
}
</style>
