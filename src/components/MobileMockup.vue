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
  phoneTitle: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    default: '',
  },
  modules: {
    type: Array,
    default: () => [],
  },
  footerTags: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="panel-surface mobile-panel">
    <div class="section-head">
      <p v-if="eyebrow" class="section-eyebrow">{{ eyebrow }}</p>
      <h2>{{ title }}</h2>
    </div>

    <div class="phone-shell">
      <div class="phone-top">
        <span class="phone-dot" />
        <p>{{ phoneTitle }}</p>
        <span class="phone-badge">在线</span>
      </div>
      <div class="phone-voice">
        <div class="voice-pill">{{ summary }}</div>
        <div class="wave-row">
          <span v-for="n in 16" :key="n" :class="['wave-bar', `h-${(n % 5) + 1}`]" />
        </div>
      </div>
      <div class="module-list">
        <article v-for="item in modules" :key="item.name" class="module-card">
          <div>
            <h3>{{ item.name }}</h3>
            <p>{{ item.hint }}</p>
          </div>
          <span class="module-indicator" />
        </article>
      </div>
      <div class="tag-row">
        <span v-for="tag in footerTags" :key="tag" class="tag-pill">{{ tag }}</span>
      </div>
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

.phone-shell {
  width: min(390px, 100%);
  margin: 0 auto;
  padding: 0.85rem;
  border-radius: 28px;
  border: 1px solid rgba(126, 167, 190, 0.22);
  background: linear-gradient(180deg, rgba(9, 16, 24, 0.98), rgba(7, 13, 20, 0.98));
}

.phone-top,
.module-card,
.tag-row {
  display: flex;
  align-items: center;
}

.phone-top {
  gap: 0.55rem;
  justify-content: space-between;
  margin-bottom: 0.8rem;
}

.phone-top p {
  margin: 0;
  flex: 1;
  text-align: center;
  font-weight: 700;
}

.phone-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #8dcfbe;
}

.phone-badge,
.tag-pill,
.voice-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  padding: 0.35rem 0.72rem;
  border-radius: 999px;
  font-size: 0.78rem;
}

.phone-badge {
  background: rgba(126, 216, 196, 0.12);
  color: #8dcfbe;
}

.phone-voice {
  padding: 1rem;
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(15, 42, 56, 0.94), rgba(10, 24, 35, 0.96));
}

.voice-pill {
  color: #0c1822;
  background: linear-gradient(135deg, #7ed8c4, #f0c785);
  font-weight: 700;
}

.wave-row {
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: 0.28rem;
  align-items: end;
  height: 48px;
  margin-top: 0.9rem;
}

.wave-bar {
  border-radius: 999px;
  background: rgba(233, 241, 245, 0.86);
}

.wave-bar.h-1 { height: 12px; }
.wave-bar.h-2 { height: 18px; }
.wave-bar.h-3 { height: 26px; }
.wave-bar.h-4 { height: 38px; }
.wave-bar.h-5 { height: 30px; }

.module-list {
  display: grid;
  gap: 0.7rem;
  margin-top: 0.95rem;
}

.module-card {
  justify-content: space-between;
  gap: 0.8rem;
  padding: 0.95rem;
  border-radius: 18px;
  background: rgba(15, 30, 42, 0.96);
}

.module-card h3 {
  margin: 0 0 0.25rem;
}

.module-card p {
  margin: 0;
  color: rgba(228, 236, 241, 0.68);
  line-height: 1.6;
  font-size: 0.9rem;
}

.module-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f2c684;
  box-shadow: 0 0 0 6px rgba(242, 198, 132, 0.12);
}

.tag-row {
  gap: 0.55rem;
  flex-wrap: wrap;
  margin-top: 0.95rem;
}

.tag-pill {
  background: rgba(22, 40, 56, 0.96);
  color: rgba(239, 246, 249, 0.82);
}
</style>
