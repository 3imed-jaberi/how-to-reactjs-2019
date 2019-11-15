import React from 'react';
import logo from './assets/img/react.png';
import './App.css';
// All Components .. 
import ClassComponent from './components/ClassComponent';

const App = () => {
  return (
    <div className="main"> { /* => using basic css class */ }
      <h1 className="alert alert-success" style={{ background: "green", color: "white",   marginTop: '100px' }}> Welcome to <img src={logo} /> ! </h1> {/* => using bootstrap class */}
      <br />
      {/* content */}
      <ClassComponent />
    </div>
  );
}


export default App;
