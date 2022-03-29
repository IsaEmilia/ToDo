import React, {useState} from "react";
import axios from "axios";

export const Update = ({userInput, onFormChange, onFormSubmit}) => {
    const [id, setId] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');

    console.log('update page works')

    console.log("form works")
    const handleChange = (event) => {
        onFormChange(event.target.value)
    };
    const handleSubmit = (event) =>{
        event.preventDefault()
        onFormSubmit()
    };
    
    return(
    <div className="form">
        <form onSubmit={handleSubmit}>
            <input type='text' required value={userInput} onChange={handleChange}></input>
            <input className="add-butt" type='submit' value='update'></input>
        </form>
    </div>
    )
};

