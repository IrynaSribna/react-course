import React, {Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor', props);
    }
    
    componentWillMount() {
        console.log('[Person.js] inside componentWillMount()');
    }
    
    componentDidMount() {
        console.log('[Person.js] inside componentDidMount()');
    }
    
    render() {
        console.log('[Person.js] inside render()');
        return(
            <Aux>
                <p onClick={this.props.click}>User name: {this.props.name}</p>
                <p>User age: {this.props.age}</p>
                <input onChange={this.props.changed} value={this.props.name}/>
            </Aux> 
        )    
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
  };

export default withClass(Person, classes.Person)
