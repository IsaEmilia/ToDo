import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';


const Dashboard =() =>{
    console.log('Dashboard exists')
    return(
        <div>
            <Header/>
            <h1>hi</h1>
            <Link to={'/'}>
                <a>home</a>
            </Link>
        </div>
    )

}

export default Dashboard;