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
  subtitle: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section class="page-hero">
    <p v-if="eyebrow" class="page-hero-eyebrow">{{ eyebrow }}</p>
    <h1 class="page-hero-title">{{ title }}</h1>
    <p v-if="subtitle" class="page-hero-subtitle">{{ subtitle }}</p>
  </section>
</template>

<style scoped>
.page-hero {
  display: grid;
  gap: 0.7rem;
  padding: 2.4rem 0 1.4rem;
}

.page-hero-eyebrow {
  margin: 0;
  color: #8dcfbe;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.78rem;
  font-family: 'Space Grotesk', 'Noto Sans SC', sans-serif;
}

.page-hero-title {
  max-width: 980px;
  margin: 0;
}

.page-hero-subtitle {
  max-width: 860px;
  margin: 0;
  color: rgba(228, 236, 241, 0.82);
  font-size: clamp(1rem, 1.8vw, 1.18rem);
  line-height: 1.8;
}

@media (max-width: 700px) {
  .page-hero {
    padding: 1.5rem 0 1rem;
  }
}
</style>
