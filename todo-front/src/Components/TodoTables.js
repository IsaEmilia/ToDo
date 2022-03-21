import React from 'react';

// Display database entries in a table. 

export const TodoTables = ({ todoTable }) => {
    console.log(todoTable,"todoTable")
    return (
        <div>
            <table key={'lol'}>
                <tr>
                    <th>Task</th>
                    <th>Date</th>  
                    <th>User</th>
                    <th>Actions</th>    
                </tr>

            {todoTable[0]?.map(todo => {
                   
                    return (
                        
                    <tr key={todo.id}>
                        <td>{todo.content}</td>
                        <td>{todo.date_created}</td>
                        <td>{todo.creator}</td>
                        <td><a>♥</a><a>♥</a><a>♥</a></td>
                    </tr>
          
                        
                    )
                }) 
            }
              </table>
        </div>
    )
}
