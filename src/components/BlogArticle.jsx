import React from "react";
import Tag from "../components/Tag";

const BlogArticle = (props) => {
  console.log("props\n", props);
  return (
    <a href={props.link} rel="noopener noreferrer" className="aTagOnHome">
      <div className="blogarticle-grid-item">
        <div className="blogarticle-subitem">
          <h1 className="blogHeader">{props.title}</h1>
          <div className="tag-container">
            <Tag title={props.tag1} />
            <Tag title={props.tag2} />
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
