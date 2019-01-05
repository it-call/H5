import Vue from 'vue';
import App from './App';

// 引入vue-router
import VueRouter from 'vue-router';
// 使用插件
Vue.user(VueRouter);

// 实例化路由
const routes=[
    {path:'/home',component:Home},
    {path:'/cart',component:Cart},
    {path:'/mine',component:Mine}
]
let router=new VueRouter({
    routes
})

// 实例化vue
new Vue({
    el:'#app',
    render:h=>h(App)
})