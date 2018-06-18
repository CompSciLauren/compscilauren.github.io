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
      <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" />
      <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
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
        <Link to="/">About</Link>
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
