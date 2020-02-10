import React, {Component} from 'react'

class DataBoard extends Component {
            
    render () {
        return(
            <div className="card z-depth-4" style={{color:"white",textAlign:"center", background:"black", borderRadius:"5%", maxHeight:"400px"}}>
                <div className="row" style={{margin:"0"}}>
                    <span className="col s6 card-title" style={{marginTop:"20px"}}>ACCELEROMETER</span>
                    <span className="col s6 card-title" style={{marginTop:"20px"}}>ACTION</span>
                    <br></br>
                    <table className="col s6 centered">
                            <thead>
                                <tr>
                                    <th>X axis</th>
                                    <th>Y axis</th>
                                    <th>Z axis</th>
                                </tr>
                                </thead></table>
                </div>
                <div className="row" style={{overflowY:"scroll",maxHeight:"270px",margin:"0"}}>
                        <div className="col s6">
                        <table className="centered" style={{margin:"0"}}>
                            <tbody>
                            <tr>
                                <td>Alvin</td>
                                <td>Eclair</td>
                                <td>$0.87</td>
                            </tr>
                            <tr>
                                <td>Alan</td>
                                <td>Jellybean</td>
                                <td>$3.76</td>
                            </tr>
                            <tr>
                                <td>Jonathan</td>
                                <td>Lollipop</td>
                                <td>$7.00</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="col s6">
                            <p>Some action by NN</p>
                            <p>Some action by NN</p>
                            <p>Some action by NN</p>
                            <p>Some action by NN</p>
                            <p>Some action by NN</p>
                            <p>Some action by NN</p>
                            <p>Some action by NN</p>
                            <p>Some action by NN</p>
                            <p>Some action by NN</p>
                            <p>Some action by NN</p>
                            <p>Some action by NN</p>
                            <p>Some action by NN</p>
                            <p>Some action by NN</p>
                            <p>Some action by NN</p>
                            <p>Some action by NN</p>
                            <p>Some action by NN</p>
                            <p>Some action by NN</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DataBoard;