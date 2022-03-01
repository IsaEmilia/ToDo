import React, { useState, useEffect } from 'react';
import "./App.css";
import {TodoTables} from './Components/TodoTables';
import {Form} from './Components/form';


const App = () => {

  const [todo, setTodo] = useState([])
  const [addTodo, setAddTodo] = useState('')

  useEffect(() => {
      fetch('').then(response => {
          if(response.ok){
              return response.json()
          }
      }).then(data => setTodo(data))
  },[])

  const handleFormChange = (inputValue) => {
    setAddTodo(inputValue)
    console.log(inputValue)
  }

  const handleFormSubmit = () =>{
    fetch('/create', {
      method: 'POST',
      body: JSON.stringify({
        content: addTodo
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json())
      .then(message => 
        {console.log(message)
        setAddTodo('')
        getLatestTodos()
        })
  }
  
  const getLatestTodos = () => {
    fetch('/').then(response => {
      if(response.ok){
        return response.json()
      }
    }).then(data => setTodo(data))
  }

  return(
    <>
      <Form userInput={addTodo} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit}/>
      <TodoTables todoTable={todo} />
    </>
  )
}


export default App;