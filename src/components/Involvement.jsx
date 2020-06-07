import React from "react";

const Involvement = (props) => {
  return (
    <div className="involvement-grid-item">
      <h2>{props.company}</h2>
      <p style={{ textAlign: "right" }}>
        {props.startDate} - {props.endDate}
      </p>
      <div className="involvement-grid-content">
        <span>{props.job}</span>
      </div>
    </div>
  );
};

export default Involvement;
