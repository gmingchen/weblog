<template>
  <div :class="n.b()">
    <Avatar size="500px" />
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
@include b(a) {
  // cursor: url('~/assets/images/image.png'), auto;
}
</style>
