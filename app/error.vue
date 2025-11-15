<template>
  <div :class="n.b()">
    {{ error }}
  </div>
</template>

<script setup>
const n = useNamespace('error')

defineProps({
  error: {
    type: Object,
    required: true
  },
})
</script>

<style lang="scss" scoped>
@use '@/assets/sass/bem.scss' as *;
$prefix: #{$namespace}-error#{$element-separator};
@include b(error) {
}
</style>
