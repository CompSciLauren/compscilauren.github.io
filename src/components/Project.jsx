import React from "react";

const Project = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="aTagOnHome"
    >
      <div className="projects-grid-item">
        <h2 style={{ color: "#ffed4a" }}>{props.title}</h2>
        <p style={{ fontSize: "20px" }}>{props.description}</p>
        <p className="tool-list" style={{ fontSize: "16px" }}>
          Built with {props.builtWith}
        </p>
      </div>
    </a>
  );
};

export default Project;
