import React, { useState, useEffect } from 'react';


export const TodoTables = ({ todoTable }) => {
    
    return (
        <div>
            <p>tässä pitäisi olla todo kaavio :)</p>
            {todoTable.map(todo => {
                return (
                    <ul key={todo.id}>
                        <li>{todo.content}</li>
                        <li>{todo.date_created}</li>
                        <li>todotodotoo</li>
                    </ul>
                )
            })}
        </div>
    )
}
