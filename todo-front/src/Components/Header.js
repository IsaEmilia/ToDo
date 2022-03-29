import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className="header">
            <h1>HEADER</h1>
            <ul className="headbutt">
                <li><a>log in</a></li>
                <li><a>register</a></li>
                <Link to='/dashboard'>
                    <li><a>dashboard</a></li>
                </Link>
            </ul>
        </div>
    )
}

export default Header;