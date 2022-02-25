import React, { useState, useEffect } from 'react';
import Todos from './TodoTables';

const Home = (useState, useEffect) =>{
    
    return(
        <div className='wrap'>
            <div className='header'>
                <h1>&#171; HOME &#187;</h1>  
                <ul>
                    <li><a href='/Login.js'>Log in</a></li>
                    <li><a>Register</a></li>
                </ul> 
            </div>
            <div className='content'>
               

                <Todos/>
                <Todos/>
                <Todos/>
            </div>
                <button id='add-butt'>
                &#10010; &#128203;
                </button>
            <footer>footer</footer>
        </div>  
    )
}

export default Home;