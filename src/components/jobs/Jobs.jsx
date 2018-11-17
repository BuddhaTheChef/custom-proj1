import React, { Component } from "react";
import "../App.css";
import { connect } from 'react-redux';
import JobList from './JobList'

class Jobs extends Component {
  render() {
    console.log(this.props)
    const {projects} = this.props;
    return (
      <div>
      <h1 className="">Job Dashboard</h1>
      <JobList projects={projects} />
      </div>
  )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(Jobs);
