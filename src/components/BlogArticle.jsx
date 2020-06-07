import React from "react";

const BlogArticle = (props) => {
  return (
    <a href={props.link} rel="noopener noreferrer">
      <div className="blogarticle-grid-item">
        <h1>{props.title}</h1>
        <p>{props.date}</p>
      </div>
    </a>
  );
};

export default BlogArticle;
