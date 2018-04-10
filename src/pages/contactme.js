import React from 'react';

import './contactme.css';
import laurenwithcat from './laurenwithcat.jpg';

const ContactMe = () => (
    <div>
        <h3>Contact Me</h3>
        <div className="lauren-with-cat-picture-container">
          <img src={laurenwithcat} alt="laurenwithcat"/>
        </div>
    <p>
        I am always up for a challenge. Are you a recruiter? Are you looking to collaborate on a project?
         In need of a guest speaker or volunteer for a worthwhile cause? Perhaps you just want to ask me
          a question. If you have anything to say, I am open to listening! Please feel free to contact me at any time.
    </p>
    </div>
);

export default ContactMe;