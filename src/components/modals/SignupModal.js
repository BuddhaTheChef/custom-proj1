import React, { Component } from "react";
import "../App.css";
import PropTypes from "prop-types";

class SignupModal extends Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop-signup">
        <div className="modal-signup">
          <h1>Sign Up</h1>
          <h2>Hey</h2>
          <input />
          <h2>Hey</h2>
          <input />
          <h2>Hey</h2>
          <input />
          <button>Submit</button>
          <br />
          <p>Already a User? Login</p>
          <button>Login</button>
          <div className="foot">
            <button onClick={this.props.onClose}>Close</button>
          </div>
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
