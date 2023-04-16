import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index'
import myHome from '@/views/myHome'
import myAbout from '@/views/myAbout'
import myManger from '@/views/myManger'
import myPlan from '@/views/myPlan'
import showNote from '@/views/note/showNote'
import myLogin from '@/views/admin/myLogin'
import notFound from '@/views/notFound'
import noteContent from '@/views/note/noteContent'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: myHome
  },
  {
    path: '/note',
    name: 'note',
    component: () => import("@/views/myNote"),
  },
  {
    path: '/project',
    name: 'project',
    component: () => import("@/views/myProject")
  },
  {
    path: '/notelist',
    name: 'showNote',
    component: showNote
  },
  {
    path: '/about',
    name: 'about',
    component: myAbout
  },
  //管理下分为login和管理系统，动态导入
  {
    path: '/manger',
    redirect: '/login',
  },
  {
    path: '/manger',
    name: 'manger',
    component: myManger,
    children: [
      {
        path: '/login',
        name: 'login',
        component: myLogin
      },
      {
        path: '/admin',
        name: 'admin',
        component: () => import('@/views/admin/backAdmin')
      }
    ]
  },
  {
    path: '/content',
    name: 'content',
    component: noteContent
  },
  {
    path: '/plan',
    name: 'plan',
    component: myPlan
  },
  {
    path: "/:pathMath(.*)*",
    name: "notFound",
    component: notFound,
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//路由守卫
router.beforeEach((to, from, next) => {
  if (to.name == 'plan' || to.name == 'admin') {
    if (store.state.login == true) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
