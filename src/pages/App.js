import React from 'react';
import './App.css';
import LoginButton from '../components/login.js'
import logo from '../planting.png'


function App() {



  return (
   
    <div className="App"> 
    <header className="App-header">
      <h1 className="Title">Fiona's Flora</h1>
      </header>
      <h2 className="sub-title"> The plant app for people who can't keep their shit together</h2>
      <LoginButton/>     
    <img className="login-plant" src={logo} alt=" a plant in soil with a spade"/>
    </div>
  );
}

export default App;
