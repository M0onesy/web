<script setup>
import FeatureCards from '../components/FeatureCards.vue'
import HeroMetrics from '../components/HeroMetrics.vue'
import MobileMockup from '../components/MobileMockup.vue'
import OutcomeStats from '../components/OutcomeStats.vue'
import ScenarioSteps from '../components/ScenarioSteps.vue'
import { silverWorkspace } from '../data/platformContent'
</script>

<template>
  <section class="page">
    <div class="container page-grid">
      <HeroMetrics
        :eyebrow="silverWorkspace.hero.eyebrow"
        :headline="silverWorkspace.hero.headline"
        :subheadline="silverWorkspace.hero.subheadline"
        :badges="['轻操作', '语音优先', '经验沉淀']"
        :stats="silverWorkspace.outcomes.stats"
      />

      <div class="two-col">
        <MobileMockup
          :eyebrow="silverWorkspace.mockup.eyebrow"
          :title="silverWorkspace.mockup.title"
          :phone-title="silverWorkspace.mockup.phoneTitle"
          :summary="silverWorkspace.mockup.summary"
          :modules="silverWorkspace.mockup.modules"
          :footer-tags="silverWorkspace.mockup.footerTags"
        />
        <FeatureCards
          :eyebrow="silverWorkspace.features.eyebrow"
          :title="silverWorkspace.features.title"
          :cards="silverWorkspace.features.cards"
          compact
        />
      </div>

      <ScenarioSteps
        :eyebrow="silverWorkspace.scenario.eyebrow"
        :title="silverWorkspace.scenario.title"
        :steps="silverWorkspace.scenario.steps"
      />

      <OutcomeStats
        :eyebrow="silverWorkspace.outcomes.eyebrow"
        :title="silverWorkspace.outcomes.title"
        :stats="silverWorkspace.outcomes.stats"
      />
    </div>
  </section>
</template>
