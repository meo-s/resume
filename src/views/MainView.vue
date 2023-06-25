<script lang="ts" setup>
import { ref } from 'vue'
import Typer from '../components/Typer.vue'
import EducationSection from '@/sections/EducationSection.vue'
import OtherExperiencesSection from '@/sections/OtherExperiencesSection.vue'
import WorkExperienceSection from '@/sections/WorkExperienceSection.vue'

const h1Content = `안녕하세요,\n저는 기대성입니다.`
const h1Rendered = ref<boolean>()

const summary = ``
const summaryRendered = ref<boolean>()
</script>

<template>
  <div class="container">
    <h1>
      <typer
        :text="h1Content"
        :type-delay="60"
        :pre-type-delay="1000"
        @done="() => (h1Rendered = true)"
      ></typer>
    </h1>
    <p class="summary" v-if="h1Rendered">
      <typer
        :text="summary"
        :type-delay="30"
        :pre-type-delay="100"
        :hide-caret="true"
        @done="() => (summaryRendered = true)"
      ></typer>
    </p>

    <transition>
      <div v-if="summaryRendered">
        <work-experience-section />
        <education-section />
        <other-experiences-section />
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 48em;

  @include small {
    margin: 0 4%;
  }

  @media all and (838px < width) {
    margin: auto;
  }
}

h1 {
  font-size: $font-size-lv1;
  line-height: 5rem;
  margin: 0;
  margin-bottom: 36px;
  padding-top: 4rem;

  @include small {
    font-size: $font-size-lv1-sm;
    line-height: 3.6rem;
  }

  * {
    font-weight: 700 !important;
  }
}

.summary {
  font-family: $font-base;
  font-size: 22px;
  line-height: 32px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
  transition-delay: 0.3s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
