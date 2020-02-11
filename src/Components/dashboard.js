import React from 'react'
import axios from 'axios'
import "../../assets/css/dashboard.css"
import MainComponent from './mainComponent'
import DataBoard from "./dataBoard"
import Graph from "./graph"
import "../../assets/css/materialize/js/materialize"
import "../../assets/css/materialize/css/materialize.css"

const Dashboard = (props) => {
    // let data = <h1 style={{fontSize:50}}>Please log in first!</h1>
    // axios({
    //     method: 'GET',
    //     url: 'http://127.0.0.1:5000/check'
    //   }).then(response =>{
    //     if(response.data === "success")
    //         data = <h1 style={{fontSize:50}}>This is  BOT-CR34</h1>
    // });
    // return(
    //     data
    // )

    return(
        <div>
            <div className="row">
                <p className="col s5 offset-s4 line-1 anim-typewriter" style = {{fontSize: "500%"}}>BOT-CR34 CP</p>
            </div>
            <div className="row">
                <div className="col s4">
                    <DataBoard />
                </div>
                <div className="col s4">
                    <MainComponent />
                </div>
                <div className="col s4">
                    <Graph />
                </div>
            </div>
      </div>
    )
}

export default Dashboard;