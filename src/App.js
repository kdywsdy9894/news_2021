import React from "react";
import Headlines from "./component/headlines.js";
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className='modes'>
          <Headlines />
        </div>
      </div>
    )
  }
}

export default App;