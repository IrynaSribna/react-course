import React, { Component } from 'react';
import './App.css';
import Person from'./Person/Person'


class App extends Component {
  state = {
    userName: 'Tom',
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  render() {
    return (
      <div className="App">
        <button 
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button> 
        {
          this.state.showPersons === true ?
            <div>ß
              <Person name="Eric" age="2"/>
              <Person name={this.state.userName} age="21"/>
            </div> : null 
        }   
      </div>
    );
  }
}

export default App;
