import React, { useState, useEffect } from 'react';


export const TodoTables = ({ todoTable }) => {
    
    return (
        <div>
            {todoTable.map(todo => {
                return (
                    <ul key={todo.id}>
                        <li>{todo.content}</li>
                    </ul>
                )
            })}
        </div>
    )
}
