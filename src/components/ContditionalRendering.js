import React, { Component } from 'react'
import loader from '../assets/img/loader.gif';



class ContditionalRendering extends Component {

  // not required 🩹 ..
  constructor(props){
    super(props);
    this.state = {
      LoadSomeData: false
    }
  }


  render() {
    return (
      <div>
        <h1> Hello, I'm Class Component , Let Try Conditional Rendering ✌️ ! </h1>

        <button className="btn btn-info" onClick={() => this.setState({ LoadSomeData: !this.state.LoadSomeData })}> Manual Control </button>

        <center>
          <br />
          { this.state.LoadSomeData && this.state.LoadSomeData ? <h2 className="alert alert-primary"> Data Fetched ! </h2> : <img src={loader} /> }
        </center>

      </div>
      
    );
  }
}


export default ContditionalRendering;
