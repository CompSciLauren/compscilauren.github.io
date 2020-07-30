import React from "react";
import "../../../blog.css";
import "../../../../home/home.css";
import BlogProfile from "../../../../components/BlogProfile";
import BlogProfileTop from "../../../../components/BlogProfileTop";
import Tag from "../../../../components/Tag";
import { DiscussionEmbed } from "disqus-react";
import { Helmet } from "react-helmet";

function Article0730() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lessons learned as a software intern during a pandemic</title>
        <meta
          name="description"
          content="When you get stuck in Git and don't know what to do, you'll want to know these commands.."
        />
        <meta
          property="og:title"
          content="Lessons learned as a software intern during a pandemic"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://compscilauren.com/blog/lessoned-learned-as-a-software-intern-during-a-pandemic"
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
            Lessons learned as a software intern in a pandemic
          </h1>
          <BlogProfileTop date="July 30th, 2020" readTime="5 min" />
          <div className="tag-container">
            <Tag title="engineeringlife" />
            <Tag title="personal" />
          </div>
          <hr></hr>
          <div style={{ color: "#292929", lineHeight: "28px" }}>
            {/* <img
              src={ConfusedRobot}
              alt="Swag from the Cerner ShipIt Day hackathon from July 2020"
              className="buggyImg"
            /> */}
            <p>
              Interning is tough enough even when there isn’t a pandemic. I feel
              for every person who has had to stress over the wellbeing of their
              loved ones or worry a lot for their own health and safety. I’ve
              been extremely fortunate in that my level of pandemic-related
              stress has probably been average, or maybe even below-average.
            </p>
            <p>
              I just want to say that for anyone who has had to deal with a high
              amount of stress because of this pandemic, you’re not alone and
              it’s okay if you feel like you aren’t excelling as much as you
              would under regular circumstances. I’ve dealt with stressful
              situations and I know that sometimes just getting through the work
              day or school day is an accomplishment in itself. It’s hard to
              give it your all when you’re already dealing with so much as it
              is.
            </p>
            <p>
              I’ve been able to focus a lot on my internship this summer, and
              what I want in my career.
            </p>
            <p>
              Being an intern in a virtual setting has really made it clear to
              me that my career is in my hands. Even on the first day of work,
              it was obvious.
            </p>
            <p>
              It was up to me to login and figure out how to set everything up
              so that I could make it to that first day of training. Once I had
              my first real task to do, it was on me to get it done. That’s true
              even under regular circumstances.
            </p>
            <p>
              When you’re alone in a room all day, it feels more apparent. There
              was no one to physically stop by my desk and check in with me.
            </p>
            <p>
              If anything, I think working remotely made me even more focused on
              getting my work done. The last thing I wanted was for anyone to
              think that I wasn’t giving it my best effort.
            </p>
            <p>
              If people couldn’t physically observe me working, then I needed to
              make sure that they saw it in the work I was pushing out.
            </p>
            <p>
              I think success is something that looks different for everyone.
              What you want to prioritize is up to you and can change over time,
              and that’s the real beauty of it. For me, I’ve been studying for
              years to become a software engineer and I’m beyond excited to be
              so close to reaching that goal. With this being my final
              internship and only one more semester to go, I’ve felt easily
              motivated and eager to make as much progress as I reasonably can.
            </p>
            <p>
              I want to succeed in my career. I’ve learned a lot from observing
              people at work, even including other interns. I’ve seen people
              accomplish a ton of great things this summer, and seeing others do
              so well has inspired me.
            </p>
            <p>
              I’ve learned that if you put in the work, you can get a lot out of
              an internship or full-time job. Being committed to doing good work
              and going above and beyond to make valuable contributions helps
              everyone, including yourself.{" "}
            </p>
            <p>
              All that said, it was also critical to know when to take a break
              and prevent burnout. It’s easy to lose track of time when there’s
              no physical disconnect between work and personal life. Living in a
              small apartment also meant that I couldn’t have a whole room
              dedicated to doing just work.
            </p>
            <p>
              One thing I learned though, was that I actually feel better when I
              can move around occasionally. Whether it was doing some work on
              the couch or sitting outside when the weather was nice, sometimes
              a change of scenery was surprisingly helpful.
            </p>
            <p>
              Working remotely has its perks. There’s no commute. That’s the
              best perk in my mind. I’ve saved an impressive amount of time and
              money by not having to drive to and from work each day.
            </p>
            <p>
              It also has some pitfalls to avoid. Like making sure you aren’t
              all alone when you’re working. It’s easy to just spend the day
              doing work and going to meetings, but not talking to anyone
              outside of that. Normally you could walk down a hallway or step
              into the break room and talk with people. Or stop by someone’s
              desk to have a quick chat. Now that just isn’t a thing.
            </p>
            <p>
              I learned how to reach out to people. Whether it was a teammate, a
              fellow intern friend, or someone else I’d met virtually. It was
              nice to chat occasionally, like you would if you were working in
              the same building.{" "}
            </p>
            <p>
              One of the best things the summer internship program involved was
              the Friday “lunch roulettes”. Every Friday we were assigned a new
              group and we could meet up to get virtual lunch together. I was
              able to meet lots and lots of other interns this way, and it was a
              blast. I even met with a few interns on other days of the week to
              do our own lunch get-togethers, and it was awesome.
            </p>
            <p>
              I wasn’t sure if I would make any friends in a remote setting like
              this, but I was pleasantly surprised to meet a lot of great people
              who I hope to stay in touch with even after the internship is
              over.
            </p>
            <p>
              Tomorrow is my last day, and even though everyone warned me it
              would go by fast, I’m still shocked. It may have gone by fast, but
              I’ve learned a great deal. I don’t know exactly what my final
              semester of classes will look like, or how long I’ll continue to
              do work remotely. But I know that this internship has made me more
              than prepared to adapt and take on whatever comes next.
            </p>
          </div>
          <BlogProfile />
        </div>
        <div className="comment-section-wrap">
          <DiscussionEmbed
            shortname="compscilauren"
            config={{
              url:
                "https://compscilauren.com/blog/lessoned-learned-as-a-software-intern-during-a-pandemic",
              identifier: "article-2020-07-30",
              title: "Lessons learned as a software intern during a pandemic",
            }}
          />
        </div>
      </main>
    </>
  );
}

export default Article0730;
