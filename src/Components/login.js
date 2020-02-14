import React, { useState, useContext } from 'react'
import {withRouter} from 'react-router-dom'
import '../../assets/css/login.css'
import axios from 'axios'
import AuthContext from "../context/context"

const Login = props => {
    const authContext = useContext(AuthContext)
    let [state, setLogin] = useState({
        error: false,
        mytext:"Enter password to initiate connection"
    });
    let onChangeHandler = ()=> {
        if(state.error) {
            setLogin({
                error: false,
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
            // axios({
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'multipart/form-data'
            //       },
            //     url: '/validate',
            //     data: {
            //       pass: document.getElementById("password").value
            //     }
            //   })
            axios.post("/validate",{pass: document.getElementById("password").value}
            ).then(response =>{
                if(response.data === "success") {
                    setLogin({
                        error:false,
                        mytext:"Welcome back!"
                    });
                    authContext.login = true;
                    props.history.push("/dashboard");
                }
                else {
                    setLogin({
                        error:true,
                        mytext:"Incorrect Password"
                    });
                }
            }).catch(error => {
                console.log(error);
                setLogin({
                error: false,
                mytext:"Unable to connect to network!!"
            })});
    }
    let msg = props.location.msg?props.location.msg:state.mytext
    props.location.msg = null 
        return(
            <div className="myContainer">
                <div className="myContent">
                    <form onSubmit={submitHandler}>
                        <h1>ACCESS BOT-CR34</h1><hr />
                        <h4 style={{fontSize:30}}>{msg}</h4><br />
                        <input onChange={onChangeHandler} style={myStyle} id="password" type="password" autoFocus/>
                    </form>
                </div>
            </div>
        );
}
export default React.memo(withRouter(Login));