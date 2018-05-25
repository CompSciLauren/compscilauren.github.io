import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import './style.css';

import './index.css';
import compscilauren_logo from './compscilauren_logo.png';

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
      <div className="compscilauren-logo-picture-container">
        <img src={compscilauren_logo} alt="Logo for Comp Sci Lauren." />
      </div>
      <Link to="/about">About</Link>
      <Link to="/home">Portfolio</Link>
      <a href="https://drive.google.com/open?id=1JLEBx0AYOl4_qKoNMqz7vKbxVZgkCvO2" target="_blank">Resume</a>
      <Link to="/recommendations">Recommendations</Link>
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
