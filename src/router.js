// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from './views/Home.vue'

// Vue.use(Router) //$router   路由方法      //$route   路由属性

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import './assets/styles/reset.css'
Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active-exact',
  linkActiveClass: 'active',
  routes: [
    // {
    //   path: '/',
    //   redirect: '/home'
    // },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('_v/Learn')
    },
    {
      path: '/student',
      name: 'sutdent',
      meta: {
        login: true
      },
      component: () => import('_v/Student')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login')
    },
    {
      path: '/community',
      name: 'community',
      meta: {
        login: true
      },
      redirect: '/community/academic',
      component: () => import('./views/Community'),
      children: [
        {
          path: 'academic',
          name: 'academic',
          component: () => import('./views/Academic')
        },
        {
          path: 'download',
          name: 'download',
          component: () => import('./views/Download')
        },
        {
          path: 'personal',
          name: 'personal',
          component: () => import('./views/Personal')
        }
      ]
    },
    {
      path: '/question:id',
      name: 'question',
      component: () => import('./views/Question')
    },
    {
      path: '/NotFound',
      component: () => import('./views/NotFound')
    },
    {
      path: '*',
      redirect (to) {
        if(to.path === '/') {
          return '/home'
        } else {
          return '/NotFound'
        }
      }
    }
  ]
});