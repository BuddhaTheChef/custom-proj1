import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions'
import { Button } from 'semantic-ui-react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import JobList from '../../components/jobs/JobList'

class Showcase extends Component {
  state = {
    title: '',
    content: '',
    techStack: '',
    image: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createProject(this.state)
    const form = document.getElementById("content-form");
    form.reset();
  }



  render() {
    console.log(this.props)
    const {projects} = this.props;
    return (
      <div style={{marginTop: '65px'}}>
        <form id="content-form" onSubmit={this.handleSubmit}>
          <h3 className="form-main-title">Create new project</h3>
          <div>
            <h6 className="form-content-title-div">Title</h6>
            <input className="form-content-techstack-div" type="text" id="title" onChange={this.handleChange} />
          </div>
          <div>
            <h6 className="form-content-title-div">Tech Stack</h6>
            <input className="form-content-techstack-div" type="text" id="techStack" onChange={this.handleChange} />
          </div>
          <div>
            <h6 className="form-content-title-div">Image</h6>
            <input className="form-content-input-image" type="file" id="image" onChange={this.handleChange} />
          </div>
          <div>
            <h6 className="form-content-title-div">Content</h6>
            <textarea className="form-content-content" id="content" onChange={this.handleChange} />
          </div>
          <div>
            <Button className="form-button" color="pink">Create</Button>
          </div>
        </form>
        <div>
        <JobList projects={projects} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    projects: state.firestore.ordered.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(Showcase);
