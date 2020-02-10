import React, { Component } from 'react'
import './index.css'
export default class NewPositionRightImg extends Component {
    constructor(props){
        super(props)
        this.state={
            imgs:this.props.data
        }
    }
    render() {
        const {imgs} = this.state
        return (
            <div style={{width:"310px",float:"right"}}>
                {
                    imgs.map((item,index)=>{
                        return(
                            <a key={index} className={item.class} href={item.href} data-spm-click={item.click} style={{textAlign:"center",lineHeight:"140px"}}>
                                <img style={{width:"179px",verticalAlign:"middle"}} src={item.src} alt=""/>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}
