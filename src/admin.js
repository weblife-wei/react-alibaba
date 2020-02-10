import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
export default class Admin extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                {this.props.children}
                <Footer></Footer>         
            </div>
        )
    }
}
