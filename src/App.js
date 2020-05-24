import React from 'react';
import './App.css';

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
          <div class="grid-container">
            <a
              href="https://www.nexusmods.com/stardewvalley/mods/4779"
              target="_blank"
            >
              <div class="grid-item">
                <h2>Daily Screenshot Mod</h2>
                <p>
                  Stardew Valley mod that automatically takes a screenshot of
                  your entire farm at the start of each day
                </p>
                <p className="tool-list">Built with C#</p>
              </div>
            </a>
            <a
              href="https://drive.google.com/file/d/1LsDeMeXUBJeSpBp4mGFLBYRrhL9-T9uG/view"
              target="_blank"
            >
              <div class="grid-item">
                <h2>PillPal</h2>
                <p>
                  Medical app that reminds people to take their medication and
                  makes medication management simple
                </p>
                <p className="tool-list">Built with React Native</p>
              </div>
            </a>
            <a
              href="https://github.com/compscilauren/awesome-git-hooks"
              target="_blank"
            >
              <div class="grid-item">
                <h2>Awesome Git Hooks</h2>
                <p>Curated list of awesome git hooks</p>
                <p className="tool-list">Built with Bash, Python, Perl</p>
              </div>
            </a>
            <a
              href="https://boiling-garden-86985.herokuapp.com/"
              target="_blank"
            >
              <div class="grid-item">
                <h2>Server Finder</h2>
                <p>
                  Website for Stardew Valley that connects hosts and players for
                  multiplayer servers
                </p>
                <p className="tool-list">Built with React</p>
              </div>
            </a>
            <a
              href="https://github.com/compscilauren/fedcodeathon"
              target="_blank"
            >
              <div class="grid-item">
                <h2>ValleyFind</h2>
                <p>
                  Website that helps entrepreneurs find the best location to
                  start their business
                </p>
                <p className="tool-list">Built with JavaScript, Bootstrap</p>
              </div>
            </a>
            <a
              href="https://compscilauren.github.io/uno/index.html"
              target="_blank"
            >
              <div class="grid-item">
                <h2>Uno</h2>
                <p>Card game Uno, playable in the browser</p>
                <p className="tool-list">Built with JavaScript</p>
              </div>
            </a>
          </div>
          <a href="https://github.com/CompSciLauren" target="_blank">
            <button className="Header-btn">See all projects on GitHub ></button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
