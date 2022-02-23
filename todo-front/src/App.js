import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./App.css";
import Login from "./Login";
import Home from "./Home";
import Todos from './TodoTables';


const App = () => {

  return(
    <Home />
  )
}


export default App;