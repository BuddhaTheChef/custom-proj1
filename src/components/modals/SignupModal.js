import React, { Component } from "react";
import "../App.css";
import PropTypes from "prop-types";

import { Button } from 'semantic-ui-react'


const signupModalHeader = {
 textAlign: 'center',
 marginTop: '0px',
 fontSize: '36px'
}

const signupModalMainDiv = {
  padding: '0px 20px 0px 20px',
  marginBottom: '25px'
}

const signupModalInput = {
  width: '100%',
backgroundColor: 'white',
borderRadius: '5px',
border: '1px solid magenta',
height: '30px'

}

const signupSubmitButton = {
  marginLeft: '41%',
}

const loginWords = {
  textAlign: 'center',
marginTop: '25px',
fontSize: '20px'
}

const signupCloseMainDiv = {
  width:'100%',
  textAlign: 'end'
}

const signupCloseModalButton = {
borderRadius: '5px',
border: 'magenta 1px solid',
padding: '5px',
color: 'magenta'
}

class SignupModal extends Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop-signup">
        <div className="modal-signup">
        <div style={signupCloseMainDiv}>
        <button style={signupCloseModalButton} onClick={this.props.onClose}>X</button>
        </div>
          <h1 style={signupModalHeader}>Sign Up</h1>
          <div style={signupModalMainDiv}>
          <h2>Email:</h2>
          <input style={signupModalInput} />
          <h2>Password:</h2>
          <input style={signupModalInput} />
          <h2>Confirm Password:</h2>
          <input style={signupModalInput} />
          </div>
          <Button color="pink" style={signupSubmitButton}>Submit</Button>
          <br />
          <p style={loginWords}>Already a User? <span>Login</span></p>
        </div>
      </div>
    );
  }
}

SignupModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default SignupModal;
