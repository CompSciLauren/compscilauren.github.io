import React from "react";

function contact() {
  return (
    <div className="Footer-section">
      <div className="triangle"></div>
      <h1 id="contact">Thanks!</h1>
      <h2>Want to chat?</h2>
      <p>CompSciLauren@gmail.com</p>
      <div className="social-media-section">
        <a
          href="https://www.linkedin.com/in/compscilauren/"
          aria-label="View Lauren's Linkedin profile"
        >
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>

        <a
          href="https://twitter.com/CompSciLauren"
          aria-label="View Lauren's Twitter profile"
        >
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>

        <a
          href="https://github.com/compscilauren/"
          aria-label="View Lauren's GitHub profile"
        >
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>

        <a
          href="https://www.reddit.com/user/CompSciLauren"
          aria-label="View Lauren's Reddit profile"
        >
          <i className="fa fa-reddit" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}

export default contact;
