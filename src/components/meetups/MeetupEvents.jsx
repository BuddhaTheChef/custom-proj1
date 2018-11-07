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
          City: <input id="city" refs="textbox" onChange={event=> this.setState({query: event.target.value})} placeholder="Seattle"/>
          <br />
          <button id="submit-city" onClick={() => this.changeCity()}>Submit</button>
          </h3>
          <ul>
          {items.map(item => (
            <li key={item.id}>
              Name: {item.name} | location: {item.city}, {item.state} | {item.category.name}
              <br />
                <img alt="group_pic" src={item.key_photo.photo_link} />
              <hr />
            </li>
          ))}
          </ul>
        </div>
      )
    }
  }
}

export default MeetupEvents;
