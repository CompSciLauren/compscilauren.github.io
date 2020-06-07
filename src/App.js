import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import home from "./home/home.js";
import blog from "./blog/blog.js";
import Article0608 from "./blog/articles/2020-june/Article0608.js";

function App() {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={home} />
        <Route path="/blog" component={blog} />
        <Route
          path="/improve-your-git-workflow-and-save-time-with-git-hooks"
          component={Article0608}
        />
      </main>
    </Router>
  );
}

export default App;
