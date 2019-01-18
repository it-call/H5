import React,{Component} from 'react';
import '../scss/page.scss';

class Card extends Component{
    constructor(){
        super();

        // 组件状态
        this.state={
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
           ],
           currentindex:0
        }
        // 在constructor中绑定this 或者在56行绑定
        this.handlerNext=this.handlerNext.bind(this);
    }

    // 事件处理函数默认没有this,需手动绑定
    handlerNext(){
        let idx=this.state.currentindex;
        if(idx>=this.state.data.length-1){
            idx=0;
        }else{
            idx++;
        }
        // 修改state（要用特定方法）
        this.setState({
            currentindex:idx,
        })
    }

    // 组件UI
    // 组件要显示什么就return什么
    render(){
        let {currentindex,data}=this.state;
        return (
        <div>
            <button onClick={this.handlerNext}>下一位</button>
            {
                data.map((item,idx)=>{
                    // jsx语法：
                    return <div className="card" key={item.name} style={{display:idx==currentindex?'block':'none'}}>
                        <img src={item.photo}/>
                        <div className="info">
                            <h4>{item.name}</h4>
                            <p>性别：{item.gender}</p>
                            <p>年龄：{item.age}</p>
                        </div>
                    </div>
                })
            }
        </div>
        )
    }
}

export default Card;