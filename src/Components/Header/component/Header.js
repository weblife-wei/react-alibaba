import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import  './index.css';
export default class Header extends Component {
    state={
        current:1
    }
    onClick=()=>{
        let _this = this;
        let ul_menu = document.getElementById("menu");
        let li_list = ul_menu.getElementsByTagName("li");
        for( let i =0; i < li_list.length; i++){
            li_list[i].className="";
            li_list[i].index = i;
            li_list[i].onclick = function(){
                _this.setState({
                    current: this.index
                })
            }
            li_list[this.state.current].className = 'current current-cat'
        }
    }
    render() {
        return (
            <div>
                <div className="head">
                    <div className="head-main">
                        <div className="head-menu">
                            <NavLink to="/home"  className="logo">
                                <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" alt="" height="20"/>
                            </NavLink>
                            <i style={{float: "left",color: "white",fontStyle: "normal",fontSize: "20px",lineHeight: "52px",margin: "0 10px",opacity: "0.8"}}>|</i>
                            <i style={{float: "left",color: "white",fontStyle: "normal",fontSize: "14px",lineHeight: "54px",opacity: "0.8"}}>社招官网</i>
                            <ul className="menu" id="menu" onClick={this.onClick}>
                                <li className="current current-cat"><NavLink to="/home">首&nbsp;&nbsp;页</NavLink></li>
                                <li><NavLink to="/shzp">社会招聘</NavLink></li>
                                <li><NavLink to="/schoolzp">校园招聘</NavLink></li>
                                <li><NavLink to="ljali">了解阿里</NavLink></li>
                                <li><NavLink to="/myself">个人中心</NavLink></li>
                                <div className="login" style={{opacity:"0.8"}}>
                                欢迎来到阿里巴巴集团招聘！
                                <a href="https://passport.alibaba.com/login.htm?appName=hrjob&params=https%3A%2F%2Fjob.alibaba.com%2F%2Fzhaopin%2Findex.htm%3Fspm%3Da2obv.11410903.0.0.2f9544f6rxIllE">登录</a>
                                &nbsp;|&nbsp;
                                <a href="http://member1.taobao.com/member/newbie.htm">注册</a>
                                </div>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
