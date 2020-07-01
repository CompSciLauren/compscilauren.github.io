import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import home from "./home/home.js";
import blog from "./blog/blog.js";
import Article0615 from "./blog/articles/2020-june/Article0615.jsx";
import Article0622 from "./blog/articles/2020-june/Article0622.jsx";
import Article0702 from "./blog/articles/2020-july/Article0702.jsx";

function App() {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li>
              <a className="aTagOnNavbar" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="aTagOnNavbar" href="/blog">
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={home} />
        <Route path="/blog" exact component={blog} />
        <Route
          path="/blog/10-tips-for-maintaining-an-open-source-project"
          component={Article0702}
        />
        <Route
          path="/blog/why-contribute-to-open-source-and-how-to-get-started"
          component={Article0622}
        />
        <Route
          path="/blog/improve-your-git-workflow-and-save-time-with-git-hooks"
          component={Article0615}
        />
      </main>
    </Router>
  );
}

export default App;
