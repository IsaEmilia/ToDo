import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


// Display database entries in a table. 

export const TodoTables = ({ todoTable }) => {
    const [style, setStyle] = useState('table');
    const [APIdata, setAPIData] = useState([]);

    const getData = () => {
        axios.get('http://localhost:5000')
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }
    // Remove entries from list
    const handleRemove = (id) => {
        console.log('delete',id)
        
        axios('http://localhost:5000/delete/' + id, {method: 'DELETE'}).then(()=> {
            getData();
            console.log('jotain')
        })
    }

    // Change the style of completed tasks to text-decoration: line-through and color: grey
    const taskDone = (id) => {
        console.log('change style of', id) 
        //setStyle('taskDone')
    }

    // Edit entries in list
    const setData = (content) => {
        console.log('editing',content);
     }

    return (
        <div className='table-container'>
            <table >
                <tbody>
                    <tr>
                        <th className='flex1'>Task</th>
                        <th className='flex2'>Date</th>  
                        <th className='flex3'>Actions</th>    
                    </tr>
                </tbody>

                {todoTable[0]?.map(todo => {

                    return (
                    <tbody key={todo.id}>    
                        <tr  >
                            <td className={style}>{todo.content}
                            </td>
                            <td id='date' className={style}>{todo.date_created}
                            </td>
                            
                            <td>
                                <a onClick={() => handleRemove(todo.id)}>&#10008;</a>
                                <Link to='/update'>
                                    <a onClick={() => setData(todo.content)}>
                                        &#10000;
                                    </a>
                                </Link>
                                <a onClick={() => taskDone(todo.id)}>&#10004;</a>
                            </td> 

                        </tr>
                    </tbody>
                    )
                },)
                }
            </table>
        </div>
    )
}
