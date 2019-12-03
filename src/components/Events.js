/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';



class Events extends Component {

  // not required 🩹 ..
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }

    // 1st way
    // this.incremantHandler  = this.incremantHandler.bind(this);
    // this.decremantHandler  = this.decremantHandler.bind(this);
    // this.reInitCounterHandler  = this.reInitCounterHandler.bind(this);
  }
  


  // 2nd way
  // incremantHandler = () => this.setState((state) => ({ counter: state.counter + 1 }));
  // decremantHandler = () => this.setState((state) => ({ counter: state.counter - 1 }));
  // reInitCounterHandler = () => this.setState({ counter: 0 });



  // all event handlers 🧙‍♂️ .. 
  incremantHandler(){
    this.setState((state,props) => ({ counter: state.counter + 1 }));
  }

  decremantHandler(){
    this.setState((state) => ({ counter: state.counter - 1 }));
  }

  reInitCounterHandler(){
    this.setState({ counter: 0 });
  }
  

  // using .bind(this) is the 3rd way .. 

  render() {
    return (
      <div>

        <h1 style={{ textAlign: 'center' }}> {this.state.counter} </h1>

        <button className="btn btn-primary" onClick={this.incremantHandler.bind(this)} >
          Increment ➕ 
        </button>     
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button className="btn btn-warning" style={{ color: 'white' }} onClick={this.decremantHandler.bind(this)} > 
          Decrement ➖ 
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button className="btn btn-danger center" onClick={this.reInitCounterHandler.bind(this)}>
           RéInit Counter 🔄 
        </button>

      </div>
    )
  }
}


export { Events };