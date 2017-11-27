import Vue from 'vue'
import Router from 'vue-router'
import TVShow from '@/components/TVShow'
import TVShowsList from '@/components/TVShowsList'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/show/:id', component: TVShow },
    { path: '/', component: TVShowsList }
  ]
})
