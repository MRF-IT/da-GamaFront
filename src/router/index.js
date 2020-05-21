import Vue from 'vue'
import Router from 'vue-router'
import  bus from '@/components/bus.js'
import Home from '@/components/home/Home.vue'
import InsertSpace from '@/components/bookingSpace/InsertSpace.vue'
import Blank from '@/components/blank.vue'
import SpaceList from '@/components/bookingSpace/SpaceList'
import EtdList from '@/components/bookingSpace/EtdList'
import Echarts from '@/components/bookingSpace/Echarts'
import EchartsLine from '@/components/bookingSpace/EchartsLine'

// 商务管理页面
import InsertCommerce from '@/components/commerce/InsertCommerce.vue'
import CommerceShow from '@/components/commerce/CommerceShow.vue'
// 疫情管理
import Questionnaire from '@/components/disease/Questionnaire'
import DiseaseList from '@/components/disease/DiseaseList'
// 密码管理
import Jiaze from '@/components/password/Jiaze'
// EDI管理
import MbfList from '@/components/EDI/MbfList'
import MinList from '@/components/EDI/MinList'

// 配置公共路径
// 配置好公共路径后, 每次使用 axios 发送请求, 只需要写当前接口的路径(比如: /users) 就可以了
// axios 在发送请求之前, 会将 baseUrl + '/users' 得到完整路径, 才会发送请求
// axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'



Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {path: 'bookingSpace/insertSpace',component: InsertSpace},
        {path: 'bookingSpace/spaceList',component: SpaceList},
        {path: 'bookingSpace/etdList',component: EtdList},
        {path: 'blank',component: Blank},
        {path: 'bookingSpace/echarts',component: Echarts},
        {path: 'bookingSpace/echartsLine',component: EchartsLine},
        // 疫情管理
        {path: 'disease/questionnaire',component: Questionnaire},
        {path: 'disease/diseaseList',component: DiseaseList},
        // 商务管理
        {path: 'commerce/insertCommerce',component: InsertCommerce},
        {path: 'commerce/commerceShow',component: CommerceShow},
        // 密码管理
        {path: 'password/jiaze',component: Jiaze},
        // edi管理
        {path: 'edi/mbfList',component: MbfList},
        {path: 'edi/minList',component: MinList},
      ]
    },
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
  }else if(to.path == '/home/bookingSpace/SpaceList' || to.path == '/home/bookingSpace/etdList') {
    localStorage.setItem('breadcrumb0','订舱管理')
    localStorage.setItem('breadcrumb1','订舱表格显示')
    // console.log('订舱列表')
  }else if(to.path == '/home/commerce/insertCommerce') {
    localStorage.setItem('breadcrumb0','商务管理')
    localStorage.setItem('breadcrumb1','商务录入')
  }else if(to.path == '/home') {
    localStorage.setItem('breadcrumb0','首页')
    localStorage.setItem('breadcrumb1','')
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
