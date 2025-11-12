<template>
  <div :class="n.b()">
    <Header />
    <main :class="n.e('main')">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { Header, Footer } from '../components'
const n = useNamespace('layout')
</script>

<style lang="scss" scoped>
@use '~/assets/sass/bem.scss' as *;
@include b(layout) {
  --height: 100vh;
  min-height: var(--height);
  @include e(main) {
    min-height: calc(var(--height) - var(--header-height) - var(--footer-height));
    border: 1px solid green;
  }
}
</style>

