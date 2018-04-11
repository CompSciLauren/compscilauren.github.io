import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import './style.css';

import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="CompSciLauren"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <div className="topnav">
      <h3 className="color center">Lauren Stephenson</h3>
      <p className="color center">Computer Science Student, Collaboration Center Support Specialist</p>
      <Link to="/about">About Me</Link>
      <Link to="/home">Portfolio</Link>
      <Link to="/recommendations">Recommendations</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact Me</Link>
    </div>
    <div className="main-content">
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
