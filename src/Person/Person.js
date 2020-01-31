import React from 'react';
import './Person.css'
const person = (props) => {
    console.log(props)
    return (
        <div className="Person">
            <p onClick={props.click}> My name is {props.name} and
            I'm  {props.age} years old</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
            <p type="text" onChange={props.changed} value={props.name}></p>
            <p>{props.children}</p>
        </div>
 
    ) 
};

export default person;