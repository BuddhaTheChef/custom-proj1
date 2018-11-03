import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter} from 'react-router-dom';
import '../App.css';

class NavBar extends Component {
  render() {
    return (
      <Menu basic fixed="top">
      <Link to='/' className="main-nav-title">No Job Experiecne No Problem</Link>
       <Container>
         <Menu.Item header>Jobs</Menu.Item>
         <Menu.Item as={NavLink} to='/meetupevents' name="Meetup Events"/>
         <Menu.Item name="Showcase"/>
         <Menu.Item  name="Candidates near you"/>
         <Menu.Item>
         <Button className="nav-button" basic color='black'>Create Job Postings</Button>
         </Menu.Item>
       </Container>
     </Menu>
    );
  }
}

export default withRouter(NavBar);
