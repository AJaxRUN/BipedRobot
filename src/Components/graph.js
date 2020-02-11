import { AreaChart } from "reaviz";
import React from "react"

const data = [
    {
      key: new Date('11/29/2019'),
      data: 10
    },
    {
      key: new Date('11/30/2019'),
      data: 14
    },
    {
      key: new Date('12/01/2019'),
      data: 5
    },
    {
      key: new Date('12/02/2019'),
      data: 18
    }
  ];
  

const Graph = () => {
    return (
    <div className="card z-depth-4" style={{color:"white",textAlign:"center", background:"black", borderRadius:"5%", maxHeight:"400px"}}>
        <div className="row" style={{margin:"0"}}>
            <h1>Learning Curve</h1>
        </div>
        <div className="row" >
            <AreaChart width={350} height={250} data={data} />
        </div>
    </div> )
    }

export default Graph;