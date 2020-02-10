import React, { Component } from 'react'
import './index.css'
export default class NewPositionList extends Component {
    render() {
        return (
            <div className="newPosition-list" style={{width:"850px",height:"300px"}}>
                <div className="more-positon">
                    最新职位
                    <a href="https://job.alibaba.com/zhaopin/positionList.html?" className="clickMorePosition">更多</a>
                </div>
                {this.props.children}
            </div>  
        )
    }
}
