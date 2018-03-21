import React from 'react'
import './Person.css'

const person = (props) => {
    return(
        <div className="Person">
            <p onClick={props.click}>User name: {props.name}</p>
            <p>User age: {props.age}</p>
            <input onChange={props.changed} value={props.name}/>
        </div> 
    )   
}

export default person