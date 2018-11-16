import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import HomePage from "./homepage/HomePage";
import Jobs from "./jobs/Jobs";
import MeetupEvents from "./meetups/MeetupEvents";
import Showcase from "./showcase/Showcase";
import Candidates from "./candidates/Candidates";
import CreateJobPosts from "./jobposts/CreateJobPosts";
import Profile from "./profile/Profile";
import { CSSTransition } from 'react-transition-group';
import firebase from '../config/firebase'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {},
      authenticated: false
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({user});
      }
      else {
        this.setState({user: null})
      }
    })
  }

  render() {
    return (
      <CSSTransition in={true} appear={true} timeout={7000} classNames="fade">
      <Router>
        <div className="App">
          <NavBar authenticated={this.state.authenticated} />
          <Route path="/" exact component={HomePage} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/meetupevents" component={MeetupEvents} />
          <Route path="/showcase" component={Showcase} />
          <Route path="/candidates" component={Candidates} />
          <Route path="/createjobs" component={CreateJobPosts} />
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
      </CSSTransition>
    );
  }
}


export default App;
