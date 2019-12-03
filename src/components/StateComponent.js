import React, { Component } from 'react';



class StateComponent extends Component {

  constructor(){
    super();
    this.state = {
      msg: "Hello From State 🪐, I'm Class Component ✌️ !"
    }
  }
  
  render() {
    return (<h1> {this.state.msg} </h1>)
  }
}


export { StateComponent };