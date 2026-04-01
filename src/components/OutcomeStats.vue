<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  stats: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="outcome-stats panel-surface">
    <div class="section-head">
      <p v-if="eyebrow" class="section-eyebrow">{{ eyebrow }}</p>
      <h2>{{ title }}</h2>
    </div>
    <div class="stats-grid">
      <article v-for="stat in stats" :key="stat.label" class="stat-card">
        <p class="stat-label">{{ stat.label }}</p>
        <p class="stat-value">{{ stat.value }}</p>
        <p class="stat-desc">{{ stat.desc }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.panel-surface {
  padding: 1.15rem;
  border-radius: 24px;
  border: 1px solid rgba(113, 154, 181, 0.18);
  background: linear-gradient(180deg, rgba(14, 28, 41, 0.94), rgba(9, 17, 27, 0.96));
  box-shadow: 0 20px 60px rgba(3, 8, 14, 0.22);
}

.section-head {
  display: grid;
  gap: 0.35rem;
  margin-bottom: 1rem;
}

.section-eyebrow,
.stat-label {
  margin: 0;
  color: #8dcfbe;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.76rem;
  font-family: 'Space Grotesk', 'Noto Sans SC', sans-serif;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.9rem;
}

.stat-card {
  padding: 1rem;
  border-radius: 18px;
  background: rgba(18, 35, 47, 0.94);
  border: 1px solid rgba(121, 163, 189, 0.15);
}

.stat-value {
  margin: 0.45rem 0;
  color: #f2c684;
  font-size: clamp(1.35rem, 2.5vw, 1.85rem);
  font-weight: 800;
  line-height: 1.05;
  font-family: 'Space Grotesk', 'Noto Sans SC', sans-serif;
}

.stat-desc {
  margin: 0;
  color: rgba(228, 236, 241, 0.72);
  line-height: 1.72;
}

@media (max-width: 1100px) {
  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
