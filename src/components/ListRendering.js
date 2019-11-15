import React, { Component } from 'react';



class ListRendering extends Component {


  constructor(props){
    super(props);
    this.state = {
      Data: [ 
        'Apple 🍎',
        'Pear 🍐',
        'Banana 🍌',
        'Grape 🍇',
        'Strawberries 🍓',
        'Potato 🥔',
        'Avocado 🥑',
        // 'Apple 🍎' // to display worng ❌ .. 
      ]


      // 2nd way .. 
      // Data: [ 
      //   { id: '1st', name: 'Apple 🍎' },
      //   { id: '2nd', name: 'Pear 🍐' },
      //   { id: '3rd', name: 'Banana 🍌' },
      //   { id: '4th', name: 'Grape 🍇' },
      //   { id: '5th', name: 'Strawberries 🍓' },
      //   { id: '6th', name: 'Potato 🥔' },
      //   { id: '7th', name: 'Avocado 🥑' }
      // ]

    }
  }
  

  render() {
    return (
      <div>
        <ul>

          
        { 
          // worng ❌ .. 
          // this.state.Data.map( item => <li key={item}> {item} </li>)
        }

        { this.state.Data.map( (item,index) => <li key={index}> {item} </li>) }

          { 
            // 2nd way 💯 .. 
            // this.state.Data.map( item => <li key={item.id}> {item.name} </li>) 
          }

        </ul>
      </div>
    )
  }
}


export default ListRendering;
