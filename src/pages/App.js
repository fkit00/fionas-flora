import React from 'react';
import './App.css';
import LoginButton from '../components/login.js'
import logo from '../planting.png'
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const { isAuthenticated } = useAuth0();


  return (
   
    <div className="App"> 
    <header className="App-header">
      <h1 className="Title">Fiona's Flora</h1>
      </header>
      {!isAuthenticated ? (
        <div>
      <h2 className="sub-title"> The plant app for people who can't keep their shit together</h2>
      <LoginButton/>     
    <img className="login-plant" src={logo} alt=" a plant in soil with a spade"/></div>
      ):
      <div>
        woohoo you're in
      </div>}
    </div>
  );
}

export default App;
