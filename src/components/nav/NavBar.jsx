import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter} from 'react-router-dom';
import '../App.css';
import defaultPic from '../../assets/default-user-icon.jpg'
import {connect} from 'react-redux';

const NavBar = (props) => {

  const { auth } = props
  console.log(auth)
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
         {auth.uid ? (
           <Menu.Item as={NavLink} to='/profile'>
         <div className="nav-button" basic="true" color='black'>{auth.email}</div>
          <img className="nav-default-img" src={defaultPic} alt="default pic" />
         </Menu.Item>

       )
       :
       <div></div>}
       </Container>
     </Menu>
    );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default withRouter(connect(mapStateToProps)(NavBar));
