import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import TodoPage from './Pages/TodoPage';
import Dashboard from './Pages/Dashboard';


const App = () => {
  console.log("am app")

  return(
  <div className='App'>
    <Router>
      <Switch>
        <Route path='/'>
          <TodoPage />
        </Route>
        <Route path='/Dashboard'>
          <Dashboard/>
        </Route>
      </Switch>
    </Router>
  </div>
  )
}

export default App;