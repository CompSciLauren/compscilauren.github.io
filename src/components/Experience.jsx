import React from "react";

const Experience = (props) => {
  return (
    <div className="experience-grid-item">
      <div className="experience-grid-subitem">
        <h2>{props.company}</h2>
      </div>
      <div className="experience-grid-subitem" style={{ textAlign: "right" }}>
        <p>
          {props.startDate} - {props.endDate}
        </p>
      </div>
      <div className="experience-grid-subitem">
        <h3>{props.job}</h3>
        {props.accomplishments}
      </div>
    </div>
  );
};

export default Experience;
