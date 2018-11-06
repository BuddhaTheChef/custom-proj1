import React, { Component } from "react";
import "../App.css";
import { Button } from "semantic-ui-react";

class CreateJobPosts extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    desiredSalary: "",
    coverLetter: "",
    resume: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    console.log(this.state);
    e.preventDefault();
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      desiredSalary: "",
      coverLetter: "",
      resume: ""
    });
  };

  render() {
    return (
      <div className="createjobs-main-div">
        <h1 className="createjobs-main-title">
          Find the right canditate for the job
        </h1>
        <div className="float-left-div" />
        <div className="float-right-div">
          <div className="roll-in-blurred-left">
            <h1 className="job-post-title">Create Job Postings</h1>
            <form>
              <header className="jobposts-header">First Name:</header>
              <input
                className="jobposts-input"
                name="firstName"
                value={this.state.firstName}
                onChange={e => this.onChange(e)}
              />
              <br />
              <header className="jobposts-header">Last Name:</header>
              <input
                className="jobposts-input"
                name="lastName"
                value={this.state.lastName}
                onChange={e => this.onChange(e)}
              />
              <br />
              <header className="jobposts-header">Email:</header>
              <input
                className="jobposts-input"
                name="email"
                value={this.state.email}
                onChange={e => this.onChange(e)}
              />
              <br />
              <header className="jobposts-header">Desired Salary:</header>
              <input
                className="jobposts-input"
                name="desiredSalary"
                value={this.state.desiredSalary}
                onChange={e => this.onChange(e)}
              />
              <br />
              <header className="jobposts-header">CoverLetter:</header>
              <textarea
                className="jobposts-input-coverLetter"
                name="coverLetter"
                value={this.state.coverLetter}
                onChange={e => this.onChange(e)}
              />
              <br />
              <header className="jobposts-header">Resume:</header>
              <input
                placeholder=".pdf button"
                name="resume"
                value={this.state.resume}
                onChange={e => this.onChange(e)}
              />
              <br />
              <Button
                className="jobposts-subit-button"
                basic
                color="pink"
                onClick={e => this.onSubmit(e)}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateJobPosts;
