import React, { Component } from "react";
import "../App.css";
import PropTypes from "prop-types";
import { Button } from 'semantic-ui-react';
import firebase from '../../config/firebase'
import {withRouter} from 'react-router-dom'


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
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
    this.login = this.login.bind(this)

    this.state = {
      email: '',
      password: ''
    }
  }

  login = async e =>  {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
    this.props.history.push("/profile")
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

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
          <input value={this.state.email} onChange={this.handleChange} type="email" name="email" style={loginModalInput} />
          <h2>Password:</h2>
          <input value={this.state.password} onChange={this.handleChange} type="password" name="password" style={loginModalInput} />
          </div>
          <Button color="pink" onClick={this.login} style={loginSubmitButton}>Submit</Button>
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

export default withRouter(LoginModal);
