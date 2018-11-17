import React, { Component } from "react";
import "../App.css";
import { Button } from "semantic-ui-react";
import LoginModal from "../modals/LoginModal";
import SignupModal from "../modals/SignupModal";
import firebase from '../../config/firebase';
import { connect } from 'react-redux';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);

    this.state = {
      isOpen: false,
      signupIsOpen: false
    };
  }

  signupToggleModal = () => {
    this.setState({
      signupIsOpen: !this.state.signupIsOpen
    })
  };

  loginToggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  logout() {
    firebase.auth().signOut().then((u) => {
        console.log('Success', u)
      })
      .catch((error) => {console.log(error)});
  }

  render() {
    const {auth} = this.props;
    return (
      <div className="main-landing-div">
        <div className="foreground" />
        {this.state.isOpen || this.state.signupIsOpen ? true : (
          <div className="main-info-div">
            <h1 className="default-title">The Holy Grail for New Developers</h1>
            <div className="main-info-button-div">
            {auth.uid ?
            (
                <Button basic={true} color="purple" onClick={this.logout}>Logout</Button>
            )
            :
            <div>
              <Button color="purple" onClick={this.loginToggleModal}>Log In</Button>
              <Button color="purple" onClick={this.signupToggleModal}>Sign Up</Button>
              </div>

            }
            </div>
          </div>
        )}

        <div className="loginModal">
        <LoginModal show={this.state.isOpen} onClose={this.loginToggleModal} />
        </div>

        <div className="signupModal">
        <SignupModal show={this.state.signupIsOpen} onClose={this.signupToggleModal} />
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

export default connect(mapStateToProps)(HomePage);
