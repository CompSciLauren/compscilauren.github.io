import React from "react";
import Project from "./components/Project";
import Experience from "./components/Experience";
import "./App.css";
import "./styles/project.css";
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
      <div className="Page-center">
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
    </div>
  );
}

export default App;
