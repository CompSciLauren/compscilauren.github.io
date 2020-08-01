import React from "react";
import "../../../blog.css";
import "../../../../home/home.css";
import BlogProfile from "../../../../components/BlogProfile";
import BlogProfileTop from "../../../../components/BlogProfileTop";
import Tag from "../../../../components/Tag";
import { DiscussionEmbed } from "disqus-react";
import { Helmet } from "react-helmet";
import InternDay from "../../../../images/blog/2020/07-july/intern-day.jpg";

function Article0730() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lessons learned as a software intern during a pandemic</title>
        <meta
          name="description"
          content="Interning is tough enough even when there isn’t a pandemic. I learned a lot of things from this experience, and wanted to share a few of them here."
        />
        <meta
          property="og:title"
          content="Lessons learned as a software intern during a pandemic"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://compscilauren.com/blog/lessons-learned-as-a-software-intern-during-a-pandemic"
        />
        <meta property="og:image" content={InternDay} />
        <meta
          property="og:description"
          content="Interning is tough enough even when there isn’t a pandemic. I learned a lot of things from this experience, and wanted to share a few of them here."
        />
      </Helmet>
      <main id="main-content">
        <div className="blog-page-wrap">
          <h1 style={{ padding: "8px" }}>
            Lessons learned as a software intern during a pandemic
          </h1>
          <BlogProfileTop date="July 30th, 2020" readTime="5 min" />
          <div className="tag-container">
            <Tag title="career" />
            <Tag title="internship" />
          </div>
          <hr></hr>
          <div style={{ color: "#292929", lineHeight: "28px" }}>
            <img
              src={InternDay}
              alt="A note card that says Happy National Intern Day with a glass cup next to it with the Cerner logo on it and a heart shape filled with healthcare symbols"
              className="buggyImg"
            />
            <p>
              Interning is tough enough even when there isn’t a pandemic. I feel
              for every person who has had to stress over the well-being of
              their loved ones or worry a lot for their own health and safety.
              I’ve been extremely fortunate in that my level of pandemic-related
              stress has probably been average, or maybe even below-average.
            </p>
            <p>
              I just want to say that for anyone who has had to deal with a high
              amount of stress because of this pandemic, or any reason really,
              you’re not alone and it’s okay if you feel like you aren’t
              excelling as much as you would under regular circumstances. I’ve
              dealt with stressful situations and I know that sometimes just
              getting through the work day or school day is an accomplishment in
              itself. It’s hard to give it your all when you’re already dealing
              with so much as it is.
            </p>
            <p>
              I've been lucky to be able to spend time this summer focusing a
              lot on my internship, and what I want in my career. I'm lucky to
              have had a strong support system to help me as I navigated my
              virtual internship too.
            </p>
            <p>
              Everyone who helps run the summer internship program at Cerner has
              been absolutely amazing and gone out of their way to help everyone
              succeed. They provided guidance and helped us all navigate our
              virtual internships.
            </p>
            <p>
              I also had a ton of support from my team, other associates at
              Cerner, and some wonderful friends. They know who they are and I
              will be forever grateful to each of them.
            </p>
            <p>
              At the end of the day, I think having a strong support system and
              others who can help guide you is one of the best things for your
              career or any other major endeavor.
            </p>
            <p>
              Being an intern in a virtual setting has really made it clear to
              me that my career is truly in my own hands. Even from the first
              day of work, it was clear.
            </p>
            <p>
              It was up to me to login and figure out how to set everything up
              so that I could make it to that first day of training. Once I had
              my first real task to do, it was on me to get it done.
            </p>
            <p>
              That’s true even under regular circumstances. But when you’re
              alone in a room all day, it feels more apparent. There was no one
              to physically stop by my desk and check in with me.
            </p>
            <p>
              If anything, I think working remotely made me even more determined
              to do well. The last thing I wanted was for anyone to think that I
              wasn’t giving it my best effort.
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
              For me, my focus is currently on my career. And I've been lucky to
              have a ton of inspirational people to learn from at this
              internship, including other interns. I’ve seen people accomplish
              some amazing things this summer, and it has definitely inspired
              me.
            </p>
            <p>
              Being committed to doing good work and finding ways to make
              valuable contributions helps everyone, including yourself.
            </p>
            <p>
              Everyone make mistakes sometimes. I know I did. But I think at the
              end of the day, if you're putting in effort, have a positive
              attitude, and can learn from those mistakes, you'll do great.
            </p>
            <p>
              All that said, it was also critical to know when to take a break
              and prevent burnout. It’s easy to lose track of time when there’s
              no physical disconnect between work and personal life. Living in a
              small apartment also meant that I couldn’t have a whole room
              dedicated to doing just work.
            </p>
            <p>
              I also learned that I actually feel better when I can move around
              occasionally. Whether it was doing some work on the couch or
              sitting outside when the weather was nice, sometimes a change of
              scenery was surprisingly helpful.
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
              outside of that.
            </p>
            <p>
              Normally you could walk down a hallway or step into the break room
              and talk with people. Or stop by someone’s desk to have a quick
              chat. That just isn’t a thing in remote work.
            </p>
            <p>
              It was also important to keep in mind that this was not the
              typical situation for remote work.
            </p>
            <p>
              Working remotely during a pandemic is not going to feel the same
              as it would under regular circumstances. So keeping an eye on how
              I was feeling and making sure I was doing okay was crucial.
            </p>
            <p>
              I learned how to reach out to people. Whether it was a teammate, a
              fellow intern friend, or someone else I’d met virtually. It could
              be about work, or maybe we would just catch up for a bit. It was
              nice to just chat occasionally, like you would if you were working
              in the same building.
            </p>
            <p>
              One of the best things the summer internship program involved was
              the Friday “lunch roulettes”. Every Friday we were assigned a new
              group and we could meet up to get virtual lunch together.
            </p>
            <p>
              I was able to meet lots and lots of other interns this way, and it
              was a blast. I even met with a few interns on other days of the
              week to do our own lunch get-togethers, and it was awesome.
            </p>
            <p>
              I also met a lot of people just through virtual chatting and
              through special events, like at the ShipIt hackathon and the
              DevCon conference.
            </p>
            <p>
              I wasn’t sure if I would make any friends in a remote setting like
              this, but I was pleasantly surprised to meet a lot of great people
              who I hope to stay in touch with even after the internship is
              over.
            </p>
            <p>
              I'm grateful to have had an internship at all this summer, and I'm
              especially glad that it was with Cerner. Making healthcare better
              is something that I find extremely meaningful, and I'm proud to
              have made some contributions to that through this virtual
              internship.
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
                "https://compscilauren.com/blog/lessons-learned-as-a-software-intern-during-a-pandemic",
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
