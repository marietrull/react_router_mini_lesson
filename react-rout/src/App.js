import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';

// Creating components in one page to save time
// Would normally render each component in a seperate file
const PageOneContainer = () => {
  return (

    <div>
      Page one
    </div>

    )  
}

const PageTwoContainer = () => {
  return (

    <div>
      Page Two
    </div>
    
    )  
}

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
