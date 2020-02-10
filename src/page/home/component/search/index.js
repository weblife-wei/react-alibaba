import React, { Component } from 'react'
import './index.css'
export default class Search extends Component {
    onFocus=()=>{
        let pleaseHolder = document.getElementById("pleaseHolder");
        let holder = document.getElementById("holder");
        
        pleaseHolder.style.display="none";
        holder.focus();
    }
    onBlur=()=>{
        let pleaseHolder = document.getElementById("pleaseHolder");
        let holder = document.getElementById("holder");

        pleaseHolder.style.display="block";
        holder.blur();
    }
    render() {
        return (
            <div className="search-box" style={{width:"490px",height:"60px",position:"relative",border:"0px",background:"none",margin:"0 auto"}}>
                                    <span id="pleaseHolder" className="search-topic" style={{left:"15px",display:"block"}} onClick={this.onFocus}>请输入职位关键词</span>
                                    <div style={{width:"100%",height:"100%",background:"#FFF",position:"absolute",opacity:"0.1",filter:"alpha(opacity=10)"}}></div>
                                    <input id="holder" className="search-text" type="text" maxLength="30" topic="请输入职位关键词" onFocus={this.onFocus} onBlur={this.onBlur} style={{
                                        width:"368px",
                                        height:"40px",
                                        paddingTop:"6px",
                                        marginTop:"6px",
                                        marginLeft:"10px",
                                        boxSizing:"border-box",
                                        borderRadius:"3px",
                                        
                                    }}/>
                                    <input className="search-btn" type="submit" style={{
                                        color:"#FFF",
                                        background:"#F37327",
                                        fontSize:"14px",
                                        width:"92px",
                                        height:"40px",
                                        borderRadius:"3px",
                                        border:"0",
                                        marginTop:"10px",
                                        marginLeft:"10px",
                                        position:"relative",
                                        zIndex:"2"
                                    }} value="搜索"/>
                                </div>
        )
    }
}
