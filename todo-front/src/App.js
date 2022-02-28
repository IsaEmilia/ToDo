import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./App.css";
import TodoTables from './Components/TodoTables';


const App = () => {

  return(
    <TodoTables />
  )
}


export default App;