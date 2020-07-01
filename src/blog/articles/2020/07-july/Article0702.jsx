import React from "react";
import "../../../blog.css";
import "../../../../home/home.css";
import BlogProfile from "../../../../components/BlogProfile";
import BlogProfileTop from "../../../../components/BlogProfileTop";
import Tag from "../../../../components/Tag";
import { DiscussionEmbed } from "disqus-react";
import CommunityDocumentation from "../../../../images/blog/2020/07-july/community-documentation.png";
import GitHubIssues from "../../../../images/blog/common/github-issues.png";
import HacktoberfestShirt from "../../../../images/blog/common/hacktoberfest-shirt.png";
import { Helmet } from "react-helmet";

function Article0702() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>10 tips for maintaining an open source project</title>
        <meta
          name="description"
          content="Anyone can maintain an open source project. Here are some tips for success."
        />
      </Helmet>
      <main id="main-content">
        <div className="blog-page-wrap">
          <h1 style={{ padding: "8px" }}>
            10 tips for maintaining an open source project
          </h1>
          <BlogProfileTop date="July 2nd, 2020" readTime="6 min" />
          <div className="tag-container">
            <Tag title="opensource" />
            <Tag title="github" />
          </div>
          <hr></hr>
          <div style={{ color: "#292929", lineHeight: "28px" }}>
            <p>
              Becoming an open source project maintainer is as easy as creating
              a public GitHub repository.
            </p>
            <p>
              But how can you be successful as one? What can you do to make sure
              your project is successful?
            </p>
            <p>
              I went back and checked my project histories, and realized it's
              been one year since I started actively maintaining my first open
              source project.
            </p>
            <p>
              Here are a few things that I've found really helpful, both as a
              maintainer and as someone looking to contribute to other projects.
            </p>
            <h1 className="sectionTitle">1. Choose a license</h1>
            <p>
              This is so easy to overlook. You might think, who cares? My
              project is small, and I don't care what people do with my code.
            </p>
            <p>Well, a license doesn't just protect you or your project.</p>
            <p>
              It gives people confidence in using and/or contributing to your
              project.
            </p>
            <p>
              I've seen people online say that if your project doesn't have a
              license, they will act as though it is a closed source project.
              Meaning they won't contribute to it or use your code in any of
              their work.
            </p>
            <p>If the rules aren't clear, why risk getting involved?</p>
            <p>
              Visit{" "}
              <a
                href="https://choosealicense.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                choosealicense.com
              </a>{" "}
              to quickly and easily find out which license suits your project
              best. Having a license is a best practice. Don't skip this step!
            </p>
            <h1 className="sectionTitle">2. Add documentation</h1>
            <img
              src={CommunityDocumentation}
              alt="Screenshot showing list of common community-based documentation"
              className="buggyImg"
            />
            <p>
              This is absolutely critical if you want anyone to contribute to
              your project.
            </p>
            <p>
              Nobody is going to bother with your project if you don't even have
              a README.
            </p>
            <p>
              Think about it. When you look at other people's projects, what's
              the first thing you look for? You look for written information,
              right? Anything that tells you what you're looking at, what it's
              for, how to use it.
            </p>
            <p>
              Make it easy for people to find the information they want. A good
              README goes a really long way.
            </p>
            <p>
              Whenever I need some inspiration, I scroll through the{" "}
              <a
                href="https://github.com/matiassingers/awesome-readme"
                target="_blank"
                rel="noopener noreferrer"
              >
                Awesome README repo
              </a>
              . Definitely check it out for some fantastic content and layout
              ideas.
            </p>
            <p>
              Finally, go to your GitHub repo, click on the "Insights" tab, and
              click on the "Community" tab.
            </p>
            <p>
              This shows a list of common documentation you should have. The
              more of these things that you have, the friendlier your project
              will appear to potential contributors.
            </p>
            <p>
              Including these pieces will make it easier for people to start
              contributing, and lay out the ground rules to help you maintain a
              productive and positive community.
            </p>
            <h1 className="sectionTitle">
              3. Create Issues for each task and label them
            </h1>
            <img
              src={GitHubIssues}
              alt="Screenshot of a GitHub Issues page on a GitHub repository"
              className="buggyImg"
            />
            <h1 className="sectionTitle">
              4. Make the most out of Hacktoberfest
            </h1>
            <img
              src={HacktoberfestShirt}
              alt="Hacktoberfest 2019 t-shirt"
              className="buggyImg"
            />
            Image from{" "}
            <a href="https://www.digitalocean.com/blog/recapping-hacktoberfest-6/?">
              Recapping Hacktoberfest
            </a>
            <h1 className="sectionTitle">
              5. Share on social media and any relevant websites
            </h1>
            <p>
              Including 1 for your project if applicable. Also ask for advice,
              for example.
            </p>
            <h1 className="sectionTitle">
              6. Get feedback from a trusted friend or coworker
            </h1>
            <h1 className="sectionTitle">
              7. Assume good intent until clearly shown otherwise
            </h1>
            <h1 className="sectionTitle">
              8. Be kind; soft skills; be responsive
            </h1>
            <h1 className="sectionTitle">
              9. Show appreciation and share sense of ownership
            </h1>
            <h1 className="sectionTitle">10. Build with the user in mind</h1>
            <h1 className="sectionTitle">11. Take care of yourself</h1>
            <p>
              This is not just an off-by-one error, but critical advice that I
              wanted to include. Really, truly, take care of yourself.
            </p>
            <p>
              Contributing to open source is hard, and maintaining an active
              open source project is typically even harder.
            </p>
            <p>
              You'll often find open source projects with tons of open pull
              requests and issues. This can get overwhelming really quickly,
              especially if you don't have much help.
            </p>
            <p>Do what you need to in order to be okay.</p>
          </div>
          <BlogProfile />
        </div>
        <div className="comment-section-wrap">
          <DiscussionEmbed
            shortname="compscilauren"
            config={{
              url:
                "https://compscilauren.com/blog/10-tips-for-maintaining-an-open-source-project",
              identifier: "article-2020-07-02",
              title: "10 tips for maintaining an open source project",
            }}
          />
        </div>
      </main>
    </>
  );
}

export default Article0702;
