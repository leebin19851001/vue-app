import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/reset.css';
import { isAbsolute } from 'path';
import store from './store/index'


Vue.config.productionTip = false

router.beforeEach((to, from, next) =>{
  const needLogin = to.matched.some(route => route.meta && route.meta.login);
  if (needLogin) {
    const isLogin = document.cookie.includes('login=true');
    if(isLogin) {
      next();
      return;
    } else {
      const toLoginFlag = window.confirm('该页面需要登录，确定登录吗？');
      if (toLoginFlag) {
        next('/login');
      }
      return;
    }
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
