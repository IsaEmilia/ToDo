import React, { useState, useEffect } from 'react';


export const TodoTables = ({ todoTable }) => {
    
    return (
        <div>
            <p>tässä pitäisi olla todo kaavio :)</p>

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
