import React, {Component} from 'react'
import '../../../assets/css/login.css'
const axios = require('axios')

class Login extends Component {
    submitHandler = (e) => {
            e.preventDefault();
            axios.post("http://127.0.0.1:5000/",{pass:e.target.value}).then(response =>{
                if(response === "success")
                    this.props.history.push("/dasboard");
                else
                    alert("Incorrect password");
            });
    }
    render = () => {
        return(
            <div className="container">
                <div className="content">
                    <form onSubmit={this.submitHandler}>
                        <h1 style={{fontSize:50}}>ACCESS BOT-CR34</h1><hr />
                        <h4 style={{fontSize:30}}>Enter password to initiate connection</h4>
                        <input type="password" />
                    </form>
                </div>
            </div>
        );
    }
}
export default Login;