import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./App.css";
import Login from "./login";
import Home from "./home";


const App = () => {

  return(
    <Router forceRefresh={true}>
      <div className='App'>
        <nav>
            <h1>Log in</h1>
            <ul>
              <li>
                <Link to="/"></Link>
              </li>
              <li>
                <Link to="/dashboard"></Link>
              </li>
            </ul>
            <footer></footer>
        </nav>

        <div className='content'>
          <switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path='/dashboard'>
              <dashboard />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
          </switch>

        </div>

      </div>
    </Router>




   /* <div>
      {(typeof data.members === 'undefined') ? (
        <p>Loading...</p>
      ): (
        data.members.map((member ,i) => (
          <p key={i}>{member}</p>
        ))
      )}
    </div>*/
  )
};


export default App;