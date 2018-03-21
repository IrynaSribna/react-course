import React, { Component } from 'react';
import './App.css';
import Person from'./Person/Person'


class App extends Component {
  state = {
    persons: [
      {name: 'Eric', age: '2'},
      {name: 'Lila', age: '23'},
      {name: 'Tom',  age : '45'}
    ],
    userName: 'Tom',
    showPersons: false
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
      backgroundColor: 'blue',
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
                age={person.age} />
            })}
          </div>
        );
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
