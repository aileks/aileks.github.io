import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from "../views/ProjectsView.vue";
import SkillsView from "../views/SkillsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
  ]
})

export default router
