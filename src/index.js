import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    some = "hii"
    render = () => {
        return(
            <h1>{this.some} Arjun</h1>
        );
    }
}
export default App;
ReactDOM.render(<App />, document.getElementById("App"));