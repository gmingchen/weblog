<template>
  <div :class="n.b()">message</div>
</template>

<script setup>
const n = useNamespace('message')
</script>

<style lang="scss" scoped>
@use '@/assets/sass/bem.scss' as *;
@include b(message) {
}
</style>
