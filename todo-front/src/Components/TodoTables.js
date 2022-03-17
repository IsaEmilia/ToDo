import React from 'react';



export const TodoTables = ({ todoTable }) => {
 console.log(todoTable,"todoTable")
    return (
        <div>

            {todoTable[0]?.map(todo => {
               
                   
                    return (
                        
                        <table key={todo.id}>
                            <tr>
                                <th>Task</th>
                                <th>Date</th>  
                                <th>User</th>
                                <th>Actions</th>
                                
                            </tr>
                            <tr>
                                <td>{todo.content}</td>
                                <td>{todo.date_created}</td>
                                <td>{todo.creator}</td>
                                <td><a>♥</a><a>♥</a><a>♥</a></td>
                            </tr>
                        </table>
                        
                    )
                })
                
             
            })
        </div>
    )
}
