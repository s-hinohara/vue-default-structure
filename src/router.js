import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index/index.vue'
import Content from './components/Content/content.vue'
import Content2 from './components/Content2/content2.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/Index/index.vue'),
      component: Index,
      children: [
        {path: '', component: Content, meta: {name: 'ContentExample'}},
        {path: 'page2', component: Content2, meta: {name: 'ContentExample2'}}]
    }
  ]
})
