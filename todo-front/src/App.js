import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import TodoPage from './Pages/TodoPage';


const App = () => {
  console.log("am app")

  return(
  <div className='App'>
    <Router>
      <Switch>
        <Route path='/'>
          <TodoPage />
        </Route>
      </Switch>
    </Router>
  </div>
  )
}

export default App;