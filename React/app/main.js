import React from 'react';
import {render} from 'react-dom';

// 小案例：走动的时针
/* function format(d){
    return d.toLocaleDateString() + d.toLocaleTimeString().replace(/上午|下午/,'   ');
}

setInterval(()=>{
    let now=new Date();
    let dom=<div>
        <h2>steven:</h2>
        <time>{format(now)}</time>
    </div>
    ReactDOM.render(
        dom
        ,
        document.querySelector('#app')
    )
},1000) */


import App from './App';

render(
    <App/>
    ,
    document.querySelector('#app')
)
