import React from "react";
import "../home/home.css";
import "../styles/blogarticle.css";
import BlogArticle from "../components/BlogArticle";
import "./blog.css";
import ProfilePicture from "../images/blog/common/profile-picture.jpg";
import WomanWorkingOnLaptop from "../images/blog/2020/07-july/woman-working-on-laptop.jpg";
import GitHub from "../images/blog/2020/06-june/github.png";
import CodeSnippet from "../images/blog/2020/06-june/code-snippet.png";
import InternDay from "../images/blog/2020/07-july/intern-day.jpg";
import EditFolder from "../images/blog/2020/08-august/edit-folder.png";
// import ConfusedRobot from "../images/blog/2020/07-july/confused-robot.jpg";
import { Helmet } from "react-helmet";

function blog() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lauren Stephenson | Software Engineer</title>
        <meta
          name="description"
          content="Portfolio and blog, created by Lauren Stephenson, @CompSciLauren on social media"
        />
        <meta
          property="og:title"
          content="Lauren Stephenson | Software Engineer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://compscilauren.com/blog" />
        <meta property="og:image" content={ProfilePicture} />
        <meta
          property="og:description"
          content="Portfolio and blog, created by Lauren Stephenson, @CompSciLauren on social media"
        />
      </Helmet>
      <main id="main-content">
        <div>
          <div className="blog-home-page-wrap">
            <h1 className="blogHomePageTitle">Joy Bytes</h1>
            <p>
              Hi there! This is a blog that focuses on software development and
              is geared toward newer developers. It is run by me, Lauren
              Stephenson (@CompSciLauren on social media).
            </p>
            <p>
              I'm most likely to write about React, JavaScript, UI/UX design,
              open source, and tips for newer developers.
            </p>
            <p>
              If you have any questions or would like to see a specific topic
              covered, feel free to send me a message. Happy coding!
            </p>
            <h2 className="blogPostsHeader">Blog Posts</h2>
            <div className="blogarticle-grid-container">
              {/* <BlogArticle
                image={ConfusedRobot}
                imageAlt="A red colored robot cartoon character who looks confused and upset"
                title="Git commands to keep on hand (cheat sheet included)"
                date="July 8th, 2020"
                link="/blog/git-commands-to-keep-on-hand-cheat-sheet-included"
                tag1="git"
                tag2="github"
              /> */}
              <BlogArticle
                image={EditFolder}
                imageAlt="An icon showing a folder in edit mode and four smaller folders also in edit mode directly below it"
                title="How to organize your school projects on GitHub"
                date="August 31st, 2020"
                link="/blog/how-to-organize-your-school-projects-on-github"
                tag1="github"
                tag2="prductivity"
              />
              <BlogArticle
                image={InternDay}
                imageAlt="A note card that says Happy National Intern Day with a glass cup next to it with the Cerner logo on it and a heart shape filled with healthcare symbols"
                title="Lessons learned as a software intern during a pandemic"
                date="July 30th, 2020"
                link="/blog/lessons-learned-as-a-software-intern-during-a-pandemic"
                tag1="career"
                tag2="internship"
              />
              <BlogArticle
                image={WomanWorkingOnLaptop}
                imageAlt="A woman typing on a Mac laptop with icons in the air behind her representing project related tasks"
                title="10 tips for maintaining an open source project"
                date="July 2nd, 2020"
                link="/blog/10-tips-for-maintaining-an-open-source-project"
                tag1="opensource"
                tag2="github"
              />
              <BlogArticle
                image={GitHub}
                imageAlt="GitHub logo and several GitHub cartoon character drawings"
                title="Why contribute to open source and how to get started"
                date="June 22nd, 2020"
                link="/blog/why-contribute-to-open-source-and-how-to-get-started"
                tag1="opensource"
                tag2="github"
              />
              <BlogArticle
                image={CodeSnippet}
                imageAlt="Code snippet for a Git hook"
                title="Improve your Git workflow and save time with Git hooks"
                date="June 15th, 2020"
                link="/blog/improve-your-git-workflow-and-save-time-with-git-hooks"
                tag1="git"
                tag2="automation"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default blog;
