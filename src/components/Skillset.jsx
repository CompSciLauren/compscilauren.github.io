import React from "react";

const Skillset = (props) => {
  return (
    <div class="skillset-grid-item">
      <h2>{props.title}</h2>
      <p>{props.skills}</p>
    </div>
  );
};

export default Skillset;
