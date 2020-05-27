import React from "react";

const Experience = (props) => {
  return (
    <div class="experience-grid-item">
      <h2>{props.company}</h2>
      <h3>{props.job}</h3>
      <p>
        {props.startDate} - {props.endDate}
      </p>
      {props.accomplishments}
    </div>
  );
};

export default Experience;
