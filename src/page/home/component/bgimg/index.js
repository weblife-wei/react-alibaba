
import React, { Component } from 'react'
import './index.css'
export default class Bjimg extends Component {
    render() {
        return (
                <div className="index-main">
                    {this.props.children}      
                </div>
        )
    }
}
