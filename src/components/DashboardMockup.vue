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
  menu: {
    type: Array,
    default: () => [],
  },
  stats: {
    type: Array,
    default: () => [],
  },
  taskRows: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="panel-surface dashboard-panel">
    <div class="section-head">
      <p v-if="eyebrow" class="section-eyebrow">{{ eyebrow }}</p>
      <h2>{{ title }}</h2>
    </div>

    <div class="dashboard-shell">
      <aside class="dashboard-sidebar">
        <p class="sidebar-title">控制台</p>
        <div class="sidebar-list">
          <span v-for="item in menu" :key="item" class="sidebar-item">{{ item }}</span>
        </div>
      </aside>

      <div class="dashboard-main">
        <div class="dash-metrics">
          <article v-for="stat in stats" :key="stat.label" class="dash-card">
            <p class="dash-label">{{ stat.label }}</p>
            <p class="dash-value">{{ stat.value }}</p>
          </article>
        </div>

        <div class="task-panel">
          <div class="task-head">
            <h3>本周协同任务</h3>
            <span>实时更新</span>
          </div>
          <article v-for="row in taskRows" :key="row.title" class="task-row">
            <div>
              <h4>{{ row.title }}</h4>
              <p>{{ row.owner }}</p>
            </div>
            <span class="task-status">{{ row.status }}</span>
          </article>
        </div>
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

.section-eyebrow,
.dash-label,
.sidebar-title {
  margin: 0;
  color: #8dcfbe;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.76rem;
  font-family: 'Space Grotesk', 'Noto Sans SC', sans-serif;
}

.dashboard-shell {
  display: grid;
  grid-template-columns: 190px minmax(0, 1fr);
  gap: 0.9rem;
}

.dashboard-sidebar,
.task-panel,
.dash-card {
  border-radius: 18px;
  background: rgba(16, 30, 42, 0.96);
}

.dashboard-sidebar {
  padding: 1rem;
}

.sidebar-list {
  display: grid;
  gap: 0.55rem;
  margin-top: 0.9rem;
}

.sidebar-item {
  padding: 0.72rem 0.8rem;
  border-radius: 14px;
  background: rgba(23, 43, 58, 0.94);
  color: rgba(239, 246, 249, 0.82);
}

.dashboard-main {
  display: grid;
  gap: 0.9rem;
}

.dash-metrics {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.8rem;
}

.dash-card {
  padding: 0.95rem;
}

.dash-value {
  margin: 0.45rem 0 0;
  color: #f2c684;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1;
  font-family: 'Space Grotesk', 'Noto Sans SC', sans-serif;
}

.task-panel {
  padding: 1rem;
}

.task-head,
.task-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
}

.task-head {
  margin-bottom: 0.8rem;
}

.task-head h3,
.task-row h4 {
  margin: 0;
}

.task-head span,
.task-row p {
  color: rgba(228, 236, 241, 0.62);
}

.task-row {
  padding: 0.85rem 0;
  border-top: 1px solid rgba(120, 160, 184, 0.12);
}

.task-row p {
  margin: 0.2rem 0 0;
}

.task-status {
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0.35rem 0.72rem;
  border-radius: 999px;
  background: rgba(126, 216, 196, 0.14);
  color: #8dcfbe;
  white-space: nowrap;
}

@media (max-width: 920px) {
  .dashboard-shell {
    grid-template-columns: 1fr;
  }

  .dash-metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .dash-metrics {
    grid-template-columns: 1fr;
  }
}
</style>
