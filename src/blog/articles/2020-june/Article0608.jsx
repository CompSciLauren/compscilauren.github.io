import React from "react";
import "../../blog.css";
import "../../../home/home.css";
import BlogProfile from "../../../components/BlogProfile";
import BlogProfileTop from "../../../components/BlogProfileTop";
import Tag from "../../../components/Tag";

function Article0608() {
  return (
    <>
      <main id="main-content">
        <div className="blog-page-wrap">
          <h1>Improve your Git workflow and save time with Git hooks</h1>
          <BlogProfileTop date="June 8th, 2020" readTime="5 min" />
          <div className="tag-container">
            <Tag title="git" />
            <Tag title="automation" />
          </div>
          <hr></hr>
          <p>
            If you're a software developer, you probably know about Git. You
            might use it for version control at work or for side projects. One
            interesting feature you may not have used yet, at least not
            intentionally, is a Git hook. Git hooks are custom scripts that you
            can use to automate tasks that will be triggered either immediately
            before or after a Git command is executed.
          </p>
          <p>
            These hooks fall into one of two categories: client-side or
            server-side. Client-side hooks are triggered by operations like
            committing and merging, while server-side hooks run on network
            operations, like whenever a pushed commit is received.
          </p>
          <p style={{ fontSize: "28px" }}>Has this ever happened to you?</p>
          <p>
            Do you ever push your code, only to realize you forgot to run that
            darn formatting command? There's a Git hook for that!
          </p>
          <p>
            Do you leave little comments in your code to remind yourself of
            things to fix, only to commit those comments by accident? Don't
            worry, there's a Git hook for that too!
          </p>
          <p>
            Ever wonder why your code doesn't work after checking out a new
            branch, only to realize it's because you forgot to update submodules
            (again)? Let's "Git" hooked on Git hooks. (Ha!)
          </p>
          <p style={{ fontSize: "28px" }}>Get started quickly</p>
          <p>
            Ready to jump in and give it a try already? I feel that. Here's a
            quick way to get started.
          </p>
          <p>
            I wanted a place to keep a list of all the neat Git hooks I've come
            across or attempted to create over time, and that place is my{" "}
            <a
              href="https://github.com/CompSciLauren/awesome-git-hooks"
              target="_blank"
              rel="noopener noreferrer"
            >
              Awesome Git Hooks repository on GitHub
            </a>
            . If you go there you'll find a Quick Start section in the table of
            contents. It should have everything you need to know.
          </p>
          <p style={{ fontSize: "28px" }}>More details on how it works</p>
          <p>Okay, let's walk through the steps of adding a Git hook.</p>
          <p style={{ fontSize: "28px" }}>Conclusion</p>
          <p>
            If you don't already use Git hooks in your day to day coding, I hope
            you'll give it a try. Automating your Git workflow will save you
            time and can prevent all kinds of little mistakes from happening.
          </p>
          <p>
            Thanks for reading and I hope you've found this short article
            helpful. This is my first blog post ever and I'm super excited about
            finally having a blog. My goal is to continue publishing one article
            per week at least for the summer. If you have any questions or
            comments, feel free to reach out. Happy coding!
          </p>
          <BlogProfile />
        </div>
      </main>
    </>
  );
}

export default Article0608;
