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
              I bailed on my first opportunity to do a hackathon, near the end
              of high school. I was nervous. Didn't really know how to code,
              didn't know anyone who would be there. Decided at the last minute
              not to go.
            </p>
            <p>
              The first hackathon I ended up doing was in my freshman year of
              college. I still had very little experience coding.
            </p>
            <p>
              I'm a senior now, about to start my final semester of college in
              the fall. I've participated in 7 hackathons total.
            </p>
            <p>Hackathons I've participated in:</p>
            <ol>
              <li>Hack KU (freshman), Univerisity of Kansas - didn't place</li>
              <li>Hack KU (sophomore), Univerisity of Kansas - didn't place</li>
              <li>Colorado people hackathon, the people - didn't place</li>
              <li>Hack KU (junior), Univerisity of Kansas - didn't place</li>
              <li>Code-a-thon, KC Federal Reserve - 3rd place</li>
              <li>Hack KU (senior), Univerisity of Kansas - didn't place</li>
              <li>ShipIt Day, Cerner Corporation - 2nd place</li>
            </ol>
            <p>
              Cerner has regular hackathons for associates to participate in,
              known as ShipIt Day. I participated in the most recent ShipIt
              hackathon just a week ago.
            </p>
            <p>
              Here is what I have learned so far, from my first hackathon with
              almost no experience to the ShipIt project.
            </p>
            <h1 className="sectionTitle">The general order of things</h1>
            <p>Skip this section if you're already familiar with hackathons.</p>
            <p>The basic order of things usually goes like this:</p>
            <ol>
              <li>Sign up for hackathon</li>
              <li>Try to think of an idea</li>
              <li>Hackathon begins</li>
              <li>Brainstorm ideas if don't already have one</li>
              <li>Work on the project</li>
              <li>Random fun events, taking breaks</li>
              <li>Work more on project</li>
              <li>Random fun events, taking breaks</li>
              <li>Wrap up project before deadline</li>
              <li>Take a break</li>
              <li>Project presentations</li>
              <li>Celebrate what you've accomplished/learned</li>
            </ol>
            <p>
              The presentation part can be scary when you've never done it
              before. But it's rare to find anyone being unpleasant toward
              teams.
            </p>
            <p>
              Presentations can be very small, with only a few people talking to
              you or listening. Or it can be a room full of all the attendees.
              It can also be remote, where you wouldn't really see the people in
              the room the same way you would in person.
            </p>
            <h1 className="sectionTitle">
              Health and happiness of team comes first
            </h1>
            <p>
              No matter how competitive you might feel, you absolutely need to
              take your team's health and happiness into consideration. That
              includes yours too.
            </p>
            <p>
              I believe that the main goal should always be to 1) learn new
              things and 2) have fun. And you need to prioritize everyone's
              well-being throughout the process.
            </p>
            <p>
              It's good to be competitive. But if you don't prioritize these
              things, then you're probably not doing yourself or your team any
              favors. Stressed out, unhappy teams aren't going to do as well as
              teams who value each other.
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
            <h1 className="sectionTitle">Don't feel bad about doing "bad"</h1>
            <p>
              I've seen this in some hackathons more than others, but there
              tends to be a few groups who are there at the beginning but leave
              before it's over.
            </p>
            <p>
              First off, this is 100% okay. It's no one else's business why you
              had to leave early, you do whatever you need to do.
            </p>
            <p>
              That said, I definitely recommend staying for the entire event if
              you are able to do so. Even if you don't like what you made.
            </p>
            <p>
              You'll learn even more if you stay for the full experience. If you
              give a presentation, you'll learn even from doing that and will
              improve your presentation skills (and hopefully comfort!).
            </p>
            <p>
              In my first hackathon, my team made a "tool to help the hackathon
              judges rank the hackathon teams".
            </p>
            <p>
              Even at the time, we felt like it was a very simple project. It
              barely worked and did almost nothing. The code was simple, the
              look of the project was simple.
            </p>
            <p>
              We still presented. The judges understood we were a team of
              freshman and it was our first hackathon ever. They were very
              friendly and didn't make fun of our super simple project.
            </p>
            <p>
              No matter how simple or complex your first project is, I hope as
              many people as possible have the kind of first experience that my
              team had.
            </p>
            <p>
              There's really no such thing as doing badly in a hackathon. You're
              there to learn, and as long as you try and your team has a good
              experience, then that's all that matters.
            </p>
            <p>
              It sounds nice, but I'm not saying it just to be nice. It's true.
              You get a ton out of a hackathon just by showing up and giving it
              a try. "Winning" something at the end is just a possible bonus,
              it's not the main reason to go to a hackathon.
            </p>
            <p>
              The experience and what you learn from it is already a huge win in
              itself.
            </p>
            {/* <h1 className="sectionTitle">Most people are super friendly</h1>
            <p>
              In every hackathon I've been to so far, the vast majority of
              people have been nothing but friendly.
            </p>
            <p>
              That said, I have definitely run into a few unfriendly people.
            </p>
            <p>
              One year I was on a team that was fairly new, and our project had
              working code but it wasn't anything super complicated.
            </p>
            <p>
              One of the judges who came by to hear our pitch was extreeeeemely
              rude. Not only did they barely speak to us (vs the others who were
              friendly, asked questions, etc), but their body language in
              particular was horrendous.
            </p>
            <p>
              Kept looking around a whole lot, hardly glancing at us while we
              presented. Had their arms crossed the whole time, and just looked
              completely bored.
            </p>
            <p>
              Saw the same judge the following year. They didn't judge our team
              that time, but I saw them judge a different team. And they were
              just as rude to that team.
            </p>
            <p>
              I even had an experience where I was on a team full of beginners,
              and a judge was just outright cruel and unfair. Interrupted us
              multiple times, cutting teammates off in the middle of their
              sentences. Essentially said our product was garbage and he would
              "never ever use something like that" and it was a stupid idea. Had
              no constructive feedback, just insults. Made my whole team feel
              like garbage.
            </p>
            <p>
              I had some experience at the time where my teammates had none with
              hackathons. And I can't tell you how frustrated I was with that
              judge for making a bunch of first-timers feel that badly about a
              project that really didn't deserve that kind of visceral reaction.
            </p>
            <p>
              I did my best to explain to my team that this is NOT how
              hackathons normally go, at all. I reported that judge and hope
              they do not come back to that hackathon again.
            </p>
            <p>
              This was a bizarre occurrence that would probably shock even
              experienced hackathon attendees and maintainers. It's not the
              norm, I promise you.
            </p>
            <p>
              I only tell you these stories to warn you that it can happen. But
              most people are incredibly kind, including most judges.
            </p> */}
            <h1 className="sectionTitle">Plan ahead of time</h1>
            <h1 className="sectionTitle">
              Know what problem you're solving and why
            </h1>
            <h1 className="sectionTitle">Don't build it all from scratch</h1>
            <h1 className="sectionTitle">Work together, play to strengths</h1>
            <h1 className="sectionTitle">Practice the presentation</h1>
            <h1 className="sectionTitle">Celebrate what you've accomplished</h1>
            <h1 className="sectionTitle">Conclusion</h1>
            <p>
              I hope some of this helps in the next hackathon you decide to do,
              or if you go to one for the first time. I still have a lot to
              learn, but I think just going to these hackathons has taught me a
              great deal.
            </p>
            <p>
              Hackathons are a great opportunity to learn new things, and they
              can be fun if you go about them in a good way.
            </p>
            <p>
              The best part is just getting the experience, but you might win
              something too and that's great if that happens. But if not, don't
              feel like you didn't accomplish anything. You achieved a lot, and
              you don't need a prize for that to be true.
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
