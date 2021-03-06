import React from "react";
import ProfilePicture from "../images/blog/common/profile-picture.jpg";

function BlogProfile() {
  return (
    <div className="blogprofile-grid-container">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div>
        <img
          src={ProfilePicture}
          alt="Lauren smiling at a desk"
          style={{
            width: "100px",
            height: "124px",
            borderRadius: "50%",
            imageOrientation: "from-image",
          }}
        ></img>
      </div>
      <div>
        <p style={{ fontSize: "24px", margin: "16px" }}>Lauren Stephenson</p>
        <p style={{ fontSize: "16px", margin: "16px" }}>
          Software Engineer. First generation college student majoring in
          computer science and graduating in December 2020. Stardew Valley
          Modder. Sleep Enthusiast. Plant parent. JavaScript, React, UI/UX
          Design, Open Source. she/her
        </p>
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
          <i className="fa fa-github" aria-hidden="true"></i>
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

export default BlogProfile;
