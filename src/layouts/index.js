import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import './style.css';
import './index.css';
import compscilauren_logo from './compscilauren_logo.png';

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

    <div className="topnav-container clearfix sticky-navbar">
      <ul className="topnav">
        <Link to="#portfolio-section" className="menu-item">
          Portfolio
        </Link>
        <Link to="#about-section" className="menu-item">
          About
        </Link>
        <a
          className="menu-item"
          href="https://drive.google.com/open?id=1JLEBx0AYOl4_qKoNMqz7vKbxVZgkCvO2"
          target="_blank"
        >
          Resume
        </a>
        <Link to="#contact-section" className="menu-item">
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
      </ul>
      <img
        className="topnavimage"
        src={compscilauren_logo}
        alt="Logo for Comp Sci Lauren."
      />
    </div>

    <header className="hero-image" />

    <div className="main-content white-background">{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
