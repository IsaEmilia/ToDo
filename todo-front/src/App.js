import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import TodoPage from './Pages/TodoPage';


const App = () => {
  return(
  <div className='App'>
    <Router>
      <Routes>

        <Route path='/'>
          <TodoPage/>
        </Route>

      </Routes>

    </Router>
  </div>
  )
}

export default App;