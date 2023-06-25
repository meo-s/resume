<script setup lang="ts">
import Content from '../components/Content.vue'
import TwoColumnLayout from '../components/TwoColumnLayout.vue'
</script>

<template>
  <content :level="2">
    <template #title>Work Experience.</template>

    <two-column-layout>
      <template #left-side>
        <content :level="3">
          <template #title>
            Internship<br />
            한국전자통신연구원
          </template>

          <template #subtitle>
            연구연구생<br />
            2022.07.01 - 2022.08.31
          </template>
        </content>
      </template>

      <template #right-side>
        <content :level="4">
          <template #title>쿠버네티스 권환 관리 프로젝트</template>

          <content :level="5">
            <template #title>개요</template>
          </content>

          <content :level="5">
            <template #title>수행 업무</template>
          </content>

          <content :level="5">
            <template #title>Tech Stack</template>

            <template #text-content> Kubernetes, Docker, client-go, grpc, MongoDB </template>
          </content>
        </content>
      </template>
    </two-column-layout>
  </content>
</template>
