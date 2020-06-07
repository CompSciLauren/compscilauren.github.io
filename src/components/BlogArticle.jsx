import React from "react";
import Tag from "../components/Tag";

const BlogArticle = (props) => {
  return (
    <a href={props.link} rel="noopener noreferrer">
      <div className="blogarticle-grid-item">
        <div className="blogarticle-subitem">
          <h1 className="blogHeader">{props.title}</h1>
          <div className="tag-container">
            <Tag title="git" />
            <Tag title="automation" />
          </div>
        </div>
        <div className="blogarticle-subitem">
          <p>{props.date}</p>
        </div>
      </div>
    </a>
  );
};

export default BlogArticle;
