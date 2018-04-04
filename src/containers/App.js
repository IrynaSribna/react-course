import React, { Component } from 'react';
import styleClasses from './App.css';
import Persons from'../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] inside constructor', props);

    this.state = {
      persons: [
        {id: '1',   name: 'Eric', age: '2'},
        {id: '2ss', name: 'Lila', age: '23'},
        {id: '3dd', name: 'Tom',  age : '45'}
      ],
      userName: 'Tom',
      showPersons: false,
      toggleClicked: 0
    };
  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside shouldComponentUpdate()', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside componentWillUpdate()', nextProps, nextState)
  }

    componentDidUpdate() {
    console.log('[UPDATE App.js] inside componentDidUpdate()');
  }

  // state = {
  //   persons: [
  //     {id: '1',   name: 'Eric', age: '2'},
  //     {id: '2ss', name: 'Lila', age: '23'},
  //     {id: '3dd', name: 'Tom',  age : '45'}
  //   ],
  //   userName: 'Tom',
  //   showPersons: false
  // };

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
    this.setState( (previousState, props) => {
      return {
          showPersons: !doesShow,
          toggleClicked: previousState.toggleClicked + 1
        } 
    });
  };

  render() {
    console.log('[App.js] inside render()');
    let persons = null;
    
    if (this.state.showPersons) {
        persons = (
            <Persons persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.changeNameHandler}/>
        );
    }

    return (
      <Aux>
        <Cockpit 
          appTitle = {this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}/> 
        {persons}   
      </Aux>
    );
  }
}

export default withClass(App, styleClasses.App);