import React, {Component, Suspense } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Components/login'
import axios from 'axios'
import Dashboard from './Components/dashboard'

// const Lazy = React.lazy(() => import('./Components/dashboard'));
// Axios Defaults 
axios.defaults.baseURL = "http://127.0.0.1:5000"


class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" exact component={Login} />
                        {/* <Route path="/dashboard" render={() => {
                            <Suspense fallback={<h1>Loading...</h1>}>
                                <Lazy />
                            </Suspense>
                        }} /> */}
                        <Route path="/dashboard" component={Dashboard} />
                        <Route render={() => <h1>Error 404!! Don't mess around -_- </h1>} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("App"));