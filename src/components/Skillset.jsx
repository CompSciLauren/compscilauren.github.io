import React from "react";

const Skillset = (props) => {
  return (
    <div class="skillset-grid-item">
      <h2>{props.title}</h2>
      <hr></hr>
      {props.skills}
    </div>
  );
};

export default Skillset;
