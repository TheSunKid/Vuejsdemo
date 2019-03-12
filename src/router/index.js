import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'

Vue.use(Router);
Vue.forceUpdate();

export default new Router({
  routes: [
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    }
  ]
})