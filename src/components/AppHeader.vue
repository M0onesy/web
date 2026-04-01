<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { navItems, brand } from '../data/platformContent'

const menuOpen = ref(false)
const scrolled = ref(false)

const syncScrolled = () => {
  scrolled.value = window.scrollY > 18
}

const closeMenu = () => {
  menuOpen.value = false
}

onMounted(() => {
  syncScrolled()
  window.addEventListener('scroll', syncScrolled, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', syncScrolled)
})
</script>

<template>
  <header :class="['app-header', { scrolled }]">
    <div class="container header-inner">
      <RouterLink class="brand" to="/" @click="closeMenu">
        <img class="brand-logo" src="/brand/logo-mark.svg" alt="智龄协同平台标志" />
        <span class="brand-copy">
          <span class="brand-mark">{{ brand.name }}</span>
          <span class="brand-sub">{{ brand.tagline }}</span>
        </span>
      </RouterLink>

      <button class="menu-btn" type="button" @click="menuOpen = !menuOpen" aria-label="切换导航菜单">
        <span />
        <span />
      </button>

      <nav :class="['main-nav', { open: menuOpen }]" aria-label="站点导航">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          @click="closeMenu"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 40;
  border-bottom: 1px solid transparent;
  background: rgba(7, 16, 28, 0.78);
  backdrop-filter: blur(18px);
  transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.app-header.scrolled {
  border-color: rgba(115, 154, 181, 0.2);
  background: rgba(7, 15, 26, 0.92);
  box-shadow: 0 10px 34px rgba(2, 8, 15, 0.34);
}

.header-inner {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-height: 76px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.72rem;
  text-decoration: none;
  color: inherit;
}

.brand-logo {
  width: 36px;
  height: 36px;
  flex: 0 0 auto;
  filter: drop-shadow(0 0 10px rgba(141, 207, 190, 0.16));
  transition: opacity 0.2s ease, filter 0.2s ease;
}

.brand:hover .brand-logo {
  opacity: 0.96;
  filter: drop-shadow(0 0 14px rgba(141, 207, 190, 0.22));
}

.brand-copy {
  display: grid;
  gap: 0.18rem;
}

.brand-mark {
  font-size: 1.04rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.brand-sub {
  color: rgba(223, 237, 245, 0.74);
  font-size: 0.74rem;
}

.main-nav {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.nav-link {
  text-decoration: none;
  color: rgba(234, 244, 248, 0.9);
  padding: 0.56rem 0.88rem;
  border-radius: 999px;
  border: 1px solid transparent;
  font-size: 0.86rem;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.nav-link:hover {
  transform: translateY(-1px);
  border-color: rgba(112, 176, 204, 0.3);
  background: rgba(28, 61, 88, 0.36);
}

.nav-link.router-link-exact-active {
  color: #0c1821;
  background: linear-gradient(135deg, #7ed8c4, #f0c785);
  font-weight: 700;
}

.menu-btn {
  display: none;
  margin-left: auto;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid rgba(120, 167, 197, 0.28);
  background: rgba(17, 37, 55, 0.64);
  cursor: pointer;
}

.menu-btn span {
  display: block;
  width: 18px;
  height: 2px;
  margin: 5px auto;
  background: #f4fafc;
}

@media (max-width: 1120px) {
  .menu-btn {
    display: block;
  }

  .main-nav {
    position: absolute;
    top: 74px;
    right: 1rem;
    display: grid;
    gap: 0.35rem;
    min-width: 220px;
    padding: 0.85rem;
    border: 1px solid rgba(116, 159, 189, 0.24);
    border-radius: 18px;
    background: rgba(9, 18, 30, 0.97);
    box-shadow: 0 20px 50px rgba(3, 8, 16, 0.44);
    opacity: 0;
    transform: translateY(-6px) scale(0.98);
    pointer-events: none;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .main-nav.open {
    opacity: 1;
    transform: translateY(0) scale(1);
    pointer-events: auto;
  }

  .nav-link {
    width: 100%;
    text-align: left;
  }
}

@media (max-width: 700px) {
  .brand {
    gap: 0.58rem;
  }

  .brand-logo {
    width: 31px;
    height: 31px;
  }

  .brand-sub {
    font-size: 0.7rem;
  }
}
</style>
