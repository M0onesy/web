<script setup>
import FeatureCards from '../components/FeatureCards.vue'
import HeroMetrics from '../components/HeroMetrics.vue'
import OutcomeStats from '../components/OutcomeStats.vue'
import TrustFlow from '../components/TrustFlow.vue'
import { trustSystem } from '../data/platformContent'
</script>

<template>
  <section class="page">
    <div class="container page-grid">
      <HeroMetrics
        :eyebrow="trustSystem.hero.eyebrow"
        :headline="trustSystem.hero.headline"
        :subheadline="trustSystem.hero.subheadline"
        :description="trustSystem.hero.description"
        :badges="['存证机制', '权限边界', '风控引擎']"
        :stats="trustSystem.outcomes.stats"
      />

      <FeatureCards
        :eyebrow="trustSystem.architecture.eyebrow"
        :title="trustSystem.architecture.title"
        :cards="trustSystem.architecture.cards"
      />

      <div class="two-col">
        <TrustFlow
          :eyebrow="trustSystem.flow.eyebrow"
          :title="trustSystem.flow.title"
          :steps="trustSystem.flow.steps"
        />
        <FeatureCards
          :eyebrow="trustSystem.modules.eyebrow"
          :title="trustSystem.modules.title"
          :cards="trustSystem.modules.cards"
          compact
        />
      </div>

      <OutcomeStats
        :eyebrow="trustSystem.outcomes.eyebrow"
        :title="trustSystem.outcomes.title"
        :stats="trustSystem.outcomes.stats"
      />
    </div>
  </section>
</template>

