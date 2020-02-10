import React, { Component } from 'react'
import './index.css'
export default class Form extends Component {
    render() {
        return (
            <div>
                <div className="index-mid-box" style={{height:"100%"}}>
                        <form className="J-search-form">
                            <div className="float-mid" style={{top:"50%",marginLeft:"-245px",marginTop:"-145px"}}>
                                {this.props.children}
                            </div>
                        </form>
                    </div>
            </div>
        )
    }
}
