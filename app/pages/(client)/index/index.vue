<template>
  <div :class="n.b()">
    index
  </div>
</template>

<script setup>
import { useSetting } from '@/store'
const n = useNamespace('a')

const { setting } = useSetting()

const value = ref('')


const onChange = (e) => {
  console.log(e)
}

</script>

<style lang="scss" scoped>
@use '@/assets/sass/bem.scss' as *;
@include b(a) {
}
</style>
