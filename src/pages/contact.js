import React from 'react';

import './contact.css';
import lauren_holding_cat from './images/contact/lauren_holding_cat.jpg';
import email_icon from './images/contact/email_icon.png';

const Contact = () => (
    <div>
        <div className="custom-image-adjust">
            <img className="img-responsive" src={lauren_holding_cat} alt="Lauren holding an orange cat." />
        </div>
        <h1 className="text-center">Contact Lauren Stephenson</h1>
        <p>
            I am always up for a challenge. Are you a recruiter? Are you looking to collaborate on a project?
             In need of a guest speaker or volunteer for a worthwhile cause? Perhaps you just want to ask me
              a question. If you have anything to say, I am open to listening! Please feel free to contact me at any time.
    </p>
        <div className="custom-image-adjust">
            <i className="fa fa-envelope-o"></i>
        </div>
        <p>
            compscilauren@gmail.com
    </p>
        <br />
        <div className="custom-image-adjust">
            <a href="https://twitter.com/CompSciLauren" target="_blank"><i className="fa fa-twitter"></i></a>
        </div>
        <div className="custom-image-adjust">
            <a href="https://github.com/CompSciLauren" target="_blank"><i className="fa fa-github"></i></a>
        </div>
        <div className="custom-image-adjust">
            <a href="https://www.linkedin.com/in/compscilauren/" target="_blank"><i className="fa fa-linkedin"></i></a>
        </div>
    </div>
);

export default Contact;