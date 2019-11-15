/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';



class ClassComponent extends Component {
  render() {
    return (
      <div>
         <h1> Hello, I'm Class Component ✌️ ! </h1>
         { /* disable warning : <span role="img" aria-label="✌️">✌️</span>  || // eslint-disable-next-line */ }
      </div>
    )
  }
}


export default ClassComponent;
