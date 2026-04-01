<script setup>
import FeatureCards from '../components/FeatureCards.vue'
import HeroMetrics from '../components/HeroMetrics.vue'
import OutcomeStats from '../components/OutcomeStats.vue'
import TimelineMockup from '../components/TimelineMockup.vue'
import { collaborationCenter } from '../data/platformContent'
</script>

<template>
  <section class="page">
    <div class="container page-grid">
      <HeroMetrics
        :eyebrow="collaborationCenter.hero.eyebrow"
        :headline="collaborationCenter.hero.headline"
        :subheadline="collaborationCenter.hero.subheadline"
        :badges="['任务流', '成长记录', '积分激励']"
        :stats="collaborationCenter.outcomes.stats"
      />

      <div class="two-col">
        <TimelineMockup
          :eyebrow="collaborationCenter.mockup.eyebrow"
          :title="collaborationCenter.mockup.title"
          :stages="collaborationCenter.mockup.stages"
          :widgets="collaborationCenter.mockup.widgets"
        />
        <FeatureCards
          :eyebrow="collaborationCenter.features.eyebrow"
          :title="collaborationCenter.features.title"
          :cards="collaborationCenter.features.cards"
          compact
        />
      </div>

      <OutcomeStats
        :eyebrow="collaborationCenter.outcomes.eyebrow"
        :title="collaborationCenter.outcomes.title"
        :stats="collaborationCenter.outcomes.stats"
      />
    </div>
  </section>
</template>
