import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';

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

const HeaderLinks = () => {
  
  return (

    <header>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/secondPageRoute'>Page Two</a></li>
      </ul>

    </header>

    )
}

const My404 = () => {

  return (

    <div>
      You're Lost
    </div>

    )
}

//imported switch and created a 404 route

//turned App into a functional component
const App = () => {

  return (

    <main>

      <HeaderLinks />
      <Switch>
        <Route exact path="/" component={PageOneContainer}/>
        <Route exact path="/secondPageRoute" component={PageTwoContainer}/>
        <Route path='*' component={My404}/>
      </Switch>

    </main>

    )
}

export default App;
