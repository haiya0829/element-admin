import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login'
import Layout from '../layout/index'
import Dashboard from '../views/dashboard/Dashboard'
import documentation from '../views/documentation/Documentation'

//1.安装插件
Vue.use(VueRouter)

//2.创建路由对象
const routes = [
  {  //重定向
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/layout',
    component:Layout,
    redirect:'/dashboard',
    children: [{
      path:'/dashboard',
      component:Dashboard
    },
    {
      path:'/documentation',
      component:documentation,
  
    }]
  },

]
const router = new VueRouter ({
    routes
})
export default router