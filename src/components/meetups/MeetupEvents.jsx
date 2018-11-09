import React, { Component } from 'react';
import '../App.css';
import { Button } from "semantic-ui-react";

class MeetupEvents extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
      query: ''

    }
  }

  componentDidMount() {
    this.search('');
  }

  changeCity() {
    console.log(this.state)
    this.setState({
      query: this.state.query
    })
    this.search(this.state.query)
  }

  search = query => {


    let api = 'https://api.meetup.com/find/groups?&sign=true&key=';
    let apikey = `${process.env.REACT_APP_API_KEY}`;
    let params = '&photo-host=public';
    let location = `&location=${query}&page=20`;
    let url = api + apikey + params + location;
    fetch(url)
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
      console.log(json)
    })
  }

  // formatTime(jsonDate) {
  // var newDate = dateFormat(jsonDate, "mm/dd/yyyy");
  // return newDate;
  // }

  render() {

    let {isLoaded, items} = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>
    }

    else {
      return (
        <div>
          <h1 className="">Meetup Events</h1>
          <div className="city-input-div">
          <input className="city-input" id="city" refs="textbox" onChange={event=> this.setState({query: event.target.value})} placeholder="Search by city"/>
          </div>
          <br />
          <div className="city-button-div">
          <Button basic color="pink" id="submit-city" onClick={() => this.changeCity()}>Submit</Button>
          </div>
          <ul className="ul-event">
          {items.map(item => (
            <div className="main-event-div" key={item.id}>
            <li className="li-event" >
            <div className="event-img-div">
            <div style={{ backgroundImage:`url(${item.key_photo.photo_link})`, backgroundSize: 'cover', backgroundPosition: 'center', height: 'inherit', marginLeft: '11px', borderRadius: '7px'}} alt="group_pic"></div>
            </div>
            <div className="event-div-info">
              <h1 className="event-title-div"> {item.name} </h1>
              <h3>Location: {item.city}, {item.state} | <span> Event Type: {item.category.name}</span> </h3>
              <h3>When: {new Intl.DateTimeFormat('en-GB', {
          year: 'numeric',
          month: 'long',
          day: '2-digit'
        }).format(item.created)}</h3>
              <div className="about-event">
              About: {item.description}
              </div>
            </div>
            </li>
            </div>
          ))}
          </ul>
        </div>
      )
    }
  }
}

export default MeetupEvents;
