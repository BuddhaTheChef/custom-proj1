import React, { Component } from "react";
import "../App.css";
import PropTypes from "prop-types";
import firebase from '../../config/firebase'
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
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
    this.signUp = this.signUp.bind(this)

    this.state = {
      email: '',
      password: '',
      displayName: ''
    }
  }

  signUp(e) {
    e.preventDefault();
    console.log(this.state)
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(()=>{
          this.setState({displayName: this.state.displayName})
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop-signup">
        <div className="modal-signup">
        <div style={signupCloseMainDiv}>
        <button style={signupCloseModalButton} onClick={this.props.onClose}>X</button>
        </div>
        <form>
          <h1 style={signupModalHeader}>Sign Up</h1>
          <div style={signupModalMainDiv}>
          <h2>Full Name:</h2>
          <input value={this.state.displayName} onChange={this.handleChange} type="displayName" name="displayName" style={signupModalInput} />
          <h2>Email:</h2>
          <input value={this.state.email} onChange={this.handleChange} type="email" name="email" style={signupModalInput} />
          <h2>Password:</h2>
          <input value={this.state.password} onChange={this.handleChange} type="password" name="password" style={signupModalInput} />
          </div>
          <Button onClick={this.signUp} color="pink" style={signupSubmitButton}>Submit</Button>
          </form>
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
