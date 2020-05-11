<template>
    <div class="section">
      <!-- 侧边栏导航 -->
      <div class="aside mainBg">
        <div class="asideTop">
          <img src="../../assets/logo.png">
          <div class="companyName">深圳市泰博国际货运代理有限公司</div>
        </div>
        <div class="menus">
          <div class="menu" v-for="(item,index) in menuList" :key="index">
            <div class="menuName" @click="clickMenu(index)">
              <i class="el-icon-help"></i>
              <div style="width: 90px;text-align: left;">{{item.name}}</div>
              <div :class="[item.isopen ? 'el-icon-arrow-down':'el-icon-arrow-right']"></div>
            </div>
            <!-- <transition name="fade"> -->
            <el-collapse-transition>
              <div class="menuItem" :class="[item.isopen ? '':'hide']" v-show="item.hasChild">
                <div class="asideItem" :class="[checkSelected(index,index1) ? 'mainColor' : '']" v-for="(item1,index1) in item.children" :key="index1" @click="routeJump(item1.route,index,index1)">{{item1.name}}</div>
              </div>
            </el-collapse-transition>
            <!-- </transition> -->

          </div>
        </div>

      </div>
      <!-- 内容 -->
      <div class="main">
        <div class="breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <!-- <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item> -->
            <el-breadcrumb-item v-for="(item,index) in breadcrumb" :key="index">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        
        <router-view/>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
  import  bus from '@/components/bus.js'
  export default {
    data() {
      return {
        selectedIndex:[-1,-1],//记录当前选中的下标
        breadcrumb:[],//面包屑数据
        // 侧边菜单栏数据
        menuList: [
          {name: '订舱管理',hasChild: true,children:[{name: '订舱录入',route: '/home/bookingSpace/insertSpace'},{name: '订舱表格显示',route: '/home/bookingSpace/SpaceList'},{name: '订舱T量Echarts显示',route: '/home/bookingSpace/echarts'}],isopen: false},
          {name: '疫情管理',hasChild: true,children:[{name: '2020肺炎感染调查表',route: '/home/disease/questionnaire'},{name: '公司部门自备口罩图',route: '/home/blank'}],isopen: false},
          {name: '商务FMS管理',hasChild: true,children:[{name: '商务录入',route: '/home/commerce/insertCommerce'},{name: '商务列表展示',route: '/home/commerce/commerceShow'},{name: '商务上传Excel表格页',route: '/home/blank'}],isopen: false},
          {name: '通讯管理',hasChild: true,children:[{name: '通讯录Excel表格页',route: '/home/blank'},{name: '邮箱Excel表格页',route: '/home/blank'}],isopen: false},
          // {name: '商务FMS 管理',hasChild: true,children:[{name: '商务FMS上传Excel表格页',route: '/home/blank'},{name: '商务FMS列表',route: '/home/blank'}],isopen: false},
          {name: '密码管理',hasChild: true,children:[{name: '更改嘉泽邮箱密码',route: '/home/password/jiaze'}],isopen: false}
        ]
      }
    },
    computed: {

    },
    created() {
      // bus.$on('breadcrumb',(msg)=> {
      //   console.log("msg:",msg)
      //   this.breadcrumb[0] = msg[0]
      //   this.breadcrumb[1] = msg[1]
      // })
    },
    mounted(){
      var bread0 = localStorage.getItem('breadcrumb0')
      var bread1 = localStorage.getItem('breadcrumb1')
      if(bread0 && bread1) {
        this.$set(this.breadcrumb,0,bread0)
        this.$set(this.breadcrumb,1,bread1)
      }
    },
    methods: {
      //点击导航菜单
      clickMenu(index) {
        this.menuList[index].isopen = !this.menuList[index].isopen
      },
      routeJump(route,index,index1) {
        // if(this.selectedIndex == [index,index1]) 
        //  return
        this.selectedIndex = [index,index1]
        if(route == '') return
        this.$router.push({
          path: route,
          query: {}
        })
        this.$set(this.breadcrumb,0,this.menuList[index].name)
        this.$set(this.breadcrumb,1,this.menuList[index].children[index1].name)
        // this.breadcrumb[0] = this.menuList[index].name
        // this.breadcrumb[1] = this.menuList[index].children[index1].name
        // console.log('面包屑：',this.breadcrumb)
        // localStorage.setItem('breadcrumb',this.breadcrumb)
      },
      checkSelected(index,index1) {
        if(this.selectedIndex[0] == index && this.selectedIndex[1] == index1) {
          return true
        }else {
          return false
        }
      }
    }
  }
</script>

<style scoped>
  .section {
    display: flex;
    flex-direction: row;
    width: 100%;
    /* flex: 1; */
    height: 100%;
    /* overflow: auto; */
  }
  .aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 190px;
    max-width: 190px;
    width: 190px;
    height: 100%;
    /* overflow: auto; */
    border-right: 1px solid #e1e5e6;
    text-align: center;
  }
  .asideTop {
    padding-bottom: 20px;
    border-bottom: 1px solid #E1E5E6;
  }
  .asideTop img {
    width: 190px;
    height:90px;
  }
  .companyName {
    width: 100%;
    /* white-space: wrap;
    word-break:break-all;
    word-wrap:break-word; */
    overflow: hidden;
    white-space: normal;
    word-wrap: break-all;
  }
  .main {
    height: 100%;
    background-color: #fff;
    flex: 1;
    overflow: hidden;
  }

  .el-container {
    height: 100%;
  }
  .menus {
    flex: 1;
    overflow: auto;
  }
  .menu {
    width: 190px;
    background: rgba(255,255,255,0.2);
    border-bottom: 1px solid #e1e5e6;
    /* border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
    border-top: 2px solid #333;
    border-left: 2px solid #333;
    box-shadow: -2px -2px 5px #888888; */
  }
  .menuName{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    line-height: 60px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
  }
  .asideItem {
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    color: #333333;
    background: #f2f2f0;
    /* font-weight: bold; */
    text-align: left;
    text-indent: 1.5em;
    cursor: pointer;
  }
  .hide {
    display: none;
  }
  /* .fade-enter {
    height: 0;
  } */
  .fade-enter-active, .fade-leave-active {
    transition: all 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    height: 0;
  }
  .breadcrumb {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
    padding-left: 20px;
    /* border-bottom: 1px solid #E1E5E6; */
    box-shadow:0px 2px 4px 4px rgba(0,0,0,0.04);
  }
  ::-webkit-scrollbar {display:none}
  /* .menuItem {
    transition: all 1s;
  } */
</style>
