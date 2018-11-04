import React, { Component } from 'react';
import NavBar from './nav/NavBar';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route'
import HomePage from './homepage/HomePage'
import Jobs from './jobs/Jobs'
import MeetupEvents from './meetups/MeetupEvents'
import Showcase from './showcase/Showcase'
import Candidates from './candidates/Candidates'
import CreateJobPosts from './jobposts/CreateJobPosts'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <NavBar />
      <Route path='/' exact component={HomePage} />
      <Route path='/jobs' component={Jobs} />
      <Route path='/meetupevents' component={MeetupEvents} />
      <Route path='/showcase' component={Showcase} />
      <Route path='/candidates' component={Candidates} />
      <Route path='/createjobs' component={CreateJobPosts} />
      </div>
      </Router>
    );
  }
}

export default App;
