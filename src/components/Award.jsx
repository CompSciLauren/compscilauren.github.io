import React from "react";

const Award = (props) => {
  return (
    <div className="award-grid-item">
      <div className="award-grid-item-text">
        <h2>{props.title}</h2>
        <p>
          {props.organization}, {props.year}
        </p>
      </div>
    </div>
  );
};

export default Award;
