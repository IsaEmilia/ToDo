import React from "react";

const Header = () => {

    return (
        <div className="header">
            <h1>HEADER</h1>
            <ul className="headbutt">
                <li><a>log in</a></li>
                <li><a>register</a></li>
                <li><a href="todo-front\src\Pages\Dashboard.js">dashboard</a></li>
            </ul>
        </div>
    )
}

export default Header;