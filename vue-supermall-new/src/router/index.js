import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: "/home",
    component: () => import('views/Home/Home'),
    children: [
      {
        path: "",
        redirect: "news"
      },
      {
        path: "news",
        component: () => import('views/Home/HomeNews')
      },
      {
        path: "message",
        component: () => import('views/Home/HomeMessage')
      }
    ]
  },
  {
    path: "/about",
    component: () => import('views/About/About')
  },
  {
    path: "/user/:abc",
    component: () => import('views/User/User')
  },
  {
    path: "/profile",
    component: () => import('views/Profile/Profile')
  }
]


const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
