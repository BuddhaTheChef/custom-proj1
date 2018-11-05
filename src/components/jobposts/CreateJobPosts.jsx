import React, { Component } from 'react';
import '../App.css';

class CreateJobPosts extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    desiredSalary: "",
    coverLetter: "",
    resume: ""
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    console.log(this.state)
    e.preventDefault();
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      desiredSalary: "",
      coverLetter: "",
      resume: ""
    })
  }

  render() {
    return (
      <div className="createjobs-main-div">
      <div className="float-left-div">
      <img src="" alt="pic"/>
        <h1 className="createjobs-main-title">Find the right canditate for the job</h1>
        </div>
        <div className="float-right-div">
        <div className="roll-in-blurred-left">
          <h1 className="job-post-title">Create Job Postings</h1>
          <form>
            <header className="jobposts-header">First Name:</header>
              <input className="jobposts-input" name="firstName" value={this.state.firstName} onChange={e => this.onChange(e)} />
            <br />
            <header className="jobposts-header">Last Name:</header>
              <input className="jobposts-input" name="lastName" value={this.state.lastName} onChange={e => this.onChange(e)} />
            <br />
            <header className="jobposts-header">Email:</header>
              <input className="jobposts-input" name="email" value={this.state.email} onChange={e => this.onChange(e)} />
            <br />
            <header className="jobposts-header">Desired Salary:</header>
              <input className="jobposts-input" name="desiredSalary" value={this.state.desiredSalary} onChange={e => this.onChange(e)} />
            <br />
            <header className="jobposts-header">CoverLetter:</header>
              <input className="jobposts-input-coverLetter" name="coverLetter" value={this.state.coverLetter} onChange={e => this.onChange(e)} />
            <br />
            <header className="jobposts-header">Resume:</header>
              <input name="resume" value={this.state.resume} onChange={e => this.onChange(e)} />
            <br />
              <button onClick={(e) => this.onSubmit(e)}>Submit</button>
          </form>
        </div>
        </div>
      </div>
    );
  }
}

export default CreateJobPosts;
