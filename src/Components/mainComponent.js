import React, { Component } from 'react'
import "../../assets/css/mainComponent.css"
import "../../assets/css/orb.scss"
// import "../../assets/css/materialize/js/materialize"
// import "../../assets/css/materialize/css/materialize.min.css"
import eavesdrop from '../../assets/js/LoadData'
import axios from 'axios'

const orb = <div className='wrap'>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div>
<div className='c'></div><div className='c'></div><div className='c'></div><div className='c'></div><div className='c'></div><div className='c'></div><div className='c'></div><div className='c'></div><div className='c'></div><div className='c'></div><div className='c'></div><div className='c'></div><div className='c'></div><div className='c'></div><div className='c'></div><div className='c'></div><div className='c'></div><div className='c'></div><div className='c'></div><div className='c'></div><div className='c'></div><div className='c'></div><div className='c'></div></div>

class MainComponent extends Component {
    // buttonList = ["Walk","Learn","Load","Save"]
    switchBtnCls = ["btn-floating", "btn-large", "halfway-fab", "z-depth-3","grey"]
    state = {
        switchBtn: false
    }
    switchBtnHandler = () => {
        if(!this.state.switchBtn) {
            this.switchBtnCls.pop()
            this.switchBtnCls.push("pulse", "blue")
            eavesdrop("connect");
        }
        else {
            this.switchBtnCls.pop()
            this.switchBtnCls.pop()
            this.switchBtnCls.push("grey")
            eavesdrop('disconnect');
            // axios.get("/disconnect");
        }
        this.setState({
            switchBtn: !this.state.switchBtn
        })
    }
    componentDidMount() {
        // document.addEventListener('DOMContentLoaded', function() {
        //     var elems = document.querySelectorAll('.fixed-action-btn');
        //     var instances = M.FloatingActionButton.init(elems, {
        //       direction: 'left',
        //       hoverEnabled: false
        //     });
        //   });
    } 
    render() {
        return(
            <div className="card  z-depth-4" style={{borderRadius: "8%"}}>
                <div className="card-image" style={{background:"black",color:"white",textAlign:"center",padding:"1%"}}>
                    <br></br>
                    <h4 style={{color:"rgb(255, 147, 165)"}}>Status Information...</h4>
                    <div>
                        <h6>Connection Information...</h6>
                        {orb}
                        <h6>State Information...</h6>
                        <br></br><br></br><br></br>
                    </div>
                    
                    {/* <span className="card-title">Body</span> */}
        <button onClick={this.switchBtnHandler} className={this.switchBtnCls.join(" ")}>{!this.state.switchBtn?"OFF":"ON"}</button>
        {/* <div className="fixed-action-btn">
            <a className="btn-floating btn-large red">
                <i className="large material-icons">mode_edit</i>
            </a>
            <ul>
                <li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>
                <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a></li>
                <li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
                <li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a></li>
            </ul>
        </div> */}
                </div>
                <div className="card-content" style={{background:"black",overflowY:"scroll"}}>
                    <div style={{color:"white",textAlign:"center"}}>
                        <p>
                            <span className="Align"><button className="btn btn-large waves-effect waves-light blue">Walk</button></span>{"        "}
                            <span className="Align"><button className="btn btn-large waves-effect waves-light blue">Learn</button></span>
                        </p>
                        <br/>
                        <p>
                            <span className="Align"><button className="btn btn-large waves-effect waves-light blue">LOAD</button></span>{"        "}
                            <span className="Align"><button className="btn btn-large waves-effect waves-light blue">SAVE</button></span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainComponent;