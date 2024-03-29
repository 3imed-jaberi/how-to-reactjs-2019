/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

// import css code .. 
import './App.css';

// import img .. 
import logo from './assets/img/react.png';



// import all components .. 
  // import ClassComponent from './components/ClassComponent';
  // import FunctionalComponent from './components/FunctionalComponent';
  // import StateComponent from './components/StateComponent';
  // import PropsComponent from './components/PropsComponent';
  // import Events from './components/Events';
  // import ReverseProps from './components/ReverseProps';
  // import ContditionalRendering from './components/ContditionalRendering';
  // import ListRendering from './components/ListRendering';
  // import Lifecycle from './components/Lifecycle';
//
// 🔝 ===> confused 🤔 ! //


import Routes from './routes';


const App = () => {
  return (
    <div className="main"> { /* => using basic css class */ }
      <h1 className="alert alert-success" style={{ background: "green", color: "white",   marginTop: '100px' }}> Welcome to <img src={logo} /> ! </h1> {/* => using bootstrap class */}
      <br />
      {/* content */}
      {/* <ClassComponent /> */}
      {/* <FunctionalComponent /> */}
      {/* <StateComponent /> */}
      {/* add / reme props */}
      {/* <PropsComponent msg="Welcome, I'm Imed Jaberi 👋"  />  */}
      {/* <Events /> */}
      {/* <ReverseProps /> */}
      {/* <ContditionalRendering /> */}
      {/* <ListRendering /> */}
      {/* <Lifecycle /> */}
      <Routes />
    </div>
  );
}


export default App;
