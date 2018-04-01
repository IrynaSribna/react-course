import React from 'react';

import styleClasses from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    let btnStyle = styleClasses.Button;

    if (props.showPersons) {
        btnStyle = [styleClasses.Button, styleClasses.Red].join(' ');
    }

    let assignedClasses = [];

    if (props.persons.length <=2) {
      assignedClasses.push(styleClasses.red); // styleClasses = ['red']
    }

    if (props.persons.length <=1) {
      assignedClasses.push(styleClasses.bold); // styleClasses = ['red', 'bold']
    }

    return(
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>Show persons</p>
                <button 
                    className={btnStyle}
                    onClick={props.clicked}>Toggle Persons
                </button>
        </Aux>    
    );    
}

export default cockpit;