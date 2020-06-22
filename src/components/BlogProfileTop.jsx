import React from "react";
import ProfilePicture from "../images/profile-picture.jpg";

const BlogProfileTop = (props) => {
  return (
    <>
      <div className="blogprofiletop-grid-container">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <img
          src={ProfilePicture}
          alt="Lauren smiling at a desk"
          className="profilePictureTopImg"
        ></img>
        <p style={{ fontSize: "16px", margin: "16px" }}>Lauren Stephenson</p>
        <p style={{ fontSize: "16px", fontStyle: "italic", margin: "16px" }}>
          Published on {props.date}
        </p>
        <p style={{ fontSize: "16px", margin: "16px" }}>
          {props.readTime} read
        </p>
      </div>
    </>
  );
};

export default BlogProfileTop;
