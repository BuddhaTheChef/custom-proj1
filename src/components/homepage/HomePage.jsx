import React, { Component } from 'react';
import '../App.css';
import {Button} from 'semantic-ui-react'

class HomePage extends Component {
  render() {
    return (
      <div className="main-landing-div">
      <div className="foreground">
      </div>
      <div className="main-info-div">
      <h1 className="default-title">The Holy Grail for New Developers</h1>
      <div className="main-info-button-div">
      <Button color="purple">Log In</Button>
      <Button color="purple">Sign Up</Button>
      </div>
      </div>
      </div>
    );
  }
}

export default HomePage;
