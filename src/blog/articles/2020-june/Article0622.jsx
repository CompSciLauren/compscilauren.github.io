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
            <h1 className="sectionTitle">What is open source?</h1>
            <p>Text.</p>
            <h1 className="sectionTitle">Who uses open source software?</h1>
            <p>Text.</p>
            <h1 className="sectionTitle">Why people care about FOSS/FLOSS</h1>
            <p>Text.</p>
            <h1 className="sectionTitle">
              What you get from contributing to open source
            </h1>
            <p>Text.</p>
            <h1 className="sectionTitle">Hacktoberfest</h1>
            <p>Text.</p>
            <h1 className="sectionTitle">Getting started with GitHub</h1>
            <p>Text.</p>
            <h1 className="sectionTitle">Finding a project</h1>
            <p>Text.</p>
            <h2 className="subSectionTitle">
              Strategy #1: Pick a "practice" project
            </h2>
            <p>Text.</p>
            <h2 className="subSectionTitle">
              Strategy #2: Collect interesting projects over time
            </h2>
            <p>Text.</p>
            <h1 className="sectionTitle">Google Summer of Code</h1>
            <p>Text.</p>
            <h1 className="sectionTitle">Figuring out what to contribute</h1>
            <p>Text.</p>
            <h1 className="sectionTitle">Getting an employer to notice</h1>
            <p>Text.</p>
            <h1 className="sectionTitle">
              How to actually make the contribution
            </h1>
            <p>Text.</p>
            <h1 className="sectionTitle">
              Creating your own open source project
            </h1>
            <p>
              Another interesting way to get involved in open source is to start
              your own open source project!
            </p>
            <p>
              The basics are pretty straightforward, but there are a few
              different key features that tend to get overlooked when you're
              maintaining one for the first time.
            </p>
            <p>
              There's also the task of getting people to actually use your
              project. Not to mention finding people who are willing to help
              contribute to it.
            </p>
            <p>
              I've made plenty of mistakes along the way with my own open source
              projects, and I can't wait to share what I've learned with you.
            </p>
            <p>
              Next week I'll cover how to get started with your own open source
              project, plus some tips for success.
            </p>
            <h1 className="sectionTitle">Conclusion</h1>
            <p>
              I hope this article has helped you understand open source better.
              I also hope you will give contributing a try! Even if you decide
              you don't want to do it regularly, it's a good thing to try at
              least once.
            </p>
            <p>
              Remember to check back next week if you're interested in starting
              your own open source project, or learning some new tips for
              success!
            </p>
            <p>
              Have you ever contributed to open source? Do you have any
              recommended beginner-friendly projects that new contributors could
              try? Let us all know in the comments below!
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
