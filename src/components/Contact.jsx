import React from "react";
import contactStyles from "../styles/contact.module.css";

function Contact() {
  return (
    <div className={contactStyles.footerSection}>
      <div className={contactStyles.triangle}></div>
      <h1 id="contact" className="homeHeader">
        Thanks!
      </h1>
      <h2>Want to chat?</h2>
      <p>CompSciLauren@gmail.com</p>
      <div>
        <a
          href="https://www.linkedin.com/in/compscilauren/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Lauren's Linkedin profile"
        >
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>

        <a
          href="https://twitter.com/CompSciLauren"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Lauren's Twitter profile"
        >
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>

        <a
          href="https://github.com/compscilauren/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Lauren's GitHub profile"
        >
          <i
            className="fa fa-github"
            style={{ backgroundColor: "white", color: "black" }}
            aria-hidden="true"
          ></i>
        </a>

        <a
          href="https://www.reddit.com/user/CompSciLauren"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Lauren's Reddit profile"
        >
          <i className="fa fa-reddit" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
