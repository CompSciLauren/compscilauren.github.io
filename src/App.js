import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import home from "./home/home.js";
import blog from "./blog/blog.js";

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
      </main>
    </Router>
  );
}

export default App;
