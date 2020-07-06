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

function Article0708() {
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
          <BlogProfileTop date="July 8th, 2020" readTime="5 min" />
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
            <h1 className="sectionTitle">The Cheat Sheet</h1>
            <p>
              There are already some nice Git cheat sheets out there, but I
              figured I'd take a shot at making my own.
            </p>
            <p>
              Here's the cheat sheet. If you want more information about various
              commands listed, scroll down to continue reading!
            </p>
            <h1 className="sectionTitle">
              Change the local & remote branch name
            </h1>
            <p>1. Rename local branch, while on that branch</p>
            <p>
              <code>git branch -m new-name</code>
            </p>
            <p>2. Delete old-name remote branch, push new-name local branch</p>
            <p>
              <code>git push origin :old-name new-name</code>
            </p>
            <p>
              3. Switch to new branch, reset upstream branch for new-name local
              branch
            </p>
            <p>
              <code>git push origin -u new-name</code>
            </p>
            <h1 className="sectionTitle">
              Merge changes from incoming-branch into current branch
            </h1>
            <p>
              Do this while on the current branch to merge the changes into.
            </p>
            <p>
              So if you want to merge changes from one branch into your main
              branch, then make sure you are on the main branch when you do
              this.
            </p>
            <p>
              <code>git merge incoming-branch-name</code>
            </p>
            <h1 className="sectionTitle">
              Do a git squash & merge from Git Bash instead of a GitHub PR
            </h1>
            <h1 className="sectionTitle">
              Make forked repo main branch updated to match original repo
              current main branch
            </h1>
            <h1 className="sectionTitle">
              Edit/delete a pushed commit (erases all history of the removal)
            </h1>
            <h1 className="sectionTitle">Perform a rebase</h1>
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

export default Article0708;
