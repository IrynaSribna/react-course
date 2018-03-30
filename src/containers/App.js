import React, { Component } from 'react';
import styleClasses from './App.css';
import Persons from'../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      {id: '1',   name: 'Eric', age: '2'},
      {id: '2ss', name: 'Lila', age: '23'},
      {id: '3dd', name: 'Tom',  age : '45'}
    ],
    userName: 'Tom',
    showPersons: false
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.userId === id
    });

    //make a copy in order not to manipulate the state directly:
    const personToUpdate = {
      ...this.state.persons[personIndex]
    };

    personToUpdate.name = event.target.value;

    const updatedPersons = [...this.state.persons];
    
    updatedPersons[personIndex] = personToUpdate

    this.setState({persons: updatedPersons});
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons; //this mutates the array we need to create a copy of array
    // 1st option:
    //const persons = this.state.persons.slice();
    // 2nd option:
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1); //delete 1 element with index=personIndex
    this.setState({persons: persons})
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  };

  render() {
    let persons = null;
    
    if (this.state.showPersons) {
        persons = (
            <Persons persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.changeNameHandler}/>
        );
    }

    return (
      <div className={styleClasses.App}>
        <Cockpit 
          appTitle = {this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}/> 
        {persons}   
      </div>
    );
  }
}

export default App;