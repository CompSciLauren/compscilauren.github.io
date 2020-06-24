import React from "react";
import "../../blog.css";
import "../../../home/home.css";
import BlogProfile from "../../../components/BlogProfile";
import BlogProfileTop from "../../../components/BlogProfileTop";
import Tag from "../../../components/Tag";
import { DiscussionEmbed } from "disqus-react";

function Article0622() {
  return (
    <>
      <head>
        <title>20 tips for maintaining an open source project</title>
      </head>
      <main id="main-content">
        <div className="blog-page-wrap">
          <h1 style={{ padding: "8px" }}>
            20 tips for maintaining an open source project
          </h1>
          <BlogProfileTop date="June 22nd, 2020" readTime="11 min" />
          <div className="tag-container">
            <Tag title="opensource" />
            <Tag title="github" />
          </div>
          <hr></hr>
          <div style={{ color: "#292929", lineHeight: "28px" }}>
            <p>Brainstorming list of ideas</p>

            {/*
             0. Create the GitHub repository
             1. Choose a license
             2. Write a good README and other useful documentation
                  - Enforce rules about toxicity
             3. Create Issues for each task and label them
             4. Share on social media and any relevant websites (including 1 for your project if applicable)
                  - Ask for advice for example
             5. Make the most out of Hacktoberfest
             6. Get feedback from a trusted friend or coworker
             7. Build with the user in mind
             8. Assume good intent until clearly shown otherwise
             9. be kind; soft skills; be responsive
             10. Show appreciation and share sense of ownership
             11. Take care of yourself
             */}
          </div>
          <BlogProfile />
        </div>
        <div className="comment-section-wrap">
          <DiscussionEmbed
            shortname="compscilauren"
            config={{
              url:
                "https://compscilauren.com/blog/10-tips-for-maintaining-an-open-source-project",
              identifier: "article-2020-06-22",
              title: "20 tips for maintaining an open source project",
            }}
          />
        </div>
      </main>
    </>
  );
}

export default Article0622;
