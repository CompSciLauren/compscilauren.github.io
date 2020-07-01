import React from "react";
import "../../../blog.css";
import "../../../../home/home.css";
import BlogProfile from "../../../../components/BlogProfile";
import BlogProfileTop from "../../../../components/BlogProfileTop";
import Tag from "../../../../components/Tag";
import CodeSnippet from "../../../../images/blog/2020/06-june/code-snippet.png";
import CreateNewFile from "../../../../images/blog/2020/06-june/create-new-file.gif";
import FailedCommit from "../../../../images/blog/2020/06-june/failed-commit.png";
import { DiscussionEmbed } from "disqus-react";

function Article0615() {
  return (
    <>
      <head>
        <title>Improve your Git workflow and save time with Git hooks</title>
      </head>
      <main id="main-content">
        <div className="blog-page-wrap">
          <h1 style={{ padding: "8px" }}>
            Improve your Git workflow and save time with Git hooks
          </h1>
          <BlogProfileTop date="June 15th, 2020" readTime="7 min" />
          <div className="tag-container">
            <Tag title="git" />
            <Tag title="automation" />
          </div>
          <hr></hr>
          <div style={{ color: "#292929", lineHeight: "28px" }}>
            <p>
              If you're a software developer, you probably know about Git. You
              might use it for version control at work or for side projects. One
              interesting feature you may not have used yet, at least not
              intentionally, is a Git hook.
            </p>
            <p>
              Git hooks are custom scripts that you can use to automate tasks
              that will be triggered either immediately before or after a Git
              command is executed.
            </p>
            <p>
              The Git book explains it best in their{" "}
              <a
                href="https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks"
                target="_blank"
                rel="noopener noreferrer"
              >
                Customizing Git - Git Hooks
              </a>{" "}
              section.
            </p>
            <blockquote className="classyStyle">
              <span>
                Like many other Version Control Systems, Git has a way to fire
                off custom scripts when certain important actions occur. There
                are two groups of these hooks: client-side and server-side.
                Client-side hooks are triggered by operations such as committing
                and merging, while server-side hooks run on network operations
                such as receiving pushed commits. You can use these hooks for
                all sorts of reasons.
              </span>
            </blockquote>
            <p>
              In this article, we will cover two things.
              <ol>
                <li>A simple way to add a new Git hook.</li>
                <li>
                  How to setup Git hooks for a project in a way that allows
                  everyone to use them automatically. This means no one else
                  will need to manually set anything up for the hooks to work.
                </li>
              </ol>
            </p>
            <h1 className="sectionTitle">Has this ever happened to you?</h1>
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
              branch, only to realize it's because you forgot to update
              submodules (again)? Let's "Git" hooked on Git hooks. (Ha!)
            </p>
            <h1 className="sectionTitle">Stepping through a simple example</h1>
            <p>
              Okay, let's see what it looks like to go through each step of
              adding a Git hook to a project.
            </p>
            <p>
              First we need to think of a task that we could automate. Say you
              like to write "FIXME" as a comment next to whatever needs to be
              fixed in the code. You plan to fix them before committing. Once
              you are finished, you remove the comment.
            </p>
            <p>
              You probably remember to fix most of them, but once in a while you
              lose track and accidentally commit one or two of the comments or
              unfinished code sections. How can we prevent this from happening?
            </p>
            <p>
              We can add a Git hook that will prevent us from successfully
              commiting code if it detects the phrase "FIXME" in any of the
              modified files.
            </p>
            <p>
              First we need to write the hook. The simplest version might look
              something like this.
            </p>
            <img
              src={CodeSnippet}
              alt="Code snippet for a Git hook"
              className="codeSnippetImg"
            ></img>
            <p style={{ fontSize: "16px", textAlign: "center" }}>
              <a
                href="https://github.com/CompSciLauren/awesome-git-hooks/blob/c6942b03b74d0c583a858e89b58f761157df5c93/pre-commit-hooks/search-term.hook"
                target="_blank"
                rel="noopener noreferrer"
              >
                View this code snippet on GitHub
              </a>
            </p>
            <h2 className="subSectionTitle">What this code is doing</h2>
            <p>
              This is our Git hook script. A script can be written in many
              different languages. This one happens to be written in Bash.
            </p>
            <p>
              You always use a shebang at the top of the hook script to specify
              which language you are writing it in. A shebang always starts with{" "}
              <code>#!/</code>.
            </p>
            <p>
              Our shebang is <code>#!/bin/bash</code> because we are writing our
              script in Bash. Other common shebangs you might see are:
              <ul>
                <li>
                  <code>#!/usr/bin/perl</code>
                </li>
                <li>
                  <code>#!/usr/bin/python3</code>
                </li>
                <li>
                  <code>#!/usr/bin/env bash</code>
                </li>
              </ul>
            </p>
            <p>
              We also need to specify the phrase that we want to search for in
              the code. Whatever phrase you put as the value for the variable
              "SEARCH_TERM" is what the script will detect and then prevent from
              being committed.
            </p>
            <p>
              The last block of code is where we do the legwork of searching for
              the term and the logic for handling that.
            </p>
            <p>
              If it detects the search term anywhere in the modified files, it
              will display the messages we've written and then exit with a
              status of 1.
            </p>
            <p>
              Exit 1 means that something went wrong, so the script stops and
              Git will not proceed with the commit.
            </p>
            <p>
              If the search term is not detected however, then the logic inside
              our if-statement is ignored and it reaches the end of our script.
            </p>
            <p>
              At this point it is implied that it exits with a status of 0. Exit
              0 means that the script finished successfully, and so Git will
              proceed with the commit.
            </p>
            <h2 className="subSectionTitle">Putting our script to work</h2>
            <p>
              Now that our hook is written, we just need to place it in the
              designated hooks folder in our project that uses Git.
            </p>
            <p>
              The folder we want to navigate to is the .git/hooks folder inside
              our local repository. The .git folder is hidden by default, but
              every repository that uses Git has one. Once there, we just need
              to place our new script inside.
            </p>
            <p>
              We create a new file here and paste the code snippet inside. When
              we save it, we will name the file "pre-commit", without any file
              extension. Doing this will tell Git that this file is a Git hook
              script, and is specifically a pre-commit hook.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={CreateNewFile}
                alt="Gif showing the creation of a new Git hook file"
              ></img>
            </div>
            <p>
              You'll notice there are several types of Git hooks in the
              .git/hooks folder by default. Each file has an example of
              something you can do with that type of Git hook. For a full list
              of the types of Git hooks available, check out the{" "}
              <a
                href="https://git-scm.com/docs/githooks"
                target="_blank"
                rel="noopener noreferrer"
              >
                Git hooks documentation
              </a>
              .
            </p>
            <p>
              Great! Now we're ready to see it in action. Let's say we have a
              file in our project with the comment "FIXME" above a block of code
              we're working on.
            </p>
            <p>
              Pretending we haven't noticed that code comment, we stage our file
              and then commit it. Oops! Luckily, our Git hook is ready to save
              the day. Let's see what happens.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={FailedCommit}
                alt="An attempt to commit the key phrase, it fails thanks to the Git hook"
                className="failedCommitImg"
              ></img>
            </div>
            <p>
              Our pre-commit hook was triggered automatically, and scanned the
              file for the phrase "FIXME". It detected the phrase and forced our
              commit to fail.
            </p>
            <p>
              Good thing we left a useful error message so we weren't left
              totally confused. Now we can either finish fixing whatever the
              code issue was, or if it's done then we just need to remove the
              comment.
            </p>
            <p>
              After we remove that comment, we can successfully commit the code.
            </p>
            <p>
              A couple of things you might be wondering. Does this work if we
              write "FIXME" in lowercase? What if we write it like "FIXME:"
              instead? Also, is this hook checking for comments only, or if the
              phrase found its way into a block of text inside an HTML &lt;p&gt;
              tag, would it still stop the commit?
            </p>
            <p>
              The phrase is case-sensitive based on how we wrote our hook, so in
              this case it needs to be all uppercase. Any characters surrounding
              it won't matter though, as long as it says exactly "FIXME". Our
              hook is only checking for that phrase, so it will work even if it
              is found outside of a code comment.
            </p>
            <p>
              This is a simple example, but you can create more complex hooks to
              automate trickier Git workflows too.
            </p>
            <p>
              You can find a variety of Git hook examples on a GitHub repository
              that I have linked at the bottom of this article under the
              Conclusion section.
            </p>
            <h1 className="sectionTitle">Adding Git hooks to a team project</h1>
            <p>
              Manually adding a Git hook to your project is fine, especially if
              it's a solo project. But what about your team's project? How can
              we allow everyone to benefit from your Git hooks?
            </p>
            <p>
              It's actually pretty straightforward if you use{" "}
              <a
                href="https://github.com/typicode/husky"
                target="_blank"
                rel="noopener noreferrer"
              >
                Husky
              </a>
              , a tool specifically developed to make sharing Git hooks easy.
            </p>
            <p>
              Let's say you want to add automatic code formatting to your
              project, to help keep the code looking consistent. We can use{" "}
              <a
                href="https://prettier.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prettier
              </a>
              , a popular formatting tool. Here are the steps you'd take.
            </p>
            <p>
              <ol>
                <li>
                  Install Prettier with <code>npm i prettier --save-dev</code>
                </li>
                <li>
                  Install Husky and lint-staged with{" "}
                  <code>npx mrm lint-staged</code>
                </li>
                <li>
                  Add this as another script under your package.json scripts:{" "}
                  <code>"prettier": "prettier --write '**/*.js'"</code>
                </li>
              </ol>
              <p>
                It's that easy! Once these changes are added to the project, the
                prettier formatter will automatically run on any modified files
                that do not match the formatting settings.
              </p>
              <p>
                Note that the files this example checks are any that match the
                glob pattern <code>**/*.js</code> which means any JavaScript
                files in the project.
              </p>
              <p>
                To specify what types of files you want it to check, change the
                glob pattern. So if, for example, you wanted it to check both
                JavaScript and markdown files, you would change the glob pattern
                to <code>**/*.{"{js, md}"}</code>.
              </p>
              <p>
                You can also execute <code>npm run prettier</code> manually to
                run it on all current files that match the glob pattern in the
                project. This is useful if you want to use prettier but already
                have a lot of existing code that needs the formatting updated.
              </p>
              <p>
                You can find more information on automating Prettier with Git
                hooks on the Prettier{" "}
                <a
                  href="https://prettier.io/docs/en/precommit.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  pre-commit hook
                </a>{" "}
                documentation.
              </p>
            </p>
            <h1 className="sectionTitle">Conclusion</h1>
            <p>
              I wanted a place to keep a list of all the useful Git hooks I've
              come across or written over time, and that place is my{" "}
              <a
                href="https://github.com/CompSciLauren/awesome-git-hooks"
                target="_blank"
                rel="noopener noreferrer"
              >
                Awesome Git Hooks repository on GitHub
              </a>
              . Feel free to check there for Git hook ideas.
            </p>
            <p>
              Have a useful Git hook to share? Please consider contributing it
              to the GitHub repo, if it's not already on there. Let's help each
              other make the most out of Git hooks!
            </p>
            <p>
              If you don't already use Git hooks in your day to day coding, I
              hope you'll give it a try. Automating your Git workflow will save
              you time and can prevent all kinds of mistakes from happening.
            </p>
            <p>
              Have you used Git hooks before? Which ones do you use the most?
              Let me know what you think about hooks in the comments below!
            </p>
          </div>
          <BlogProfile />
        </div>
        <div className="comment-section-wrap">
          <DiscussionEmbed
            shortname="compscilauren"
            config={{
              url:
                "https://compscilauren.com/blog/improve-your-git-workflow-and-save-time-with-git-hooks",
              identifier: "article-2020-06-15",
              title: "Improve your Git workflow and save time with Git hooks",
              //language: 'zh_TW' //e.g. for Traditional Chinese (Taiwan)
            }}
          />
        </div>
      </main>
    </>
  );
}

export default Article0615;
