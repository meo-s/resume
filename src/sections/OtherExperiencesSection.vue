<script setup lang="ts">
import Content from '../components/Content.vue'
import Divider from '../components/Divider.vue'
import IconExternalLink from '@/components/icons/IconExternalLink.vue'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconLink from '@/components/IconLink.vue'
</script>

<template>
  <content :level="2">
    <template #title>Other Experiences.</template>

    <content :level="3">
      <template #title-headnote>교내활동<br /></template>
      <template #title>
        2022 캡스톤디자인 작품 전시 및 발표회
        <icon-link
          :icon="IconGithub"
          :level="3"
          url="https://github.com/meo-s/mobility-model-simulator"
        />
      </template>
      <template #subtitle>금상 입상<br />2022.06.14</template>
    </content>

    <divider />

    <content :level="3">
      <template #title-headnote>교내활동<br /></template>
      <template #title>
        개척학기제 성과 발표회
        <icon-link
          :icon="IconExternalLink"
          :level="3"
          url="https://www.gnu.ac.kr/main/na/ntt/selectNttInfo.do?mi=1126&nttSn=2002789"
        />
      </template>
      <template #subtitle>최우수상 입상<br />2021.08.05</template>

      <template #text-content>
        개척학기제는 경상국립대학교에서 운영되는 특별한 제도로, 정규학기 중 개인 또는 2-3명의 학생이
        팀을 구성하여 스스로 과제 계획을 수립 및 수행하여 소정의 학점을 인정받을 수 있는 제도입니다.
        2021-1학기에 "CLAIRVOYANT"을 팀으로 개척학기제에 참여하였으며, 학기 종료 후 개최된 성과
        발표회에서 프로젝트 수행 내역의 우수성을 인정 받아 최우수상에 입상할 수 있었습니다.
      </template>
    </content>

    <divider />

    <content :level="3">
      <template #title>2021 한국컴퓨터종합학술대회</template>
      <template #subtitle>우수논문상 입상<br />2021.06.24</template>
    </content>

    <divider />

    <content :level="3">
      <template #title>2021 USG AI 데이터 문제해결 제조혁신 경진대회</template>
      <template #subtitle>최우수상 입상<br />2021.05.26</template>
    </content>

    <divider />

    <content :level="3">
      <template #title>Intel Korea와 함께하는 사물인식+드론 경진대회</template>
      <template #subtitle>동상 입상<br />2020.12.21 - 2020.12.23</template>
    </content>
  </content>
</template>
