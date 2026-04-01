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
  stages: {
    type: Array,
    default: () => [],
  },
  widgets: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="panel-surface timeline-panel">
    <div class="section-head">
      <p v-if="eyebrow" class="section-eyebrow">{{ eyebrow }}</p>
      <h2>{{ title }}</h2>
    </div>

    <div class="widget-row">
      <article v-for="item in widgets" :key="item.title" class="widget-card">
        <p class="widget-title">{{ item.title }}</p>
        <p class="widget-value">{{ item.value }}</p>
      </article>
    </div>

    <div class="timeline-row">
      <article v-for="(stage, index) in stages" :key="stage.title" class="timeline-stage">
        <div class="timeline-head">
          <span class="timeline-dot">{{ index + 1 }}</span>
          <h3>{{ stage.title }}</h3>
        </div>
        <p>{{ stage.note }}</p>
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
.widget-title {
  margin: 0;
  color: #8dcfbe;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.76rem;
  font-family: 'Space Grotesk', 'Noto Sans SC', sans-serif;
}

.widget-row,
.timeline-row {
  display: grid;
  gap: 0.85rem;
}

.widget-row {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.widget-card,
.timeline-stage {
  padding: 1rem;
  border-radius: 18px;
  background: rgba(17, 33, 46, 0.96);
  border: 1px solid rgba(120, 162, 187, 0.15);
}

.widget-value {
  margin: 0.5rem 0 0;
  color: #f2c684;
  font-size: 1.45rem;
  font-weight: 800;
  font-family: 'Space Grotesk', 'Noto Sans SC', sans-serif;
}

.timeline-row {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 0.95rem;
}

.timeline-head {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.timeline-dot {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #7ed8c4, #f0c785);
  color: #0b1822;
  font-weight: 800;
  font-family: 'Space Grotesk', 'Noto Sans SC', sans-serif;
}

.timeline-stage h3 {
  margin: 0;
}

.timeline-stage p {
  margin: 0.7rem 0 0;
  color: rgba(228, 236, 241, 0.72);
  line-height: 1.72;
}

@media (max-width: 1000px) {
  .widget-row,
  .timeline-row {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .widget-row,
  .timeline-row {
    grid-template-columns: 1fr;
  }
}
</style>
