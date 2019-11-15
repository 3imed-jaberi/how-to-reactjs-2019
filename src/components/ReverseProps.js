import React, { Component } from 'react'



class Child extends Component {

  state = {
    childMsg: 'Success reverse props ( data from child to parent ) 👦 !'
  }

  
  sendDataToParent(){
    this.props.sendDataFromChildToParent(this.state.childMsg);
  }


  render() {
    return (<button className="btn btn-primary" onClick={this.sendDataToParent.bind(this)}> send data to parent 👪 </button>);
  }
}


// --------------------------------------------


class Parent extends Component {

  constructor(){
    super();

    this.state = {
      msg: 'Welcome to parent 🤠'
    }
  }


  responseFromChild(res){
    this.setState({ msg: res });
  }


  render() {
    return (
      <>
        <Child sendDataFromChildToParent={this.responseFromChild.bind(this)} />
        <h2>{this.state.msg}</h2>
      </>
    )
  }
}


// ReverseProps
export default Parent ;
