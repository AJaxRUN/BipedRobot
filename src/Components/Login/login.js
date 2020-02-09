import React, {Component} from 'react'
import '../../../assets/css/login.css'
const axios = require('axios')

class Login extends Component {
    submitHandler = (e) => {
            e.preventDefault();
            axios({
                method: 'POST',
                // headers: {
                //     'Content-Type': 'multipart/form-data'
                //   },
                url: 'http://127.0.0.1:5000/validate',
                data: {
                  pass: document.getElementById("password").value
                }
              }).then(response =>{
                if(response.data === "success")
                    this.props.history.push("/dashboard");
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
                        <input id="password" type="password" />
                    </form>
                </div>
            </div>
        );
    }
}
export default Login;