import React, { Component } from 'react';
import '../App.css';

class MeetupEvents extends Component {
  render() {
    return (
      <div>
        <h1 className="">Meetup Events</h1>
        <h3>
        City: <input id="city" placeholder="Seattle"></input>
        <br />
        <button id="submit-city">Submit</button>
        </h3>
      </div>
    );
  }
}

export default MeetupEvents;
