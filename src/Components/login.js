import React, {Component} from 'react'
import '../../assets/css/login.css'
const axios = require('axios')

class Login extends Component {
    state = {
        mytext:"Enter password to initiate connection"
    }
    onChangeHandler = ()=> {
        this.setState({
            mytext:"Enter password to initiate connection"
        });
    }
    myStyle = {
        color : "black",
        fontSize: "xx-large",
        height: "25px",
        resize: "none",
        width: "40%",
        backgroundColor:" rgb(255, 255, 255)",
        padding: "1%",
        textAlign: "center",
        borderRadius: "50px",
        border:"none"
        }
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
                if(response.data === "success") {
                    this.props.history.push("/dashboard");
                }
                else {
                    this.setState({
                        mytext:"Incorrect Password"
                    });
                }
            });
    }
    render = () => {
        return(
            <div className="myContainer">
                <div className="myContent">
                    <form onSubmit={this.submitHandler}>
                        <h1>ACCESS BOT-CR34</h1><hr />
                        <h4 style={{fontSize:30}}>{this.state.mytext}</h4><br />
                        <input onChange={this.onChangeHandler} style={this.myStyle} id="password" type="password" autoFocus/>
                    </form>
                </div>
            </div>
        );
    }
}
export default Login;