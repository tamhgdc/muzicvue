import Vue from 'vue';
import VueRouter from 'vue-router';
//引入一级路由组件 
import Layout from '@/views/Layout'
//引入二级路由组件 
import Home from '@/views/Home'
import Search from '@/views/Search'
import Play from '@/views/Play'
//注册
Vue.use(VueRouter)
//设置规则
const routes = [
    //配置重定向
    {
        path: '/',
        redirect:'/layout/home'
    },
    //一级路由
    {
        path: '/layout',
        component: Layout,
        children:[
            {
                path: 'home',
                component: Home,
                meta:{
                    title:'首页'
                }
            },
            {
                path: 'search',
                component: Search,
                meta:{
                    title:'搜索'
                }
            },
        ]
    },
    {
        path: '/play',
        component: Play,
    }
]
//设置路由对象
const router = new VueRouter({
    routes: routes,
})
//导出暴露
export default router