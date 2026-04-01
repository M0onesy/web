<script setup>
import { RouterView } from 'vue-router'
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <div class="app-shell">
    <AppHeader />
    <main class="main-shell">
      <RouterView v-slot="{ Component, route }">
        <Transition name="view-fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-shell {
  flex: 1;
}

.view-fade-enter-active,
.view-fade-leave-active {
  transition: opacity 0.28s ease;
}

.view-fade-enter-from,
.view-fade-leave-to {
  opacity: 0;
}
</style>
