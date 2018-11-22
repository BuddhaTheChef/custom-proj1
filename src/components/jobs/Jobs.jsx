import React, { Component } from "react";
import "../App.css";
import { connect } from 'react-redux';
import JobList from './JobList'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

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
  console.log(state)
  return {
    projects: state.firestore.ordered.projects
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(Jobs);
