import React from 'react';
import classes from './Person.css';

const person = (props) => {
    
    return(
        <div className={classes.Person}>
            <p onClick={props.click}>User name: {props.name}</p>
            <p>User age: {props.age}</p>
            <input onChange={props.changed} value={props.name}/>
        </div> 
    )   
}

export default person
