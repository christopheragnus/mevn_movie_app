import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue';
import Contact from '@/components/Contact';
import AddMovie from '@/components/AddMovie';


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/movies/add',
      name: 'AddMovie',
      component: AddMovie
    }
  ]
})
