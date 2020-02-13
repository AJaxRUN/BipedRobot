import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Components/login'
import Dashboard from './Components/dashboard'
import axios from 'axios'

// Axios Defaults 
axios.defaults.baseURL = "http://127.0.0.1:5000"


class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/dashboard" component={Dashboard} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("App"));