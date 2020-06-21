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
            <h1 className="blogTitle">Joy Bytes</h1>
            <p>
              Hi there! This is a blog that focuses on software development and
              is geared toward newer developers. It is run by me, Lauren
              Stephenson (@CompSciLauren on social media).
            </p>
            <p>
              I'm super excited to finally have a blog! My goal is to publish
              one new article each week, at least for the summer. Topics I am
              likely to cover are things related to React, JavaScript, UI
              design, open source, and tips for newer developers.
            </p>
            <p>
              If you have any questions or would like to see a specific topic
              covered, feel free to send me a message. Happy coding!
            </p>
            <h2 className="blogPostsHeader">Blog Posts</h2>
            <div className="blogarticle-grid-container">
              <BlogArticle
                title="Why contribute to open source and how to get started"
                date="June 22nd, 2020"
                link="/blog/why-contribute-to-open-source-and-how-to-get-started"
                tag1="open source"
                tag2="github"
              />
              <BlogArticle
                title="Improve your Git workflow and save time with Git hooks"
                date="June 15th, 2020"
                link="/blog/improve-your-git-workflow-and-save-time-with-git-hooks"
                tag1="git"
                tag2="automation"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default blog;
