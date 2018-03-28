import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
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
  }
}

export default App;
