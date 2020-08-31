import React from "react";
import "../../../blog.css";
import "../../../../home/home.css";
import BlogProfile from "../../../../components/BlogProfile";
import BlogProfileTop from "../../../../components/BlogProfileTop";
import Tag from "../../../../components/Tag";
import { DiscussionEmbed } from "disqus-react";
import EditFolder from "../../../../images/blog/2020/08-august/edit-folder.png";
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
          content="https://compscilauren.com/blog/how-to-organize-your-school-projects-on-github"
        />
        <meta property="og:image" content={EditFolder} />
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
              src={EditFolder}
              alt="An icon showing a folder in edit mode and four smaller folders also in edit mode directly below it"
              className="buggyImg"
            />
            Cover Image by{" "}
            <a href="https://pixabay.com/users/Memed_Nurrohmad-3307648/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2013200">
              Memed_Nurrohmad
            </a>{" "}
            from{" "}
            <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2013200">
              Pixabay
            </a>
            <p>
              Whether you're doing your own lesson plan as a self-taught
              programmer, attending a bootcamp, going to a college, or are in
              any other learning situation, it's important to stay organized and
              keep track of projects you care about or need to submit.
            </p>
            <p>
              How you choose to organize your projects is up to you. I'm in my
              final semester of college, and I've seen it done in a variety of
              ways. I also see this question asked online occasionally, and it's
              one I asked before too. There are a few good tips I've learned,
              and I thought I'd share them in a short post.
            </p>
            <p>
              I currently keep my projects in GitHub repositories and will refer
              to that method in this article, but you can check out some good
              alternatives{" "}
              <a
                href="https://itsfoss.com/github-alternatives/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
              as well.
            </p>
            <h1 className="sectionTitle">Public vs private repo</h1>
            <p>Hands down, you want to make your GitHub repository private.</p>
            <p>
              Typically, other students are also in the class working on the
              project at the same time as you. If you make your repo a public
              one, that means everyone can see your code. That includes your
              classmates.
            </p>
            <p>
              Many, many, many professors and teachers will say that if someone
              else uses your code, you are also at fault for letting them have
              access to it. Doesn't matter if you intended for it or not.
            </p>
            <p>
              Even when the class is over, I wouldn't recommend making it
              public. Future students may copy the code, and that serves no good
              purpose.
            </p>
            <p>
              Plus, your class may have some special rules about whether you're
              allowed to make certain code public or not. It's always best to
              err on the side of caution and keep the repo private.
            </p>
            <p>
              If you want to show someone your code, you can always share it
              with them privately. A simple way to do that would be to send them
              the project in a zipped file via email or on the cloud (OneDrive,
              Google Drive, etc). If you need to work with a partner on a
              project, you can add them as a collaborator and that will let them
              access the private repo.
            </p>
            <h1 className="sectionTitle">
              One course per repo or one project per repo?
            </h1>
            <p>
              Should you make one GitHub repo for each programming class? And
              then store every project in that repo?
            </p>
            <p>Or is it better to make one repo for every project?</p>
            <p>
              Again, it's really up to you. You could try both out and see which
              one you like more.
            </p>
            <p>
              Here are a couple of pros and cons for using one repo for one
              class, with a sub-folder for each project.
            </p>
            <table>
              <tr>
                <th>Pros</th>
                <th>Cons</th>
              </tr>
              <tr>
                <td>All the code for your class is in a single location.</td>
                <td>
                  Harder to use the GitHub search feature for an individual
                  project. If you search for a particular phrase, any relevant
                  results will appear, possibly for multiple projects. This can
                  make it harder to navigate the results.
                </td>
              </tr>
              <tr>
                <td>
                  Quickly refer to the other files when working on a project in
                  your code editor.
                </td>
                <td>
                  If each project is a stand-alone project, and especially if
                  they are unique to each other, then it may not make sense to
                  keep them together in one repo aside from the fact that they
                  were part of the same class curriculum.
                </td>
              </tr>
            </table>
            <p>
              I usually prefer to make one repo for every project. It feels more
              organized to me that way, generally speaking.
            </p>
            <p>
              But I have used a single repo to keep multiple projects that were
              part of the same class a couple of times before. In those cases
              the projects were either building on top of the same code (so
              really it was one project split into multiple), or they were just
              very closely related so it made sense from an organizational
              perspective to me.
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
            <p>
              The main repo could just have the basic description of the class
              or types of projects, and you could even have a section that
              describes each project with a link to that project folder.
            </p>
            <h1 className="subSectionTitle">README basics</h1>
            <p>
              Don't get stuck on trying to make your READMEs look perfect.
              Remember, you can always add onto them later. For now, just
              include the most basic essentials.
            </p>
            <p>
              It may depend on your project, but generally you will want the
              following in your project README:
              <ol>
                <li>Project description</li>
                <li>How to run the project</li>
                <li>Any special requirements to run it</li>
              </ol>
            </p>
            <p>
              As you work through the project or towards the end, you can add
              other features too. Screenshots are wonderful to include, or
              examples of using the project or what the output will be, and if
              necessary what it means.
            </p>
            <p>
              Since it's a private school project, you will probably be the only
              person to ever see the code. However, keep in mind that you may
              want to show someone your work later on (like when applying for a
              job). Even if you are the only person who will ever see it, it is
              still a good idea to document the project as if someone else may
              eventually see it or work on it.
            </p>
            <p>
              Writing a good README will become easier as you get more practice.
              Another nice thing is that after you have a README for one
              project, you can always copy that file and use it as a starting
              point for future projects.
            </p>
            <p>
              You can even use a README generator such as{" "}
              <a
                href="https://github.com/kefranabg/readme-md-generator"
                target="_blank"
                rel="noopener noreferrer"
              >
                this one
              </a>{" "}
              if that makes it easier for you. For private school projects
              though, this probably isn't needed quite as much.
            </p>
            <h1 className="subSectionTitle">README usefulness</h1>
            <p>
              You might not think you need a README at the time of working on
              the project. After all, you're well aware of how to run it while
              you're actually working on it. However, it may prove to be very
              helpful to you later on.
            </p>
            <p>
              Maybe months later you will be working on something else, and
              realize that you have a problem similar to one you experienced in
              a past project. So you want to look at it again.
            </p>
            <p>
              Well what if there is no README? You'll have to remember which
              project it was (perhaps solely based on the repo title) and how to
              run it. Even if it seems obvious to you at the time, it may not be
              obvious at all after you've moved on from it.
            </p>
            <h1 className="subSectionTitle">README template</h1>
            <p>
              If you don't have any READMEs to go off of yet, I have a couple of
              resources for you. One is a list of{" "}
              <a
                href="https://github.com/matiassingers/awesome-readme"
                target="_blank"
                rel="noopener noreferrer"
              >
                awesome READMEs
              </a>
              . This is a great source for inspiration.
            </p>
            <p>
              You can also copy the snippet below into a README.md file as a
              basic starting point.
            </p>
            <p>
              <code className="codeBlock">
                # Project Title{"\n\n"}> Short description of project.{"\n\n"}##
                Quick Start{"\n\n"}1. Clone or download the repo{"\n"}2. Run
                `npm install`{"\n"}3. Run `npm start`
              </code>
            </p>
            <p>
              If you need a cheat sheet for markdown (used for formatting README
              files), there is a great resource for that{" "}
              <a
                href="https://www.markdownguide.org/cheat-sheet"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
            <h1 className="sectionTitle">Conclusion</h1>
            <p>
              How you organize your school projects is ultimately up to you. You
              should do whatever will help you be most successful! That can look
              different from person to person. If you aren't sure what that
              looks like for you yet, don't worry. Just try out things you think
              might be good, see how you feel about it, and make changes as
              needed.
            </p>
            <p>
              Just remember to make your school repos private and always include
              a basic README file. You'll thank yourself later!
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
