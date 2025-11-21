<template>
  <div :class="n.b()">
    <Loading :class="n.e('loading')" />
  </div>
</template>

<script setup>
import { useSettingStore } from '~/store'
const n = useNamespace('home')
const { state } = useSettingStore()
useHead({
  title: `首页 - ${state.value.websiteSetting?.title}`,
})
</script>

<style lang="scss" scoped>
@use '~/assets/sass/bem.scss' as *;
@include b(home) {
  @include e(loading) {
    margin: 0 auto;
  }
}
</style>
