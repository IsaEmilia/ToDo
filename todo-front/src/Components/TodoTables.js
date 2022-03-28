import React, {useState} from 'react';


// Display database entries in a table. 

export const TodoTables = ({ todoTable }) => {
    const [todo, setTodo] = useState(todoTable)

    console.log(todoTable,"todoTable")

    const handleRemove = () => {
        console.log('click')
    }

    const taskDone = (id) => {
        console.log('style change', id) 
        todoTable[0]?.map((todo) => {
            if (todo.id === id) {
              const updatedItem = {
                ...todo,
                isComplete: true,
              };
              return updatedItem;
            }
            return todo;
          });
          setTodo(todoTable); 
       
    }

    return (
        <div>
            <table >
                <tbody>
                    <tr>
                        <th>Task</th>
                        <th>Date</th>  
                        <th>Actions</th>    
                    </tr>
                </tbody>

                {todoTable[0]?.map(todo => {

                    return (
                    <tbody key={todo.id}>    
                        <tr  >
                            <td style={{
                                    textDecoration: todo.isComplete
                                      ? 'line-through'
                                      : 'none',
                                    }}>{todo.content}
                            </td>
                            <td style={{
                                    textDecoration: todo.isComplete
                                      ? 'line-through'
                                      : 'none',
                                    }}>{todo.date_created}
                            </td>
                            <td>
                                <a onClick={handleRemove}>&#10008;</a>
                                <a>&#10000;</a>
                                <a onClick={() => taskDone(todo.id)}>&#10004;</a>
                            </td> 
                        </tr>
                    </tbody>
                    )
                },)
                }
            </table>
        </div>
    )
}
