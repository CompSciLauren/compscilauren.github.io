import React from "react";

const Award = (props) => {
  return (
    <div class="award-grid-item">
      <h2>{props.description}</h2>
      <p>{props.organization}</p>
      <p>{props.year}</p>
    </div>
  );
};

export default Award;
