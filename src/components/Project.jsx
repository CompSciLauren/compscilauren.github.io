import React from "react";

const Project = (props) => {
  return (
    <a href={props.link} target="_blank">
      <div class="projects-grid-item">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p className="tool-list">Built with {props.builtWith}</p>
      </div>
    </a>
  );
};

export default Project;
