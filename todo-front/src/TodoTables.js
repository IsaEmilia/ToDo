import React, { useState, useEffect } from 'react';


// Rendering ToDo tables and entries
//const [todo, setTodo] 

const Todos = (props) => {

    return (
        <div>
        <table>
            <tr>
                <th>Task</th>
                <th>Added</th>  
                <th>User</th>
                <th>Actions</th>
            </tr>
            <tr>
                <td>list item that is longer than others</td>
                <td>date</td>
                <td>list item</td>
                <td class="buttons">
                    <a href="/delete/{{task.id}}">&#10008;</a>
                    <br></br>
                    <a href="/update/{{task.id}}">&#10000;</a>
                    <br></br>
                    <a href="">&#10004;</a>
                </td>  
            </tr>
        </table>
        <form >
            <input type="text" placeholder='type something'></input>
            <button>
                new entry
            </button>
        </form>
        </div>
    )
}

export default Todos