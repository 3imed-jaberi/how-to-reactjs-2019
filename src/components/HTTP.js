import React, { Component } from 'react';
import { getUsers } from '../services';

const GetRequest = ({ data, render}) => (render) ? data.map( user => <div style={{ backgroundColor: 'white', color: 'green', margin: 5 }} key={user.id}> { user.firstName } </div> ) : null ;


class HTTP extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      users: [],
      GetReq: false
    }
  }

  handleGetReqButton(){
    getUsers()
      .then( res => this.setState({ users: res.data }))
      .then( res => this.setState({ GetReq: !this.state.GetReq }))
      .catch(err => console.log(err));
  }



  render() {
    return (
      <div>
        <button onClick={this.handleGetReqButton.bind(this)}> GET REQUEST </button>
        <p> Follow the helpers dir for more details .. </p>
        <GetRequest data={this.state.users} render={this.state.GetReq} />
      </div>
    )
  }
}

export { HTTP };
