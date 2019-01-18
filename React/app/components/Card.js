import React,{Component} from 'react';
import '../scss/page.scss';

class Card extends Component{
    constructor(){
        super();

        // 组件状态
        this.state-{
            data:[
                {
                    name:'laoxie',
                    age:18,
                    gender:'男',
                    photo:'img/laoxie.jpg'
                },
                 {
                    name:'lemon',
                    age:23,
                    gender:'女',
                    photo:'img/lemon.jpg'
                },
                 {
                    name:'tiantian',
                    age:24,
                    gender:'男',
                    photo:'img/tiantian.jpg'
                },
           ]
        }
    }

    // 组件UI
    // 组件要显示什么就return什么
    render(){
        return <div>Card</div> 
    }
}

export default Card;