import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/main/Main.page.vue'
import Contact from '../pages/contact/Contact.page.vue'
import ProjectsListVue from '../pages/projects/ProjectsList.page.vue'
import EsteveTerradas50th from '../pages/projects/pages/EsteveTerradas50th.page.vue';
import HospitalViladecans from '../pages/projects/pages/HospitalViladecans.page.vue';
import TinTin60Cat from '../pages/projects/pages/TinTin60Cat.page.vue';
import MetaCorn from '../pages/projects/pages/MetaCorn.page.vue';
import PageNotFound from '../pages/errors/404.page.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)*', name: 'not-found', component: PageNotFound }, 
    {
      path: '/',
      name: 'main-page',
      component: Main,
    },
    {
      path: '/contacto',
      name: 'contact-page',
      component: Contact,
    },
    {
      path: '/proyectos',
      name: 'ProjectList',
      component: ProjectsListVue 
    },
    {
      path: '/proyectos/50th-esteve-terradas',
      name: 'Project50thEsteveTerradas',
      component: EsteveTerradas50th
    },
    {
      path: '/proyectos/hospital-viladecans',
      name: 'ProjectHospitalViladecans',
      component: HospitalViladecans
    },
    {
      path: '/proyectos/tintin-60-cat',
      name: 'ProjectTinTin60Cat',
      component: TinTin60Cat
    },
    {
      path: '/proyectos/meta-corn-fortnite',
      name: 'MetaCorn',
      component: MetaCorn
    },
  ]
})

export default router
