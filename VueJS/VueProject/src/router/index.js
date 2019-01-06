
// 引入vue-router
import VueRouter from 'vue-router';
// 使用插件
Vue.user(VueRouter); 

// 引入路由组件
import Home from '../components/Home';
import Cart from '../components/Cart';
import Mine from '../components/Mine';

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
    {path:'/home',component:Home},
    {path:'/cart',component:Cart},
    {path:'/mine',component:Mine}
]
let router=new VueRouter({
    routes
});

export default router;