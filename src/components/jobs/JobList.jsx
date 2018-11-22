import React from "react";
import "../App.css";

const JobList = ({projects}) => {
    return (
      <div>
      {projects && projects.map(project => {
        return (
          <div className="job-list-posts" key={project.id}>
          <h1>{project.title}</h1>
          <p>{project.content}</p>
          <p>By: {project.authorName}</p>
          <hr/>
          </div>
        )
      })}
      </div>
  )
}

export default JobList;
