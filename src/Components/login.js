import React, { useState} from 'react'
import {withRouter} from 'react-router-dom'
import '../../assets/css/login.css'
const axios = require('axios')

const Login = (props) => {
    let [state, setLogin] = useState({
        login: true,
        mytext:"Enter password to initiate connection"
    });
    let onChangeHandler = ()=> {
        if(!state.login) {
            setLogin({
                login: true,
                mytext:"Enter password to initiate connection"
            });
        }
    }
    let myStyle = {
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
    let submitHandler = (e) => {
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
                    props.history.push("/dashboard");
                }
                else {
                    setLogin({
                        login:false,
                        mytext:"Incorrect Password"
                    });
                }
            });
    }
        return(
            <div className="myContainer">
                <div className="myContent">
                    <form onSubmit={submitHandler}>
                        <h1>ACCESS BOT-CR34</h1><hr />
                        <h4 style={{fontSize:30}}>{state.mytext}</h4><br />
                        <input onChange={onChangeHandler} style={myStyle} id="password" type="password" autoFocus/>
                    </form>
                </div>
            </div>
        );
}
export default withRouter(Login);