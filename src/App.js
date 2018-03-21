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
    const style = {
      backgroundColor: 'blue',
      color: 'white',
      font: 'inherit',
      border: '1px solid magenta',
      padding: '8px',
      cursor: 'pointer',
      margin: '20px'
    }
    return (
      <div className="App">
        <button style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button> 
        {
          this.state.showPersons === true ?
            <div>
              <Person name="Eric" age="2"/>
              <Person name={this.state.userName} age="21"/>
            </div> : null 
        }   
      </div>
    );
  }
}

export default App;
