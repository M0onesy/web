import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SilverEndView from '../views/SilverEndView.vue'
import EnterpriseSaasView from '../views/EnterpriseSaasView.vue'
import MatchingHallView from '../views/MatchingHallView.vue'
import PointsCenterView from '../views/PointsCenterView.vue'
import TechOverviewView from '../views/TechOverviewView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/silver-end', name: 'silver-end', component: SilverEndView },
  { path: '/enterprise-saas', name: 'enterprise-saas', component: EnterpriseSaasView },
  { path: '/matching-hall', name: 'matching-hall', component: MatchingHallView },
  { path: '/points-center', name: 'points-center', component: PointsCenterView },
  { path: '/tech-overview', name: 'tech-overview', component: TechOverviewView },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})
