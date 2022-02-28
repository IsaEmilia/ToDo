import React, { useState, useEffect } from 'react';


const TodoTables = () => {
    const [todo, setTodo] = useState([])

    useEffect(() => {
        fetch('/api').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => console.log(data))
    },[])

    return (
        <div>

        </div>
    )
}

export default TodoTables