import React, { Component } from 'react'
import "../../assets/css/mainComponent.css"
// import "../../assets/css/materialize/js/materialize"
// import "../../assets/css/materialize/css/materialize.min.css"
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
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.fixed-action-btn');
            var instances = M.FloatingActionButton.init(elems, {
              direction: 'left',
              hoverEnabled: false
            });
          });
    } 
    render() {
        return(
            <div className="card" style={{borderRadius: "5%"}}>
                <div className="card-image" style={{color: "black",textAlign:"center",padding:"1%"}}>
                    <h4>Status Information</h4>
                    <div style={{textAlign:"left"}}>
                        <h6>Connection Information...</h6>
                        <h6>State Information...</h6>
                    </div>
                    <span className="card-title">Body</span>
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