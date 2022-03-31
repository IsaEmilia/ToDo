import React from 'react';
import "./App.css";
import TodoPage from './Pages/TodoPage';


const App = () => {
  console.log("am app")

  return(
    
      <div className='App'>
              <TodoPage />
      </div>
    
  
  )
}

export default App;