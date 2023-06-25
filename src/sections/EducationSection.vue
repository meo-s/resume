<script setup lang="ts">
import Divider from '../components/Divider.vue'
import Content from '../components/Content.vue'
</script>

<template>
  <content :level="2">
    <template #title> Education. </template>

    <content :level="3">
      <template #title>삼성 청년 SW 아카데미</template>
      <template #subtitle>1학기 코딩 집중 과정 수료<br />2023.01.04 - 2023.05.26</template>
    </content>

    <divider />

    <content :level="3">
      <template #title>경상국립대학교</template>
      <template #subtitle>항공우주 및 소프트웨어공학부<br />2017.03 - 2023.02</template>
    </content>
  </content>
</template>
