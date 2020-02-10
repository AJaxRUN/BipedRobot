import React, { Component } from 'react'
import "../../assets/css/mainComponent.css"
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
        }
        else {
            this.switchBtnCls.pop()
            this.switchBtnCls.pop()
            this.switchBtnCls.push("grey")
        }
        this.setState({
            switchBtn: !this.state.switchBtn
        })
    }
    render() {
        return(
            <div className="card" style={{borderRadius: "5%"}}>
                <div className="card-image">
                    <img src="https://picsum.photos/seed/picsum/200/100" />
                    <span className="card-title">Body</span>
        <button onClick={this.switchBtnHandler} className={this.switchBtnCls.join(" ")}>{!this.state.switchBtn?"OFF":"ON"}</button>
                </div>
                <div className="card-content" style={{background:"black",overflowY:"scroll"}}>
                    <div style={{color:"white",textAlign:"center"}}>
                        <p>
                            <span className="Align"><button className="btn btn-large waves-effect waves-light blue">Walk</button></span>
                            <span className="Align"><button className="btn btn-large waves-effect waves-light blue">Learn</button></span>
                        </p>
                        <br/>
                        <p>
                            <span className="Align"><button className="btn btn-large waves-effect waves-light blue">LOAD</button></span>
                            <span className="Align"><button className="btn btn-large waves-effect waves-light blue">SAVE</button></span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainComponent;