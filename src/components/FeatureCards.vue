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
  description: {
    type: String,
    default: '',
  },
  cards: {
    type: Array,
    default: () => [],
  },
  compact: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <section class="feature-cards panel-surface">
    <div class="section-head">
      <p v-if="eyebrow" class="section-eyebrow">{{ eyebrow }}</p>
      <h2>{{ title }}</h2>
      <p v-if="description" class="section-description">{{ description }}</p>
    </div>
    <div :class="['cards-grid', { compact }]">
      <article v-for="card in cards" :key="card.title" class="feature-card">
        <p v-if="card.tag" class="card-tag">{{ card.tag }}</p>
        <h3>{{ card.title }}</h3>
        <p>{{ card.text }}</p>
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

.section-eyebrow {
  margin: 0;
  color: #8dcfbe;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.76rem;
  font-family: 'Space Grotesk', 'Noto Sans SC', sans-serif;
}

.section-description {
  margin: 0;
  color: rgba(224, 235, 241, 0.72);
  line-height: 1.75;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.9rem;
}

.cards-grid.compact {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.feature-card {
  padding: 1rem;
  border-radius: 18px;
  border: 1px solid rgba(117, 160, 185, 0.15);
  background: rgba(18, 34, 47, 0.94);
}

.card-tag {
  margin: 0 0 0.45rem;
  color: #f2c684;
  font-size: 0.8rem;
  font-weight: 700;
}

.feature-card h3 {
  margin: 0 0 0.45rem;
}

.feature-card p {
  margin: 0;
  color: rgba(228, 236, 241, 0.72);
  line-height: 1.72;
}

@media (max-width: 1100px) {
  .cards-grid,
  .cards-grid.compact {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .cards-grid,
  .cards-grid.compact {
    grid-template-columns: 1fr;
  }
}
</style>
