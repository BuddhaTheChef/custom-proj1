import React, { Component } from 'react';
import NavBar from './nav/NavBar';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route'
import HomePage from './homepage/HomePage'
import MeetupEvents from './meetups/MeetupEvents'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <NavBar />
      <Route path='/' exact component={HomePage} />
      <Route path='/meetupevents' component={MeetupEvents} />
      </div>
      </Router>
    );
  }
}

export default App;
