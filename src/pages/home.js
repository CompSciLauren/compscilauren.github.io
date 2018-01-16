import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div>
    <div>
      <h1>Hi Lauren</h1>
      <p>Welcome to your new Gatsby site.</p>
    </div>
    <div>
      <section className="featured work">
        <h2 id="portfolio">Portfolio</h2>;
        <ul className="portfolio items">
          <li>
            <Link to="https://compscilauren.com/portfolio/title-of-item-1/"></Link>
          </li>
          <li>
            <Link to="https://compscilauren.com/portfolio/title-of-item-2/"></Link>
          </li>
          <li>
            <Link to="https://compscilauren.com/portfolio/title-of-item-3/"></Link>
          </li>
          <li>
            <Link to="https://compscilauren.com/portfolio/title-of-item-4/"></Link>
          </li>
          <li>
            <Link to="https://compscilauren.com/portfolio/title-of-item-5/"></Link>
          </li>
          <li>
            <Link to="https://compscilauren.com/portfolio/title-of-item-6/"></Link>
          </li>
          <li>
            <Link to="https://compscilauren.com/portfolio/title-of-item-7/"></Link>
          </li>
          <li>
            <Link to="https://compscilauren.com/portfolio/title-of-item-8/"></Link>
          </li>
        </ul>
      </section>
    </div>
  </div>
);

export default IndexPage;
