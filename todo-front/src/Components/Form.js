import React from "react";

export const Form = ({userInput, onFormChange, onFormSubmit}) => {
    //console.log("form works")
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
            <input className="add-butt" type='submit' value='&#10148;'></input>
        </form>
    </div>
    )
};

