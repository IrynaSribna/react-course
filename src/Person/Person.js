import React from 'react';
<<<<<<< HEAD
import './Person.css';

const person = ( props ) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I am a Person. My name is {props.name} and I am {props.age} years old </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default person;
=======
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
>>>>>>> c79b317dd4550b576c5d2d8dfd4a9dd832edc2e0
