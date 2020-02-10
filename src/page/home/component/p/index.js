import React, { Component } from 'react'
import './index.css'
export default class P extends Component {
    constructor(props){
        super(props)
        this.state={
            text:this.props.text,
            style:this.props.style
        }
    }
    render() {
        return (
                <p className="en-world" style={this.state.style}>{this.state.text}</p>
            
        )
    }
}
