import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import TodoPage from './Pages/TodoPage';
import Dashboard from './Pages/Dashboard';
import { Update } from './Components/Update';

const App = () => {
  console.log("am app")

  return(
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/'>
            <TodoPage />
          </Route>
          <Route path='/Dashboard'>
            <Dashboard/>
         </Route>
            <Route path='/update'/>
           <Update />
        </Switch>
      </div>
    </Router>
  
  )
}

export default App;