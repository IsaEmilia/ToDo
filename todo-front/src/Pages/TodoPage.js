import React, {useState, useEffect}  from "react";
import { Form } from "../Components/Form";
import { TodoTables } from "../Components/TodoTables";

const TodoPage = () => {

    const [todo, setTodo] = useState([])
    const [addTodo, setAddTodo] = useState('')
  
    useEffect(() => {
        fetch('/',
        {method: 'GET',
             headers: {
                "content-type": "application/json; charset=UTF-8"}}).then(response => {
                if(response.ok){
                    console.log(response)
                
                return response.json()
            }
        }).then(data => {
            setTodo(data)
        })
    ,[]})
  
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
      <div>
      <p>ärrinmurrin</p>
        <Form userInput={addTodo} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit}/>
        <TodoTables todoTable={todo}>{console.log(todo,"todo")}</TodoTables>
      </div>
    )
  }
  
  export default TodoPage;
 