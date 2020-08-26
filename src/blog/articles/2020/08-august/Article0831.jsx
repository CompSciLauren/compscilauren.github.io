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

function Article0831() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title></title>
        <meta
          name="description"
          content="When you get stuck in Git and don't know what to do, you'll want to know these commands.."
        />
        <meta
          property="og:title"
          content="How to organize your school projects on GitHub"
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
            How to organize your school projects on GitHub
          </h1>
          <BlogProfileTop date="August 31st, 2020" readTime="5 min" />
          <div className="tag-container">
            <Tag title="github" />
            <Tag title="productivity" />
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
            <p>
              Ultimately, how you choose to organize your projects is up to you.
              I'm in my final semester of college, and I've seen it done in a
              variety of ways. I also see this question asked online
              occasionally. So I figured I ought to write a short thing about
              it.
            </p>
            <h1 className="sectionTitle">Use version control</h1>
            <p>
              The number one thing I would definitely suggest you do, is to use
              version control. Maybe right now you keep your projects in folders
              on your computer and leave it at that. That's fine in the
              beginning, but once you get familiar with version control you'll
              never want to go back.
            </p>
            <p>Version control is useful because reasons.</p>
            <h1 className="sectionTitle">Public vs Private Repo</h1>
            <p>
              Hands down, you want to make your repo private. This one is not up
              for discussion, unless you are in a special circumstance of some
              sort.
            </p>
            <p>
              Typically, other students are also in the class working on
              projects at the same time as you.
            </p>
            <p>
              If you make your repo a public one, that means everyone can see
              your code. That includes your classmates.
            </p>
            <p>
              Your code is not as buried as you may think, either. All it takes
              is a quick search to filter the results, and if you used the same
              key words in your repo then your classmates will find it.
            </p>
            <p>
              Most professors will say that if someone else uses your code, you
              are also at fault for letting them have access to it. Doesn't
              matter if you intended for it or not.
            </p>
            <p>
              Plus, your class may have some special rules about whether you're
              allowed to make certain code public or not.
            </p>
            <p>
              It's always best to err on the side of caution and keep the repo
              private. Even when the class is over, it would not be good to make
              it public. Future students may copy the code, and nobody wants
              that (except those students, I guess).
            </p>
            <p>
              If you want to show someone your code, you can always share it
              with them privately. A simple way to do that would be to send them
              the whole project in a zipped file via email or on the cloud
              (OneDrive, Google Drive, etc).
            </p>
            <h1 className="sectionTitle">
              One course per repo or one project per repo?
            </h1>
            <p>
              Honestly I think this is the most common thing asked related to
              the overall question.
            </p>
            <p>
              Should you make one GitHub repo for each programming class? And
              then store every project in that repo?
            </p>
            <p>Or is it better to make one repo for every project?</p>
            <p>
              Again, it's really up to you. You could try both out and see which
              one you like more.
            </p>
            <p>Here's a list of pros and cons.</p>
            <p>Pros and Cons</p>
            <p>
              I usually prefer to make one repo for every project. But I do have
              one class this semester that I'm using one repo for all the
              projects, because they all are building off of the previous ones.
              When I took an algorithms class, I made one repo for every project
              because each project was related to a unique topic.
            </p>
            <h1 className="sectionTitle">The README</h1>
            <p>
              Always include a README. If you have one repo for each project,
              then you should have one README for each of them.
            </p>
            <p>
              If you have one repo with multiple projects, I'd suggest a main
              README for the repo as well as one README inside each project
              folder.
            </p>
            <h2 className="subSection">README Template</h2>
            <p>
              Don't get stuck on making your README look perfect. Remember, you
              can always add onto it later. For now, just include the most basic
              essentials.
            </p>
            <p>
              It may depend on your project, but generally you will want the
              following in your README:
            </p>
            <p>
              <ol>
                <li>Description of the project</li>
                <li>How to start/run the project</li>
                <li>Any requirements to run it</li>
              </ol>
            </p>
            <p>
              Eventually, you can add other features too. Screenshots are
              wonderful to include, or examples of using the project or what the
              output will be, and if necessary what it means.
            </p>
            <h1 className="sectionTitle">Conclusion</h1>
            <p>
              How you organize your school projects is up to you. You should do
              whatever will help you be most successful. If you aren't sure what
              that looks like, don't worry. Just try out things you think might
              be good, see how you feel about it, and make changes as needed.
            </p>
            <p>
              Remember to use version control, make your repo private, and
              always include a basic README file.
            </p>
          </div>
          <BlogProfile />
        </div>
        <div className="comment-section-wrap">
          <DiscussionEmbed
            shortname="compscilauren"
            config={{
              url:
                "https://compscilauren.com/blog/how-to-organize-your-school-projects-on-github",
              identifier: "article-2020-08-31",
              title: "How to organize your school projects on GitHub",
            }}
          />
        </div>
      </main>
    </>
  );
}

export default Article0831;
