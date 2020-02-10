import React, { Component } from 'react'
import './index.css'
export default class NewPosition extends Component {
    constructor(props){
        super(props)
        this.state={
            style:this.props.style
        }
    }
    render() {
        const {style} = this.state
        return (
            <div className="newPosition" style={style}>
                <div className="newPosition-content" style={{width:"1180px",height:"300px",margin:"32px auto"}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
