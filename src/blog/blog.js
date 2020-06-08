import React from "react";
import "../home/home.css";
import "../styles/blogarticle.css";
import BlogArticle from "../components/BlogArticle";
import "./blog.css";

function blog() {
  return (
    <>
      <main id="main-content">
        <div>
          <div className="blog-home-page-wrap">
            <h1 className="blogTitle">Blog Posts</h1>
            <div className="blogarticle-grid-container">
              <BlogArticle
                title="Improve your Git workflow and save time with Git hooks"
                date="June 8th, 2020"
                link="/blog/improve-your-git-workflow-and-save-time-with-git-hooks"
              />
              {/* <BlogArticle
                title="Building a simple clock-in clock-out web app using React"
                date="June 15th, 2020"
              /> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default blog;
