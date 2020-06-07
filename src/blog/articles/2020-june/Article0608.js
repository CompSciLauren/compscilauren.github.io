import React from "react";
import "../../blog.css";
import "../../../home/home.css";
import BlogProfile from "../../../components/BlogProfile";

function Article0608() {
  return (
    <>
      <main id="main-content">
        <h1>hi</h1>
        <div className="blog-page-wrap">
          <h1>Improve your Git workflow and save time with Git Hooks</h1>
          <p>
            You've probably heard of GitHub. You probably use Git for version
            control at work. But one interesting feature you probably haven't
            used yet are Git hooks. Git hooks are custom scripts you can use to
            automate tasks which are triggered either before or after a git
            command is executed.
          </p>
          <p>
            There are two groups of these hooks: client-side and server-side.
            Client-side hooks are triggered by operations like committing and
            merging, while server-side hooks run on network operations such as
            receiving pushed commits.
          </p>
          <p>
            Has this ever happened to YOU? Do you ever push your code, only to
            realize you forgot to run that darn formatting command? There's a
            git hook for that! Do you leave little comments in your code to
            remind yourself of things to fix, only to commit those comments by
            accident? Don't worry, there's a git hook for that too! Ever wonder
            why your code doesn't work after switching branches and realize it's
            because you forgot to update submodules (again)? Time to _git_
            hooked on Git hooks!
          </p>
          <BlogProfile />
        </div>
      </main>
    </>
  );
}

export default Article0608;
