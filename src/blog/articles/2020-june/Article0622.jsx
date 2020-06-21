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
        <title>Why contribute to open source and how to get started</title>
      </head>
      <main id="main-content">
        <div className="blog-page-wrap">
          <h1 style={{ padding: "8px" }}>
            Why contribute to open source and how to get started
          </h1>
          <BlogProfileTop date="June 22nd, 2020" readTime="5 min" />
          <div className="tag-container">
            <Tag title="opensource" />
            <Tag title="github" />
          </div>
          <hr></hr>
          <div style={{ color: "#292929", lineHeight: "28px" }}>
            <p>Text.</p>
            <p className="sectionTitle">What is open source?</p>
            <p>Text.</p>
            <p className="sectionTitle">Who uses open source software?</p>
            <p>Text.</p>
            <p className="sectionTitle">Why people care about FOSS/FLOSS</p>
            <p>Text.</p>
            <p className="sectionTitle">
              What you get from contributing to open source
            </p>
            <p>Text.</p>
            <p className="sectionTitle">Hacktoberfest</p>
            <p>Text.</p>
            <p className="sectionTitle">Getting started with GitHub</p>
            <p>Text.</p>
            <p className="sectionTitle">Finding a project</p>
            <p>Text.</p>
            <h2 className="subSectionTitle">
              Strategy #1: Pick a "practice" project
            </h2>
            <p>Text.</p>
            <h2 className="subSectionTitle">
              Strategy #2: Collect interesting projects over time
            </h2>
            <p>Text.</p>
            <p className="sectionTitle">Google Summer of Code</p>
            <p>Text.</p>
            <p className="sectionTitle">Figuring out what to contribute</p>
            <p>Text.</p>
            <p className="sectionTitle">Getting an employer to notice</p>
            <p>Text.</p>
            <p className="sectionTitle">
              How to actually make the contribution
            </p>
            <p>Text.</p>
            <p className="sectionTitle">
              Creating your own open source project
            </p>
            <p>Text.</p>
            <p className="sectionTitle">Conclusion</p>
            <p>Summary text here.</p>
            <p>
              Have you ever contributed to open source? What kind of projects
              are you most interested in? Let me know in the comments below!
            </p>
          </div>
          <BlogProfile />
        </div>
        <div className="comment-section-wrap">
          <DiscussionEmbed
            shortname="compscilauren"
            config={{
              url:
                "https://compscilauren.com/blog/why-contribute-to-open-source-and-how-to-get-started",
              identifier: "article-2020-06-22",
              title: "Why contribute to open source and how to get started",
            }}
          />
        </div>
      </main>
    </>
  );
}

export default Article0622;
