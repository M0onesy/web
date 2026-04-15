<script setup>
import DashboardMockup from '../components/DashboardMockup.vue'
import FeatureCards from '../components/FeatureCards.vue'
import HeroMetrics from '../components/HeroMetrics.vue'
import OutcomeStats from '../components/OutcomeStats.vue'
import ScenarioSteps from '../components/ScenarioSteps.vue'
import { enterpriseWorkspace, homepage } from '../data/platformContent'
</script>

<template>
  <section class="page">
    <div class="container page-grid">
      <HeroMetrics
        :eyebrow="homepage.hero.eyebrow"
        :headline="homepage.hero.headline"
        :subheadline="homepage.hero.subheadline"
        :description="homepage.hero.description"
        :badges="homepage.hero.badges"
        :stats="homepage.hero.stats"
        :actions="homepage.hero.actions"
      />

      <FeatureCards
        :eyebrow="homepage.roles.eyebrow"
        :title="homepage.roles.title"
        :description="homepage.roles.description"
        :cards="homepage.roles.cards"
        compact
      />

      <div class="two-col">
        <DashboardMockup
          :eyebrow="enterpriseWorkspace.mockup.eyebrow"
          :title="'平台主控界面预览：协同任务、候选推荐与结果回流在一套系统里统一可见'"
          :menu="enterpriseWorkspace.mockup.menu"
          :stats="enterpriseWorkspace.mockup.stats"
          :task-rows="enterpriseWorkspace.mockup.taskRows"
        />
        <div class="section-card accent-panel">
          <div class="block-head">
            <p class="kicker">模块入口</p>
            <h2>{{ homepage.modules.title }}</h2>
            <p class="support-text">{{ homepage.modules.description }}</p>
          </div>
          <div class="portal-grid">
            <RouterLink v-for="item in homepage.modules.cards" :key="item.to" :to="item.to" class="portal-link">
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </RouterLink>
          </div>
        </div>
      </div>

      <ScenarioSteps
        :eyebrow="homepage.journey.eyebrow"
        :title="homepage.journey.title"
        :steps="homepage.journey.steps"
      />

      <OutcomeStats
        :eyebrow="homepage.outcomes.eyebrow"
        :title="homepage.outcomes.title"
        :stats="homepage.outcomes.stats"
      />
    </div>
  </section>
</template>
