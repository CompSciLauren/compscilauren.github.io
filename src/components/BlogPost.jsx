import React from "react";

const BlogPost = (props) => {
  return (
    <a href={props.link} target="_blank">
      <div class="blogpost-grid-item">
        <h2>{props.title}</h2>
        <p>{props.date}</p>
      </div>
    </a>
  );
};

export default BlogPost;
