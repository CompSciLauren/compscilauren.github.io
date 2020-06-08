import React from "react";
import "../../blog.css";
import "../../../home/home.css";
import BlogProfile from "../../../components/BlogProfile";
import BlogProfileTop from "../../../components/BlogProfileTop";
import Tag from "../../../components/Tag";

function TempArticle0615() {
  return (
    <>
      <main id="main-content">
        <div className="blog-page-wrap">
          <h1>Improve your Git workflow and save time with Git hooks</h1>
          <BlogProfileTop date="June 15th, 2020" readTime="6 min" />
          <div className="tag-container">
            <Tag title="git" />
            <Tag title="automation" />
          </div>
          <hr></hr>
          <div style={{ lineHeight: "28px" }}>
            <p>Coming soon! :)</p>
          </div>
          <BlogProfile />
        </div>
      </main>
    </>
  );
}

export default TempArticle0615;
