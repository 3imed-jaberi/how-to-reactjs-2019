import React, { Component } from 'react';
import PropTypes from 'prop-types';


class PropsComponent extends Component {
  render() {
    return (
      <div>
        <h1> {this.props.msg} </h1>
      </div>
    )
  }
}


// put default value to our props 📍 .. 
PropsComponent.defaultProps = {
  msg: "Your msg property is empty ! so we catch this call 🪔 .. "
}

// check all props ==> validation ✔️ .. 
PropsComponent.propTypes = {
  msg: PropTypes.string.isRequired
}


export { PropsComponent };
