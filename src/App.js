import React from 'react'
import Navbar from './components/NavBar'
import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter as Router } from "react-router-dom";

import { Switch, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
       
      </Switch>
      
    </Router>
      

    </div>
  );
}

export default App;
