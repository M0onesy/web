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
  <section class="panel-surface trust-flow">
    <div class="section-head">
      <p v-if="eyebrow" class="section-eyebrow">{{ eyebrow }}</p>
      <h2>{{ title }}</h2>
    </div>

    <div class="flow-shell">
      <article v-for="(step, index) in steps" :key="step.title" class="flow-step">
        <div class="flow-marker">
          <span>{{ index + 1 }}</span>
        </div>
        <div class="flow-card">
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </div>
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

.flow-shell {
  display: grid;
  gap: 0.8rem;
}

.flow-step {
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr);
  gap: 0.85rem;
  align-items: start;
}

.flow-marker span {
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #7ed8c4, #f0c785);
  color: #0b1822;
  font-weight: 800;
  font-family: 'Space Grotesk', 'Noto Sans SC', sans-serif;
}

.flow-card {
  padding: 1rem;
  border-radius: 18px;
  background: rgba(17, 33, 46, 0.96);
  border: 1px solid rgba(120, 162, 187, 0.15);
}

.flow-card h3 {
  margin: 0 0 0.4rem;
}

.flow-card p {
  margin: 0;
  color: rgba(228, 236, 241, 0.72);
  line-height: 1.72;
}

@media (max-width: 700px) {
  .flow-step {
    grid-template-columns: 1fr;
  }
}
</style>
