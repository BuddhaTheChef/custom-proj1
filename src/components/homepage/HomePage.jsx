import React, { Component } from "react";
import "../App.css";
import { Button } from "semantic-ui-react";
import LoginModal from "../modals/LoginModal";
import SignupModal from "../modals/SignupModal";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      signupIsOpen: false
    };
  }

  signupToggleModal = () => {
    this.setState({
      signupIsOpen: !this.state.signupIsOpen
    });
  };

  loginToggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div className="main-landing-div">
        <div className="foreground" />
        {this.state.isOpen || this.state.signupIsOpen ? true : (
          <div className="main-info-div">
            <h1 className="default-title">The Holy Grail for New Developers</h1>
            <div className="main-info-button-div">
              <Button color="purple" onClick={this.loginToggleModal}>
                Log In
              </Button>
              <Button color="purple" onClick={this.signupToggleModal}>
              Sign Up
              </Button>
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

export default HomePage;
