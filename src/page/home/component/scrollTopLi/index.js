import React, { Component } from 'react';
import './index.css'
export default class ScrollTopLi extends Component {
    constructor(props){
        super(props)
        this.state={
            data:this.props.data
        }
        // this.getPositionList = this.getPositionList.bind(this);
    }   
    componentDidMount(){
        this.scrollTop()
    }
    scrollTop=()=>{
        let speed=40
        let demo=document.getElementById("demo");
        let demo2=document.getElementById("demo2");
        let demo1=document.getElementById("demo1");
        demo2.innerHTML=demo1.innerHTML
        function Marquee(){
            if(demo2.offseHeight-demo.scrollTop<=0)
                demo.scrollTop-=demo1.offsetHeight
            else{
                demo.scrollTop++
            }
        }
        let MyMar=setInterval(Marquee,speed)
        demo.onmouseover=function() {clearInterval(MyMar)}
        demo.onmouseout=function() {MyMar=setInterval(Marquee,speed)}
    }
    render() {
        const {data} = this.state;
        return (
            <div id="demo">
                <div id="demo1">
                    <ul className="position-list">
                    {
                        data.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <a data-xux-log="text=首页推荐职位" className="position"  >{item.name}</a>
                                    <em className="time">{item.applyTimeDesc}</em>
                                    <em className="city">{item.workLocation}</em>
                                </li>
                            )
                        })
                    }
                    </ul>  
                </div>
                <div id="demo2"></div>
            </div>

        )
    }
}
