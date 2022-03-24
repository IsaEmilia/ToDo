import React, {useState} from 'react';


// Display database entries in a table. 

export const TodoTables = ({ todoTable }) => {

    const [done, setDone] = useState(false)

    //console.log(todoTable,"todoTable")
    const handleRemove = () => {
        console.log('click')
    }

    const taskDone = () => {
        console.log('done')  
    }

    return (
        <div>
            <table key={'lol'}>
                <tbody>
                    <tr>
                        <th>Task</th>
                        <th>Date</th>  
                        <th>User</th>
                        <th>Actions</th>    
                    </tr>
                </tbody>

                {todoTable[0]?.map(todo => {
                   
                    return (
                    <tbody>    
                        <tr key={todo.id}>
                            <td>{todo.content}</td>
                            <td>{todo.date_created}</td>
                            <td>{todo.creator} creator</td>
                            <td>
                                <a onClick={handleRemove()}>&#10008;</a>
                                <a>&#10000;</a>
                                <a onClick={taskDone()}>&#10004;</a>
                            </td> 
                        </tr>
                    </tbody>
                    )
                })
                }
            </table>
        </div>
    )
}
