import React, { useState } from 'react';



export const TodoTables = ({ todo, todoTable }) => {
 
    return (
        <div>
            <p>tässä pitäisi olla todo kaavio :)</p>
            <table key={todo.id}>
                        <tr>
                            <th>Task</th>
                            <th>Added</th>  
                            <th>User</th>
                            <th>Done</th>
                            <th>Actions</th>
                        </tr>
            </table>

            {todoTable.map(todo => {
                return (
                    <table key={todo.id}>
                        <tr>
                            <th>Task</th>
                            <th>Added</th>  
                            <th>User</th>
                            <th>Done</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <td>{todo.content}</td>
                            <td>{todo.date_created}</td>
                            <td>{todo.creator}</td>
                            <td>{todo.completed}</td>
                        </tr>
                    </table>
                )
            })}
        </div>
    )
}
