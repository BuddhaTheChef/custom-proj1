import React, { Component } from 'react';
import '../App.css';

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
          <h3>
          City: <input id="city" refs="textbox" onChange={event=> this.setState({query: event.target.value})} placeholder="Search by city"/>
          <br />
          <button id="submit-city" onClick={() => this.changeCity()}>Submit</button>
          </h3>
          <ul className="ul-event">
          {items.map(item => (
            <div className="main-event-div" key={item.id}>
            <li className="li-event" >
            <div className="event-img-div">
            <img className="event-img" alt="group_pic" src={item.key_photo.photo_link} />
            </div>
            <div className="event-div-info">
              <h1> {item.name} </h1>
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
