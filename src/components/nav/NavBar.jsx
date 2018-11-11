import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter} from 'react-router-dom';
import '../App.css';

class NavBar extends Component {
  render() {
    return (
      <Menu basic='basic' fixed="top">
      <Link to='/' className="main-nav-title">No Job Experiecne No Problem</Link>
       <Container>
         <Menu.Item as={NavLink} to='/jobs' header>Jobs</Menu.Item>
         <Menu.Item as={NavLink} to='/meetupevents' name="Meetup Events"/>
         <Menu.Item as={NavLink} to='/showcase' name="Showcase"/>
         <Menu.Item as={NavLink} to='/candidates'  name="Candidates near you"/>
         <Menu.Item as={NavLink} to='/createjobs'>
         <Button className="nav-button" basic color='black'>Quick Job Apply</Button>
         </Menu.Item>
         <Menu.Item as={NavLink} to='/profile'>
         <Button className="nav-button" basic color='black'>Profile</Button>
         </Menu.Item>
       </Container>
     </Menu>
    );
  }
}

export default withRouter(NavBar);
