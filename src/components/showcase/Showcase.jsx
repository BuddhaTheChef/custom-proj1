import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions'
import { Button } from 'semantic-ui-react';

class Showcase extends Component {
  state = {
    title: '',
    content: '',
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
    this.props.history.push('/jobs')
  }

  render() {
    return (
      <div style={{marginTop: '65px'}}>
        <form onSubmit={this.handleSubmit}>
          <h3>Create new project</h3>
          <div>
            <h6>Title</h6>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div>
            <h6>Content</h6>
            <textarea id="content" onChange={this.handleChange} />
          </div>
          <div>
            <Button color="pink">Create</Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(Showcase);
