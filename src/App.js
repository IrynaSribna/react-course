import React, { Component } from 'react';
import './App.css';
import Person from'./Person/Person'


class App extends Component {
  state = {
    persons: [
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
    return (
      <div className="App">
        <button style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button> 
        {persons}   
      </div>
    );
  }
}

export default App;
