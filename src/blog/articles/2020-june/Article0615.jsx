import React from "react";
import "../../blog.css";
import "../../../home/home.css";
import BlogProfile from "../../../components/BlogProfile";
import BlogProfileTop from "../../../components/BlogProfileTop";
import Tag from "../../../components/Tag";
import CodeSnippet from "../../../images/code-snippet.png";
import CreateNewFile from "../../../images/create-new-file.gif";
import FailedCommit from "../../../images/failed-commit.png";

function Article0615() {
  return (
    <>
      <main id="main-content">
        <div className="blog-page-wrap">
          <h1>Improve your Git workflow and save time with Git hooks</h1>
          <BlogProfileTop date="June 15th, 2020" readTime="9 min" />
          <div className="tag-container">
            <Tag title="git" />
            <Tag title="automation" />
          </div>
          <hr></hr>
          <div style={{ lineHeight: "28px" }}>
            <p>
              If you're a software developer, you probably know about Git. You
              might use it for version control at work or for side projects. One
              interesting feature you may not have used yet, at least not
              intentionally, is a Git hook. Git hooks are custom scripts that
              you can use to automate tasks that will be triggered either
              immediately before or after a Git command is executed.
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
              "Like many other Version Control Systems, Git has a way to fire
              off custom scripts when certain important actions occur. There are
              two groups of these hooks: client-side and server-side.
              Client-side hooks are triggered by operations such as committing
              and merging, while server-side hooks run on network operations
              such as receiving pushed commits. You can use these hooks for all
              sorts of reasons."
            </blockquote>
            <p>
              In this article, we will cover three things.
              <ol>
                <li>How to get started with Git hooks quickly.</li>
                <li>A simple example of adding a new Git hook.</li>
                <li>
                  How to setup Git hooks for a project in a way that allows
                  everyone to use them automatically. This means no one else
                  will need to manually set anything up for the hooks to work.
                </li>
              </ol>
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
              branch, only to realize it's because you forgot to update
              submodules (again)? Let's "Git" hooked on Git hooks. (Ha!)
            </p>
            <p style={{ fontSize: "28px" }}>Get started quickly</p>
            <p>
              Ready to jump right in and give it a try? I feel that. Here's a
              quick way to get started.
            </p>
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
              . If you go there you'll find a Quick Start section in the table
              of contents. It should have everything you need to know.
            </p>
            <p style={{ fontSize: "28px" }}>
              Stepping through a simple example
            </p>
            <p>
              Okay, let's see what it looks like to go through each step of
              adding a Git hook to a project. This will cover the Quick Start
              steps mentioned above, but in more detail.
            </p>
            <p>
              First we need to think of a task that we could automate. Say you
              like to write "FIXME" as a comment next to whatever needs to be
              fixed in the code. You plan to fix them before committing. Once
              you are finished, you remove the comment. You probably remember to
              fix most of them, but once in a while you lose track and
              accidentally commit one or two of the comments or unfinished code
              sections. How can we prevent this from happening?
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
                View this code snippet on the GitHub repo
              </a>
            </p>
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
              we're working on. Pretending we haven't noticed that code comment,
              we stage our file and then commit it. Oops! Luckily, our Git hook
              is ready to save the day. Let's see what happens.
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
              commit to fail. Good thing we left a useful error message so we
              weren't left totally confused. Now we can either finish fixing
              whatever the code issue was, or if it's done then we just need to
              remove the comment.
            </p>
            <p>
              After we remove that comment, we will be able to successfully
              commit the code. A couple of things you might be wondering. Does
              this work if we write "FIXME" in lowercase? What if we write it
              like "FIXME:" instead? Also, is this hook checking for comments
              only, or if the phrase found its way into a block of text inside
              an HTML &lt;p&gt; tag, would it still stop the commit?
            </p>
            <p>
              The phrase is case-sensitive based on how we wrote our hook, so in
              this case it needs to be all uppercase. Any characters surrounding
              it won't matter though, as long as it says exactly "FIXME". Our
              hook is only checking for that phrase, so it will work even if it
              is found outside of a code comment.
            </p>
            <p style={{ fontSize: "28px" }}>Adding complexity</p>
            <p>
              If we wanted to do more with this hook, we can add onto what we
              already have. We could change it to not be case-sensitive. We
              could greatly increase the odds that it is only detected when part
              of a code comment, by changing the search phrase to "// FIXME"
              instead. We could also make it so the hook only warns us that the
              phrase was found, but still allow us to proceed with the commit
              anyway. We could also add multiple phrases rather than only having
              one to detect.
            </p>
            <p>
              This is a really simple example, but you can create more complex
              hooks to automate trickier Git workflows too. You can find a
              variety of Git hook examples on that repo I linked above.
            </p>
            <p style={{ fontSize: "28px" }}>
              Adding Git hooks to a team project
            </p>
            <p>
              Manually adding a Git hook to your project is fine, especially if
              it's a solo project. But what about your team's project? How can
              we allow everyone to benefit from your Git hooks?
            </p>
            <p>
              It's actually pretty straightforward if you use husky, a tool
              specifically developed to make sharing Git hooks easy.
            </p>
            <p>
              Let's say you want to add automatic code formatting to your
              project using the Prettier formatter. Here are the steps you'd
              take.
            </p>
            <p>
              <ol>
                <li>
                  Install prettier with <code>npm i prettier --save-dev</code>
                </li>
                <li>
                  Install husky and lint-staged with{" "}
                  <code>npx mrm lint-staged</code>
                </li>
                <li>
                  Add this as another script under your package.json scripts:{" "}
                  <code>"prettier": "prettier --write '**/*.js'"</code>
                </li>
              </ol>
            </p>
            <p style={{ fontSize: "28px" }}>Conclusion</p>
            <p>
              If you don't already use Git hooks in your day to day coding, I
              hope you'll give it a try. Automating your Git workflow will save
              you time and can prevent all kinds of little mistakes from
              happening.
            </p>
            <p>
              Do you have a useful Git hook to share? Feel free to contribute it
              to the GitHub repo linked above, if there isn't already a hook
              that covers it on the list.
            </p>
            <p>
              Thanks for reading and I hope you've found this short article
              helpful. This is my first blog post ever and I'm super excited
              about finally having a blog. My goal is to continue publishing one
              article per week at least for the summer. If you have any
              questions or comments, feel free to send me a message. Happy
              coding!
            </p>
          </div>
          <BlogProfile />
        </div>
      </main>
    </>
  );
}

export default Article0615;
