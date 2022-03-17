import React from 'react';



export const TodoTables = ({ todoTable }) => {
 console.log(todoTable,"todoTable")
    return (
        <div>
            <p>tässä pitäisi olla todo kaavio :)</p>

            {todoTable.map(todo => {
                console.log("wot")
                return (
                    <table key={todo.id}>
                        <ul>
                            <li>{todo.content}</li>
                            <li>{todo.date_created}</li>
                            <li>{todo.creator}</li>
                        </ul>
                    </table>
                )
            })}
        </div>
    )
}
