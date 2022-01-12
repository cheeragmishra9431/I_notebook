import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import  Alert  from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from 'react';
function App() {
  const [alert, setalert] = useState(null)
  const showAlert=(message,type1)=>{
    setalert({
      msg: message,
      type: type1
    })
    setTimeout(()=>{
      setalert(null); 
    },3000)
  }
  return (
    <>
    <NoteState>

    <Router>

    <Navbar/>
    <Alert alert={alert}/>
      <div className="container">

      <Routes>
          <Route exact path="/">
            <Home showAlert={showAlert}/>
          </Route>
          <Route exact path="/about">
            <About  />
          </Route>
          <Route exact path="/login">
            <Login showAlert={showAlert}/>
          </Route>
          <Route exact path="/signup">
            <Signup showAlert={showAlert}/>
          </Route>
          
        </Routes>
      </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
