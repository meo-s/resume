<script setup lang="ts">
import { ref, type Component, type VueElement, watchEffect } from 'vue'

const props = defineProps<{
  icon: Component
  url: string
  level: number
}>()

const className = ref('')

watchEffect(() => (className.value = 'lv' + (props.level ?? 0)))
</script>

<template>
  <a :class="className" :href="url" target="_blank"><component :is="icon"></component></a>
</template>

<style scoped lang="scss">
@keyframes tilt-n-move-shaking {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(2px, 2px) rotate(5deg);
  }
  50% {
    transform: translate(0, 0) rotate(0eg);
  }
  75% {
    transform: translate(-2px, 2px) rotate(-5deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}

@keyframes jump-shaking {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateY(-4px);
  }
  35% {
    transform: translateY(-4px) rotate(12deg);
  }
  55% {
    transform: translateY(-4px) rotate(-12deg);
  }
  65% {
    transform: translateY(-4px) rotate(12deg);
  }
  75% {
    transform: translateY(-4px) rotate(-12deg);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}

img {
  .lv1 & {
    height: $font-size-lv1;
    @include small {
      height: $font-size-lv1-sm;
    }
  }

  .lv2 & {
    height: $font-size-lv2;
    @include small {
      //   height: $font-size-lv2-sm;
    }
  }

  .lv3 & {
    height: $font-size-lv3;
    padding-top: 6px;

    @include small {
      height: $font-size-lv3-sm;
    }
  }

  :hover > & {
    animation: 0.6s jump-shaking infinite;
  }
}
</style>
