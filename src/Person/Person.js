import React from 'react'
import './Person.css'

const person = (props) => {
    return(
        <div className="Person">
            <p>User name: {props.name}</p>
            <p>User age: {props.age}</p>
        </div> 
    )   
}

export default person