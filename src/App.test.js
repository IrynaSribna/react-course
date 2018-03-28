import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
<<<<<<< HEAD
=======
  ReactDOM.unmountComponentAtNode(div);
>>>>>>> c79b317dd4550b576c5d2d8dfd4a9dd832edc2e0
});
