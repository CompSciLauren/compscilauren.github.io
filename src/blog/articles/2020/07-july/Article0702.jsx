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
import WomanWorkingOnLaptop from "../../../../images/blog/2020/07-july/woman-working-on-laptop.jpg";
import PersonOnPhoneAndLaptop from "../../../../images/blog/2020/07-july/person-on-phone-and-laptop.jpg";
import FriendsLookingAtLaptop from "../../../../images/blog/2020/07-july/friends-looking-at-laptop.jpg";
import HandshakeThroughLaptop from "../../../../images/blog/2020/07-july/handshake-through-laptop.jpg";
import CollageOfPeople from "../../../../images/blog/2020/07-july/collage-of-people.jpg";
import TeaAndJournal from "../../../../images/blog/2020/07-july/tea-and-journal.jpg";
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
        <meta
          property="og:title"
          content="10 tips for maintaining an open source project"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://compscilauren.com/blog/10-tips-for-maintaining-an-open-source-project"
        />
        <meta property="og:image" content={WomanWorkingOnLaptop} />
        <meta
          property="og:description"
          content="Anyone can maintain an open source project. Here are some tips for success."
        />
      </Helmet>
      <main id="main-content">
        <div className="blog-page-wrap">
          <h1 style={{ padding: "8px" }}>
            10 tips for maintaining an open source project
          </h1>
          <BlogProfileTop date="July 2nd, 2020" readTime="10 min" />
          <div className="tag-container">
            <Tag title="opensource" />
            <Tag title="github" />
          </div>
          <hr></hr>
          <div style={{ color: "#292929", lineHeight: "28px" }}>
            <img
              src={WomanWorkingOnLaptop}
              alt="A woman typing on a Mac laptop with icons in the air behind her representing project related tasks"
              className="buggyImg"
            />
            Image by{" "}
            <a href="https://pixabay.com/users/Tumisu-148124/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5218160">
              Tumisu
            </a>{" "}
            from{" "}
            <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5218160">
              Pixabay
            </a>
            <p>
              Becoming an open source project maintainer is as easy as creating
              a public repository on GitHub, or on any{" "}
              <a
                href="https://itsfoss.com/github-alternatives/"
                target="_blank"
                rel="noopener noreferrer"
              >
                other open source hosting services
              </a>
              .
            </p>
            <p>
              But what can you do to make sure you're being a good maintainer?
            </p>
            <p>
              If you're familiar with{" "}
              <a
                href="https://compscilauren.com/blog/why-contribute-to-open-source-and-how-to-get-started"
                target="_blank"
                rel="noopener noreferrer"
              >
                contributing to open source
              </a>
              , you probably have an idea of what a beginner-friendly repository
              looks like.
            </p>
            <p>
              A lot of these tips are things that benefit new project
              contributors, but all of them are things that improve the
              experience for everyone.
            </p>
            <p>
              Here are a few things that I've learned, both as a maintainer and
              as someone looking to contribute to other projects.
            </p>
            <h1 className="sectionTitle">1. Choose a license</h1>
            <p>
              This is easy to overlook. You might think, who cares? My project
              is small, and I don't care what people do with my code.
            </p>
            <p>Well, a license doesn't just protect you or your project.</p>
            <p>
              It gives people confidence in using and/or contributing to your
              project.
            </p>
            <p>
              I've seen people online say that if your project doesn't have a
              license, they won't contribute to it or use your code in any of
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
              contributing. It will also lay out the ground rules to help you
              maintain a productive and positive community. Nobody wants to be
              in a toxic environment.
            </p>
            <h1 className="sectionTitle">
              3. Create Issues for each task and label them
            </h1>
            <img
              src={GitHubIssues}
              alt="Screenshot of a GitHub Issues page on a GitHub repository"
              className="buggyImg"
            />
            <h2 className="subSectionTitle">Create the Issue</h2>
            <p>
              When you know of a bug or feature that needs to be worked on, make
              a GitHub Issue for it. Encourage others to create Issues as
              needed.
            </p>
            <p>
              If you followed step 2, you should have Issue templates for people
              to use. These are helpful for you as well!
            </p>
            <p>
              Fill out the Issue with enough information so that someone could
              look at it and know if it's something they'd be interested in
              taking on.
            </p>
            <h2 className="subSectionTitle">Add labels</h2>
            <p>
              Don't forget to add labels to your Issues. These can provide a lot
              of information at a quick glance.
            </p>
            <p>
              Is this Issue beginner-friendly? Is it being worked on by anyone
              yet? Is it a bug or is it a new feature?
            </p>
            <p>
              Help people find the answers to these questions quickly by using
              labels.
            </p>
            <h1 className="sectionTitle">
              4. Share on social media and any relevant websites
            </h1>
            <img
              src={PersonOnPhoneAndLaptop}
              alt="A person logging into Facebook on their phone and looking at a generic website on their laptop"
              className="buggyImg"
            />
            Image by{" "}
            <a href="https://pixabay.com/users/FirmBee-663163/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=614213">
              William Iven
            </a>{" "}
            from{" "}
            <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=614213">
              Pixabay
            </a>
            <p>
              Social media is a fantastic place to learn from different
              perspectives, meet other coders, and share your project with
              potential users.
            </p>
            <p>
              Look for places that would be relevant to share your project, and
              follow their posting guidelines. Try not to post it so often or in
              such a way that it comes off as spam.
            </p>
            <p>
              You could tweet about your project, post it in various communities
              on Reddit, even share it on Instagram. You can bring it up in
              comments wherever it's relevant.
            </p>
            <p>
              You can also change up the reason behind posting. You can share it
              just to let people know about the project. You can also mention it
              but with the focus of asking for advice or feedback about a
              particular aspect of it. If there's a new update that's just been
              released, you can post about that too.
            </p>
            <p>
              You might just make posts about it from a personal account. You
              can also consider creating an account specifically for the
              project.
            </p>
            <p>
              If you opt for that second option, then when you make a post it
              will appear to come from the official account rather than the
              creator of it. This can be more enticing for users to follow, but
              it really just depends on the situation.
            </p>
            <p>
              If you're looking for users specifically, see if there's a website
              dedicated to the kind of thing your project is about.
            </p>
            <p>
              For example if you make mods for a video game, there's probably a
              website where you can upload your mod. You can also create your
              own website to showcase the project. Again it just depends on the
              situation.
            </p>
            <h1 className="sectionTitle">
              5. Make the most out of Hacktoberfest
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
            <p>
              <a
                href="https://hacktoberfest.digitalocean.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hacktoberfest
              </a>{" "}
              is the best opportunity of the year to attract new contributors to
              your project.
            </p>
            <p>
              Everyone will be out searching for projects they can contribute
              to, and a project with a lower barrier to entry is bound to gain
              some attention.
            </p>
            <p>
              If you want to make the most of this month-long spike of
              contributions, make sure you've followed the previous (and
              following) steps.
            </p>
            <p>
              This is an especially great time to be a little more active on
              social media. Share your project on relevant posts, and make your
              own posts too.
            </p>
            <p>
              If you come across a list of beginner-friendly projects and yours
              is indeed friendly, see if you can get yours added to the list.
            </p>
            <p>
              If you do start getting comments anywhere or contributions (yay!),
              make sure you're friendly in your interactions.
            </p>
            <p>
              If you get a contribution from someone but you'd like to request
              or make a change, that's totally fine. There's nothing wrong with
              politely letting them know that you have some requested changes.
            </p>
            <p>
              Remember, this is an event that attracts lots of beginner
              contributors. We want them to feel welcome! Don't make anyone feel
              bad for not knowing something or if you need them to modify part
              of their contribution. Be patient and kind, as you hopefully are
              even when it isn't Hacktoberfest.
            </p>
            <h1 className="sectionTitle">
              6. Assume good intent until clearly shown otherwise
            </h1>
            <p>It might surprise you, but this is an easy one to mess up on.</p>
            <p>
              One of my first contributions got a comment on it saying that the
              text on a README file was too wordy. I figured that was fine, I
              can make it more concise. I updated the file.
            </p>
            <p>
              Someone else commented and said that the file was "quite verbose".
            </p>
            <p>Quite verbose? Are you serious?</p>
            <p>
              That hurt. I was trying to contribute something that I had put a
              lot of thought into, and I didn't like the phrase "quite verbose".
              Especially right after I had already made the text shorter.
            </p>
            <p>
              I was upset, and my response made it apparent to that person.
              Luckily for me, they responded kindly and we were able to work
              through it.
            </p>
            <p>
              It was easy for me to get hung up on that phrase they used. But I
              should have assumed good intent.
            </p>
            <p>
              Not everyone uses the same words to describe things. And what they
              said wasn't clearly intended to be toxic or hurtful. Plus, it was
              kind of true honestly.
            </p>
            <p>
              It's tough! You put your heart into something, and then you have
              to let people critique it. That's how code and other contribution
              reviews work.
            </p>
            <p>
              The best advice I have here, is just remember that reviews aren't
              an attack on your character or how good of a programmer or writer
              you are. It's simply a review of the contribution itself.
            </p>
            <p>
              Everyone wants whatever is best. No contribution is absolutely
              perfect. So try to assume good intent unless it's clearly toxic
              language or behavior.
            </p>
            <h1 className="sectionTitle">7. Ask a friend for feedback</h1>
            <img
              src={FriendsLookingAtLaptop}
              alt="Three friends sitting on a blanket in the grass and looking at something on a laptop together"
              className="buggyImg"
            />
            Image by{" "}
            <a href="https://pixabay.com/users/sasint-3639875/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1807505">
              Sasin Tipchai
            </a>{" "}
            from{" "}
            <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1807505">
              Pixabay
            </a>
            <p>
              What's better than getting advice from Internet strangers? Getting
              advice from a trusted friend, of course!
            </p>
            <p>
              Whether it's a question about your code, or your social media
              outreach, or which website layout looks best, don't forget you can
              always ask a friend for feedback.
            </p>
            <p>
              If your friends aren't available to help with this kind of thing,
              you can try to connect with someone on social media.
            </p>
            <p>
              Making friends on social media can be fun and really helpful.
              You'll be able to bounce ideas off each other, support each other,
              and ask each other for feedback.
            </p>
            <p>
              If you're going to ask for feedback from someone directly on
              social media, remember to be considerate. If they say no thank
              you, be polite and don't continue asking them.
            </p>
            <p>
              If you can't find a specific person who would be good to ask,
              remember you can always make a public post for anyone to comment
              on.
            </p>
            <h1 className="sectionTitle">
              8. Show appreciation and share sense of ownership
            </h1>
            <img
              src={HandshakeThroughLaptop}
              alt="Two people shaking hands but one of the hands is coming out of the digital screen of a laptop"
              className="buggyImg"
            />
            Image by{" "}
            <a href="https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3382503">
              Gerd Altmann
            </a>{" "}
            from{" "}
            <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3382503">
              Pixabay
            </a>
            <p>
              Always be kind and remember to show appreciation to the people who
              help you, and to the users of your project.
            </p>
            <p>
              Give contributors a sense of ownership. People care about the
              things they own.
            </p>
            <p>
              I don't mean that you need to literally tell people that they
              "own" the project. But don't make it feel like they're separated
              from the project either.
            </p>
            <p>
              Don't look at it as "this is MY project, MY code, MY community".
              Think of it as a collaborative effort by everyone. You can just
              use that kind of phrasing when you speak. "WE did a good job, WE
              have an awesome community" and so on.
            </p>
            <p>
              If you look at it as a community thing and not as a "this is all
              mine" kind of thing, it will show in the language you use. The
              language you use can make people feel a stronger sense of
              belonging, or it can make them feel distanced from the project.
            </p>
            <h1 className="sectionTitle">9. Build with the user in mind</h1>
            <img
              src={CollageOfPeople}
              alt="A collage showing lots of different people and phones along the middle horizontal area"
              className="buggyImg"
            />
            Image by{" "}
            <a href="https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3148100">
              Gerd Altmann
            </a>{" "}
            from{" "}
            <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3148100">
              Pixabay
            </a>
            <p>
              Remember that at the end of the day, you want your open source
              project to be useful to other people.
            </p>
            <p>
              Make sure it's easy enough for users to get started with your
              project. If you find users asking the same questions, address
              those frequently asked questions in the instructions or setup
              process.
            </p>
            <p>
              Keep in mind what your users would like to see. If they offer you
              feedback, listen to them and consider the things they say.
            </p>
            <p>
              Lastly, be sure to always act ethically and have their best
              interests at heart.
            </p>
            <h1 className="sectionTitle">10. Take care of yourself</h1>
            <img
              src={TeaAndJournal}
              alt="A cup of tea and a tea bag with a heart in the middle sitting on top of a journal"
              className="buggyImg"
            />
            Image by{" "}
            <a href="https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=381235">
              Free-Photos
            </a>{" "}
            from{" "}
            <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=381235">
              Pixabay
            </a>
            <p>Really, truly, take care of yourself.</p>
            <p>
              Contributing to open source can be hard, and maintaining an active
              open source project is typically even harder.
            </p>
            <p>
              You'll often find open source projects with tons of open pull
              requests and Issues.
            </p>
            <p>
              It can happen if a project is really popular, or if the maintainer
              becomes overwhelmed and slows down on how many Issues or pull
              requests they close.
            </p>
            <p>
              Having a high number of these can get overwhelming really quickly,
              especially if you don't have much help.
            </p>
            <p>
              Remember to take a breath. Do what you need to in order to be
              okay. Your well-being comes before the project.
            </p>
            <p>
              It's definitely good to consider having a second person who can
              help actively maintain the project, if things start to get busy.
            </p>
            <p>
              If you're in school or have a full-time job, it can be especially
              challenging to manage open source projects on top of it all.
            </p>
            <p>
              Remember that you're awesome, it's good to take breaks when you
              feel stressed, and it's okay to ask for help when you need it.
            </p>
            <h1 className="sectionTitle">Conclusion</h1>
            <p>
              With the right balance and support, maintaining an open source
              project can be an awesome experience.
            </p>
            <p>
              I hope that by keeping the above tips in mind, you'll have even
              more success with your project.
            </p>
            <p>Did I miss anything? Feel free to share your own tips below!</p>
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
