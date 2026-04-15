<script setup>
import FeatureCards from '../components/FeatureCards.vue'
import HeroMetrics from '../components/HeroMetrics.vue'
import MatchingMockup from '../components/MatchingMockup.vue'
import OutcomeStats from '../components/OutcomeStats.vue'
import ScenarioSteps from '../components/ScenarioSteps.vue'
import { matchingCenter } from '../data/platformContent'
</script>

<template>
  <section class="page">
    <div class="container page-grid">
      <HeroMetrics
        :eyebrow="matchingCenter.hero.eyebrow"
        :headline="matchingCenter.hero.headline"
        :subheadline="matchingCenter.hero.subheadline"
        :description="matchingCenter.hero.description"
        :badges="['多维标签', '候选卡片', '推荐解释']"
        :stats="matchingCenter.outcomes.stats"
      />

      <div class="two-col">
        <MatchingMockup
          :eyebrow="matchingCenter.mockup.eyebrow"
          :title="matchingCenter.mockup.title"
          :demand-title="matchingCenter.mockup.demandTitle"
          :demand-tags="matchingCenter.mockup.demandTags"
          :candidates="matchingCenter.mockup.candidates"
        />
        <FeatureCards
          :eyebrow="matchingCenter.features.eyebrow"
          :title="matchingCenter.features.title"
          :cards="matchingCenter.features.cards"
          compact
        />
      </div>

      <ScenarioSteps
        :eyebrow="matchingCenter.scenario.eyebrow"
        :title="matchingCenter.scenario.title"
        :steps="matchingCenter.scenario.steps"
      />

      <OutcomeStats
        :eyebrow="matchingCenter.outcomes.eyebrow"
        :title="matchingCenter.outcomes.title"
        :stats="matchingCenter.outcomes.stats"
      />
    </div>
  </section>
</template>
