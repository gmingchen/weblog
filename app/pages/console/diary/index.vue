<template>
  <div :class="n.b()">diary</div>
</template>

<script setup>
const n = useNamespace('diary')
</script>

<style lang="scss" scoped>
@use '@/assets/sass/bem.scss' as *;
@include b(diary) {
}
</style>
