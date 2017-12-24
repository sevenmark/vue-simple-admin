import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: (resolve) => require(['../components/login/login.vue'], resolve)
    },
    {
      path: '/',
      name: 'admin',
      component: (resolve) => require(['../components/admin/admin.vue'], resolve),
      children: [
        {
          path: 'add',
          component: (resolve) => require(['../components/adduser/adduser.vue'], resolve)
        },
        {
          path: 'list',
          component: (resolve) => require(['../components/list/list.vue'], resolve)
        }
      ]
    },
    {
      path: '/*',
      name: '404',
      component: (resolve) => require(['../components/error/error.vue'], resolve)
    }
  ]
})
