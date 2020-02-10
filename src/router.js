import React, { Component } from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Home from './page/home'
import Nomatch from './page/nomatch'
export default class router extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <App>
                        <Admin>
                            <Switch>
                                <Route  path="/home" component={Home}/>
                                <Route component={Nomatch}/>
                            </Switch>
                        </Admin>
                    </App>
                </HashRouter>
            </div>
        )
    }
}
