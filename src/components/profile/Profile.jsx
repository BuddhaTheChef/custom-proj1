import React, { Component } from 'react';
import '../App.css';
import { Button } from 'semantic-ui-react';

class Profile extends Component {
  render() {
    return (
      <div className="main-div-profile">
      <div className="profile-info-header">
      <div className="profile-edit-header-button">
      <Button inverted color="black">Edit Header</Button>
      </div>
      <div className="profile-image-div">Insert picture here</div>
      <h1>First Name, Last Name</h1>
      <h2>Aspirining [Enter Job Type Here]</h2>
      <h3>- Enter Skill List Here -</h3>
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

export default Profile;
