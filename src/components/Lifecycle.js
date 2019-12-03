/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
import { unmountComponentAtNode } from 'react-dom';


class Lifecycle extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: [
        '🐱',
        '🐰',
        '🐼',
        '🐦',
        '🦁',
        '🦢',
        '🐝',
        '🐯',
        '🐙'
      ],
      msg: ' Lifecycle Hook ⚒ ! ',
      displayMsg: true
    }

    console.log('********* 1️⃣ - Constructor *********');
  }


  // Birth of your component 👶 .. 
  componentDidMount(){
    console.log('********* 3️⃣ - ComponentDidMount *********');
  }

  // Growth of your component 👨 .. 
  componentDidUpdate(){ // can add params like prevProps / prevState .. 
    console.log('********* 4️⃣/5️⃣ - ComponentDidUpdate *********');
  }

  // Death of your component ⚰️ .. 
  componentWillUnmount(){
    console.log('********* 4️⃣/5️⃣ - ComponentWillUnmount *********');
  }

  displayUnmoutedEffect(){
    // here we display the unmounted msg 👀 .. 
    // Please don't be afraid of this code 😨 🤯 .. 
    // ==> This is part of the `REACT` advanced tutorial 😇 ..
    return unmountComponentAtNode(document.getElementById('root'));
  } 


  render() {
    console.log('********* 2️⃣ - Render *********');
    return (
      <div>
         <h1> { this.state.msg } </h1>
         <button className='btn btn-secondary' onClick={() => this.setState({ msg: `[${this.state.data.toString()}]` })} > Update ❤️ </button>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <button className='btn btn-secondary' onClick={this.displayUnmoutedEffect.bind(this)}> UnMount 💔 </button>
      </div>
    )
  }
}



export { Lifecycle };
