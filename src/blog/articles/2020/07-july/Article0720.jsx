import React from "react";
import "../../../blog.css";
import "../../../../home/home.css";
import BlogProfile from "../../../../components/BlogProfile";
import BlogProfileTop from "../../../../components/BlogProfileTop";
import Tag from "../../../../components/Tag";
import { DiscussionEmbed } from "disqus-react";
import { Helmet } from "react-helmet";

function Article0720() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Building a ShipIt project and what I have learned about hackathons so
          far
        </title>
        <meta
          name="description"
          content="When you get stuck in Git and don't know what to do, you'll want to know these commands.."
        />
        <meta
          property="og:title"
          content="Building a ShipIt project and what I have learned about hackathons so far"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://compscilauren.com/blog/git-commands-to-keep-on-hand-cheat-sheet-included"
        />
        {/* <meta property="og:image" content={WomanWorkingOnLaptop} /> */}
        <meta
          property="og:description"
          content="When you get stuck in Git and don't know what to do, you'll want to know these commands."
        />
      </Helmet>
      <main id="main-content">
        <div className="blog-page-wrap">
          <h1 style={{ padding: "8px" }}>
            Building a ShipIt project and what I have learned about hackathons
            so far
          </h1>
          <BlogProfileTop date="July 20th, 2020" readTime="8 min" />
          <div className="tag-container">
            <Tag title="hackathons" />
            <Tag title="projectdevelopment" />
          </div>
          <hr></hr>
          <div style={{ color: "#292929", lineHeight: "28px" }}>
            {/* <img
              src={ConfusedRobot}
              alt="Swag from the Cerner ShipIt Day hackathon from July 2020"
              className="buggyImg"
            /> */}
            <p>
              Hackathons are great fun, but they have a similar problem that
              open source has for newer developers. It's hard to get involved
              when you've never tried it before.
            </p>
            <p>
              I bailed on my first opportunity to do a hackathon. I was nervous.
              Didn't really know how to code, didn't know anyone who would be
              there. Decided at the last minute not to go.
            </p>
            <p>
              The first hackathon I ended up doing was in my freshman year of
              college. I had almost no coding experience beyond a class I took
              in high school. Maybe a few very simple "side projects" I'd
              attempted, but that's about it.
            </p>
            <p>
              I'm a senior now, about to start my final semester of college in
              the fall. I've participated in 7 hackathons total.
            </p>
            <p>Hackathons I've participated in</p>
            <ol>
              <li>Hack KU (freshman) - didn't place</li>
              <li>Hack KU (sophomore) - didn't place</li>
              <li>Colorado people hackathon - didn't place</li>
              <li>Hack KU (junior) - didn't place</li>
              <li>Code-a-thon, KC Federal Reserve - 3rd place</li>
              <li>Hack KU (senior) - didn't place</li>
              <li>ShipIt Day, Cerner Corporation - 2nd place</li>
            </ol>
            <p>
              Cerner has regular hackathons for associates to participate in,
              known as ShipIt Day. I participated in the most recent ShipIt
              hackathon just a week or so ago.
            </p>
            <p>
              Here is what I have learned so far, from my first hackathon with
              almost no experience to the ShipIt project.
            </p>
            <h1 className="sectionTitle">
              Health and happiness of team come first
            </h1>
            <p>
              No matter how competitive you might feel, you absolutely need to
              take your team's health and happiness into consideration. That
              includes yours too.
            </p>
            <p>
              I believe that the main goal should always be to 1) learn new
              things and 2) have fun. Being competitive is great as long as you
              go about it in a way that is healthy for everyone on the team.
            </p>
            <p>
              Even if you don't mean for it to happen, people can feel pressured
              to work through the night or take on more than is reasonable.
            </p>
            <p>
              This is where you promote healthy behavior by showing that you
              value your own wellbeing.
            </p>
            <p>
              Be willing to say if you're tired and need a nap or want to sleep
              for the night. Lead by example and take breaks as often as you
              need to.
            </p>
            <p>
              Usually all it takes is one other person doing something for
              others to feel more okay with doing it themselves. You can also
              remind people once in a while, "hey if anyone is tired feel free
              to take a break", or even ask if anyone else wants to take a break
              with you.
            </p>
            <h1 className="sectionTitle">Conclusion</h1>
            <p>
              Did I leave out a handy command that you use in a pinch? Let me
              know in the comments below!
            </p>
          </div>
          <BlogProfile />
        </div>
        <div className="comment-section-wrap">
          <DiscussionEmbed
            shortname="compscilauren"
            config={{
              url:
                "https://compscilauren.com/blog/building-a-shipit-project-and-what-i-have-learned-about-hackathons-so-far",
              identifier: "article-2020-07-20",
              title:
                "Building a ShipIt project and what I have learned about hackathons so far",
            }}
          />
        </div>
      </main>
    </>
  );
}

export default Article0720;
