import React, { Component } from 'react'
import './index.css'
export default class Img extends Component {
    constructor(props){
        super(props);
        this.state={
            src:this.props.src
        }
    }
    render() {
        return (
            <div>
                <img src={this.state.src} alt=""/>
            </div>
        )
    }
}
