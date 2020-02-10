import React, { Component } from 'react'
import './index.css'
export default class Hot extends Component {
    constructor(props){
        super(props)
        this.state={
            data:this.props.data
        }
        
    }
    render() {
        const {data} = this.state
        return (
            <div className="hot-text" style={{textAlign:"center"}}>
                热门搜索：&nbsp;&nbsp;
                {
                    data.map((item,index)=>{
                        return(
                            <a className="search-key" href={item.href} key={index}>{item.text}</a>
                        )
                    })
                }
            </div>
        )
    }
}
