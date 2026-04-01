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
  steps: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="scenario-steps panel-surface">
    <div class="section-head">
      <p v-if="eyebrow" class="section-eyebrow">{{ eyebrow }}</p>
      <h2>{{ title }}</h2>
    </div>
    <div class="steps-grid">
      <article v-for="(step, index) in steps" :key="step.title" class="step-card">
        <div class="step-index">0{{ index + 1 }}</div>
        <h3>{{ step.title }}</h3>
        <p>{{ step.text }}</p>
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

.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.9rem;
}

.step-card {
  padding: 1rem;
  border-radius: 18px;
  background: rgba(18, 35, 47, 0.94);
  border: 1px solid rgba(121, 163, 189, 0.15);
}

.step-index {
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 0.75rem;
  background: linear-gradient(135deg, #7ed8c4, #f0c785);
  color: #0b1822;
  font-weight: 800;
  font-family: 'Space Grotesk', 'Noto Sans SC', sans-serif;
}

.step-card h3 {
  margin: 0 0 0.42rem;
}

.step-card p {
  margin: 0;
  color: rgba(228, 236, 241, 0.72);
  line-height: 1.72;
}

@media (max-width: 1100px) {
  .steps-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .steps-grid {
    grid-template-columns: 1fr;
  }
}
</style>
