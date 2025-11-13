<template>
  <div :class="n.b()">diary-detail</div>
</template>

<script setup>
import { useNamespace } from '@/hooks';
const n = useNamespace('diary-detail')
</script>

<style lang="scss" scoped>
@use '@/assets/sass/bem.scss' as *;
@include b(diary-detail) {
}
</style>
