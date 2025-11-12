<template>
  <footer :class="n.b()">footer</footer>
</template>

<script setup>
const n = useNamespace('footer')
</script>

<style lang="scss" scoped>
@use '~/assets/sass/bem.scss' as *;
@include b(footer) {
  height: var(--footer-height);
}
</style>
