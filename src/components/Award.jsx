import React from "react";

const Award = (props) => {
  return (
    <div class="award-grid-item">
      <h2>{props.title}</h2>
      <p>
        {props.organization}, {props.year}
      </p>
    </div>
  );
};

export default Award;
