import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import './style.css';

import './index.css';
import compscilauren_logo from './compscilauren_logo.jpg';
import compscilauren_logo2 from './compscilauren_logo.png';

const TemplateWrapper = ({ children }) => (
  <div>
    <head>
      <link
        rel="stylesheet"
        href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
    </head>
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
      <img
        className="topnavimage"
        src={compscilauren_logo2}
        alt="Logo for Comp Sci Lauren."
      />
      <Link to="/" className="menu-item">
        About
      </Link>
      <Link to="/home" className="menu-item">
        Portfolio
      </Link>
      <a
        className="menu-item"
        href="https://drive.google.com/open?id=1JLEBx0AYOl4_qKoNMqz7vKbxVZgkCvO2"
        target="_blank"
      >
        Resume
      </a>
      <Link to="#" className="menu-item">
        Contact Me
      </Link>
      <Link to="/blog" className="menu-item">
        Blog
      </Link>
      <div className="menu-item">
        <a href="https://twitter.com/CompSciLauren" target="_blank">
          <i className="fa fa-twitter" />
        </a>
      </div>
      <div className="menu-item">
        <a href="https://github.com/CompSciLauren" target="_blank">
          <i className="fa fa-github" />
        </a>
      </div>
      <div className="menu-item">
        <a href="https://www.linkedin.com/in/compscilauren/" target="_blank">
          <i className="fa fa-linkedin" />
        </a>
      </div>
    </div>
    <div className="main-content white-center-background">{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
