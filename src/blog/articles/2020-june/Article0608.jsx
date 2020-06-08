import React from "react";
import "../../blog.css";
import "../../../home/home.css";
import BlogProfile from "../../../components/BlogProfile";
import BlogProfileTop from "../../../components/BlogProfileTop";
import Tag from "../../../components/Tag";
import CodeSnippet from "../../../images/code-snippet.png";
import CreateNewFile from "../../../images/create-new-file.gif";

function Article0608() {
  return (
    <>
      <main id="main-content">
        <div className="blog-page-wrap">
          <h1>Improve your Git workflow and save time with Git hooks</h1>
          <BlogProfileTop date="June 8th, 2020" readTime="6 min" />
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
              branch, only to realize it's because you forgot to update
              submodules (again)? Let's "Git" hooked on Git hooks. (Ha!)
            </p>
            <p style={{ fontSize: "28px" }}>Get started quickly</p>
            <p>
              Ready to jump in and give it a try already? I feel that. Here's a
              quick way to get started.
            </p>
            <p>
              I wanted a place to keep a list of all the neat Git hooks I've
              come across or attempted to create over time, and that place is my{" "}
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
            <p style={{ fontSize: "28px" }}>More details on how it works</p>
            <p>
              Okay, let's see what it looks like to go through each step of
              adding a Git hook to a project. This will cover the Quick Start
              steps mentioned above, but in more detail.
            </p>
            <p>
              First we need to think of a task that we could automate. Say you
              are writing "fixme" as a comment next to whatever is not currently
              working in the code. You plan to fix them before committing. You
              probably fix most of them, but maybe sometimes you lose track and
              accidentally commit one or two. How can we prevent this from
              happening?
            </p>
            <p>
              Let's add a Git hook that will prevent us from successfully
              commiting code if it detects the phrase "fixme" in any of the
              modified files.
            </p>
            <p>
              First we need to write the hook. The simplest version might look
              something like this.
            </p>
            <img
              src={CodeSnippet}
              alt="Code snippet for a Git hook"
              width="1000"
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
              The folder we want is the "hooks" folder inside our hidden .git
              folder inside the project. Once there, we just need to place our
              new script inside.
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
              Great! Now we're ready to see it in action. We have a file in our
              project with the comment "FIXME" above a block of code we're
              working on. Pretending we haven't noticed that code comment, we
              stage our file and then commit the file. Oops! Luckily, our Git
              hook is ready to save the day. Let's see what happens.
            </p>
            <p>Picture here</p>
            <p>
              Our pre-commit hook was triggered, and scanned the file for the
              phrase "FIXME". It found the phrase and forced our commit to fail.
              Good thing we left a useful error message so we weren't left
              totally confused. Now we can either finish fixing whatever the
              code issue was, or if it's done then we just need to remove the
              comment. Now let's try that commit again.
            </p>
            <p>Picture here</p>
            <p>
              Nice! We're good to go. A couple things you might be wondering.
              Does this work if we write "fixme" in lowercase? What if we write
              it like "fixme:" instead? Also, is this hook checking for comments
              only, or if the phrase found its way into a block of text inside
              an HTML &lt;p&gt; tag, would it still stop the commit?
            </p>
            <p>
              It will work regardless of the casing or any characters
              surrounding it, as long as it says exactly "fixme". Our hook is
              only checking for the phrase "fixme", so it will work even if that
              phrase is not found as part of a code comment.
            </p>
            <p style={{ fontSize: "28px" }}>Adding complexity</p>
            <p>
              If we wanted to make this more complex, we could add onto what we
              already have. We could limit it to phrases found inside code
              comments only, by changing the search phrase to "// FIXME"
              instead. That would limit the results to only being code comments
              that are begin exactly with that phrase. We could also make it so
              the hook only warns us that the phrase was found, but have it
              still allow us to continue with the commit anyway. We could also
              add multiple phrases rather than only having one to detect.
            </p>
            <p>
              This is a really simple example, but you can create more complex
              hooks to automate trickier Git workflows too. You can find a
              variety of Git hook examples on that repo I linked above.
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
              questions or comments, feel free to reach out. Happy coding!
            </p>
          </div>
          <BlogProfile />
        </div>
      </main>
    </>
  );
}

export default Article0608;
