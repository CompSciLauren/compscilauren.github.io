import React from "react";
import Project from "./components/Project";
import Skillset from "./components/Skillset";
import Experience from "./components/Experience";
import "./App.css";
import "./styles/project.css";
import "./styles/skillset.css";
import "./styles/experience.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Page-wrap">
          <p className="Intro">Hi, I'm Lauren Stephenson.</p>
          <p>
            I'm a software developer in Overland Park, Kansas. I love front-end
            development and UI/UX design too. I will graduate from the
            University of Kansas in December 2020 with a bachelor's degree in
            computer science.
          </p>
          <a href="#portfolio-section">
            <button className="Header-btn">See my work!</button>
          </a>
        </div>
      </header>

      <div className="Projects-section">
        <div className="Page-wrap">
          <h1 id="portfolio-section">Projects</h1>
          <div className="projects-grid-container">
            <Project
              link="https://www.nexusmods.com/stardewvalley/mods/4779"
              title="Daily Screenshot Mod"
              description="Stardew Valley mod that automatically takes a screenshot of
                  your entire farm at the start of each day"
              builtWith="C#"
            ></Project>

            <Project
              link="https://drive.google.com/file/d/1LsDeMeXUBJeSpBp4mGFLBYRrhL9-T9uG/view"
              title="PillPal"
              description="Medical app that reminds people to take their medication and
            makes medication management simple"
              builtWith="React Native"
            ></Project>

            <Project
              link="https://github.com/compscilauren/awesome-git-hooks"
              title="Awesome Git Hooks"
              description="Curated list of awesome git hooks"
              builtWith="Bash, Python, Perl"
            ></Project>

            <Project
              link="https://boiling-garden-86985.herokuapp.com/"
              title="Server Finder"
              description="Website for Stardew Valley that connects hosts and players for
              multiplayer servers"
              builtWith="React"
            ></Project>

            <Project
              link="https://github.com/compscilauren/fedcodeathon"
              title="ValleyFind"
              description="Website that helps entrepreneurs find the best location to
              start their business"
              builtWith="JavaScript, Bootstrap"
            ></Project>

            <Project
              link="https://compscilauren.github.io/uno/index.html"
              title="Uno"
              description="Card game Uno, playable in the browser"
              builtWith="JavaScript"
            ></Project>
          </div>
          <a href="https://github.com/CompSciLauren" target="_blank">
            <button className="Header-btn">See all projects on GitHub ></button>
          </a>
        </div>
      </div>

      <div className="Blog-section">
        <div className="Page-wrap">
          <h1>Blog</h1>
          <h2>Recent Post 1</h2>
          <h2>Recent Post 2</h2>
          <h2>Recent Post 3</h2>
          <h2>Recent Post 4</h2>
          <h2>Recent Post 5</h2>
          <button className="Header-btn">See all blog posts ></button>
        </div>
      </div>

      <div className="Skills-section">
        <div className="Page-wrap">
          <h1>Skills</h1>
          <Skillset title="HTML, CSS" skills="HTML, CSS, Bootstrap"></Skillset>
          <Skillset
            title="JavaScript"
            skills="JavaScript, React, React Native, Node"
          ></Skillset>
          <Skillset
            title="Methods"
            skills="Git, Agile, Unit Testing, Integration Testing, CI/CD"
          ></Skillset>
          <Skillset
            title="Other"
            skills="C#, C++, Java, Haskell, MySQL"
          ></Skillset>
        </div>
      </div>

      <div className="Experience-section">
        <div className="Page-wrap">
          <h1>Experience</h1>
          <div className="experience-grid-container">
            <Experience
              company="Cerner Corporation"
              job="Software Intern"
              startDate="May 2020"
              endDate="Present"
              accomplishments={
                <ul>
                  <li>Just started the job!</li>
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
                    saved time for developers on team. Over 580 stars on GitHub.
                  </li>
                </ul>
              }
            ></Experience>
          </div>
        </div>
      </div>

      <div className="Awards-section">
        <div className="Page-wrap">
          <h1>Awards</h1>
          <p>
            KU student team placed 3rd overall in KC Federal Reserve Code-A-Thon
            2019
          </p>
          <p>STEMMy Student Achiever Award, Central Exchange 2018</p>
          <p>
            Outstanding Student Award, Johnson County Community College 2018
          </p>
          <p>
            Honors Student Association Member of the Year Nominee, Johnson
            County Community College 2017
          </p>
        </div>
      </div>

      <div className="Involvement-section">
        <div className="Page-wrap">
          <h1>Leadership & Involvement</h1>
          <p>Co-Founder and Facilitator, Girls Who Code Club, 2018 - present</p>
          <p>
            Leadership Challenge 2020 Participant - Competitively selected to
            represent the KU School of Engineering, 2020
          </p>
          <p>Founder and President, Computer Club, 2017 - 2018</p>
          <p>Co-Founder, KC STEMinists, 2016 - 2018</p>
          <p>
            Vice President of Communication, Phi Theta Kappa Honor Society, 2017
            - 2018
          </p>
          <p>
            Vice President of Communication, American Association of University
            Women, 2017 - 2018
          </p>
          <p>
            Honors Program Graduate and Civic Leadership Program Graduate at
            Johnson County Community College, 2018
          </p>
          <p>
            Cavalier Leadership Development Program Graduate with Distinction,
            2018
          </p>
        </div>
      </div>

      <div className="Footer-section">
        <div className="triangle"></div>
        <h1>Thanks!</h1>
        <h2>Want to chat?</h2>
        <p>CompSciLauren@gmail.com</p>
        <p>Linkedin, Twitter, GitHub</p>
      </div>
    </div>
  );
}

export default App;
