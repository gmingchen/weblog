<template>
  <div :class="n.b()">
    <div v-for="item in 36" :key="item" :class="n.e('item')" />
  </div>
</template>

<script setup>
const n = useNamespace('ball')
</script>

<style lang="scss" scoped>
@use '@/assets/sass/bem.scss' as *;
$prefix: #{$namespace}-ball#{$element-separator};

$containerSize: 150px;
$ballSize: 10px;
$ballCount: 36;
$rotate: 360deg / #{$ballCount};
$duration: 1.5s;

@keyframes blackMove {
  0% {
    animation-timing-function: ease-in;
  }
  25% {
    transform: translate3d(0, 100%, $ballSize);
    animation-timing-function: ease-out;
  }
  50% {
    transform: translate3d(0, 200%, 0);
    animation-timing-function: ease-in;
  }
  75% {
    transform: translate3d(0, 100%, calc(0px - $ballSize));
    animation-timing-function: ease-out;
  }
}
@keyframes whiteMove {
  0% {
    animation-timing-function: ease-in;
  }
  25% {
    transform: translate3d(0, -100%, calc(0px - $ballSize));
    animation-timing-function: ease-out;
  }
  50% {
    transform: translate3d(0, -200%, 0);
    animation-timing-function: ease-in;
  }
  75% {
    transform: translate3d(0, -100%, $ballSize);
    animation-timing-function: ease-out;
  }
}

@include b(ball) {
  width: $containerSize;
  height: $containerSize;
  position: relative;

  @include e(item) {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: calc((0px - $ballSize) / 2);
    margin-left: calc((0px - $ballSize) / 2);
    width: $ballSize;
    height: $ballSize;
    border-radius: 50%;
    perspective: 70px;
    transform-style: preserve-3d;

    &::before, 
    &::after {
      content: '';
      position: absolute;
      top: $ballSize;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    &::before {
      background-color: black;
      top: -100%;
      animation: blackMove $duration linear infinite;
    }
    &::after {
      background-color: white;
      top: 100%;
      animation: whiteMove $duration linear infinite;
    }
  }

  @for $i from 1 through $ballCount {
    .#{$prefix}item:nth-child(#{$i}) {
      transform: rotate(calc($rotate * #{$i})) translateY(calc(0px - $containerSize / 2));
      &::before,
      &::after {
        animation-delay: calc(0s - ($duration / $ballCount * #{$i} * 6));
      }
    }
  }
}
</style>
