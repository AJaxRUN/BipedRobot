import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Components/Login/login'
import Dashboard from './Components/Dashboard/dashboard'

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={Login} />
                    <Route path="/dashboard" component={Dashboard} />
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("App"));