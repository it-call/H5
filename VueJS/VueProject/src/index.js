import Vue from 'vue';
import App from './App';

import router from './router';

// 实例化vue
new Vue({
    el:'#app',
    render:h=>h(App),

    // 把router实例注入vue实例中
    router
})