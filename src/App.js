import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import home from "./home/home.js";
import blog from "./blog/blog.js";
import Article0608 from "./blog/articles/2020-june/Article0608.jsx";
import TempArticle0615 from "./blog/articles/2020-june/TempArticle0615.jsx";

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
          path="/blog/improve-your-git-workflow-and-save-time-with-git-hooks"
          component={Article0608}
        />
        <Route path="/blog/TempArticle0615" component={TempArticle0615}></Route>
      </main>
    </Router>
  );
}

export default App;
