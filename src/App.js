import React, { Component } from 'react';
import classes from './App.module.css';
import Calculator from './Components/Calculator/Calculator';

class App extends Component {
  render() {
    return (
      <>
        <div className={classes.App}>
          <h1> Calculator</h1>
          <Calculator />
        </div>
      </>
    )
  }
}

export default App;