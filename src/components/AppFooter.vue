<script setup>
import { brand } from '../data/platformContent'
</script>

<template>
  <footer class="app-footer">
    <div class="container footer-inner">
      <div class="footer-branding">
        <img class="footer-logo" src="/brand/logo-mark.svg" alt="智龄协同平台标志" />
        <div>
          <p class="footer-brand">{{ brand.name }} / {{ brand.subName }}</p>
          <p class="footer-copy">{{ brand.tagline }}</p>
        </div>
      </div>
      <div class="footer-meta">
        <p>{{ brand.source }}</p>
        <p>当前版本为多子页平台展示站，重点呈现双端产品、关键页面和技术可信体系。</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  margin-top: 4rem;
  border-top: 1px solid rgba(110, 150, 179, 0.18);
  background: rgba(6, 13, 23, 0.86);
}

.footer-inner {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 1rem;
  padding: 1.5rem 0 2rem;
}

.footer-branding {
  display: flex;
  align-items: center;
  gap: 0.72rem;
}

.footer-logo {
  width: 24px;
  height: 24px;
  flex: 0 0 auto;
  opacity: 0.84;
}

.footer-brand {
  margin: 0;
  font-size: 0.96rem;
  font-weight: 700;
  color: #eef8fb;
}

.footer-copy,
.footer-meta p {
  margin: 0.22rem 0 0;
  color: rgba(223, 235, 241, 0.68);
  font-size: 0.84rem;
  line-height: 1.7;
}

@media (max-width: 800px) {
  .footer-inner {
    grid-template-columns: 1fr;
  }
}
</style>
