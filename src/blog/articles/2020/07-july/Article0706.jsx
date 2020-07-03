import React from "react";
import "../../../blog.css";
import "../../../../home/home.css";
import BlogProfile from "../../../../components/BlogProfile";
import BlogProfileTop from "../../../../components/BlogProfileTop";
import Tag from "../../../../components/Tag";
import { DiscussionEmbed } from "disqus-react";
import WomanWorkingOnLaptop from "../../../../images/blog/2020/07-july/woman-working-on-laptop.jpg";
import ConfusedRobot from "../../../../images/blog/2020/07-july/confused-robot.jpg";
import { Helmet } from "react-helmet";

function Article0706() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Git commands to keep on hand (cheat sheet included)</title>
        <meta
          name="description"
          content="When you get stuck in Git and don't know what to do, you'll want to know these commands.."
        />
        <meta
          property="og:title"
          content="Git commands to keep on hand (cheat sheet included)"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://compscilauren.com/blog/git-commands-to-keep-on-hand-cheat-sheet-included"
        />
        <meta property="og:image" content={WomanWorkingOnLaptop} />
        <meta
          property="og:description"
          content="When you get stuck in Git and don't know what to do, you'll want to know these commands."
        />
      </Helmet>
      <main id="main-content">
        <div className="blog-page-wrap">
          <h1 style={{ padding: "8px" }}>
            Git commands to keep on hand (cheat sheet included)
          </h1>
          <BlogProfileTop date="July 6th, 2020" readTime="5 min" />
          <div className="tag-container">
            <Tag title="git" />
            <Tag title="github" />
          </div>
          <hr></hr>
          <div style={{ color: "#292929", lineHeight: "28px" }}>
            <img
              src={ConfusedRobot}
              alt="A red colored robot cartoon character who looks confused and upset"
              className="buggyImg"
            />
            Image by{" "}
            <a href="https://pixabay.com/users/ErikaWittlieb-427626/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=534103">
              ErikaWittlieb
            </a>{" "}
            from{" "}
            <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=534103">
              Pixabay
            </a>
            <p>Being stuck on something in Git is no fun.</p>
            <p>
              It's stressful when you don't know whether a command will do what
              you expect, or if you don't know what command to use in the first
              place.
            </p>
            <p>
              Here's a run down of the commands you'll wish you knew when you
              find yourself stuck on a common Git problem.
            </p>
            <h1 className="sectionTitle">Conclusion</h1>
            <p>
              Did I leave out a handy command that you use in a pinch? Let me
              know in the comments below!
            </p>
          </div>
          <BlogProfile />
        </div>
        <div className="comment-section-wrap">
          <DiscussionEmbed
            shortname="compscilauren"
            config={{
              url:
                "https://compscilauren.com/blog/git-commands-to-keep-on-hand-cheat-sheet-included",
              identifier: "article-2020-07-06",
              title: "Git commands to keep on hand (cheat sheet included)",
            }}
          />
        </div>
      </main>
    </>
  );
}

export default Article0706;
