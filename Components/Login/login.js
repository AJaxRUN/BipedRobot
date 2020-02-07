import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import '../../assets/css/login.css'

class Login extends Component {
    changeHandler = (event) => {
        if(event.target.value === "arjun")
            alert("Success!!");
    }
    render = () => {
        return(
            <div className="container">
                <div className="content">
                    <h1 style={{fontSize:50}}>ACCESS BOT-CR34</h1><hr />
                    <h4 style={{fontSize:30}}>Enter password to initiate connection</h4>
                    <input type="password" onChange={this.changeHandler}></input>
                </div>
            </div>
        );
    }
}
export default Login;