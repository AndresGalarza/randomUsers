import Vue from 'vue'
import Router from 'vue-router'
import RandomUsers from './components/RandomUsers.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: RandomUsers
    },
    {
      path: '/details/:userId',
      name: 'details',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './components/detailUser.vue')
    }
  ]
})
