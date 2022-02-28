import React, { useState, useEffect } from 'react';
import "./App.css";
import {TodoTables} from './Components/TodoTables';
import {Form} from './Components/Form';


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

  return(
    <>
      <Form userInput={addTodo} onFormChange={handleFormChange}/>
      <TodoTables todoTable={todo} />
    </>
  )
}


export default App;