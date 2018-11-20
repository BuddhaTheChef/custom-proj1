import React, { Component } from 'react';
import '../App.css';
import { Button, Menu } from 'semantic-ui-react';
import defaultPic from '../../assets/default-user-icon.jpg';
import {connect} from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

class Profile extends Component {
  render() {
    const { auth } = this.props
    console.log(this.props.auth)
    return (
      <div className="main-div-profile">
      <div className="profile-info-header">
      <div className="profile-edit-header-button">
      <Button inverted color="black">Edit Header</Button>
      <Menu>
      <Menu.Item as={NavLink} to='/images'>My Photos</Menu.Item>
      </Menu>
      </div>
      <div className="profile-image-div">
      <img className="profile-default-img" src={this.props.auth.photoURL || defaultPic} alt="default pic" />
      </div>
      <div className="profile-detail-div">
      <h1>{auth.displayName}</h1>
      <h2>{auth.email}</h2>
      <h2>Aspirining [Enter Job Type Here]</h2>
      <h3>- Enter Skill List Here -</h3>
      </div>
      </div>
      <div className="profile-info-footer">
      <div className="profile-footer-title-div">
      <h1 className="profile-footer-title">Something Unique</h1>
      </div>
      <div className="profile-footer-main-content-div">
      <h1>Some Content here</h1>
      </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default withRouter(connect(mapStateToProps)(Profile));
