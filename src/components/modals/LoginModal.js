import React, { Component } from "react";
import "../App.css";
import PropTypes from "prop-types";
import { Button } from 'semantic-ui-react'


const loginModalHeader = {
 textAlign: 'center',
 marginTop: '0px',
 fontSize: '36px'
}

const loginModalMainDiv = {
  padding: '0px 20px 0px 20px',
  marginBottom: '25px'
}

const loginModalInput = {
width: '100%',
backgroundColor: 'white',
borderRadius: '5px',
border: '1px solid magenta',
height: '30px'

}

const loginSubmitButton = {
  marginLeft: '41%',
}

const signUpWords = {
  textAlign: 'center',
marginTop: '25px',
fontSize: '20px'
}

const loginCloseMainDiv = {
  width:'100%',
  textAlign: 'end'
}

const loginCloseModalButton = {
borderRadius: '5px',
border: 'magenta 1px solid',
padding: '5px',
color: 'magenta'
}

class LoginModal extends Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="backdrop">
        <div className="modal">
        <div style={loginCloseMainDiv}>
        <button style={loginCloseModalButton} onClick={this.props.onClose}>X</button>
        </div>
          <h1 style={loginModalHeader}>Login</h1>
          <div style={loginModalMainDiv}>
          <h2>E-mail:</h2>
          <input style={loginModalInput} />
          <h2>Password:</h2>
          <input style={loginModalInput} />
          </div>
          <Button color="pink" style={loginSubmitButton}>Submit</Button>
          <br />
          <p style={signUpWords}>Not a User? <span href="">Singup</span></p>
        </div>
      </div>
    );
  }
}

LoginModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default LoginModal;
