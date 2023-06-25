<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const props = defineProps<{
  level: number
}>()

const titleClassNames = ref<string[]>([])

watchEffect(() => (titleClassNames.value = ['h' + props.level]))
</script>

<template>
  <div :class="titleClassNames">
    <span class="headnote"><slot name="title-headnote" /></span>
    <slot name="title" />
  </div>
  <p class="subtitle"><slot name="subtitle" /></p>
  <p><slot name="text-content" /></p>
  <slot />
</template>

<style lang="scss" scoped>
.h2 {
  font-size: 40px;
  font-weight: 600;
  margin: 48px 0 32px 0;
}

.h3 {
  font-weight: 600;
  font-size: 26px;
  margin: 0 0 18px;

  span:first-of-type {
    font-size: 18px;
  }

  @include small {
    margin-bottom: 12px;
  }

  > .headnote {
    font-size: 18px;
  }

  + .subtitle {
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 24px;

    @include small {
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 28px;
    }
  }
}

.h4 {
  font-size: 26px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 8px;

  @include small {
    font-size: 20px;
  }
}

.h5 {
  font-size: 22px;
  font-weight: 600;
  margin: 16px 0 4px 0;

  @include small {
    font-size: 18px;
  }
}

p {
  margin-top: 6px;
  font-size: 18px;
  line-height: 22px;
  text-align: justify;

  @include small {
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
