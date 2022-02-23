import React, { useState, useEffect } from 'react';

const Home =() =>{
    return(
        <div className='wrap'>
            <div className='header'>
                <h1>HOME</h1>   
            </div>
            <div className='content'>
                <ul>
                    <li><a>Log in</a></li>
                    <li><a>Register</a></li>
                </ul>
                <div className='todotable'>
                <h5>TODO Title</h5>
                    <table>
                    <tr>
                        <th>Task</th>
                        <th>Added</th>  
                        <th>User</th>
                        <th>Done</th>
                        <th>Actions</th>
                    </tr>
                    </table>
                </div>
                <div className='todotable'>
                <h5>TODO Title</h5>
                    <table>
                    <tr>
                        <th>Task</th>
                        <th>Added</th>  
                        <th>User</th>
                        <th>Done</th>
                        <th>Actions</th>
                    </tr>
                    </table>
                </div>
                <div className='todotable'>
                <h5>TODO Title</h5>
                    <table>
                    <tr>
                        <th>Task</th>
                        <th>Added</th>  
                        <th>User</th>
                        <th>Done</th>
                        <th>Actions</th>
                    </tr>
                    </table>
                </div>
            </div>
            <footer>footer</footer>
        </div>
        
    )
}

export default Home;