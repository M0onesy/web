<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: '',
  },
  headline: {
    type: String,
    required: true,
  },
  subheadline: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  badges: {
    type: Array,
    default: () => [],
  },
  stats: {
    type: Array,
    default: () => [],
  },
  actions: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="hero-metrics">
    <div class="hero-copy">
      <p v-if="eyebrow" class="hero-eyebrow">{{ eyebrow }}</p>
      <h1>{{ headline }}</h1>
      <p v-if="subheadline" class="hero-subheadline">{{ subheadline }}</p>
      <p v-if="description" class="hero-description">{{ description }}</p>

      <div v-if="actions.length" class="hero-actions">
        <RouterLink v-for="action in actions" :key="action.to" :to="action.to" class="hero-action">
          {{ action.label }}
        </RouterLink>
      </div>

      <div v-if="badges.length" class="hero-badges">
        <span v-for="badge in badges" :key="badge" class="hero-badge">{{ badge }}</span>
      </div>
    </div>

    <div class="hero-stats panel-surface">
      <article v-for="stat in stats" :key="stat.label" class="hero-stat-card">
        <p class="hero-stat-value">{{ stat.value }}</p>
        <h3>{{ stat.label }}</h3>
        <p>{{ stat.desc }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.hero-metrics {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
  gap: 1rem;
  align-items: stretch;
}

.hero-copy {
  padding: 2.4rem 0 1rem;
}

.hero-eyebrow {
  margin: 0 0 0.7rem;
  color: #8dcfbe;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.76rem;
  font-family: 'Space Grotesk', 'Noto Sans SC', sans-serif;
}

.hero-subheadline,
.hero-description {
  margin: 1rem 0 0;
  max-width: 820px;
  color: rgba(231, 238, 243, 0.82);
  line-height: 1.82;
}

.hero-subheadline {
  font-size: clamp(1rem, 1.8vw, 1.18rem);
}

.hero-description {
  color: rgba(224, 235, 241, 0.7);
  font-size: 0.98rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.4rem;
}

.hero-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0.8rem 1.1rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #7ed8c4, #f0c785);
  color: #0a1620;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.hero-action:hover {
  transform: translateY(-2px);
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 1.25rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0.42rem 0.8rem;
  border-radius: 999px;
  border: 1px solid rgba(122, 165, 191, 0.24);
  background: rgba(17, 32, 46, 0.8);
  color: rgba(239, 246, 249, 0.84);
  font-size: 0.84rem;
}

.panel-surface {
  padding: 1rem;
  border-radius: 24px;
  border: 1px solid rgba(113, 154, 181, 0.18);
  background: linear-gradient(180deg, rgba(14, 28, 41, 0.94), rgba(9, 17, 27, 0.96));
  box-shadow: 0 20px 60px rgba(3, 8, 14, 0.22);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.8rem;
}

.hero-stat-card {
  padding: 1rem;
  border-radius: 18px;
  background: rgba(19, 35, 48, 0.94);
  border: 1px solid rgba(118, 160, 185, 0.16);
}

.hero-stat-value {
  margin: 0 0 0.45rem;
  color: #f2c684;
  font-size: clamp(1.55rem, 2.8vw, 2.05rem);
  font-weight: 700;
  line-height: 1;
  font-family: 'Space Grotesk', 'Noto Sans SC', sans-serif;
}

.hero-stat-card h3 {
  margin: 0 0 0.4rem;
}

.hero-stat-card p {
  margin: 0;
  color: rgba(228, 236, 241, 0.72);
  line-height: 1.7;
  font-size: 0.9rem;
}

@media (max-width: 980px) {
  .hero-metrics {
    grid-template-columns: 1fr;
  }

  .hero-copy {
    padding: 1.8rem 0 0.2rem;
  }
}

@media (max-width: 700px) {
  .hero-stats {
    grid-template-columns: 1fr;
  }
}
</style>
