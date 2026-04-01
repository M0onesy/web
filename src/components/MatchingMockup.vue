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
  demandTitle: {
    type: String,
    required: true,
  },
  demandTags: {
    type: Array,
    default: () => [],
  },
  candidates: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="panel-surface matching-panel">
    <div class="section-head">
      <p v-if="eyebrow" class="section-eyebrow">{{ eyebrow }}</p>
      <h2>{{ title }}</h2>
    </div>

    <div class="demand-card">
      <p class="demand-title">{{ demandTitle }}</p>
      <div class="demand-tags">
        <span v-for="tag in demandTags" :key="tag" class="tag-pill">{{ tag }}</span>
      </div>
    </div>

    <div class="candidate-list">
      <article v-for="item in candidates" :key="item.name" class="candidate-card">
        <div class="candidate-top">
          <div>
            <h3>{{ item.name }}</h3>
            <p>{{ item.role }}</p>
          </div>
          <div class="score-badge">{{ item.score }}</div>
        </div>
        <div class="score-track">
          <span class="score-fill" :style="{ width: `${item.score}%` }" />
        </div>
        <div class="candidate-tags">
          <span v-for="tag in item.tags" :key="tag" class="mini-tag">{{ tag }}</span>
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

.section-eyebrow,
.demand-title {
  margin: 0;
  color: #8dcfbe;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.76rem;
  font-family: 'Space Grotesk', 'Noto Sans SC', sans-serif;
}

.demand-card,
.candidate-card {
  padding: 1rem;
  border-radius: 18px;
  background: rgba(17, 33, 46, 0.96);
  border: 1px solid rgba(120, 162, 187, 0.15);
}

.demand-tags,
.candidate-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 0.75rem;
}

.tag-pill,
.mini-tag {
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0.35rem 0.72rem;
  border-radius: 999px;
  background: rgba(25, 49, 67, 0.96);
  color: rgba(239, 246, 249, 0.84);
  font-size: 0.8rem;
}

.candidate-list {
  display: grid;
  gap: 0.8rem;
  margin-top: 0.95rem;
}

.candidate-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
}

.candidate-top h3 {
  margin: 0;
}

.candidate-top p {
  margin: 0.25rem 0 0;
  color: rgba(228, 236, 241, 0.66);
}

.score-badge {
  width: 58px;
  height: 58px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #7ed8c4, #f0c785);
  color: #0b1822;
  font-weight: 800;
  font-family: 'Space Grotesk', 'Noto Sans SC', sans-serif;
}

.score-track {
  margin-top: 0.8rem;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

.score-fill {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(135deg, #7ed8c4, #f0c785);
}
</style>
