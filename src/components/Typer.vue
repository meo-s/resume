<script setup lang="ts">
import { onMounted, onUnmounted, ref, watchEffect } from 'vue'
import { decomposeHangul, composeHangul } from '@/hangul'

const props = defineProps<{
  text: string
  preTypeDelay: number
  typeDelay: number
  hideCaret?: boolean
  hideCaretAfterRendering?: boolean
}>()

const emits = defineEmits<{
  (type: 'done'): void
}>()

const renderedText = ref('')
let showCaret = ref(!props.hideCaret)
let consumedChars = 0
let consumedParts = 0
let timerId = NaN

watchEffect(() => (showCaret.value = !props.hideCaret))

function tick() {
  if (props.text.length <= consumedChars) {
    fini()
    emits('done')
    if (props.hideCaretAfterRendering) {
      showCaret.value = false
    }
    return
  }

  const hangul = decomposeHangul(props.text[consumedChars])
  let onTypingChar = ''

  if (hangul === null) {
    ++consumedChars
  } else {
    if (++consumedParts == hangul.length) {
      ++consumedChars
      consumedParts = 0
    } else {
      if (consumedParts === 1) {
        onTypingChar = composeHangul(hangul[0])
      } else {
        onTypingChar = composeHangul(hangul[0], hangul[1])
      }
    }
  }

  renderedText.value = props.text.slice(0, consumedChars).replace(/\n/g, '<br/>') + onTypingChar
}

function init() {
  timerId = setInterval(tick, props.typeDelay)
}

function fini() {
  if (!isNaN(timerId)) {
    clearInterval(timerId)
    timerId = NaN
  }
}

onMounted(() => {
  if (props.preTypeDelay === 0) {
    init()
  } else {
    setTimeout(init, props.preTypeDelay)
  }
})

onUnmounted(fini)
</script>

<template>
  <span v-html="renderedText"></span><span class="caret" v-if="showCaret"> </span>
</template>

<style lang="scss" scoped>
@keyframes blink {
  0% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }

  60% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

span {
  font-family: $font-base;
}

.caret {
  animation: 1s blink 0s infinite;
  background-color: #2f2f2f;
  margin-left: 4px;
}
</style>
