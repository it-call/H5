import Vue from 'vue';
// 引入vue-router
import VueRouter from 'vue-router';
// 使用插件
Vue.user(VueRouter); 

// 引入路由组件
import Home from '@com/Home';
import Cart from '@com/Cart';
import Mine from '@com/Mine';

// 组件
const Home={
    template:`<div>首页</div>`
}
const Cart={
    template:`<div>购物车</div>`
}
const Mine={
    template:`<div>我的</div>`
}

// 实例化路由
const routes=[
    // {path:'/',component:Home},
    {name:'Home',path:'/home',component:Home},
    {name:'Cart',path:'/cart',component:Cart},
    {name:'Mine',path:'/mine',component:Mine},
    {path:'/',redirect:{name:'Home'}}/* 重定向 */
]
let router=new VueRouter({
    routes
});

export default router;