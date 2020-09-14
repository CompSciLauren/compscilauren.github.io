import React from "react";
import Project from "../components/Project";
import BlogArticle from "../components/BlogArticle";
import Skillset from "../components/Skillset";
import Experience from "../components/Experience";
import Award from "../components/Award";
import "./home.css";
import "../styles/project.css";
import "../styles/skillset.css";
import "../styles/experience.css";
import "../styles/award.css";
import "../styles/involvement.css";
import HTML5Logo from "../images/home/html5-logo.png";
import CSS3Logo from "../images/home/css3-logo.png";
import BootstrapLogo from "../images/home/bootstrap-logo.png";
import JavaScriptLogo from "../images/home/javascript-logo.png";
import ReactLogo from "../images/home/react-logo.png";
import NodeLogo from "../images/home/node-logo.png";

import GitLogo from "../images/home/git-logo.png";
import AgileLogo from "../images/home/agile-logo.png";
import UnitTestingLogo from "../images/home/unit-testing-logo.png";
import IntegrationTestingLogo from "../images/home/integration-testing-logo.png";
import CICDLogo from "../images/home/cicd-logo.png";

import CSharpLogo from "../images/home/csharp-logo.png";
import CPlusPlusLogo from "../images/home/cplusplus-logo.png";
import JavaLogo from "../images/home/java-logo.png";
import HaskellLogo from "../images/home/haskell-logo.png";
import SQLLogo from "../images/home/sql-logo.png";
import Involvement from "../components/Involvement";
import CommunityImpact from "../images/home/community-involvement.jpg";

import Contact from "../components/Contact";

import WomanWorkingOnLaptop from "../images/blog/2020/07-july/woman-working-on-laptop.jpg";
import InternDay from "../images/blog/2020/07-july/intern-day.jpg";
import EditFolder from "../images/blog/2020/08-august/edit-folder.png";
// import ConfusedRobot from "../images/blog/2020/07-july/confused-robot.jpg";

function home() {
  return (
    <div className="App">
      <main id="main-content">
        <header className="App-header">
          <div className="Page-wrap">
            <p className="Intro">Hi, I'm Lauren Stephenson.</p>
            <p className="header-description">
              I'm a software engineer in Overland Park, Kansas. I'm passionate
              about front-end development and UI/UX design. I recently finished
              interning at Cerner Corporation and will graduate from the
              University of Kansas in December 2020.
            </p>
            <a href="#portfolio-section">
              <button className="Header-btn">See my work!</button>
            </a>
          </div>

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
        </header>

        <div className="Projects-section">
          <div className="Page-wrap">
            <h1 className="homeHeader" id="portfolio-section">
              Projects
            </h1>
            <div className="projects-grid-container">
              <Project
                link="https://www.nexusmods.com/stardewvalley/mods/4779"
                title="Daily Screenshot Mod"
                description="Stardew Valley mod that automatically takes a screenshot of
                  your entire farm at the start of each day"
                builtWith="C#"
              />

              <Project
                link="https://github.com/compscilauren/web-clock-time-tracker"
                title="Web Clock Time Tracker"
                description="A webapp that makes time tracking simple for associates"
                builtWith="React"
              />

              <Project
                link="https://github.com/compscilauren/awesome-git-hooks"
                title="Awesome Git Hooks"
                description="Curated list of awesome Git hooks"
                builtWith="Bash, Python, Perl"
              />

              <Project
                link="https://compscilauren.github.io/uno/index.html"
                title="Uno"
                description="Card game Uno, playable in the browser"
                builtWith="JavaScript"
              />

              <Project
                link="https://drive.google.com/file/d/1LsDeMeXUBJeSpBp4mGFLBYRrhL9-T9uG/view"
                title="PillPal"
                description="Medical app that reminds people to take their medication and
            makes medication management simple"
                builtWith="React Native"
              />

              <Project
                link="https://github.com/compscilauren/fedcodeathon"
                title="ValleyFind"
                description="Website that helps entrepreneurs find the best location to
              start their business"
                builtWith="JavaScript, Bootstrap"
              />
            </div>
            <a
              href="https://github.com/CompSciLauren"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="Header-btn">
                See all projects on GitHub >
              </button>
            </a>
          </div>
        </div>

        <div className="Blog-section">
          <div className="Page-wrap">
            <h1 className="homeHeader" id="latest-articles">
              Latest Articles
            </h1>
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
              tag2="productivity"
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
            <a href="/blog">
              <button className="Header-btn">See all blog posts ></button>
            </a>
          </div>
        </div>

        <div className="Skills-section">
          <div className="Page-wrap">
            <h1 className="homeHeader" id="skills">
              Skills
            </h1>
            <Skillset
              title="JavaScript"
              skills={
                <div className="skill-list">
                  <div className="individual-skill">
                    <img src={JavaScriptLogo} alt="JavaScript Logo"></img>
                    <p>JavaScript</p>
                  </div>{" "}
                  <div className="individual-skill">
                    <img src={ReactLogo} alt="React Logo"></img>
                    <p>React</p>
                  </div>{" "}
                  <div className="individual-skill">
                    <img src={ReactLogo} alt="React Logo"></img>
                    <p>React Native</p>
                  </div>{" "}
                  <div className="individual-skill">
                    <img src={NodeLogo} alt="Node Logo"></img>
                    <p>Node</p>
                  </div>
                </div>
              }
            ></Skillset>
            <Skillset
              title="HTML, CSS"
              skills={
                <div className="skill-list">
                  <div className="individual-skill">
                    <img src={HTML5Logo} alt="HTML5 Logo"></img>
                    <p>HTML5</p>
                  </div>{" "}
                  <div className="individual-skill">
                    <img src={CSS3Logo} alt="CSS3 Logo"></img>
                    <p>CSS3</p>
                  </div>{" "}
                  <div className="individual-skill">
                    <img src={BootstrapLogo} alt="Bootstrap Logo"></img>
                    <p>Bootstrap</p>
                  </div>
                </div>
              }
            ></Skillset>
            <Skillset
              title="Methods"
              skills={
                <div className="skill-list">
                  <div className="individual-skill">
                    <img src={GitLogo} alt="Git Logo"></img>
                    <p>Git</p>
                  </div>{" "}
                  <div className="individual-skill">
                    <img src={AgileLogo} alt="Agile Logo"></img>
                    <p>Agile</p>
                  </div>{" "}
                  <div className="individual-skill">
                    <img src={UnitTestingLogo} alt="Unit Testing Logo"></img>
                    <p>Unit Testing</p>
                  </div>{" "}
                  <div className="individual-skill">
                    <img
                      src={IntegrationTestingLogo}
                      alt="Integration Testing Logo"
                    ></img>
                    <p>Integration Testing</p>
                  </div>
                  <div className="individual-skill">
                    <img
                      src={CICDLogo}
                      alt="Continuous Integration Continuous Development Logo"
                    ></img>
                    <p>CI/CD</p>
                  </div>
                </div>
              }
            ></Skillset>
            <Skillset
              title="Other"
              skills={
                <div className="skill-list">
                  <div className="individual-skill">
                    <img src={CSharpLogo} alt="C Sharp Logo"></img>
                    <p>C#</p>
                  </div>{" "}
                  <div className="individual-skill">
                    <img src={CPlusPlusLogo} alt="C Plus Plus Logo"></img>
                    <p>C++</p>
                  </div>{" "}
                  <div className="individual-skill">
                    <img src={JavaLogo} alt="Java Logo"></img>
                    <p>Java</p>
                  </div>{" "}
                  <div className="individual-skill">
                    <img src={HaskellLogo} alt="Haskell Logo"></img>
                    <p>Haskell</p>
                  </div>{" "}
                  <div className="individual-skill">
                    <img src={SQLLogo} alt="SQL Logo"></img>
                    <p>SQL</p>
                  </div>
                </div>
              }
            ></Skillset>
          </div>
        </div>

        <div className="Experience-section">
          <div className="Page-wrap">
            <h1 className="homeHeader" id="experience">
              Experience
            </h1>
            <div className="experience-grid-container">
              <Experience
                company="Cerner Corporation"
                job="Software Intern"
                startDate="May 2020"
                endDate="July 2020"
                accomplishments={
                  <ul>
                    <li>
                      Worked on an internal tool developed to automate the
                      process of installing, managing, and reporting for
                      packaged software.
                    </li>
                    <li>
                      Added multiple UI/UX enhancements that made it easier for
                      users to understand and navigate various workflows.
                    </li>
                    <li>
                      Developed new software that saves hourly associates time
                      by calculating precisely what time they should clock out
                      each day.
                    </li>
                  </ul>
                }
              ></Experience>
              <Experience
                company="Cerner Corporation"
                job="Technical Apprentice"
                startDate="July 2018"
                endDate="August 2019"
                accomplishments={
                  <ul>
                    <li>
                      Developed backend APIs to validate if clinical information
                      was safe to delete, which decreased risk of deleting
                      critical data.
                    </li>
                    <li>
                      Debugged and resolved defects in clinical information
                      management system, which improved overall user experience.
                    </li>
                    <li>
                      Wrote open source scripts to automate Git workflows, which
                      saved time for developers on team. Over 580 stars on
                      GitHub.
                    </li>
                  </ul>
                }
              ></Experience>
            </div>
          </div>
        </div>

        <div className="Awards-section">
          <div className="Page-wrap">
            <h1 className="homeHeader" id="awards">
              Awards
            </h1>
            <div className="award-grid-container">
              <Award
                title="2nd Place in Hackathon"
                organization="Cerner Corporation"
                year="2020"
              ></Award>
              <Award
                title="3rd Place in Hackathon"
                organization="KC Federal Reserve"
                year="2019"
              ></Award>
              <Award
                title="STEMMy Student Achiever Award"
                organization="Central Exchange"
                year="2018"
              ></Award>
            </div>
          </div>
        </div>

        <div className="Involvement-section">
          <div className="Page-wrap">
            <h1 className="homeHeader" id="community-impact">
              Community Impact
            </h1>
            <div className="involvement-container">
              <div className="involvement-item">
                <img
                  src={CommunityImpact}
                  alt="Collage of photos showing involvement in community"
                  style={{ maxWidth: "548px" }}
                  className="communityImpactImg"
                ></img>
              </div>
              <div className="involvement-item">
                <p className="involvement-description">
                  I have been an active volunteer in my local community for
                  several years. I have started several computer science
                  education organizations, organized many educational events
                  about computer science as well as women's issues, and spoken
                  at a small number of events. Most often, you'll find me
                  mentoring young learners and teaching in small group settings.
                </p>
                <p className="involvement-description">
                  I'm currently focusing on facilitating a local Girls Who Code
                  Club for students in 6th - 12th grade.
                </p>
                <p className="involvement-description">
                  Below are some of the things I've been especially involved in
                  over the last few years.
                </p>
              </div>
            </div>
            <div className="involvement-grid-container">
              <Involvement
                company="Girls Who Code"
                job="Co-Founder and Facilitator of club in Lawrence, Kansas"
                startDate="2018"
                endDate="Present"
                accomplishments={
                  <ul>
                    <li>Text</li>
                  </ul>
                }
              ></Involvement>
              <Involvement
                company="Leadership Challenge"
                job="Participant; Competitively selected to
            represent KU School of Engineering"
                startDate="2020"
                endDate="2020"
              ></Involvement>
              <Involvement
                company="Honors Program"
                job="Graduate at JCCC"
                startDate="2018"
                endDate="2018"
              ></Involvement>
              <Involvement
                company="Civic Leadership Program"
                job="Graduate at JCCC"
                startDate="2018"
                endDate="2018"
              ></Involvement>
              <Involvement
                company="Cavalier Leadership Development Program"
                job="Graduate with Distinction at JCCC"
                startDate="2018"
                endDate="2018"
              ></Involvement>
              <Involvement
                company="Computer Club"
                job="Founder and President at JCCC"
                startDate="2017"
                endDate="2018"
              ></Involvement>
              <Involvement
                company="Phi Theta Kappa Honor Society"
                job="Vice President of Communication for Alpha Iota Gamma chapter"
                startDate="2017"
                endDate="2018"
              ></Involvement>
              <Involvement
                company="American Association of University Women"
                job="Vice President of Communication for JCCC student chapter"
                startDate="2017"
                endDate="2018"
              ></Involvement>
              <Involvement
                company="KC STEMinists"
                job="Co-Founder"
                startDate="2016"
                endDate="2018"
              ></Involvement>
            </div>
          </div>
        </div>

        <Contact />
      </main>
    </div>
  );
}

export default home;
