import React from 'react';

import './contact.css';
import lauren_holding_cat from './images/contact/lauren_holding_cat.jpg';
import email_icon from './images/contact/email_icon.png';
import twitter_icon from './images/contact/twitter_icon.png';
import github_icon from './images/contact/github_icon.png';
import linkedin_icon from './images/contact/linkedin_icon.png';

const Contact = () => (
    <div>
        <h1>Contact Me</h1>
        <div className="lauren-with-cat-picture-container">
          <img src={lauren_holding_cat} alt="Lauren holding an orange cat."/>
        </div>
    <p>
        I am always up for a challenge. Are you a recruiter? Are you looking to collaborate on a project?
         In need of a guest speaker or volunteer for a worthwhile cause? Perhaps you just want to ask me
          a question. If you have anything to say, I am open to listening! Please feel free to contact me at any time.
    </p>

    <div className="email-icon-picture-container">
        <img src={email_icon} alt="E mail icon."/>
    </div>
    <p>
      compscilauren@gmail.com
    </p>
    <br />
    <div className="twitter-icon-picture-container">
        <a href="https://twitter.com/CompSciLauren" target="_blank">
        <img src={twitter_icon} alt="Twitter icon."/>
        </a>
    </div>
    <div className="github-icon-picture-container">
          <a href="https://github.com/CompSciLauren" target="_blank">
          <img src={github_icon} alt="Git Hub icon."/>
          </a>
    </div>
    <div className="linkedin-icon-picture-container">
          <a href="https://www.linkedin.com/in/compscilauren/" target="_blank">
          <img src={linkedin_icon} alt="Linked in icon."/>
          </a>
    </div>
    </div>
);

export default Contact;