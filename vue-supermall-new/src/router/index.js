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
    meta: {
      title: "首页"
    },
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
    component: () => import('views/About/About'),
    meta: {
      title: "关于"
    },
    beforeEnter(to, from, next) {
      console.log("进入关于页面啦");
      

      next()
    }
  },
  {
    path: "/user/:abc",
    component: () => import('views/User/User'),
    meta: {
      title: "用户"
    },

  },

  {
    path: "/profile",
    component: () => import('views/Profile/Profile'),
    meta: {
      title: "我的"
    },
  }
]


const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title

  next()
})

 
export default router
