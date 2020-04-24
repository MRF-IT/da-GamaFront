import Vue from 'vue'
import Router from 'vue-router'
import  bus from '@/components/bus.js'
import Home2 from '@/components/home/Home2.vue'
import Home from '@/components/home/Home.vue'
import InsertSpace from '@/components/bookingSpace/InsertSpace.vue'
import Blank from '@/components/blank.vue'
import SpaceList from '@/components/bookingSpace/SpaceList'
import Echarts from '@/components/bookingSpace/Echarts'
import Questionnaire from '@/components/disease/Questionnaire'
import axios from 'axios'

// 配置公共路径
// 配置好公共路径后, 每次使用 axios 发送请求, 只需要写当前接口的路径(比如: /users) 就可以了
// axios 在发送请求之前, 会将 baseUrl + '/users' 得到完整路径, 才会发送请求
// axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'



Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {path: 'bookingSpace/insertSpace',component: InsertSpace},
        {path: 'bookingSpace/spaceList',component: SpaceList},
        {path: 'blank',component: Blank},
        {path: 'bookingSpace/echarts',component: Echarts},
        {path: 'disease/questionnaire',component: Questionnaire}
      ]
    },
    {
      path: '/home2',
      component: Home2
    }
  ]
})

// 全局导航守卫
// 所有的路由都会先走守卫
// 添加导航守卫之后，不管是访问哪个路由，都会执行beforeEach回调函数中的代码
// 因为所有的路由，都会经过该导航守卫，所以，就可以在这个导航守卫的回调函数中
// 判断有没有登录了
router.beforeEach((to, from, next) => {
  // console.log(to.path)
  if(to.path == '/home/bookingSpace/insertSpace') {
    // console.log('订舱录入')
    // bus.$emit('breadcrumb',['订舱管理','订舱录入'])
    localStorage.setItem('breadcrumb0','订舱管理')
    localStorage.setItem('breadcrumb1','订舱录入')
  }
  
  next()
  // if (to.path === '/login') {
    // 如果访问的是login页面，直接放行，也就是任何人不管有没有登录
    // 都可以访问登录页面
    // 直接调用 next() 方法，表示：访问的是哪个页面，就展示这个页面的内容
  //   next()
  // } else {
    // 访问的不是登录页面

    // 判断用户是否登录成功，
    // 1 当用户登录成功，直接调用 next() 方法放行
    // 2 当用户没有登录，应该调用 next('/login') 跳转到登录页面，让用户登录

    // 通过登录成功时候保存的token，来作为有没有登录成功的条件
    // const token = localStorage.getItem('token')
  // }
})


export default router
