import React from "react";
import "../../blog.css";
import "../../../home/home.css";
import BlogProfile from "../../../components/BlogProfile";
import BlogProfileTop from "../../../components/BlogProfileTop";
import Tag from "../../../components/Tag";
import { DiscussionEmbed } from "disqus-react";

function Article0622() {
  return (
    <>
      <head>
        <title>Why contribute to open source and how to get started</title>
      </head>
      <main id="main-content">
        <div className="blog-page-wrap">
          <h1 style={{ padding: "8px" }}>
            Why contribute to open source and how to get started
          </h1>
          <BlogProfileTop date="June 22nd, 2020" readTime="8 min" />
          <div className="tag-container">
            <Tag title="opensource" />
            <Tag title="github" />
          </div>
          <hr></hr>
          <div style={{ color: "#292929", lineHeight: "28px" }}>
            <p>
              Contributing to open source is a fantastic way to gain valuable
              experience collaborating with others and working on a "real-world"
              project.
            </p>
            <p>
              This is one of my favorite topics to talk about with other
              students at my university. Open source isn't something you
              typically learn about in a computer science degree program.
            </p>
            <p>
              And yet, it can be an incredibly fun and useful way to gain
              real-world experience with software development.
            </p>
            <p>
              It's also valuable experience to add to your resume, and can help
              you land your first internship or even a full-time job. It's
              useful regardless of whether or not you're a student.
            </p>
            <p>
              In this article, we'll go over the basics of open source and how
              to find interest projects. We'll also walk through the steps of
              actually making a contribution.
            </p>
            <p>
              If you're interested in maintaining your own open source project
              rather than contributing to someone else's, I'll be writing about
              that next week!
            </p>
            <h1 className="sectionTitle">So, what is open source?</h1>
            <p>Text.</p>
            <h1 className="sectionTitle">Who uses open source software?</h1>
            <p>Text.</p>
            <h1 className="sectionTitle">Why people care about FOSS/FLOSS</h1>
            <p>Text.</p>
            <h1 className="sectionTitle">
              What you get from contributing to open source
            </h1>
            <p>Text.</p>
            <h1 className="sectionTitle">Hacktoberfest</h1>
            <p>Text.</p>
            <h1 className="sectionTitle">Getting started with GitHub</h1>
            <p>Text.</p>
            <h1 className="sectionTitle">Finding a project</h1>
            <p>
              There are{" "}
              <a
                href="https://github.blog/2018-11-08-100M-repos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                over 100 million repositories
              </a>{" "}
              on GitHub! With 1.6 new repositories created every second, the
              options are basically limitless. So how do you choose?
            </p>
            <h2 className="subSectionTitle">
              Strategy #1: Pick a "practice" project
            </h2>
            <p>
              This is an ideal choice if you have never made a pull request to
              someone else's GitHub project before.
            </p>
            <p>
              The idea is to make a contribution to a project that exists solely
              for getting practice with the overall process.
            </p>
            <p>
              This is useful because you don't have to worry about what you're
              actually contributing. It's just so you can get familiar with the
              process itself.
            </p>
            <h2 className="subSectionTitle">
              Strategy #2: Collect interesting projects over time
            </h2>
            <p>This is an ideal long-term strategy.</p>
            <p>
              The idea is to just keep an eye out for projects that are related
              to something you are interested in. After all, contributing to
              something you actually use or appreciate is the most fun.
            </p>
            <p>
              You can find ideas on GitHub, random blogs, social media, etc.
            </p>
            <p>
              As you go about your computer/phone activities, pay attention when
              you come across something you think you'd like to help out as a
              contributor.
            </p>
            <p>
              Search online to find out if it is open source or not. If it is,
              there's a good chance you can find them on GitHub (or check out{" "}
              <a
                href="https://itsfoss.com/github-alternatives/"
                target="_blank"
                rel="noopener noreferrer"
              >
                other open source hosting services
              </a>
              ).
            </p>
            <p>
              If they're on GitHub, you can “star” them as a way of bookmarking
              them. Over time, you’ll have a unique list of interesting projects
              you can contribute to! Feel free to check out{" "}
              <a
                href="https://github.com/CompSciLauren?tab=stars"
                target="_blank"
                rel="noopener noreferrer"
              >
                my starred projects
              </a>{" "}
              for an example.
            </p>
            <h2 className="subSectionTitle">
              Strategy #3: Seek out specific opportunities
            </h2>
            <p>
              There are specific programs and meetups you can find that are all
              about being involved in open source. The hardest part is just
              finding them.
            </p>
            <p>
              If you're a student, check out{" "}
              <a
                href="https://summerofcode.withgoogle.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Summer of Code
              </a>
              . You can get paid to work on open source over the summer.
            </p>
            <blockquote className="classyStyle">
              <span>
                Google Summer of Code is a global program focused on bringing
                more student developers into open source software development.
                Students work with an open source organization on a 3 month
                programming project during their break from school.
              </span>
            </blockquote>
            <p>
              Many students lost their internships this summer due to COVID-19.
              In response to this,{" "}
              <a
                href="https://mlh.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Major League Hacking
              </a>{" "}
              started the{" "}
              <a
                href="https://news.mlh.io/mlh-fellowship-the-future-of-tech-internships-05-04-2020?utm_source=MLH+Master+List&utm_campaign=21648c1bf4-MLH_Newsletter_APR_2020_2&utm_medium=email&utm_term=0_454e60092c-21648c1bf4-60725521&ct=t()&mc_cid=21648c1bf4&mc_eid=d11b1ed319"
                target="_blank"
                rel="noopener noreferrer"
              >
                MLH Fellowship
              </a>{" "}
              to help students get experience. That article came out in May, and
              stated that they would be paying students to work on open source
              this summer.
            </p>
            <blockquote className="classyStyle">
              <span>
                We’re partnering up with GitHub to launch our inaugural 12-week
                program for Summer 2020. We’ll be funding up to 1,000 students
                to work full time on major open source projects under the
                mentorship of experienced engineers.
              </span>
            </blockquote>
            <p>
              Of course these opportunities are already under way. Still,
              various opportunities like these will continue to pop up each
              year.
            </p>
            <p>
              Finally, you can also search online for open source or coder
              meetups. I live near Kansas City, so I checked on meetup.com and
              found this{" "}
              <a
                href="https://www.meetup.com/Open-Source-Analytics-Kansas-city-KS/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Source Analytics
              </a>{" "}
              group.
            </p>
            <p>
              Looks interesting! This is yet another example of how you might
              find open source opportunities.
            </p>
            <p>
              Remember you can also reach out to people you know, whether on
              social media or in-person. Your friends or coworkers might know
              about some really great resources.
            </p>
            <h1 className="sectionTitle">Figuring out what to contribute</h1>
            <p>
              It can be tempting to jump straight into the code, but hold on a
              minute before you do that.
            </p>
            <blockquote className="protipStyle">
              <span>
                Pro Tip: Start with documentation first. You'll learn more about
                the project and can find easy typos or grammar issues to fix.
              </span>
            </blockquote>
            <p>
              This is my favorite way to jump into a new open source project.
              Even the best documentation writers are prone to accidental typos
              and grammar mistakes.
            </p>
            <p>
              Sometimes a section of the documentation is just a bit vague or
              hard to understand. As a new contributor to the project, you can
              provide a fresh pair of eyes to scan the project for easily
              overlooked problems.
            </p>
            <h2 className="subSectionTitle">
              What if the project doesn't have documentation?
            </h2>
            <p>
              Zero documentation makes a project difficult to learn about. You
              could help just by creating a README for the project.
            </p>
            <p>
              It doesn't even need to be totally filled out. Just add what
              information you can, like the project title and a short
              description describing its purpose, or how to run it on your local
              machine.
            </p>
            <p>
              If it's a project that involves visual elements, add a screenshot
              or GIF showing the project in action.
            </p>
            <p>
              I did this once for someone's open source project. It was a small
              improvement, but even adding a simple README can go a long way.
            </p>
            <h2 className="subSectionTitle">Next steps after documentation</h2>
            <p>
              The easiest way to find specific problems to sovle is by searching
              a project’s “Issues” to see what existing problems have been
              documented.
            </p>
            <p>
              Keep an eye out for labels like “beginner-friendly”, “good first
              issue”, “first timers only”, and so on. You can even search for
              specific labels on the GitHub search bar.
            </p>
            <p>
              As you work on an existing issue or just try running the project
              and navigating it as a user, you might find bugs or notice things
              that could be added or improved upon.
            </p>
            <p>
              You can create a new issue on the project to document the problem
              or new feature idea. This gives project maintainers a chance to
              discuss the issue with you and hash out any important details
              before getting deep into writing the solution.
            </p>
            <p>
              It's common practice to make sure there is an issue documented on
              the Issues page before adding the change.
            </p>
            <p>
              Still, every project has their own way of doing things. Make sure
              you read their contributing guidelines before you try to get your
              changes added to the project.
            </p>
            <h1 className="sectionTitle">Getting an employer to notice</h1>
            <p>Text.</p>
            <h1 className="sectionTitle">
              How to actually make the contribution
            </h1>
            <p>Text.</p>
            <h1 className="sectionTitle">
              Creating your own open source project
            </h1>
            <p>
              Another interesting way to get involved in open source is to start
              your own open source project!
            </p>
            <p>
              The basics are pretty straightforward, but there are a few
              different key features that tend to get overlooked when you're
              maintaining one for the first time.
            </p>
            <p>
              There's also the task of getting people to actually use your
              project. Not to mention finding people who are willing to help
              contribute to it.
            </p>
            <p>
              I've made plenty of mistakes along the way with my own open source
              projects, and I can't wait to share what I've learned with you.
            </p>
            <p>
              Next week I'll cover how to get started with your own open source
              project, plus some tips for success.
            </p>
            <h1 className="sectionTitle">Conclusion</h1>
            <p>
              I hope this article has helped you understand open source better.
              I also hope you will give contributing a try! Even if you decide
              you don't want to do it regularly, it's a good thing to try at
              least once.
            </p>
            <p>
              Remember to check back next week if you're interested in starting
              your own open source project, or learning some new tips for
              success!
            </p>
            <p>
              Have you ever contributed to open source? Do you have any
              recommended beginner-friendly projects that new contributors could
              try? Let us all know in the comments below!
            </p>
          </div>
          <BlogProfile />
        </div>
        <div className="comment-section-wrap">
          <DiscussionEmbed
            shortname="compscilauren"
            config={{
              url:
                "https://compscilauren.com/blog/why-contribute-to-open-source-and-how-to-get-started",
              identifier: "article-2020-06-22",
              title: "Why contribute to open source and how to get started",
            }}
          />
        </div>
      </main>
    </>
  );
}

export default Article0622;
