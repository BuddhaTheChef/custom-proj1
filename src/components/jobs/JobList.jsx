import React from "react";
import "../App.css";
import moment from 'moment'

const JobList = ({projects}) => {
  console.log('projects',projects)
    return (
      <div>
      {projects && projects.map(project => {
        return (
          <div className="job-list-posts" key={project.id}>
          <div style={{padding: '0px 50px'}}>
          <h1>Title: {project.title}</h1>
          <h3>techStack: {project.techStack}</h3>
          <div style={{display: 'flex'}}>
          <h3>Images:</h3><img src={project.image} alt="imagezz" />
          </div>
          <h3 style={{margin: '0px'}}>About</h3>
          <p>{project.content}</p>
          <h4>By: {project.authorName}</h4>
          <p>{moment(project.createdAt.toDate()).calendar()}</p>
          </div>
          </div>
        )
      })}
      </div>
  )
}

export default JobList;
