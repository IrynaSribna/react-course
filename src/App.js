import React, { Component } from 'react';
<<<<<<< HEAD
import './App.css';
import Person from './Person/Person';
=======
import styleClasses from './App.css';
import Person from'./Person/Person';
>>>>>>> c79b317dd4550b576c5d2d8dfd4a9dd832edc2e0

class App extends Component {
  state = {
    persons: [
<<<<<<< HEAD
      {name: 'Max', age: 28},
      {name: 'Eric', age: 2},
      {name: 'Tom', age: 45}
    ],

    otherState: 'somestate'
  }

  switchNameHandler = (newName) => {
    console.log("Was clicked");
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Eric', age: 2},
        {name: 'Tom', age: 46}
      ]
    })
  }

  changedNameHandler = (event) => {
    console.log("Was clicked");
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 2},
        {name: 'Tom', age: 45}
      ]
    })
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'salmon',
      font: 'inherit',
      border: '1px solid light-green',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hello, Eric</h1>
        <p>My message</p>
        <button 
          style={buttonStyle}
          onClick={this.switchNameHandler.bind(this, 'Steve')}>
            Switch Name
        </button>
        <Person 
          name={this.state.persons[0].name}
           age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => this.switchNameHandler('Inga')}
          changed={this.changedNameHandler}>
          My Hobbies: Reading and dancing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi, Ericheck!"))
=======
      {id: '1',   name: 'Eric', age: '2'},
      {id: '2ss', name: 'Lila', age: '23'},
      {id: '3dd', name: 'Tom',  age : '45'}
    ],
    userName: 'Tom',
    showPersons: false
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    //make a copy in order not to manipulate the state directly:
    const personToUpdate = {
      ...this.state.persons[personIndex]
    };

    personToUpdate.name = event.target.value;

    const updatedPersons = [...this.state.persons];
    
    updatedPersons[personIndex] = personToUpdate

    this.setState({persons: updatedPersons});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons; //this mutates the array we need to create a copy of array
    // 1st option:
    //const persons = this.state.persons.slice();
    // 2nd option:
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1); //delete 1 element with index=personIndex
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid magenta',
      padding: '8px',
      cursor: 'pointer',
      margin: '20px'
    }

    let persons = null;
    
    if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age} 
                key={person.id}
                changed={(event) => this.changeNameHandler(event, person.id)}/>
            })}
          </div>
        );

        style.backgroundColor = 'red';
    }

    let assignedClasses = [];

    if (this.state.persons.length <=2) {
      assignedClasses.push(styleClasses.red); // styleClasses = ['red']
    }

    if (this.state.persons.length <=1) {
      assignedClasses.push(styleClasses.bold); // styleClasses = ['red', 'bold']
    }
    
    return (
      <div className={styleClasses.App}>
      <p className={assignedClasses.join(' ')}>Show persons</p>
        <button style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button> 
        {persons}   
      </div>
    );
>>>>>>> c79b317dd4550b576c5d2d8dfd4a9dd832edc2e0
  }
}

export default App;
