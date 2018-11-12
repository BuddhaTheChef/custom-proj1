import React, { Component } from "react";
import "../App.css";
import PropTypes from "prop-types";

class LoginModal extends Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop">
        <div className="modal">
          <h1>Login</h1>
          <h2>Yo</h2>
          <input />
          <h2>Yo</h2>
          <input />
          <h2>Yo</h2>
          <input />
          <button>Submit</button>
          <br />
          <p>Not a User? Singup.</p>
          <button>Sign Up</button>
          <div className="footer">
            <button onClick={this.props.onClose}>Close</button>
          </div>
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
