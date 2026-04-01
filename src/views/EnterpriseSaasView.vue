<script setup>
import DashboardMockup from '../components/DashboardMockup.vue'
import FeatureCards from '../components/FeatureCards.vue'
import HeroMetrics from '../components/HeroMetrics.vue'
import OutcomeStats from '../components/OutcomeStats.vue'
import { enterpriseWorkspace } from '../data/platformContent'
</script>

<template>
  <section class="page">
    <div class="container page-grid">
      <HeroMetrics
        :eyebrow="enterpriseWorkspace.hero.eyebrow"
        :headline="enterpriseWorkspace.hero.headline"
        :subheadline="enterpriseWorkspace.hero.subheadline"
        :badges="['结构化需求', '候选推荐', '任务看板', '数据复盘']"
        :stats="enterpriseWorkspace.outcomes.stats"
      />

      <DashboardMockup
        :eyebrow="enterpriseWorkspace.mockup.eyebrow"
        :title="enterpriseWorkspace.mockup.title"
        :menu="enterpriseWorkspace.mockup.menu"
        :stats="enterpriseWorkspace.mockup.stats"
        :task-rows="enterpriseWorkspace.mockup.taskRows"
      />

      <FeatureCards
        :eyebrow="enterpriseWorkspace.features.eyebrow"
        :title="enterpriseWorkspace.features.title"
        :cards="enterpriseWorkspace.features.cards"
      />

      <OutcomeStats
        :eyebrow="enterpriseWorkspace.outcomes.eyebrow"
        :title="enterpriseWorkspace.outcomes.title"
        :stats="enterpriseWorkspace.outcomes.stats"
      />
    </div>
  </section>
</template>
