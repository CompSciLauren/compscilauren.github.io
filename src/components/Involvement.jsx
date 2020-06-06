import React from "react";

const Involvement = (props) => {
  return (
    <div className="involvement-grid-item">
      <h2>{props.company}</h2>
      <p style={{ textAlign: "right" }}>
        {props.startDate} - {props.endDate}
      </p>
      <h3>{props.job}</h3>
    </div>
  );
};

export default Involvement;
