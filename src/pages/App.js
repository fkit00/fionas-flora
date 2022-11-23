import React from 'react';
import './App.css';
import LoginButton from '../components/login.js'
import LogoutButton from '../components/logout';
import logo from '../planting.png'
import { useAuth0 } from '@auth0/auth0-react';
import {
    BrowserRouter,Routes,
    Route, Link
  } from "react-router-dom";
import YourPlants from './YourPlants';
import Add from './AddAPlant';
import NoPage from './NoPage';
import Layout from './Layout';
import Home from './Home';

// so now i need a nav bar 
//nav bar will contain home, your app, and add a plant section
// i need to map an array of objects - which will have watered status 


function App() {

  const { isAuthenticated } = useAuth0();


  return (
   
    <div className="App"> 
    <header className="App-header">
      <h1 className="Title">Fiona's Flora</h1>
      </header>
      {!isAuthenticated ? (
       <div>
      <h2 className="sub-title"> The plant app for people who can't keep their stuff together</h2>
      <LoginButton/>    <div>
    <img className="login-plant" src={logo} alt=" a plant in soil with a spade"/>
    </div>
    </div>
      ):
      <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="yourplants" element={<YourPlants />} />
          <Route path="addaplant" element={<Add />} />
          <Route path="404" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
 
      </div>
      }
    </div>
  );
}






export default App;
