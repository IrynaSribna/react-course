import React from 'react';

import styleClasses from './Cockpit.css';

const cockpit = (props) => {
    let btnStyle = ''

    if (props.showPersons) {
        btnStyle = styleClasses.Red
    }

    let assignedClasses = [];

    if (props.persons.length <=2) {
      assignedClasses.push(styleClasses.red); // styleClasses = ['red']
    }

    if (props.persons.length <=1) {
      assignedClasses.push(styleClasses.bold); // styleClasses = ['red', 'bold']
    }

    return(
        <div className={styleClasses.Cockpit}>
            <p className={assignedClasses.join(' ')}>Show persons</p>
                <button 
                className={btnStyle}
                onClick={props.clicked}>Toggle Persons
                </button>
        </div>    
    );    
}

export default cockpit;