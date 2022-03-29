import React, {useState, useEffect}  from "react";
import axios from 'axios';
import { Form } from "../Components/Form";
import { TodoTables } from "../Components/TodoTables";
import Header from "../Components/Header";

const TodoPage = () => {

    const [todo, setTodo] = useState([])
    const [addTodo, setAddTodo] = useState("")
  
    useEffect(() => {
        axios('http://localhost:5000').then(result => {setTodo(result.data)})
    },[])
    useEffect(() => {
      axios('http://localhost:5000').then(result => {setTodo(result.data)}) //Update todo list without refreshing page
  },[addTodo])
  

    // log form changes in console for debugging purposes
    const handleFormChange = (inputValue) => {
      setAddTodo(inputValue)
     // console.log(inputValue)
    }
  
    // create database entries when submitting form
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
          },[])      
    }
    
    const getLatestTodos = () => {
      fetch('/').then(response => {
        if(response.ok){
           
          return response.json()
        }
      }).then(data => setTodo(data))
    }


    return(
      <div>
        <Header/>
        <TodoTables todoTable={todo}></TodoTables>
        <Form userInput={addTodo} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit}/>
      </div>
    )
  }
  
  export default TodoPage;
 