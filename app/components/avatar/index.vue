<template>
  <div :class="n.b()" :style="style">
    <div :class="n.e('wrap')">
      <NuxtImg :class="n.e('image')" :src="src" />
    </div>
  </div>
</template>

<script setup>
const n = useNamespace('avatar')

const props = defineProps({
  src: {
    type: String,
    default: () => '/images/avatar/avatar.png',
  },
  size: {
    type: String,
    default: () => '100px',
  },
})

const style = computed(() => ({
  '--size': props.size,
}))
</script>

<style lang="scss" scoped>
@use '@/assets/sass/bem.scss' as *;
$prefix: #{$namespace}-avatar#{$element-separator};

@include b(avatar) {
  --size: ;
  --space: 50px;
  --border-width: calc(var(--size) / 100);

  width: var(--size);
  height: var(--size);
  position: relative;

  @include e(wrap) {
    padding-top: var(--space);
    border-radius: 999px;
    overflow: hidden;
    position: absolute;
    top: calc(0px - var(--space));
    transition: all 0.5s;
    cursor: pointer;
    
    &::before,
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      top: var(--space);
      border-style: solid;
      border-color: var(--avatar-border-color);
      border-radius: 50%;
      z-index: 0;
    }
    &::before {
      border-bottom-width: var(--border-width);
      z-index: 2;
    }
    &::after {
      border-width: var(--border-width);
      background-color: var(--avatar-background-color);
    }
  }
  @include e(image) {
    position: relative;
    z-index: 1;
    transition: all 0.5s;
  }

  &:hover {
    .#{$prefix}wrap {
      transform: scale(0.9);
    }
    .#{$prefix}image {
      transform: scale(1.35);
    }
  }
}
</style>
